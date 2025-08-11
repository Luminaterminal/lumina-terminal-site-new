// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.luminaterminal.com'),
  title: {
    default: 'Lumina Terminal',
    template: '%s | Lumina Terminal',
  },
  description: 'Welcome to Lumina Terminal.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lumina Terminal',
    description: 'Welcome to Lumina Terminal.',
    url: 'https://www.luminaterminal.com',
    siteName: 'Lumina Terminal',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Terminal',
    description: 'Welcome to Lumina Terminal.',
  },
};
