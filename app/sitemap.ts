import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://town-to-city-guide.vercel.app';

  const pages = [
    { path: '', priority: 1.0, changefreq: 'weekly' as const },
    { path: '/buildings', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/layouts', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/resources', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/citizens', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/economy', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/research', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/trade', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/beginners', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/tips', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/beginner-colony-guide', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/defense-layout', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/news', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/faq', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/about', priority: 0.5, changefreq: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changefreq: 'yearly' as const },
    { path: '/terms', priority: 0.3, changefreq: 'yearly' as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
