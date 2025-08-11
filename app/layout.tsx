import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lumina Terminal',
  description: 'Next.js site deployed on AWS Amplify',
  metadataBase: new URL('https://luminaterminal.com'),
  icons: {
    icon: '/favicon.png',     // vendosim një PNG te /public
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

