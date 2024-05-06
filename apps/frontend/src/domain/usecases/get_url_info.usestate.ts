import { URLShortener } from '../entities/url_shortener';
import { UrlShortenerRepository } from '../repositories/url_shortener.repository';

export class GetUrlInfoUsecase {
  constructor(
    private readonly urlShortenerRepository: UrlShortenerRepository
  ) {}

  async execute(shortUrl: string): Promise<URLShortener> {
    return this.urlShortenerRepository.getShortenerUrl(shortUrl);
  }
}
