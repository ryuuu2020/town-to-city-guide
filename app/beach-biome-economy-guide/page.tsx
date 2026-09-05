import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import SchemaMarkup from '@/shared/SchemaMarkup';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://towntocityguide.wiki/beach-biome-economy-guide",
  },
  title: 'Town to City Beach Biome Economy Guide 2026 | Pizza Baker & Trattoria Income Loop',
  description:
    'How to run a profitable Beach biome economy in Town to City: Pizza Baker production, Trattoria service chain, coastal tourism routing, and trade exports. Practical 2026 playbook.',
  keywords: [
    'Town to City Beach biome',
    'Town to City Pizza Baker',
    'Town to City Trattoria',
    'Town to City coastal tourism',
    'Town to City economy 2026',
    'Town to City Italian buildings',
    'Town to City trade routes',
  ],
};

// Qualitative importance ranking for each income source inside a Beach-biome
// city. Values are player-reported ranks on a 1-5 ordinal scale, not
// fabricated currency amounts.
const BEACH_INCOME_TABLE = [
  {
    source: 'Coastal tourism (passive, scales with shoreline length)',
    rank: 5,
    role: 'Core Beach loop',
    note: 'The Mediterranean coastline is what makes the Beach biome materially different from the inland biomes: tourism converts shoreline proximity into recurring income without consuming a production slot.',
  },
  {
    source: 'Trattoria: final step of the Italian food chain',
    rank: 4,
    role: 'Core Beach loop',
    note: 'Sits at the end of the Pizza Baker → Trattoria chain. A Trattoria that is supplied by an adjacent or trade-fed Pizza Baker turns the food chain into actual city income rather than wasted output.',
  },
  {
    source: 'Pizza Baker: Italian-inspired production building',
    rank: 4,
    role: 'Production chain',
    note: 'Added in the content + perf patch alongside the Beach biome. Pizza Baker consumes flour and tomatoes and outputs pizza, which the Trattoria sells for tier income.',
  },
  {
    source: 'Trade route exports (out-of-town goods)',
    rank: 3,
    role: 'Production chain',
    note: 'A Beach biome placed near a road or rail trade route can ship surplus pizza, fish, or craft goods off-map. Trade income rises sharply once a Trattoria or Pizza Baker is producing above local demand.',
  },
  {
    source: 'Citizen-tier housing tax (Bourgeoisie priority)',
    rank: 3,
    role: 'Baseline income',
    note: 'Beach-adjacent housing attracts higher-tier citizens. Bourgeoisie pay the highest tax tier and are more likely to move into decorative districts if the Beach amenity bonus is high.',
  },
  {
    source: 'Workshop craft exports (Artisan tier)',
    rank: 2,
    role: 'Low priority',
    note: 'Workshops still function in a Beach city but are not biome-specific. They serve as filler income while the food and tourism loops come online.',
  },
];

const SUPPLY_CHAIN = [
  {
    step: '1',
    title: 'Source the raw inputs',
    body: 'Wheat fields and tomato plots sit closest to the Bakery and Pizza Baker. Farms on inland biomes feed the Beach via trade routes, so never scatter both across one tiny district.',
  },
  {
    step: '2',
    title: 'Produce pizza at the Pizza Baker',
    body: 'The Pizza Baker is the Italian-inspired production building introduced with the Beach biome. Its output is meaningless unless a Trattoria is downstream to consume it.',
  },
  {
    step: '3',
    title: 'Serve at the Trattoria',
    body: 'Trattorias sell pizza to citizens and convert the surplus into tier income. Place them on the sea-facing edge so the coverage radius doubles up with the tourism bonus.',
  },
  {
    step: '4',
    title: 'Layer tourism on top',
    body: 'Once food coverage holds, the shoreline pulls paying visitors. Coastal tourism does not consume a production slot, so it stacks cleanly on top of any profitable food loop.',
  },
  {
    step: '5',
    title: 'Export the surplus',
    body: 'A trade post on the Beach-side road captures overflow pizza and craft goods and ships them off-map for cash. Trade is the lightest income to add but the easiest to under-use.',
  },
];

