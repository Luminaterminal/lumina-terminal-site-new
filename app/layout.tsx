import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://luminaterminal.com'),
  title: {
    default: 'Lumina Terminal',
    template: '%s | Lumina Terminal',
  },
  description:
    'Official website for Lumina Terminal — all-in-one trading and market-data platform.',
  applicationName: 'Lumina Terminal',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://luminaterminal.com',
    title: 'Lumina Terminal',
    description: 'All-in-one trading and market-data platform.',
    siteName: 'Lumina Terminal',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Lumina Terminal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Terminal',
    description: 'All-in-one trading and market-data platform.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
