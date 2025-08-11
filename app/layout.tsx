import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Lumina Terminal',
  description: 'Minimal Next.js app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