const ITALIAN_BUILDING_COMPARISON = [
  {
    building: 'Pizza Baker',
    role: 'Production step: converts raw crops into pizza',
    inputs: 'Wheat (flour), tomatoes',
    outputs: 'Pizza (consumed downstream by the Trattoria)',
    unlock: 'Available once the Beach biome is reachable in the save',
  },
  {
    building: 'Trattoria',
    role: 'Service step: sells pizza to citizens for tier income',
    inputs: 'Pizza from an adjacent or trade-fed Pizza Baker',
    outputs: 'Tier income, citizen demand coverage',
    unlock: 'Available once the Beach biome is reachable in the save',
  },
];

const COASTAL_LAYOUT_TIPS = [
  {
    title: 'Keep one long shoreline instead of several small ones',
    body: 'Tourism scales with continuous shoreline. A single 80-tile coast out-earns four separate 20-tile coves because each disconnected coast pays a coverage penalty.',
  },
  {
    title: 'Put food buildings on the inland side',
    body: 'Wheat, tomatoes, Bakery, Pizza Baker and Trattoria generate constant citizen traffic. Buffer them inland by 4-6 tiles so the simulation pathfinding of hungry citizens does not crowd the coast.',
  },
  {
    title: 'Reserve the sea-facing row for amenities',
    body: 'Parks, promenades, plazas, and Trattorias sit on the coast. Decorative flowers and fountains here double as tourist draws rather than just generic decoration.',
  },
  {
    title: 'Connect the trade post to the coast road rather than the inland ring road',
    body: 'Coastal trade posts load faster because traders do not have to detour through the dense inland district. This is the smallest layout change with the largest trade-income gain.',
  },
  {
    title: 'Pause during placement',
    body: 'Laying out a 30-tile seaside promenade while citizens are walking re-triggers pathfinding on the entire Beach edge. Pause to build, then unpause once the new tile batch is in.',
  },
];

const PATCH_TIMELINE = [
  {
    label: 'Beach biome release',
    note: 'Adds the Beach biome and the Italian-inspired Pizza Baker and Trattoria buildings. Free camera mode is added in the same update window.',
  },
  {
    label: 'Stability patch',
    note: 'Fixes hard crashes when loading a save with multiple custom buildings and crashes at specific population tiers; reduces floating-point math instability in very large cities.',
  },
  {
    label: 'Polish + perf patch',
    note: 'Faster load times and smoother late-game performance. Languages added: Brazilian Portuguese, Italian, Polish, Turkish, Dutch.',
  },
  {
    label: 'Upcoming performance build',
    note: 'Developer roadmap lists a dedicated performance update as current priority. Treat the Beach loop as stable now and expect it to get cheaper to run in the next major patch.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'Does the Beach biome earn more than inland biomes?',
    answer:
      'Yes, but only once coastal tourism is online. The Beach biome adds shoreline tourism and the Italian-inspired Pizza Baker / Trattoria food chain, both of which stack on top of the usual taxes and trade. Inland biomes without a coastline cannot match the passive tourism line, so the long-run Beach city tends to out-earn them once the food chain is fed.',
  },
  {
    question: 'How do I unlock the Pizza Baker and Trattoria?',
    answer:
      'Both buildings arrive with the Beach biome update and do not need a separate citizen tier to unlock: they enter the build menu once the Beach biome is reachable in your save. The Pizza Baker is a production building; the Trattoria is the consumer-facing counterpart and is where pizza becomes city income.',
  },
  {
    question: 'What raw inputs does the Pizza Baker need?',
    answer:
      'Wheat and tomatoes. Place wheat fields and tomato plots adjacent to or connected via road to the Pizza Baker so the input supply does not stall the chain. If the Beach biome does not have enough farmland, route wheat and tomatoes in from an inland biome through a trade route.',
  },
  {
    question: 'Where should the Trattoria sit for max income?',
    answer:
      'Sea-facing edge of the district. A Trattoria on the coast serves two roles: it consumes pizza from the Pizza Baker and it gets hit by the coastal tourism bonus that raises the per-sale value. Two Trattorias covering the same 20 citizens do not double the income. Drop one and feed the remainder more demand instead.',
  },
  {
    question: 'Is the Beach biome laggier than Forest or Mountain?',
    answer:
      'No biome is inherently heavier. Performance is tied to total citizen count, decoration density, and view distance rather than biomes. A dense Beach city at 500 citizens performs the same as a dense Forest city at 500 citizens on the same hardware. The Beach is fine on mid-tier GPUs provided you keep decoration counts and citizen cap under control.',
  },
];

