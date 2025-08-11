import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    {
      url: 'https://www.luminaterminal.com',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // kur të shtosh faqe të reja, shtoi këtu:
    // { url: 'https://www.luminaterminal.com/about', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];
  return pages;
}
