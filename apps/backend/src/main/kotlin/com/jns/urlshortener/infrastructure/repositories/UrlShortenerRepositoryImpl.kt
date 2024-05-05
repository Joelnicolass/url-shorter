package com.jns.urlshortener.infrastructure.repositories

import arrow.core.Either
import com.jns.urlshortener.domain.entities.UrlShortener
import com.jns.urlshortener.domain.exceptions.GenericException
import com.jns.urlshortener.domain.repositories.UrlShortenerRepository
import org.springframework.beans.factory.annotation.*
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

interface UrlShortenerPostgresRepository : CrudRepository<UrlShortener, Long>

@Repository
class UrlShortenerRepositoryImpl : UrlShortenerRepository {

  @Autowired()
  private lateinit var _repository: UrlShortenerPostgresRepository

  override fun save(url: UrlShortener): Either<Exception, UrlShortener> {
    try {
      val entity = _repository.save(url)
      return Either.Right(entity)
    } catch (e: Exception) {
      println("Error al guardar la entidad: ${e.message}")
      return Either.Left(e)
    }
  }

  override fun findByOriginalUrl(originalUrl: String): Either<Exception, UrlShortener> {
    try {
      val entity = _repository.findAll().firstOrNull { it.originalUrl == originalUrl }
      return if (entity != null) {
        Either.Right(entity)
      } else {
        println("Url original no encontrada")
        Either.Left(GenericException("Url original no encontrada"))
      }
    } catch (e: Exception) {
      println("Error al buscar la entidad: ${e.message}")
      return Either.Left(GenericException(e.message ?: ""))
    }
  }

  override fun findByShortUrl(shortUrl: String): Either<Exception, UrlShortener> {
    try {
      val entity = _repository.findAll().firstOrNull { it.shortUrl == shortUrl }
      return if (entity != null) {
        Either.Right(entity)
      } else {
        println("Url corta no encontrada")
        Either.Left(GenericException("Url corta no encontrada"))
      }
    } catch (e: Exception) {
      println("Error al buscar la entidad: ${e.message}")
      return Either.Left(GenericException(e.message ?: ""))
    }
  }

}
