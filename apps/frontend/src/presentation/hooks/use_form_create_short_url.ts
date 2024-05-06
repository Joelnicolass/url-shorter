import { useState } from 'react';
import { urlShortenerUsecases } from '../../infrastructure/usecases/url_shortener.usecases_impl';

export const useFormCreateShortUrl = () => {
  const [value, setValue] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsLoading(true);
    const result = await urlShortenerUsecases.createShortUrlUsecase.execute(
      value
    );
    setShortUrl(result.shortUrl);
    setIsLoading(false);
  };

  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(`https://short.ar/${shortUrl}`);
  };

  return {
    value,
    setValue,
    shortUrl,
    isLoading,
    handleSubmit,
    handleCopyToClipboard,
  };
};
