import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

// 唯一站点 URL 前缀，与每个页面 metadata.alternates.canonical 完全一致。
// 尾斜杠策略：next.config.mjs 里 trailingSlash: false，所以子页面一律不带尾斜杠；
// 首页也写不带斜杠的 `${BASE}`，Next 构建会把 canonical 的尾斜杠剥掉，
// sitemap <loc> 必须与线上 HTML canonical 逐字一致（cairn 即此形式且首页被索引）。
const BASE = 'https://towntocityguide.wiki';

/**
 * 该文件手工维护（scripts/sync-sitemaps.py 只处理 *.gguidehub.com 域名的站点，本站不在其列）。
 *
 * 收录规则：
 * 1. 只列最终存活的页面。已合并的页面（/production-chain、/beginner-walkthrough、/city-layout）
 *    改由 vercel.json 里的 301 指向厚页，不进 sitemap。
 * 2. metadata.robots.index === false 的页面（/news、/tips）不进 sitemap，
 *    （/terms 原先 noindex，2026-09-07 起改为可索引并收录进 sitemap）
 *    否则 sitemap 与 noindex 互相打脸，Google 会整体下调对 sitemap 的信任。
 * 3. lastmod 用页面文件的真实最后修改日期（git log），不写构建时间。
 */
const ROUTES: { path: string; lastmod: string }[] = [
  { path: '/', lastmod: '2026-09-04' },
  { path: '/about', lastmod: '2026-08-26' },
  { path: '/achievement-guide', lastmod: '2026-08-25' },
  { path: '/beach-biome-economy-guide', lastmod: '2026-08-25' },
  { path: '/beginner-colony-guide', lastmod: '2026-09-04' },
  { path: '/beginners', lastmod: '2026-08-25' },
  { path: '/best-buildings', lastmod: '2026-08-25' },
  { path: '/buildings', lastmod: '2026-08-25' },
  { path: '/citizen-happiness-guide', lastmod: '2026-08-25' },
  { path: '/citizens', lastmod: '2026-08-25' },
  { path: '/city-upgrade-guide', lastmod: '2026-08-25' },
  { path: '/contact', lastmod: '2026-09-01' },
  { path: '/defense-layout', lastmod: '2026-08-25' },
  { path: '/economy', lastmod: '2026-08-25' },
  { path: '/faq', lastmod: '2026-08-25' },
  { path: '/industry-chains', lastmod: '2026-08-25' },
  { path: '/layouts', lastmod: '2026-09-04' },
  { path: '/logistics', lastmod: '2026-08-25' },
  { path: '/performance-optimization', lastmod: '2026-08-26' },
  { path: '/population-guide', lastmod: '2026-08-25' },
  { path: '/privacy', lastmod: '2026-08-26' },
  { path: '/production-chain-guide', lastmod: '2026-09-04' },
  { path: '/research', lastmod: '2026-08-25' },
  { path: '/resource-management', lastmod: '2026-08-25' },
  { path: '/resources', lastmod: '2026-08-25' },
  { path: '/seasonal-challenges', lastmod: '2026-08-25' },
  { path: '/siege-survival', lastmod: '2026-08-25' },
  { path: '/terms', lastmod: '2026-09-05' },
  { path: '/tier-list', lastmod: '2026-08-25' },
  { path: '/trade', lastmod: '2026-08-25' },
  { path: '/traffic-management', lastmod: '2026-08-25' },
  { path: '/updates', lastmod: '2026-09-04' },
  { path: '/villager-happiness', lastmod: '2026-08-25' },
];

const LOW_PRIORITY = ['about', 'privacy', 'terms', 'contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, lastmod }) => ({
    // 首页 canonical 是 `${BASE}`（不带斜杠），这里必须逐字一致
    url: path === '/' ? BASE : `${BASE}${path}`,
    lastModified: lastmod,
    changeFrequency: path === '/' ? ('daily' as const) : ('weekly' as const),
    priority: path === '/' ? 1 : LOW_PRIORITY.includes(path.slice(1)) ? 0.3 : 0.7,
  }));
}
