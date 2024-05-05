package com.jns.urlshortener.infrastructure.services

import arrow.core.Either
import com.jns.urlshortener.domain.entities.UrlShortener
import com.jns.urlshortener.domain.exceptions.GenericException
import com.jns.shortener.utils.Constants
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

  override fun save(url: String): Either<Exception, String>{
    try {
      val entity = createUrlShortener(url)
      val result: Either<Exception, UrlShortener> = _repository.save(entity)

      return when(result){
        is Either.Right -> Either.Right(result.value.shortUrl)
        is Either.Left -> Either.Left(GenericException(Constants.ERROR_GENERIC))
      }

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

      val updatedEntity: Either<Exception, UrlShortener> = _repository.save(entity)

      return when(updatedEntity){
        is Either.Right -> Either.Right(updatedEntity.value.originalUrl)
        is Either.Left -> Either.Left(GenericException(Constants.ERROR_GENERIC))
      }

    } catch (e: Exception) {
      println("Error al redirigir la entidad: ${e.message}")
      return Either.Left(GenericException(Constants.ERROR_GENERIC))
    }
  }

}
