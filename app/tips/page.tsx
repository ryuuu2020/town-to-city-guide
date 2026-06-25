import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tips & Strategies — Town to City Guide',
  description: 'Practical Town to City tips covering multi-town planning, crop optimization, citizen management, tourism, and warehouse logistics.',
};

const tips = [
  {
    title: 'Specialize Your Towns',
    content: 'The default map features three distinct towns — Belvau (main hub), Fontebrac (agriculture), and Rocemarée (tourism). Develop each with a clear focus rather than trying to make every town self-sufficient. Fontebrac should focus on farming and granaries, Rocemarée on hotels and attractions, and Belvau on administration, research, and processing.',
    tags: ['blue'],
  },
  {
    title: 'Plan Crop Ratios Around Building Inputs',
    content: 'Different crop-powered buildings consume crops at very different rates. The Pub needs 75 Hops vs. 25 of each other crop — plant roughly 3x more Hops than other Tier 3 crops. The Candle Maker alone consumes 75 Beeswax, rivaling the combined demand of Hattery and Cathedral. Reference the exact input requirements before planting.',
    tags: ['green'],
  },
  {
    title: 'Use Warehouses to Bridge Production and Consumption',
    content: 'Warehouses have a transport range. Buildings within range automatically access stored goods, while those outside require manual hauling. Place warehouses strategically between farm districts, processing buildings, and shops to minimize transport time and prevent production stalls.',
    tags: ['orange'],
  },
  {
    title: 'Farms Tier 3 Doubles Surface Area',
    content: 'When your farms reach Tier 3, the available farming surface doubles. This is a critical upgrade point — plan for it by leaving room around your farm plots. The extra space can accommodate the higher crop volumes needed for City-rank buildings like the Apothecary (80 Medicinal Herbs) and Pub (75 Hops).',
    tags: ['green'],
  },
  {
    title: 'Monitor Labor Priorities',
    content: 'Town to City uses a class-based labor system. Workers, Artisans, and Bourgeoisie fill different job slots. When you upgrade citizens, ensure you do not leave critical Worker positions unfilled. A Bourgeoisie citizen cannot work a farm — maintain a balanced tier distribution for stable production.',
    tags: ['blue'],
  },
  {
    title: 'Tourism Needs Infrastructure',
    content: 'Tourism revenue does not happen automatically. You need Hotels, scenic routes, and attractions (Lighthouse, Art Atelier, Monumental Ruins, Obelisk). Beach-themed decorations also boost appeal. Dedicate Rocemarée to tourism with high beauty scores and connected scenic routes for maximum returns.',
    tags: ['orange'],
  },
  {
    title: 'Research Center Benefits All Towns',
    content: 'The Research Center applies town-wide upgrades that benefit all your connected settlements. Place it in your main hub (Belvau) and assign Research Workers to unlock new buildings, decorations, and farm tier upgrades. Prioritize farm tier research to expand crop variety and production capacity.',
    tags: ['blue'],
  },
  {
    title: 'Happiness Drives Citizen Upgrades',
    content: 'Citizens need their needs met to upgrade to higher tiers. Food access, goods availability, and beauty all contribute to satisfaction. Satisfied citizens upgrade more readily, generating higher tax income and unlocking advanced buildings. Check citizen needs regularly and address shortages before they spread.',
    tags: ['green'],
  },
  {
    title: 'Buildings Can Be Moved',
    content: 'Town to City allows building movement. If you place a building in a suboptimal location, you can relocate it rather than demolishing and rebuilding from scratch. Use this to refine your layouts as you understand how coverage ranges and transport work.',
    tags: ['blue'],
  },
  {
    title: 'Use Photo and First-Person Modes',
    content: 'Town to City features a photo mode and first-person view for walking through your streets. Use these to inspect your town closely and identify traffic bottlenecks, uncovered areas, or aesthetic issues that are not visible from the standard top-down view. These modes are also great for sharing your creations.',
    tags: ['green'],
  },
];

export default function TipsPage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Tips &amp; Strategies</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Tips &amp; Strategies</h1>
        <p className="text-lg text-blueprint-muted mb-10">
          Practical tips for growing your Mediterranean town. From crop planning to tourism strategies, these tips help you avoid common pitfalls and build efficiently.
        </p>

        <div className="space-y-6">
          {tips.map((tip, i) => (
            <div key={i} className="bluepr-card">
              <div className="flex items-center gap-2 mb-3">
                {tip.tags.map((tag) => (
                  <span key={tag} className={`bp-tag ${tag}`}>{tag === 'blue' ? 'Strategy' : tag === 'green' ? 'Production' : 'Economy'}</span>
                ))}
              </div>
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">{tip.title}</h3>
              <p className="text-blueprint-muted leading-relaxed">{tip.content}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of Tips &amp; Strategies</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>
      </div>
    </div>
  );
}
