import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lumina Terminal',
  description:
    'Institutional-grade visibility for everyone. Real-time market data, order flow, footprint charts, heatmaps, news, scanners, and more.',
  themeColor: '#000000',
  openGraph: {
    title: 'Lumina Terminal',
    description:
      'Institutional-grade visibility for everyone. Real-time market data, order flow, footprint charts, heatmaps, news, scanners, and more.',
    type: 'website',
    url: 'https://www.luminaterminal.com'
  },
  metadataBase: new URL('https://www.luminaterminal.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-zinc-200 antialiased">
        {children}
      </body>
    </html>
  );
}
