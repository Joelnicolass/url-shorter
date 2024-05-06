package com.jns.urlshortener.domain.exceptions

class GenericException : Exception {
  constructor() : super()
  constructor(message: String) : super(message)
}

class DuplicateUrlException : Exception {
  constructor() : super()
  constructor(message: String) : super(message)
}
