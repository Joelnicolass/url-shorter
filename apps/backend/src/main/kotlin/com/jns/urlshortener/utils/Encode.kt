package com.jns.shortener.utils

import java.math.BigInteger
import java.security.MessageDigest

class Encode {

  companion object {

    private fun md5(input: String): ByteArray {
      val md = MessageDigest.getInstance("MD5")
      return md.digest(input.toByteArray(Charsets.UTF_8))
    }

    private fun encodeBase62(input: ByteArray): String {
      val base62Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      var number = BigInteger(1, input)
      val base = BigInteger(base62Chars.length.toString())
      var encoded = StringBuilder()

      if (number == BigInteger.ZERO) {
        return base62Chars[0].toString()
      }

      while (number > BigInteger.ZERO) {
        val remainder = number.mod(base).toInt()
        encoded.append(base62Chars[remainder])
        number = number.divide(base)
      }

      return encoded.reverse().toString()
    }

    fun generateShortCode(originalUrl: String): String {
      val hashBytes = md5(originalUrl)
      return encodeBase62(hashBytes)
    }
  }

}
