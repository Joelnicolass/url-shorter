package com.jns.urlshortener.api.controllers

import com.jns.urlshortener.infrastructure.services.UrlShortenerServicesImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.ModelAndView

@CrossOrigin(origins = ["*"], methods = [RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.GET], allowedHeaders = ["*"], maxAge = 3600L)
@RestController
@RequestMapping("/api/shortener")
class UrlShortenerController {

  @Value("\${url.base}")
  private lateinit var urlBase: String

  @Autowired
  private lateinit var _urlShortenerService: UrlShortenerServicesImpl

  @PostMapping("")
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
        print("shortened url: ${urlBase}/${it} ")
        print("original url: ${body["url"]} ")
        return ResponseEntity(
          "${urlBase}/${it}",
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
  private lateinit var _urlShortenerService: UrlShortenerServicesImpl

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
