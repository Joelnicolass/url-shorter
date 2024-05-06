'use client';

import React from 'react';
import InputWithButton from '../design_system/input_with_button/input_with_button';
import { useFormCreateShortUrl } from '../../hooks/use_form_create_short_url';

const FormCreateShortUrl = () => {
  const {
    value,
    shortUrl,
    isLoading,
    setValue,
    handleSubmit,
    handleCopyToClipboard,
  } = useFormCreateShortUrl();

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
            disabled: isLoading,
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
              <div onClick={handleCopyToClipboard} className="cursor-pointer">
                <span className="text-blue-500">https://short.ar/</span>
                <span className="text-orange-400">{shortUrl}</span>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCreateShortUrl;
