import { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/shared/SchemaMarkup';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://towntocityguide.wiki/best-buildings",
  },
  title: 'Town to City Best Buildings Guide — Priority & Build Order (2026)',
  description:
    "Town to City best buildings: which buildings to prioritize, the ideal build order from housing and food chains to tourism, and when each structure pays off.",
};

const buildingTiers = [
  {
    priority: '1 — Foundations',
    buildings: 'Town Hall, Farm, Worker House, Market Stall',
    role: 'Starts the core loop: farms feed workers, workers staff buildings, and market stalls turn goods into early income.',
    whenToBuild: 'Immediately. These are the first structures every new town needs before anything else matters.',
  },
  {
    priority: '2 — Food processing',
    buildings: 'Bakery, Winery, Granary',
    role: 'Converts raw crops into goods that satisfy higher food needs and give you something valuable to sell.',
    whenToBuild: 'Once farms are producing a surplus. Place granaries near fields so crops move quickly into processing.',
  },
  {
    priority: '3 — Logistics and research',
    buildings: 'Warehouse, Research Center',
    role: 'Warehouses share stored goods across their transport range; the Research Center unlocks new buildings and farm tiers.',
    whenToBuild: 'As soon as your town has more than one production district. Research should run continuously between expansions.',
  },
  {
    priority: '4 — Housing ladder',
    buildings: 'Artisan House, Bourgeoisie House',
    role: 'Upgraded housing creates the higher citizen tiers who staff advanced buildings and pay more tax.',
    whenToBuild: 'Upgrade workers only after food and market needs are already met, or the new tier will move in unhappy.',
  },
  {
    priority: '5 — Services and happiness',
    buildings: 'Hattery, Pub, Apothecary, Perfumer, Social Club',
    role: 'Apparel, leisure, and public services keep citizens satisfied as their demands grow with each tier.',
    whenToBuild: "Alongside each housing upgrade. Add the matching service before the new tier's happiness drops.",
  },
  {
    priority: '6 — Late-game and tourism',
    buildings: 'Cathedral, Restaurant, Hotel, Art Atelier, Lighthouse',
    role: 'High-end services and attractions that unlock later ranks and turn beauty into tourism income.',
    whenToBuild: 'In the City and Large City ranks, ideally concentrated in a high-beauty tourist district.',
  },
];

const buildOrder = [
  {
    phase: 'Opening minutes',
    buildFirst: 'Town Hall, first Farm, Worker House',
    why: 'Workers need food and housing before any other system can run.',
    next: 'Add a Market Stall within walking distance of housing.',
  },
  {
    phase: 'Food stabilized',
    buildFirst: 'Bakery (once wheat and corn are available), Winery later',
    why: 'Processed food satisfies higher needs and sells better than raw crops.',
    next: 'Place a Granary beside the farm cluster to cut transport time.',
  },
  {
    phase: 'First growth push',
    buildFirst: 'Warehouse between producers and shops, then Research Center',
    why: 'Warehouse range removes the need to place every producer next to its consumer.',
    next: 'Keep research workers assigned so new buildings and farm tiers keep unlocking.',
  },
  {
    phase: 'Tier upgrade',
    buildFirst: 'Artisan House only after worker needs are met',
    why: 'Artisans staff advanced production and unlock the next economic layer.',
    next: 'Add Hattery or Pub as artisan demands appear.',
  },
  {
    phase: 'City rank',
    buildFirst: 'Apothecary, Perfumer, Social Club as the rank unlocks',
    why: 'These services satisfy the higher-tier citizens and keep tax income stable.',
    next: 'Begin assembling a tourism district with beauty and attractions.',
  },
  {
    phase: 'Late game',
    buildFirst: 'Hotel, Lighthouse, Art Atelier in a scenic district',
    why: 'Tourism becomes a strong income source once beauty and attractions exist.',
    next: 'Complete the remaining civic buildings such as Cathedral and Restaurant.',
  },
];

const faqs = [
  {
    question: 'What is the first building I should place in Town to City?',
    answer:
      'Start with the Town Hall, then place a Farm and a Worker House. Workers need food and housing to staff anything else, so this foundation has to come before production, services, or decoration.',
  },
  {
    question: 'When should I build a Warehouse instead of a Granary?',
    answer:
      'Use a Granary near farm clusters to hold crops and shorten the trip to processing buildings. Use a Warehouse between producers and shops when you want several buildings to share stored goods within its transport range.',
  },
  {
    question: 'When should I upgrade Worker Houses to Artisan Houses?',
    answer:
      'Upgrade only after basic food access and market access are met. Artisans demand better food variety plus apparel and leisure goods, so build the supporting services alongside the upgrade rather than after happiness has already dropped.',
  },
  {
    question: 'Are tourism buildings worth building early?',
    answer:
      'Not early. Tourism income depends on hotels, scenic routes, and attractions that only pay off once your town already has high beauty and a steady population. Focus on food, housing, and logistics first, then dedicate a district to tourism in the later ranks.',
  },
  {
    question: 'Which building unlocks the most new content?',
    answer:
      'The Research Center is the biggest content gate. It unlocks new buildings, decorations, and technologies, and farm tier upgrades run through research. Assign research workers and keep the center running whenever you are not actively placing new structures.',
  },
];

