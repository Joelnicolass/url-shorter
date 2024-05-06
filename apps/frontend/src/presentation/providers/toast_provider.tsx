import toast, { Toaster } from 'react-hot-toast';
import { createContext, useContext } from 'react';

interface ToastContext {
  notify: (message: string, type?: 'success' | 'error' | 'loading') => void;
}

export const ToasContext = createContext({} as ToastContext);

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const ToastProvider = ({ children }: Props) => {
  const notify = (
    message: string,
    type: 'success' | 'error' | 'loading' = 'success'
  ) => {
    const _colorMapper = {
      success: '#10B981',
      error: '#EF4444',
      loading: '#6B7280',
    };

    toast(message, {
      duration: 4000,
      position: 'top-center',
      style: {
        color: '#fff',
        backgroundColor: _colorMapper[type],
      },
    });
  };

  return (
    <ToasContext.Provider
      value={{
        notify,
      }}
    >
      <Toaster />
      {children}
    </ToasContext.Provider>
  );
};

export const useNotify = () => useContext(ToasContext);
