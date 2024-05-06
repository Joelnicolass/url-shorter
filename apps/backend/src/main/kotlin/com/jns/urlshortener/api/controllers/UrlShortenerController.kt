package com.jns.urlshortener.api.controllers

import com.jns.urlshortener.domain.services.UrlShortenerServices
import com.jns.urlshortener.infrastructure.services.UrlShortenerServicesImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.ModelAndView
import kotlinx.serialization.*
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.internal.writeJson

@CrossOrigin(origins = ["*"], methods = [RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.GET], allowedHeaders = ["*"], maxAge = 3600L)
@RestController
@RequestMapping("/api/shortener")
class UrlShortenerController {

  @Value("\${url.base}")
  private lateinit var urlBase: String

  @Autowired
  private lateinit var _urlShortenerService: UrlShortenerServices

  @PostMapping("", consumes = [MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE])
  fun shortUrl(@RequestBody body: Map<String, Any>): ResponseEntity<String> {

    if (!body.containsKey("url")) {
      return ResponseEntity(
        "Url no encontrada",
        HttpStatus.BAD_REQUEST
      )
    }

    _urlShortenerService.save(body["url"].toString()).fold<Nothing>(
      ifLeft = {
        return ResponseEntity(
          it.message,
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      },
      ifRight = {
        println(it.hitCount)
        print("shortened url: ${urlBase}/${it} ")
        print("original url: ${body["url"]} ")

        val json = Json { encodeDefaults = true }.encodeToString(it)
        println(json)
        return ResponseEntity(
          json,
          HttpStatus.OK
        )
      }
    )
  }

}


@CrossOrigin(origins = ["*"], methods = [RequestMethod.GET], allowedHeaders = ["*"], maxAge = 3600L)
@RestController
@RequestMapping("/")
class RedirectController {

  @Autowired
  private lateinit var _urlShortenerService: UrlShortenerServices

  @GetMapping("/{shortUrl}")
  fun redirect(@PathVariable shortUrl: String): Any {

    val url = _urlShortenerService.redirect(shortUrl)

    url.fold<Nothing>(
      ifLeft = {
        return ResponseEntity(
          it.message,
          HttpStatus.NOT_FOUND
        )
      },
      ifRight = {
        print("redirecting to $it")
        return ModelAndView("redirect:$it")
      }
    )
  }

}
