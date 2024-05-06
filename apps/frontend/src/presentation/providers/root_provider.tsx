'use client';

import { ToastProvider } from './toast_provider';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const RootProvider = ({ children }: Props) => {
  return <ToastProvider>{children}</ToastProvider>;
};
