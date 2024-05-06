import { UrlShortenerRepository } from '../../domain/repositories/url_shortener.repository';
import { CreateShortUrlUsecase } from '../../domain/usecases/create_short_url.usecase';
import { GetUrlInfoUsecase } from '../../domain/usecases/get_url_info.usestate';
import { UrlShortenerDatasourceImpl } from '../datasources/url_shortener.datasource_impl';
import { UrlShortenerRepositoryImpl } from '../repositories/url_shortener.repository_impl';

class UrlSHortenerUsecases {
  constructor(
    private readonly urlShortenerRepository: UrlShortenerRepository
  ) {}

  get createShortUrlUsecase(): CreateShortUrlUsecase {
    return new CreateShortUrlUsecase(this.urlShortenerRepository);
  }

  get getUrlInfoUsecase(): GetUrlInfoUsecase {
    return new GetUrlInfoUsecase(this.urlShortenerRepository);
  }
}

export const urlShortenerUsecases = new UrlSHortenerUsecases(
  new UrlShortenerRepositoryImpl(new UrlShortenerDatasourceImpl())
);
