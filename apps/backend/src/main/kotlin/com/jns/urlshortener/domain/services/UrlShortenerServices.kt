package com.jns.urlshortener.domain.services
import arrow.core.Either
import com.jns.urlshortener.domain.entities.UrlShortener

interface UrlShortenerServices {
  fun save(url: String): Either<Exception, UrlShortener>
  fun redirect(shortUrl: String): Either<Exception, String>
}
