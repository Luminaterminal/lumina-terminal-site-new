import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lumina Terminal',
  description: 'Next.js site deployed on AWS Amplify',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
