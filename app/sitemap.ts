import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://towntocityguide.wiki';

// 该文件由 scripts/sync-sitemaps.py 自动生成，新增页面后重新运行脚本即可
const ROUTES = [
    '',
    '/about',
    '/achievement-guide',
    '/beach-biome-economy-guide',
    '/beginner-colony-guide',
    '/beginner-walkthrough',
    '/beginners',
    '/best-buildings',
    '/buildings',
    '/citizen-happiness-guide',
    '/citizens',
    '/city-layout',
    '/city-upgrade-guide',
    '/contact',
    '/defense-layout',
    '/economy',
    '/faq',
    '/industry-chains',
    '/layouts',
    '/logistics',
    '/news',
    '/performance-optimization',
    '/population-guide',
    '/privacy',
    '/production-chain',
    '/production-chain-guide',
    '/research',
    '/resource-management',
    '/resources',
    '/seasonal-challenges',
    '/siege-survival',
    '/terms',
    '/tier-list',
    '/tips',
    '/trade',
    '/traffic-management',
    '/villager-happiness',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? ('daily' as const) : ('weekly' as const),
    priority: path === '' ? 1 : ['privacy', 'terms', 'about'].includes(path.slice(1)) ? 0.3 : 0.7,
  }));
}
