import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClipForge AI',
  description: 'Plataforma inteligente para gerar cortes automáticos de vídeos e lives.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
