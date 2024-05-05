package com.jns.urlshortener.domain.services
import arrow.core.Either

interface UrlShortenerServices {
  fun save(url: String): Either<Exception, String>
  fun redirect(shortUrl: String): Either<Exception, String>
}
