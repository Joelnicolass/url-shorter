import React from 'react';

type Props = {
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  children?: React.ReactNode | React.ReactNode[] | string;
};

const InputWithButton = ({ buttonProps, inputProps, children }: Props) => {
  return (
    <div className="flex justify-center mt-8">
      <input
        type="text"
        placeholder="Pegá tu URL acá"
        className="w-80 h-12 px-4 text-lg border border-gray-400
        border-r-0 rounded-l-lg focus:outline-none focus:border-orange-400"
        {...inputProps}
      />
      <button
        className={`h-12 px-6 text-lg text-white bg-orange-400 border border-orange-400 rounded-r-lg hover:bg-orange-500 focus:outline-none
        ${buttonProps?.disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
        {...buttonProps}
      >
        {children}
      </button>
    </div>
  );
};

export default InputWithButton;
