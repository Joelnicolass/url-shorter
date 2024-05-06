import { UrlShortenerDatasource } from '../../domain/datasources/url_shortener.datasource';
import { URLShortener } from '../../domain/entities/url_shortener';

export class UrlShortenerDatasourceImpl implements UrlShortenerDatasource {
  async createShortUrl(originalUrl: string): Promise<URLShortener> {
    try {
      const url = 'http://localhost:8080/api/shortener';

      const formData = new FormData();
      formData.append('url', originalUrl);

      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ url: originalUrl }),
      });

      if (!response.ok) {
        throw new Error('Error creating short url');
      }

      const data = await response.json();

      return new URLShortener(
        data.id,
        data.originalUrl,
        data.shortUrl,
        data.createdAt,
        data.updatedAt,
        data.hitCount
      );
    } catch (error) {
      console.log(error);
      throw new Error('Error creating short url');
    }
  }

  async getShortUrl(shortUrl: string): Promise<URLShortener> {
    throw new Error('Method not implemented.');
  }
}
