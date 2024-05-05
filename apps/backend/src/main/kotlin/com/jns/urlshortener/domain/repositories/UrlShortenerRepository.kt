package com.jns.urlshortener.domain.repositories

import arrow.core.Either
import com.jns.urlshortener.domain.entities.UrlShortener

interface UrlShortenerRepository {
  fun save(url: UrlShortener): Either<Exception, UrlShortener>
  fun findByOriginalUrl(originalUrl: String): Either<Exception, UrlShortener>
  fun findByShortUrl(shortUrl: String): Either<Exception, UrlShortener>
}
