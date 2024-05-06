import { URLShortener } from '../entities/url_shortener';
import { UrlShortenerRepository } from '../repositories/url_shortener.repository';

export class CreateShortUrlUsecase {
  constructor(
    private readonly urlShortenerRepository: UrlShortenerRepository
  ) {}

  async execute(originalUrl: string): Promise<URLShortener> {
    return this.urlShortenerRepository.createShortUrl(originalUrl);
  }
}
