import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lumina Terminal',
    short_name: 'Lumina',
    start_url: '/',
    display: 'standalone',
    theme_color: '#0ea5e9',
    background_color: '#ffffff',
    icons: [
      { src: '/icon.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
    ],
  };
}
