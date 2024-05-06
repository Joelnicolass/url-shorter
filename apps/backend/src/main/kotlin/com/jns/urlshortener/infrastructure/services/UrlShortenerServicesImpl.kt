package com.jns.urlshortener.infrastructure.services

import arrow.core.Either
import com.jns.urlshortener.domain.entities.UrlShortener
import com.jns.urlshortener.domain.exceptions.GenericException
import com.jns.shortener.utils.Constants
import com.jns.urlshortener.domain.exceptions.DuplicateUrlException
import com.jns.urlshortener.domain.repositories.UrlShortenerRepository
import com.jns.urlshortener.domain.services.UrlShortenerServices
import org.springframework.beans.factory.annotation.*
import org.springframework.stereotype.Service

@Service
class UrlShortenerServicesImpl : UrlShortenerServices{

  @Autowired
  private lateinit var _repository: UrlShortenerRepository

  private fun createUrlShortener(url: String): UrlShortener {
    try {
      return UrlShortener(id = 0, originalUrl = url, shortUrl = UrlShortener.shortener(url))
    } catch (e: Exception) {
      println("Error al crear la entidad: ${e.message}")
      throw GenericException(Constants.ERROR_GENERIC)
    }
  }

  private fun verifyAndFormatUrl(url: String): String {
    return if (url.contains("http")) {
      url
    } else {
      "http://$url"
    }
  }

  override fun save(url: String): Either<Exception, UrlShortener>{
    try {
      val entity = createUrlShortener(url)
      val result: Either<Exception, UrlShortener> = _repository.save(entity)

      result.fold<Nothing>(
        ifLeft = {
          if (it is DuplicateUrlException) {
            val existEntity: UrlShortener = _repository.findByOriginalUrl(url).getOrNull()
              ?: throw GenericException(Constants.ERROR_GENERIC)
            return Either.Right(existEntity)
          } else {
            return Either.Left(it)
          }
        },
        ifRight = {
          return Either.Right(it)
        }
      )

    } catch (e: Exception) {
      println("Error al guardar la entidad: ${e.message}")
      return Either.Left(GenericException(Constants.ERROR_GENERIC))
    }
  }

  override fun redirect(shortUrl: String): Either<Exception, String>{
    try {

      val entity: UrlShortener = _repository.findByShortUrl(shortUrl).getOrNull()
        ?: throw GenericException(Constants.ERROR_GENERIC)

      entity.hit()

      val updatedEntity: UrlShortener = _repository.save(entity).getOrNull()
      ?: throw GenericException(Constants.ERROR_GENERIC)

      return Either.Right(verifyAndFormatUrl(updatedEntity.originalUrl))

    } catch (e: Exception) {
      println("Error al redirigir la entidad: ${e.message}")
      return Either.Left(GenericException(Constants.ERROR_GENERIC))
    }
  }
}
