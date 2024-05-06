export class URLShortener {
  constructor(
    public id: string,
    public originalUrl: string,
    public shortUrl: string,
    public createdAt: Date,
    public updatedAt: Date,
    public hitCount: number
  ) {}
}
