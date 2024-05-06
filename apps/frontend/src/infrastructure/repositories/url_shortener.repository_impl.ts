import { UrlShortenerDatasource } from '../../domain/datasources/url_shortener.datasource';
import { URLShortener } from '../../domain/entities/url_shortener';
import { UrlShortenerRepository } from '../../domain/repositories/url_shortener.repository';

export class UrlShortenerRepositoryImpl implements UrlShortenerRepository {
  constructor(
    private readonly urlShortenerDatasource: UrlShortenerDatasource
  ) {}

  async createShortUrl(originalUrl: string): Promise<URLShortener> {
    return this.urlShortenerDatasource.createShortUrl(originalUrl);
  }

  async getShortenerUrl(shortUrl: string): Promise<URLShortener> {
    return this.urlShortenerDatasource.getShortUrl(shortUrl);
  }
}
