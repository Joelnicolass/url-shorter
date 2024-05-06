import { RootProvider } from '../presentation/providers/root_provider';
import './global.css';

export const metadata = {
  title: 'Acortá tus URLs',
  description: 'Acortá tus URLs con un solo click, fácil y rápido.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
