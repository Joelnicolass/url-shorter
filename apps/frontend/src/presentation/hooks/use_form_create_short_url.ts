import { useState } from 'react';
import { urlShortenerUsecases } from '../../infrastructure/usecases/url_shortener.usecases_impl';
import { useRouter } from 'next/navigation';
import { useNotify } from '../providers/toast_provider';
import { isValidUrl } from '../../utils/url';

export const useFormCreateShortUrl = () => {
  const { push } = useRouter();
  const { notify } = useNotify();

  const [value, setValue] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (!isValidUrl(value)) throw new Error('URL inválida');

      const result = await urlShortenerUsecases.createShortUrlUsecase.execute(
        value
      );

      setShortUrl(result.shortUrl);
    } catch (error) {
      notify((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(`https://short.ar/${shortUrl}`);
    notify('Copiado al portapapeles');
  };

  const redirectToUrl = (url: string) => push(url);

  return {
    value,
    setValue,
    shortUrl,
    isLoading,
    handleSubmit,
    redirectToUrl,
    handleCopyToClipboard,
  };
};
