
package com.jns.urlshortener.domain.entities

import com.jns.shortener.utils.Encode
import jakarta.persistence.*
import java.time.LocalDateTime
import kotlinx.serialization.Serializable

@Serializable
@Entity
@Table(name = "url_shortener")
class UrlShortener(
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long,
  @Column(unique = true, nullable = false) val originalUrl: String,
  @Column(unique = true, nullable = false) val shortUrl: String
) {

  @Column(nullable = false)
  var hitCount: Long = 0

  @Column(nullable = false)
  val createdAt: String = LocalDateTime.now().toString()

  @Column(nullable = false)
  var updatedAt: String = LocalDateTime.now().toString()

  fun hit() {
    hitCount++
    updatedAt = LocalDateTime.now().toString()
  }

  companion object {
    fun shortener(originalUrl: String): String {
      return Encode.generateShortCode(originalUrl)
    }
  }
}
