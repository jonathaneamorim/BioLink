import { sharedMetadata } from './shared-metadata';
import './globals.css';

export const metadata = sharedMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}