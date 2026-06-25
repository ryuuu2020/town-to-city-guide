import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Town to City Guide',
  description: 'Common questions about Town to City: grid-less building, citizen tiers, farming, trade routes, and research.',
};

const faqItems = [
  {
    question: 'How does grid-less building work in Town to City?',
    answer: 'Town to City is a grid-less city builder. Unlike traditional city builders that lock you to a square or hex grid, buildings can be freely placed anywhere. You can rotate and offset structures, create winding streets, and place each element with pixel precision. This allows for organic, Mediterranean-style town layouts rather than grid-aligned blocks.',
    tags: ['blue'],
  },
  {
    question: 'What game modes does Town to City have?',
    answer: 'Town to City features both a Campaign mode and a Sandbox mode. In Campaign mode, you progress through scenarios with specific goals and challenges. Sandbox mode gives you complete freedom to build at your own pace without constraints. The Steam description also mentions story mode elements.',
    tags: ['green'],
  },
  {
    question: 'Which faction/town should I start with as a new player?',
    answer: 'Town to City is not faction-based. You start with a blank slate and build your settlement from scratch. The default map setup provides three regions: Belvau (main hub), Fontebrac (agriculture), and Rocemarée (tourism). Start in Belvau, establish basic food production and housing, then expand to other regions as you progress.',
    tags: ['green'],
  },
  {
    question: 'How do citizen tiers work?',
    answer: 'Citizens progress through three tiers: Worker, Artisan, and Bourgeoisie. Workers staff farms and basic production. Artisans run advanced production like Bakeries, Wineries, and Pubs. Bourgeoisie are the elite class that generates the most tax income. Each tier requires different services — meeting citizen needs is key to enabling upgrades.',
    tags: ['orange'],
  },
  {
    question: 'How do trade routes work?',
    answer: 'Once you establish multiple towns, you can connect them with trade and travel routes. Specialize different towns — farming in Fontebrac, tourism in Rocemarée — and connect them for mutual economic benefit. Trade routes allow goods to flow between settlements, and scenic routes boost tourism income.',
    tags: ['blue'],
  },
  {
    question: 'What does the Research Center do?',
    answer: 'The Research Center unlocks new buildings, decorations, and technologies. Assign Research Workers to generate research points. Research trees cover buildings, technology, and decorations. Farm tier upgrades are gated behind research — advancing your farms unlocks new crop types and buildings throughout the game.',
    tags: ['blue'],
  },
  {
    question: 'How do farms and crops work?',
    answer: 'Farms advance through four tiers, each unlocking new crop types. Tier 1: Grapes, Corn, Wheat. Tier 2: Beeswax, Cotton, Rose. Tier 3: Hops, Potatoes, Tomatoes, Lettuce (farm surface doubles). Tier 4: Pumpkin, Lavender, Medicinal Herbs. Crops feed production buildings — check the Crops & Farming page for detailed building input requirements.',
    tags: ['green'],
  },
  {
    question: 'Can I move buildings after placing them?',
    answer: 'Yes, Town to City supports building movement. If you place a building in a suboptimal location, you can relocate it. This is particularly useful as you learn how coverage ranges and warehouse transport work in practice. Use this feature to refine your layouts without losing progress.',
    tags: ['green'],
  },
  {
    question: 'How does tourism work?',
    answer: 'Tourism is a late-game income source. Develop hotels, scenic routes, and attractions (Lighthouse, Art Atelier, Monumental Ruins, Obelisk) to draw visitors. Tourism revenue scales with your town\'s beauty and the number of attractions. Dedicate a town (like Rocemarée) to tourism for maximum returns.',
    tags: ['orange'],
  },
  {
    question: 'What are the system requirements?',
    answer: 'Minimum: Windows 10 64-bit, Intel i5-10600K or AMD Ryzen 5 3600X, 8GB RAM, GTX 960 or RX 570. Recommended: Intel i7-11700K or AMD Ryzen 7 5700, 16GB RAM, RTX 2060 or RX 5700 XT. The game requires 3GB storage and DirectX 12.',
    tags: ['blue'],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">

        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Frequently Asked Questions</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-blueprint-muted mb-8 max-w-3xl">
          Common questions about Town to City. Quick answers for new players and those wanting to understand specific mechanics.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          <span className="bp-tag blue">Gameplay</span>
          <span className="bp-tag green">Beginner</span>
          <span className="bp-tag orange">Systems</span>
        </div>

        <div className="space-y-6 mb-16">
          {faqItems.map((item, i) => (
            <div key={i} className="bluepr-card">
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
                Q: {item.question}
              </h3>
              <p className="text-blueprint-muted leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="tip-box mb-16">
          <p className="font-semibold text-blueprint-text mb-1">Still have a question?</p>
          <p className="text-blueprint-muted leading-relaxed">
            Check the Beginner&apos;s Guide, Crops & Farming, and Buildings pages for deeper dives into specific systems.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of FAQ</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>
      </div>
    </div>
  );
}
