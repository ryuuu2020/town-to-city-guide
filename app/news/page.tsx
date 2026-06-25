import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates — Town to City Guide',
  description: 'Latest news and patch notes for Town to City. Launch day details, hotfixes, content patches, and the most recent game updates from May-June 2026.',
};

const newsItems = [
  {
    id: 'patch-june-22',
    title: 'Patch 1.0.4: Tourism Rework, Balance Adjustments, and UI Polish',
    date: 'June 22, 2026',
    badge: 'green',
    badgeText: 'Latest Patch',
    content: [
      'The June 22nd patch is the most significant update since launch, introducing a complete rework of the tourism system and addressing some of the most requested community balance changes. The centerpiece of this patch is the Tourism Rework, which fundamentally changes how tourists arrive, spend gold, and impact your town economy. Previously, tourism was a passive income stream tied directly to the number of Tourist Piers built — each pier generated a fixed gold amount regardless of town quality. Under the new system, tourists now have individual preferences: some seek high-beauty towns, others are drawn to historical monuments, and a third category visits specifically for festivals and entertainment events.',
      'The tourism rework also introduces Visitor Ratings, a quality metric that replaces the old flat income model. Tourists now rate their visit on a 5-star scale based on beauty coverage along their walking path, building variety within their sight radius, and citizen happiness in the neighborhoods they pass through. A 5-star rated town generates 300% more tourism income than a 2-star town, incentivizing thoughtful town design rather than pier spam. The new Tourist Overlay (F8) shows tourist walking paths in real time, allowing players to strategically place beautification along popular routes to maximize ratings.',
      'Beyond tourism, this patch includes significant balance changes based on community feedback. Worker House cost has been reduced from 30 to 25 Wood, making early-game housing less punishing on resource budgets. Bourgeoisie food consumption has been increased slightly (from 2.0 to 2.2 units per season, a 10% bump), reflecting the feedback that late-game food management was too trivial once trade routes were established. The Livestock Pen now produces wool at a rate of 2 units per season (up from 1.5), making textile-based trade routes more viable. Patch 1.0.4 also addressed 14 bug fixes, including a critical issue where citizens would occasionally pathfind through water tiles between islands.',
    ],
  },
  {
    id: 'patch-june-15',
    title: 'Content Patch 1.0.3: New Mediterranean Map, Festival Events, and Cathedral Building',
    date: 'June 15, 2026',
    badge: 'orange',
    badgeText: 'Content Update',
    content: [
      'The June 15th content patch delivers the first post-launch content expansion, adding a brand-new playable map and two major gameplay systems. The headline addition is the Island Archipelago Map, a Mediterranean island chain with 6 interconnected landmasses separated by shallow straits. Unlike the mainland maps where expansion is unrestricted, the archipelago forces players to manage ferry routes, bridge construction, and island-specialized economies. Each island has a distinct terrain bias — one island is all fertile farmland, another is pure hillside ideal for vineyards, and the central island is a tourism paradise with natural beauty bonuses. This map is designed for intermediate-to-advanced players who have mastered the base game systems.',
      'The second major addition is the Festival Event System, a new recurring mechanic that replaces the old random festival triggers. Festivals now occur on a predictable seasonal cycle (one per 12 seasons by default, adjustable in settings) and are themed events with specific requirements. The Harvest Festival requires 500 stored food units and grants a 48-hour food production bonus to all farms. The Artisans\' Fair requires 3 different processed goods (bread, wine, olive oil) and doubles trade route income for the duration. The Grand Ball requires that every citizen tier has happiness above 70% and unlocks a permanent prestige bonus. Each Festival type has a unique visual celebration with fireworks and parade animations.',
      'Rounding out the patch is the Cathedral, a new Bourgeoisie-tier building that serves as an upgrade from the Church. The Cathedral (300 Wood, 200 Stone, 80 Bricks, and 20 Marble) provides triple the beauty radius of a Church, generates donation income at 2x the Church rate, and unlocks the Pilgrimage tourism event — an additional tourist category that brings gold-paying pilgrims from distant lands. Additionally, 8 new decoration items were added to the build menu, including Cypress trees, stone fountains, and cobblestone path options. Four bug fixes addressed issues with the Apothecary healing radius and trade route pathfinding.',
    ],
  },
  {
    id: 'hotfix-june-2',
    title: 'Hotfix 1.0.2: Save Corruption Fix, Performance Patch, and Quality of Life Updates',
    date: 'June 2, 2026',
    badge: 'blue',
    badgeText: 'Hotfix',
    content: [
      'The June 2nd hotfix is a critical stability update that addresses the most impactful launch-week issues. The primary fix resolves a rare but devastating save corruption bug that could occur when the game autosaved during a citizen\'s tier upgrade transition. Approximately 3% of players experienced this issue, which rendered save files unloadable. The root cause was a race condition in the serialization engine — citizen data was being written to disk before the upgrade transaction fully committed, creating an inconsistent game state that the load routine could not parse. The hotfix introduces a two-phase commit for all citizen state changes, ensuring data integrity at the cost of a 0.2-second delay during upgrades.',
      'Performance optimizations constitute the other major focus of this hotfix. Early players on lower-end hardware reported frame rate drops below 30 FPS when towns exceeded 150 citizens. The optimization pass targets three bottlenecks: citizen pathfinding calculations (now batched and processed on a separate thread), particle effects from chimneys and water features (now use LOD scaling based on camera distance), and the rendering of individual trees in the decoration system (now use GPU instancing for trees beyond 50 units). Combined, these optimizations deliver a 40% frame rate improvement on integrated graphics and a 25% improvement on discrete GPUs.',
      'The hotfix also introduces several community-requested quality of life features. A new Build Queue system allows players to chain up to 3 building placements — queue a Farm, a Well, and a House, and they will auto-build in order as resources become available. The Citizen Management panel now includes a search bar for finding specific citizens by name or job role. The F-key overlay hotkeys are now rebindable in the Controls menu. And most notably, the game now supports borderless windowed mode in addition to fullscreen and windowed, addressing screen-tearing issues on 144Hz monitors when running at display-native refresh rates.',
    ],
  },
  {
    id: 'launch-may-26',
    title: 'Town to City Launch Day: Version 1.0.0 Released on Steam and GOG',
    date: 'May 26, 2026',
    badge: 'blue',
    badgeText: 'Launch',
    content: [
      'Town to City officially launched on May 26, 2026, on Steam and GOG, marking the culmination of a three-year development cycle by the small independent studio behind it. The launch version (1.0.0) includes the complete base game experience: the full Research Tree with 22 nodes, three citizen tiers (Worker, Artisan, Bourgeoisie), over 40 unique buildings, two biomes (Mediterranean Coast and Hillside), a dynamic season system, individual citizen simulation with quests and family formation, trading routes, a Festival system, and the full tourism economy end-game loop.',
      'The launch day release was met with strong community reception, achieving a Very Positive rating on Steam within the first 48 hours. Key points of praise from early reviews include the depth of the citizen simulation — each citizen has their own name, happiness score, food preferences, health status, and social relationships — and the visual aesthetic, which captures the warm Mediterranean atmosphere with hand-painted terrain textures and dynamic lighting that shifts through dawn, midday, and evening. The building placement system, which snaps to a tile grid but allows free rotation and preview before committing, was also highlighted as a standout quality-of-life feature.',
      'Launch day was not without challenges. The development team shipped with three known issues acknowledged in the launch day patch notes: occasional citizen pathfinding errors when two buildings blocked a previously clear path, the Church donation income scaling inconsistently with town beauty score, and a text overflow bug in the German localization that caused building descriptions to be cut off beyond 180 characters. The team pledged rapid hotfixes for all three issues, with the first patch committed to release within the first week. A content roadmap shared alongside the launch promises monthly content updates through the end of 2026, including new biomes, additional citizen tiers, and a modding toolkit.',
    ],
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>News</span>
        </div>

        {/* Page Header */}
        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Latest News</h1>
        <p className="text-lg text-blueprint-muted mb-8 max-w-3xl">
          Stay up to date with Town to City development. Patch notes, content updates, hotfixes, and community news — all in one place. The game launched on May 26, 2026, and the development team has been shipping regular updates ever since. Bookmark this page and check back for the latest changes.
        </p>

        {/* Section tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="bp-tag green">Latest Patch</span>
          <span className="bp-tag orange">Content Update</span>
          <span className="bp-tag blue">Hotfix</span>
          <span className="bp-tag blue">Launch</span>
        </div>

        {/* ===== News Timeline ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Recent Updates</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Every patch, hotfix, and content update since the game launched on May 26, 2026. Listed in reverse chronological order with the most recent changes at the top.
          </p>

          <div className="space-y-8">
            {newsItems.map((item) => (
              <article key={item.id} className="bluepr-card">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`bp-tag ${item.badge}`}>{item.badgeText}</span>
                  <span className="text-sm text-blueprint-muted">{item.date}</span>
                </div>

                <h3 className="font-display text-xl font-semibold text-blueprint-text mb-4">{item.title}</h3>

                <div className="space-y-4">
                  {item.content.map((paragraph, pi) => (
                    <p key={pi} className="text-blueprint-muted leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Separator between paragraphs and metadata */}
                <div className="mt-5 pt-4 border-t border-blueprint-border/50 flex flex-wrap gap-4 text-xs text-blueprint-muted">
                  <span>Version {item.id === 'patch-june-22' ? '1.0.4' : item.id === 'patch-june-15' ? '1.0.3' : item.id === 'hotfix-june-2' ? '1.0.2' : '1.0.0'}</span>
                  <span>{item.date}</span>
                  <span>{item.content.length} part{item.content.length > 1 ? 's' : ''} update</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===== Patch Summary Quick Reference ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Patch History at a Glance</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            A quick reference table for all post-launch patches. Click through to the detailed sections above for the complete patch notes on each update.
          </p>

          <div className="bluepr-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-blueprint-border">
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Version</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Date</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Type</th>
                  <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Highlights</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">1.0.4</td>
                  <td className="py-3 px-2 text-blueprint-muted">June 22, 2026</td>
                  <td className="py-3 px-2"><span className="bp-tag green">Latest</span></td>
                  <td className="py-3 px-2 text-blueprint-muted text-sm">Tourism rework, visitor ratings, worker house cost reduction, 14 bug fixes</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">1.0.3</td>
                  <td className="py-3 px-2 text-blueprint-muted">June 15, 2026</td>
                  <td className="py-3 px-2"><span className="bp-tag orange">Content</span></td>
                  <td className="py-3 px-2 text-blueprint-muted text-sm">Island archipelago map, festival system rework, cathedral building, 8 new decoration items</td>
                </tr>
                <tr className="border-b border-blueprint-border/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text">1.0.2</td>
                  <td className="py-3 px-2 text-blueprint-muted">June 2, 2026</td>
                  <td className="py-3 px-2"><span className="bp-tag blue">Hotfix</span></td>
                  <td className="py-3 px-2 text-blueprint-muted text-sm">Save corruption fix, 40% performance improvement, build queue, QoL features</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium text-blueprint-text">1.0.0</td>
                  <td className="py-3 px-2 text-blueprint-muted">May 26, 2026</td>
                  <td className="py-3 px-2"><span className="bp-tag blue">Launch</span></td>
                  <td className="py-3 px-2 text-blueprint-muted text-sm">Base game: 3 tiers, 40+ buildings, 22 research nodes, tourism economy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== Stay Updated CTA ===== */}
        <section className="mb-16">
          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">Stay Updated</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Town to City is under active development with monthly content updates planned through the end of 2026. The developer publishes patch notes on the Steam Community Hub and GOG forums on the same day updates ship. For the fastest notification of new patches, follow the game on Steam and enable automatic updates in your library settings. The community Discord server also maintains a dedicated patch-notes channel with developer commentary on design decisions behind each change.
            </p>
            <p className="text-blueprint-muted leading-relaxed">
              The content roadmap shared at launch includes several exciting features in development: an Alpine biome with snow mechanics and skiing tourists, a Fisherman citizenship tier that specializes in marine industries, a modding toolkit with Steam Workshop integration, and multiplayer cooperative town-building where two players manage adjacent settlements connected by trade. Check back on this page for updates as these features progress through development and release.
            </p>
          </div>
        </section>

        {/* Bottom separator */}
        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of News &amp; Updates</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>

      </div>
    </main>
  );
}
