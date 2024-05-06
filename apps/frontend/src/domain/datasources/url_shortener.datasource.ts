import { URLShortener } from '../entities/url_shortener';

export interface UrlShortenerDatasource {
  createShortUrl(originalUrl: string): Promise<URLShortener>;
  getShortUrl(shortUrl: string): Promise<URLShortener>;
}