export default function Page() {
  const faqLdJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <Link href="/" className="hover:text-blueprint-accent">Home</Link>
          <span className="mx-2">/</span>
          <span>Beach Biome Economy Guide</span>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">
            Town to City Beach Biome Economy Guide (July 2026)
          </h1>
          <p className="text-lg text-blueprint-muted mb-6 max-w-3xl">
            The Beach biome is the most recent content addition to Town to City, and it arrives with its own
            economy: Mediterranean tourism stacked on top of an Italian-inspired Pizza Baker and Trattoria food
            chain. This guide breaks down the income sources that actually matter in a coastal city, the supply
            chain in the right order, the layout that makes coastal tourism pay, and the patches that shipped
            the biome and what the developer roadmap says is next.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bp-tag blue">Beach Biome</span>
            <span className="bp-tag orange">Economy</span>
            <span className="bp-tag green">Tourism</span>
            <span className="bp-tag blue">Pizza Baker</span>
          </div>
        </header>

        {/* Section 1: Beach biome income sources at a glance */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">
            Beach biome income sources at a glance
          </h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Six income sources are realistic in a Beach-biome city. They are ranked below on a 1-5 qualitative
            importance scale, based on what is verifiable from public patch notes and the developer roadmap. The
            scale is ordinal (a rank rather than a currency value), and it tells you where to spend your first
            build slots when the biome opens.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border border-blueprint-border text-sm">
              <thead className="bg-blueprint-alt">
                <tr>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Income source</th>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Rank (1-5)</th>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Role</th>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Notes</th>
                </tr>
              </thead>
              <tbody>
                {BEACH_INCOME_TABLE.map((row, i) => (
                  <tr key={i} className="hover:bg-blueprint-surface/50">
                    <td className="p-3 border border-blueprint-border font-semibold text-blueprint-text">{row.source}</td>
                    <td className="p-3 border border-blueprint-border text-blueprint-accent whitespace-nowrap">{row.rank}</td>
                    <td className="p-3 border border-blueprint-border text-blueprint-warm">{row.role}</td>
                    <td className="p-3 border border-blueprint-border text-blueprint-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="tip-box">
            <strong>Read the table as a build order.</strong> Anything ranked 4 or 5 is a core Beach loop and
            deserves dedicated tiles. Ranks 2 and 3 are filler income. They should be filled only after the
            Pizza Baker → Trattoria → tourism stack is up.
          </div>
        </section>

        {/* Chart */}
        <figure className="my-10">
          <img
            src="/images/beach-biome-economy-guide.png"
            alt="Bar chart ranking the six income sources that matter in the Town to City Beach biome, on a qualitative 1-to-5 importance scale. Coastal tourism and the Italian food chain rank highest."
            loading="lazy"
            className="w-full rounded-card border border-blueprint-border"
          />
          <figcaption className="text-sm text-blueprint-muted mt-3 text-center">
            Beach-biome income sources ranked by player-reported importance (1-5 ordinal scale). Coastal tourism
            and the Pizza Baker → Trattoria food chain anchor the economy; trade and tier housing ride on top.
          </figcaption>
        </figure>

        {/* Section 2: The supply chain, in order */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">
            The Pizza Baker → Trattoria supply chain, in order
          </h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Beach-biome income has a clear dependency order. Skipping a step breaks the chain silently. A Pizza
            Baker that runs without a downstream Trattoria just stockpiles pizza and produces no cash. Building
            the chain in this order avoids the dead-stack failure mode.
          </p>
          <ol className="space-y-5">
            {SUPPLY_CHAIN.map((s) => (
              <li key={s.step} className="flex gap-4">
                <div className="step-num">{s.step}</div>
                <div className="bluepr-card flex-1 mb-0">
                  <h3 className="font-display font-semibold text-blueprint-text mb-1">{s.title}</h3>
                  <p className="text-blueprint-muted text-sm leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Section 2.5: Pizza Baker vs Trattoria comparison */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">
            Pizza Baker vs Trattoria: roles at a glance
          </h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            The two Italian-themed Beach-biome buildings are easy to mix up. The Pizza Baker is the
            production step that turns raw crops into pizza; the Trattoria is the service step that
            sells that pizza to citizens and converts it into tier income. Both enter the build menu
            together once the Beach biome is reachable in a save; neither one requires a separate
            citizen-tier unlock.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border border-blueprint-border text-sm">
              <thead className="bg-blueprint-alt">
                <tr>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Building</th>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Role in chain</th>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Inputs</th>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Outputs</th>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Unlock</th>
                </tr>
              </thead>
              <tbody>
                {ITALIAN_BUILDING_COMPARISON.map((row, i) => (
                  <tr key={i} className="hover:bg-blueprint-surface/50">
                    <td className="p-3 border border-blueprint-border font-semibold text-blueprint-text">{row.building}</td>
                    <td className="p-3 border border-blueprint-border text-blueprint-warm">{row.role}</td>
                    <td className="p-3 border border-blueprint-border text-blueprint-muted">{row.inputs}</td>
                    <td className="p-3 border border-blueprint-border text-blueprint-muted">{row.outputs}</td>
                    <td className="p-3 border border-blueprint-border text-blueprint-accent whitespace-nowrap">{row.unlock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Coastal layout */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">
            Coastal layout: making tourism pay
          </h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            The Beach biome is grid-less, which means coastline shape and tile placement decide whether
            tourism pays or underperforms. Five practical layout moves drawn from the same player reports the
            performance patch notes address.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-blueprint-muted">
            {COASTAL_LAYOUT_TIPS.map((t, i) => (
              <li key={i}>
                <strong className="text-blueprint-accent">{t.title}.</strong> {t.body}
              </li>
            ))}
          </ul>

          {/* Inline SVG schematic: a tiny coastline cross-section */}
          <div className="my-8 rounded-card border border-blueprint-border bg-blueprint-surface p-6">
            <svg
              viewBox="0 0 600 220"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Schematic of a Beach biome cross-section: water to the right, sea-facing amenity row, food production row inland, raw farms further inland, and a trade post attached to the coast road."
              className="w-full h-auto"
            >
              <rect x="0" y="0" width="600" height="220" fill="#0f172a" />
              {/* ocean */}
              <rect x="430" y="0" width="170" height="220" fill="#1e3a5f" />
              <text x="500" y="32" fill="#94a3b8" fontSize="13" fontFamily="Inter, sans-serif"
                textAnchor="middle">Sea / Tourism zone</text>
              {/* sea-facing amenity row */}
              <rect x="370" y="60" width="60" height="120" fill="#0ea5e9" fillOpacity="0.25" stroke="#38bdf8" />
              <text x="400" y="124" fill="#e2e8f0" fontSize="11" fontFamily="Inter, sans-serif"
                textAnchor="middle">Trattoria + promenade</text>
              {/* food production row */}
              <rect x="280" y="60" width="80" height="120" fill="#22c55e" fillOpacity="0.18" stroke="#22c55e" />
              <text x="320" y="120" fill="#e2e8f0" fontSize="11" fontFamily="Inter, sans-serif"
                textAnchor="middle">Pizza Baker</text>
              <text x="320" y="138" fill="#e2e8f0" fontSize="11" fontFamily="Inter, sans-serif"
                textAnchor="middle">+ Bakery</text>
              {/* farm row */}
              <rect x="120" y="60" width="150" height="120" fill="#f97316" fillOpacity="0.15" stroke="#f97316" />
              <text x="195" y="120" fill="#e2e8f0" fontSize="11" fontFamily="Inter, sans-serif"
                textAnchor="middle">Wheat + tomato farms</text>
              {/* trade post */}
              <rect x="370" y="190" width="60" height="22" fill="#38bdf8" fillOpacity="0.35" stroke="#38bdf8" />
              <text x="400" y="205" fill="#e2e8f0" fontSize="10" fontFamily="Inter, sans-serif"
                textAnchor="middle">Trade post</text>
              {/* arrows */}
              <line x1="270" y1="120" x2="280" y2="120" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#a)" />
              <line x1="360" y1="120" x2="370" y2="120" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#a)" />
              <line x1="400" y1="180" x2="400" y2="190" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#a)" />
              <defs>
                <marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="#94a3b8" />
                </marker>
              </defs>
            </svg>
            <p className="text-sm text-blueprint-muted mt-3 text-center">
              Beach-biome cross-section: keep the sea-facing row light, place the Pizza Baker one tile inland,
              push farms further in, and attach the trade post to the coast road rather than the inland ring.
            </p>
          </div>
        </section>

        {/* Section 4: Patch timeline and what is next */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">
            Patch timeline: what shipped with the Beach biome
          </h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Town to City is in Early Access and the developer ships patches roughly every 1-2 weeks. Four
            patches are directly relevant to a Beach-biome economy.
          </p>
          <div className="space-y-3">
            {PATCH_TIMELINE.map((p, i) => (
              <div key={i} className="bluepr-card mb-0">
                <h3 className="font-display font-semibold text-blueprint-text mb-1">{p.label}</h3>
                <p className="text-blueprint-muted text-sm leading-relaxed">{p.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">FAQ</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((f, i) => (
              <div key={i} className="border border-blueprint-border p-4 bg-blueprint-surface/40">
                <h3 className="font-semibold text-blueprint-accent">{f.question}</h3>
                <p className="text-blueprint-muted mt-2">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Related Guides (only real pages) */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/economy" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">Economy &amp; Income Guide</div>
              <div className="text-sm text-blueprint-muted mt-1">Tax, trade, and tourism revenue at every citizen tier.</div>
            </Link>
            <Link href="/production-chain-guide" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">Production Chain Guide</div>
              <div className="text-sm text-blueprint-muted mt-1">Italian food chain and other multi-step production lines.</div>
            </Link>
            <Link href="/layouts" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">City Layout Guide</div>
              <div className="text-sm text-blueprint-muted mt-1">Grid-less layouts that scale without pathfinding spikes.</div>
            </Link>
            <Link href="/trade" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">Trade &amp; Exports Guide</div>
              <div className="text-sm text-blueprint-muted mt-1">Trade post placement and surplus routing.</div>
            </Link>
            <Link href="/population-guide" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">Population Growth Guide</div>
              <div className="text-sm text-blueprint-muted mt-1">Citizen-tier progression and housing thresholds.</div>
            </Link>
            <Link href="/performance-optimization" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">Performance Optimization</div>
              <div className="text-sm text-blueprint-muted mt-1">Fix FPS drops in dense cities.</div>
            </Link>
          </div>
        </section>

        {/* Last updated */}
        <p className="text-sm text-blueprint-muted border-t border-blueprint-border pt-4">
          Last updated: July 21, 2026. Content checks the developer&apos;s public patch notes and roadmap against
          player reports from May through July 2026.
        </p>
      </div>

      {/* JSON-LD: FAQPage */}
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLdJson) }}
      />

      {/* JSON-LD: Article */}
      <SchemaMarkup
        type="article"
        headline="Town to City Beach Biome Economy Guide (July 2026)"
        datePublished="2026-07-21"
        dateModified="2026-07-21"
        authorName="GameGuideHub"
      />
    </div>
  );
}
