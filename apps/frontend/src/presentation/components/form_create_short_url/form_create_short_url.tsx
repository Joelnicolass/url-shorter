'use client';

import React, { useState } from 'react';
import InputWithButton from '../design_system/input_with_button/input_with_button';
import { urlShortenerUsecases } from 'apps/frontend/src/infrastructure/usecases/url_shortener.usecases_impl';

const FormCreateShortUrl = () => {
  const [value, setValue] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const result = await urlShortenerUsecases.createShortUrlUsecase.execute(
      value
    );
    setShortUrl(result.shortUrl);
  };

  return (
    <div
      className="
          flex
          flex-col
          justify-center
          w-full
          px-4
          mt-16 
          "
    >
      <form>
        <InputWithButton
          buttonProps={{
            type: 'submit',
            onClick: handleSubmit,
          }}
          inputProps={{
            type: 'text',
            placeholder: 'https://www.example.com',
            value: value,
            onChange: (event) => setValue(event.target.value),
          }}
        >
          Acortar
        </InputWithButton>

        <div className="flex justify-center mt-8">
          <div
            className="
                flex
                items-center
                justify-center
                w-80
                h-12
                text-lg
                "
          >
            {shortUrl && (
              <>
                <span className="text-blue-500">https://short.ar/</span>
                <span className="text-orange-400">{shortUrl}</span>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCreateShortUrl;
