import { URLShortener } from '../entities/url_shortener';

export interface UrlShortenerRepository {
  createShortUrl(originalUrl: string): Promise<URLShortener>;
  getShortenerUrl(shortUrl: string): Promise<URLShortener>;
}
