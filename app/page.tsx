import Link from 'next/link';

export const metadata = {
  alternates: {
    // 首页 canonical / sitemap <loc> / WebSite schema 三处必须逐字相同，
    // 且一律用**不带尾斜杠**的形式：trailingSlash:false 下 Next 构建会把 canonical 的
    // 尾斜杠剥掉（线上实测输出 ...wiki 而非 ...wiki/），sitemap 若写带斜杠就与
    // HTML canonical 打架，Google 会在镜像域干扰下趁机自选 canonical。
    // cairnguide.wiki 全站不带斜杠、首页正常被索引，即对照样本。
    canonical: "https://towntocityguide.wiki",
  },
  title: 'Town to City Guide | Complete City Builder Guide 2026',
  description: 'Free Town to City guide covering buildings, layouts, resources, citizens, economy, research, trade, and tips. Master this cozy Mediterranean city builder from Galaxy Grove.',
};

const navItems = [
  { label: 'Layouts', href: '/layouts' },
  { label: 'Buildings', href: '/buildings' },
  { label: 'Resources', href: '/resources' },
  { label: 'Citizens', href: '/citizens' },
  { label: 'Economy', href: '/economy' },
  { label: 'Research', href: '/research' },
  { label: 'Trade', href: '/trade' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Updates', href: '/updates' },
];

const featureCards = [
  {
    title: 'Complete Building Guide',
    desc: 'Every building explained with production stats, citizen needs, and optimal placement strategies.',
    href: '/buildings',
    tag: 'Essential',
    color: 'blue' as const,
  },
  {
    title: 'Layout Masterclass',
    desc: 'Grid-less city planning: organic streets, district zoning, waterfront design, and beauty optimization.',
    href: '/layouts',
    tag: 'Popular',
    color: 'orange' as const,
  },
  {
    title: 'Beginner\'s Guide',
    desc: 'Your first hour in Town to City: starting steps, early priorities, and common mistakes to avoid.',
    href: '/beginners',
    tag: 'New Player',
    color: 'green' as const,
  },
  {
    title: 'Research Tree Guide',
    desc: 'Optimal research order, key unlocks, and which technologies to prioritize for fast growth.',
    href: '/research',
    tag: 'Strategy',
    color: 'blue' as const,
  },
  {
    title: 'Economy & Income',
    desc: 'Master taxes, trade routes, and tourism to build a thriving Mediterranean economy.',
    href: '/economy',
    tag: 'Advanced',
    color: 'orange' as const,
  },
  {
    title: 'Citizen Management',
    desc: 'Worker, Artisan, Bourgeoisie tiers explained. Happiness, families, pets, and population growth.',
    href: '/citizens',
    tag: 'Guide',
    color: 'green' as const,
  },
  {
    title: 'Production Chain Guide',
    desc: 'Every crop-to-goods chain mapped, with Granary placement rules and the six bottlenecks that stall output.',
    href: '/production-chain-guide',
    tag: 'Deep Dive',
    color: 'orange' as const,
  },
  {
    title: 'Building Tier List',
    desc: 'Every building ranked S to C with unlock conditions, worker needs, and strategic value.',
    href: '/tier-list',
    tag: 'Ranking',
    color: 'blue' as const,
  },
  {
    title: 'First Colony Setup',
    desc: 'Day 1 build order, food buffers, settler assignment, and the first trade route before winter.',
    href: '/beginner-colony-guide',
    tag: 'Early Game',
    color: 'green' as const,
  },
  {
    title: 'Industry Chains Deep Dive',
    desc: 'Production lines, supply routes, and economic optimization across every settlement stage.',
    href: '/industry-chains',
    tag: 'Deep Dive',
    color: 'orange' as const,
  },
  {
    title: 'Trade & Routes',
    desc: 'Trade routes, passive income scaling, and which goods move between settlements profitably.',
    href: '/trade',
    tag: 'Economy',
    color: 'blue' as const,
  },
  {
    title: 'Settlement Upgrades',
    desc: 'Hamlet to city: every upgrade milestone, its cost, and what to prioritize at each stage.',
    href: '/city-upgrade-guide',
    tag: 'Progression',
    color: 'green' as const,
  },
  {
    title: 'Seasonal Challenges',
    desc: 'Spring, summer, autumn and winter strategy: what each season changes and how to prepare.',
    href: '/seasonal-challenges',
    tag: 'Strategy',
    color: 'blue' as const,
  },
  {
    title: 'Achievements Guide',
    desc: 'All achievements with how to unlock them, including the missable and late-game ones.',
    href: '/achievement-guide',
    tag: 'Completion',
    color: 'orange' as const,
  },
  {
    title: 'Beach Biome Economy',
    desc: 'The pizza baker & trattoria income loop: the strongest early money engine on the coast.',
    href: '/beach-biome-economy-guide',
    tag: 'Money',
    color: 'green' as const,
  },
];

const keyBuildings = [
  { name: 'Town Hall', effect: 'Unlocks city management & taxes', tier: 'Tier 1: Free' },
  { name: 'Marketplace', effect: 'Boosts trade income by 25%', tier: 'Tier 2: 500 coin' },
  { name: 'University', effect: 'Enables advanced research', tier: 'Tier 3: 2,000 coin' },
  { name: 'Tourist Pier', effect: 'Unlocks tourism revenue stream', tier: 'Tier 4: 5,000 coin' },
];

const quickTips = [
  { tip: 'Place parks between houses rather than in separate districts; overlapping beauty bonuses stack.', cat: 'Layout' },
  { tip: 'Connect towns with trade routes early. Passive income scales with each new settlement.', cat: 'Economy' },
  { tip: 'Research decoration unlocks before expanding too fast to keep beauty scores high.', cat: 'Planning' },
  { tip: 'Use first-person mode (F key) to walk your streets and spot ugly areas citizens hate.', cat: 'Quality' },
];

const growthCheckpoints = [
  {
    stage: 'Starter Hamlet',
    text: 'Food, storage, and the first service buildings matter more than beauty or tourism.',
  },
  {
    stage: 'Stable Town',
    text: 'This is where you add dedicated warehouses, cleaner districts, and the first trade routes.',
  },
  {
    stage: 'Growth Pivot',
    text: 'Only scale prestige, tourism, and large defensive works after core transport and materials stay positive.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      {/* ===== HERO ===== */}
      <section className="hero-grid border-b border-blueprint-border">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="mb-8 overflow-hidden rounded-[28px] border border-blueprint-border bg-blueprint-surface shadow-[0_24px_60px_rgba(15,23,42,0.22)]">
            <img
              src="/hero.jpg"
              alt="Town to City city-building guide hero artwork"
              className="block h-48 w-full object-cover md:h-64"
            />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blueprint-accent-light text-blueprint-accent text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-blueprint-accent animate-pulse-dot" />
            Updated for Patch 1.0.4, June 2026
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-blueprint-text mb-4 tracking-tight">
            Town to City<br /><span className="text-blueprint-accent">Guide</span>
          </h1>
          <p className="text-xl text-blueprint-muted max-w-2xl mx-auto mb-8">
            Build Your Mediterranean Dream City: the complete guide to Town to City, the cozy grid-less city builder from Galaxy Grove.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/beginners" className="inline-flex items-center px-6 py-3 bg-blueprint-accent text-white font-semibold rounded-lg hover:bg-blueprint-accent/90 transition-colors">
              Start Here: Beginner&apos;s Guide →
            </Link>
            <Link href="/buildings" className="inline-flex items-center px-6 py-3 border-2 border-blueprint-border text-blueprint-text font-semibold rounded-lg hover:border-blueprint-accent hover:text-blueprint-accent transition-colors">
              Browse All Guides
            </Link>
          </div>
          {/* Stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { num: '15+', label: 'Guide Pages' },
              { num: '3', label: 'Citizen Tiers' },
              { num: '30+', label: 'Buildings Covered' },
              { num: '5.7k', label: 'Steam Reviews (97%)' },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div className="font-display text-2xl md:text-3xl font-bold text-blueprint-accent">{s.num}</div>
                <div className="text-xs text-blueprint-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NAVIGATION ===== */}
      <nav className="border-b border-blueprint-border bg-blueprint-surface sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-1 py-3">
          <Link href="/" className="nav-link active font-semibold">Home</Link>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>
          ))}
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* ===== FEATURE GUIDES ===== */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-blueprint-text mb-2">Essential Guides</h2>
          <p className="text-blueprint-muted mb-8">Everything you need to build a thriving Mediterranean city.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, i) => (
              <Link key={i} href={card.href} className="bluepr-card p-6 hover:shadow-card-hover no-underline group">
                <span className={`bp-tag ${card.color} mb-3`}>{card.tag}</span>
                <h3 className="font-display font-bold text-blueprint-text text-lg mt-2 mb-2 group-hover:text-blueprint-accent transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-blueprint-muted leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== KEY BUILDINGS ===== */}
        <section className="mb-16">
          <div className="bluepr-card">
            <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Key Buildings</h2>
            <p className="text-blueprint-muted mb-6">The four most important buildings to unlock your city&apos;s potential.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blueprint-alt text-left">
                    <th className="p-3 font-semibold">Building</th>
                    <th className="p-3 font-semibold">Effect</th>
                    <th className="p-3 font-semibold">Unlock Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {keyBuildings.map((b, i) => (
                    <tr key={i} className="border-t border-blueprint-border">
                      <td className="p-3 font-medium">{b.name}</td>
                      <td className="p-3 text-blueprint-muted">{b.effect}</td>
                      <td className="p-3"><span className="bp-tag blue">{b.tier}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== QUICK TIPS ===== */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-blueprint-text mb-2">Quick Tips</h2>
          <p className="text-blueprint-muted mb-8">Pro strategies from experienced players.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {quickTips.map((t, i) => (
              <div key={i} className="bluepr-card p-5">
                <span className={`bp-tag ${t.cat === 'Layout' ? 'blue' : t.cat === 'Economy' ? 'orange' : t.cat === 'Planning' ? 'green' : 'blue'} mb-2`}>{t.cat}</span>
                <p className="text-sm text-blueprint-text leading-relaxed mt-2">{t.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== GROWTH CHECKPOINTS ===== */}
        <section className="mb-16">
          <div className="bluepr-card">
            <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Growth Checkpoints</h2>
            <p className="text-blueprint-muted mb-6">A cleaner way to think about when to expand, specialize, and spend.</p>
            <div className="space-y-4">
              {growthCheckpoints.map((item, i) => (
                <div key={i} className="flex gap-4 items-start pb-4 border-b border-blueprint-border last:border-0 last:pb-0">
                  <span className="shrink-0 bp-tag blue text-xs">{item.stage}</span>
                  <p className="text-sm text-blueprint-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="border-t border-blueprint-border pt-8 mt-16 text-center text-sm text-blueprint-muted">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/about" className="hover:text-blueprint-accent transition-colors">About</Link>
            <Link href="/faq" className="hover:text-blueprint-accent transition-colors">FAQ</Link>
            <Link href="/updates" className="hover:text-blueprint-accent transition-colors">Updates</Link>
            <Link href="/privacy" className="hover:text-blueprint-accent transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-blueprint-accent transition-colors">Terms</Link>
            
          </div>
          <p>&copy; {new Date().getFullYear()} Town to City Guide. Not affiliated with Galaxy Grove or Kwalee. All game content belongs to its respective owners.</p>
        </footer>
      </div>
    </div>
  );
}
