// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.luminaterminal.com'),
  title: {
    default: 'Lumina Terminal',
    template: '%s | Lumina Terminal',
  },
  description:
    'All-in-one trading & market data platform. Charts, screener, alerts and more.',
  alternates: {
    canonical: 'https://www.luminaterminal.com',
  },
  openGraph: {
    url: 'https://www.luminaterminal.com',
    siteName: 'Lumina Terminal',
    type: 'website',
    title: 'Lumina Terminal',
    description:
      'All-in-one trading & market data platform. Charts, screener, alerts and more.',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'Lumina Terminal' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Terminal',
    description:
      'All-in-one trading & market data platform. Charts, screener, alerts and more.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, maxSnippet: -1, maxImagePreview: 'large' }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD për Organization (ndihmon SEO)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lumina Terminal',
    url: 'https://www.luminaterminal.com',
    logo: 'https://www.luminaterminal.com/icon.png'
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