export default function BestBuildingsPage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Best Buildings</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Best Buildings Guide</h1>
        <p className="text-lg text-blueprint-muted mb-8">
          The right building order in Town to City is less about a single &quot;best&quot; structure and more about layering foundations, food chains, logistics, and housing in the right sequence. This guide ranks building groups by priority and shows what to build at each phase of growth.
        </p>

        {/* Priority tiers table */}
        <div className="bluepr-card overflow-x-auto">
          <h2 className="font-display text-xl font-semibold text-blueprint-text mb-4">Building Priority Tiers</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-blueprint-border">
                <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Priority</th>
                <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Buildings</th>
                <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Role</th>
                <th className="text-left py-3 px-2 font-semibold text-blueprint-text">When to build</th>
              </tr>
            </thead>
            <tbody>
              {buildingTiers.map((tier) => (
                <tr key={tier.priority} className="border-b border-blueprint-border/50 hover:bg-blueprint-alt/50">
                  <td className="py-3 px-2 font-medium text-blueprint-accent align-top">{tier.priority}</td>
                  <td className="py-3 px-2 text-blueprint-text align-top">{tier.buildings}</td>
                  <td className="py-3 px-2 text-blueprint-muted text-xs leading-relaxed align-top">{tier.role}</td>
                  <td className="py-3 px-2 text-blueprint-muted text-xs leading-relaxed align-top">{tier.whenToBuild}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Build order table */}
        <div className="bluepr-card overflow-x-auto mt-8">
          <h2 className="font-display text-xl font-semibold text-blueprint-text mb-4">Build Order by Phase</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-blueprint-border">
                <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Phase</th>
                <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Build first</th>
                <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Why</th>
                <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Next move</th>
              </tr>
            </thead>
            <tbody>
              {buildOrder.map((row) => (
                <tr key={row.phase} className="border-b border-blueprint-border/50 hover:bg-blueprint-alt/50">
                  <td className="py-3 px-2 font-medium text-blueprint-text align-top">{row.phase}</td>
                  <td className="py-3 px-2 text-blueprint-accent align-top">{row.buildFirst}</td>
                  <td className="py-3 px-2 text-blueprint-muted text-xs leading-relaxed align-top">{row.why}</td>
                  <td className="py-3 px-2 text-blueprint-muted text-xs leading-relaxed align-top">{row.next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Placement notes */}
        <div className="mt-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Placement Notes That Change Priorities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="tip-box">
              <strong>Cluster farms, then buffer with storage.</strong> Group farms in a dedicated agricultural area and place a granary beside them so processing buildings do not wait on long field trips.
            </div>
            <div className="tip-box">
              <strong>Warehouse range decides your layout.</strong> Buildings inside a warehouse&apos;s transport range can share stored goods, so place warehouses between producers and the shops that consume their output.
            </div>
            <div className="tip-box">
              <strong>Upgrade housing only with services ready.</strong> Each citizen tier adds demands. Build the matching apparel, leisure, or public service before or alongside the housing upgrade, not after unhappiness sets in.
            </div>
            <div className="tip-box">
              <strong>Keep tourism for the late game.</strong> A high-beauty district with hotels, a lighthouse, and an art atelier earns far more than scattering one attraction early.
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.question} className="border border-blueprint-border p-4 bg-blueprint-surface/40">
                <h3 className="font-semibold text-blueprint-accent">{f.question}</h3>
                <p className="text-blueprint-muted mt-2">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Guides — only real pages */}
        <div className="mt-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/buildings" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">Buildings Guide</div>
              <div className="text-sm text-blueprint-muted mt-1">Every building type and its category, rank unlocks, and placement role.</div>
            </Link>
            <Link href="/economy" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">Economy &amp; Income Guide</div>
              <div className="text-sm text-blueprint-muted mt-1">Tax, trade, and tourism income at every citizen tier.</div>
            </Link>
            <Link href="/production-chain-guide" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">Production Chain Guide</div>
              <div className="text-sm text-blueprint-muted mt-1">How raw crops flow into food, apparel, and leisure goods.</div>
            </Link>
            <Link href="/citizens" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">Citizens Guide</div>
              <div className="text-sm text-blueprint-muted mt-1">Worker, Artisan, and Bourgeoisie needs and job assignments.</div>
            </Link>
            <Link href="/layouts" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">City Layout Guide</div>
              <div className="text-sm text-blueprint-muted mt-1">Districts, roads, and grid-less placement strategies.</div>
            </Link>
            <Link href="/tips" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">Tips &amp; Tricks</div>
              <div className="text-sm text-blueprint-muted mt-1">Quick wins for new and returning town planners.</div>
            </Link>
          </div>
        </div>

        {/* Last updated */}
        <p className="text-sm text-blueprint-muted border-t border-blueprint-border pt-4 mt-12">
          Last updated: August 14, 2026
        </p>
      </div>

      {/* JSON-LD: FAQPage */}
      <SchemaMarkup type="faq" faqs={faqs} />
      {/* SELF-CHECK: metadata ✓ / H1 ✓ / tables(2) ✓ / FAQ(5)+FAQPage JSON-LD ✓ / Related ✓ / Last updated ✓ */}
    </div>
  );
}
