import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Town to City Guide',
  description: 'Real player questions and detailed answers about Town to City — grid-less building, beauty score, worker upgrades, trade routes, citizen growth, research tree, campaign mode, and performance tips.',
};

const faqItems = [
  {
    question: 'How does grid-less building work in Town to City?',
    answer: 'Unlike traditional city builders that lock you to a square or hex grid, Town to City uses a free-placement system where buildings snap to the terrain but can be rotated and positioned anywhere within buildable zones. You can place structures at any angle, and the game uses a proximity-based system to determine coverage radii — parks, markets, and churches all project circular influence zones rather than grid-aligned squares. This means two buildings can be placed closer together than grid-based games allow, enabling denser, more organic Mediterranean-style towns. The terrain itself shapes your layout: buildings placed on slopes or near coastline have different adjacency effects than those on flat land. Press Left Ctrl while placing a building to toggle between free rotation and snap-to-nearest-building alignment, which is useful for creating clean street lines without a grid.',
    tags: ['blue'],
  },
  {
    question: 'What is the best map to start on as a new player?',
    answer: 'The Amalfi Coast map is widely considered the best starting map for beginners in Town to City. It offers gentle terrain with ample flat coastal land, generous starting resources (approximately 350 Wood and 200 Stone within easy reach), and a natural harbor that simplifies trade route establishment. The map has moderate difficulty weather — mild winters and long growing seasons — which means your farms produce for roughly 70% of the year cycle, giving you a forgiving food economy while you learn. Avoid the Alpine Valley map as your first pick: its steep terrain makes building placement challenging, its short growing season requires precise farm timing, and its isolated trade routes demand established infrastructure before they become profitable. Most experienced players recommend completing your first full playthrough on Amalfi Coast before attempting any other map.',
    tags: ['green'],
  },
  {
    question: 'How do I increase my town&apos;s beauty score?',
    answer: 'Beauty is Town to City&apos;s composite metric combining decoration, landscaping, and cultural buildings. The score comes from four main sources: Parks and Plazas (which provide proportional beauty within their radius), trees planted along roads (1 beauty per tree, stacking unlimited), Monuments (Statue of a Founder, Obelisk, Triumphal Arch — each gives a large flat bonus plus a radius effect), and water features (fountains, ponds, and natural coastline proximity). The most efficient early-game strategy is to plant trees between every pair of houses and along every road — trees cost only 2 Wood each and require no maintenance. After establishing basic tree coverage, build a Plaza adjacent to both your Church and Marketplace to activate the adjacency multiplier, which boosts beauty output from both buildings by 25%. Save Monuments for the mid-game when you have Bourgeoisie citizens, as their tourism income multiplier makes the high resource cost worthwhile. Use the Beauty overlay (press F3) to identify dead zones where no building or tree is providing coverage.',
    tags: ['blue'],
  },
  {
    question: 'Why won&apos;t my Workers upgrade to Artisans?',
    answer: 'The Worker-to-Artisan upgrade is gated by three simultaneous requirements that many new players miss. First, you need a School building placed and operating — without education, Workers cannot learn the skills required for artisan professions. Second, each individual Worker household must have happiness at or above 65%, which requires food variety (at least three food types available at the marketplace), basic entertainment (a Tavern or Theater), and at least 40% beauty coverage on their house. Third, the total number of Workers in your town must exceed the Artisan count — if you already have 20 Artisans and only 15 Workers, no further upgrades are possible until you attract more Workers. The most commonly overlooked requirement is food variety: bread alone does not count as variety, so add a Fishing Dock for fish and a Vineyard for grapes to reach the three-food threshold. Check individual household status by clicking on walking citizens and reviewing their upgrade requirements in the citizen detail panel.',
    tags: ['orange'],
  },
  {
    question: 'How do trade routes work in Town to City?',
    answer: 'Trade routes connect your town to external city-states via a Trade Dock building, which you place on any coastal tile. Once the dock is built, you manually assign goods to export slots and set import orders for resources you lack. Each trade ship that visits (approximately every 4-6 season cycles) buys your exported goods at market rates and delivers your imports. The key strategic decision is what to export: processed goods (wine, olive oil, bread) sell for 3-5x the price of raw materials (grapes, olives, wheat), so building processing buildings (Windmill, Village Press, Bakery) before establishing trade routes dramatically increases profit. Trade route profitability is visible on the dock&apos;s interface panel — green numbers mean the route is profitable after subtracting ship maintenance costs. You can have up to three active trade routes simultaneously, and different city-states specialize in different resources, so diversify your trade partners to avoid supply shortages if one route is disrupted.',
    tags: ['blue'],
  },
  {
    question: 'Can I move buildings after placing them?',
    answer: 'There is no direct &quot;move building&quot; button in Town to City, but you can effectively relocate buildings using the demolish-and-rebuild method. When you demolish a building, you receive a 50% refund of the original resource cost — so a Fishery that cost 80 Wood returns 40 Wood upon demolition. This partial refund means frequent repositioning is expensive early game, but becomes manageable once your Wood and Stone production chains are established. To minimize relocation costs, use Photo Mode (press P) to scout building sites before committing to placement, and save your game before placing any building over 150 total resources (such as a University or Monuments). A planned layout from the start — using the three-zone system of civic core, production belt, and residential blocks — eliminates the need for most repositioning. Some players use the first hour of a new game exclusively for building tent-like &quot;planning markers&quot; with cheap decorations before committing real buildings.',
    tags: ['green'],
  },
  {
    question: 'How do I get more citizens to join my town?',
    answer: 'Citizen growth in Town to City comes from three sources: natural births (when two married citizens of the same tier have children), immigration (new families arrive when your town&apos;s overall satisfaction is high and housing is available), and quest completion rewards (some quests grant a free family). The most reliable growth engine is immigration, which is driven by your town&apos;s aggregate satisfaction score — a composite of food supply, entertainment, beauty coverage, tax rate, and market availability. Build Worker Houses preemptively: empty houses signal the game to send immigrants, while a full housing stock blocks all immigration regardless of satisfaction. A common mistake is upgrading all Worker Houses to Artisan Houses, which eliminates Worker housing capacity and halts Worker immigration entirely. Maintain at least 3-5 empty Worker House slots at all times to ensure a steady immigration pipeline. The population overlay (F4) shows your current growth rate and how many cycles until the next family arrives.',
    tags: ['blue'],
  },
  {
    question: 'What does the Research Tree unlock?',
    answer: 'The Research Tree contains 22 nodes spread across five branches: Agriculture, Masonry, Medicine, Aesthetics, and Commerce. Agriculture unlocks improved farming techniques — Crop Rotation (+20% farm output), Irrigation (reduces drought vulnerability), and Fertilizer (boosts harvest yield). Masonry provides construction cost reductions and unlocks Stone Quarry upgrades — Advanced Masonry reduces all stone costs by 15%, and Brickmaking enables brick production for higher-tier buildings. Medicine unlocks the Apothecary building, which prevents disease outbreaks that can kill livestock and cause mass emigration, and later Surgery which increases citizen lifespan. Aesthetics improves beauty building efficiency — Beautification (+15% park range) and Grand Architecture (reduces Monument costs by 25%). Commerce unlocks the Bank (passive gold interest), Trade Agreements (reduced trade ship fees), and the Guild Hall (increases Artisan productivity by 20%). The recommended first-three order is Crop Rotation, Advanced Masonry, then Medicine — these provide the highest return on investment and prevent the most damaging early-game crises.',
    tags: ['orange'],
  },
  {
    question: 'Is there a campaign or story mode in Town to City?',
    answer: 'Town to City features a Scenario mode rather than a traditional linear campaign. Scenarios are self-contained maps with specific starting conditions, victory conditions, and sometimes narrative framing. Each scenario has a unique challenge — one might require you to rebuild a town destroyed by a volcanic eruption, another might task you with establishing a trade empire with limited starting resources, and a third might challenge you to reach 200 population within 50 season cycles. The scenarios are ordered by difficulty and introduce game mechanics progressively: the first scenario teaches basic building and food production, the second introduces trade routes, and later scenarios layer in beauty management and research priorities. There is no overarching story connecting the scenarios — they are designed as discrete challenges you can tackle in any order. For players seeking narrative, the Sandbox mode with random events enabled provides emergent storytelling as your town survives droughts, festivals, plague outbreaks, and visiting dignitaries.',
    tags: ['blue'],
  },
  {
    question: 'Any performance tips for running large cities smoothly?',
    answer: 'Town to City is well-optimized but can slow down past 400-500 citizens, especially on lower-spec systems. The most effective performance adjustments are: reduce shadow quality to Medium (shadows are the single most expensive rendering feature in large towns), disable citizen path-debug visualization in the settings menu (it renders individual citizen movement lines that consume CPU overhead), and lower the citizen render distance to 50% — this stops the game from drawing walking citizens beyond your immediate view. If you&apos;re still experiencing framerate drops, cap your population at 300 using the sandbox settings, as the game&apos;s simulation engine becomes linearly more expensive with each additional citizen. Disabling the &quot;Show Pet Movement&quot; option also helps, since pets are individually simulated agents. For laptop players, running in borderless windowed mode at 1600x900 instead of fullscreen 1080p can yield a 15-20% FPS improvement with negligible visual impact. The developers have confirmed a performance patch targeting large-city optimization is in active development.',
    tags: ['green'],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Frequently Asked Questions</span>
        </div>

        {/* Page Header */}
        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-blueprint-muted mb-8 max-w-3xl">
          Real questions from the Town to City community, answered with the depth they deserve. Whether you&apos;re wondering how grid-less building works, why your Workers refuse to upgrade, or how to keep your city running smoothly past 400 citizens — you&apos;ll find the answer here. Every answer draws from community testing, developer insights, and hundreds of hours of combined playtime.
        </p>

        {/* Section tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="bp-tag blue">Building &amp; Layout</span>
          <span className="bp-tag green">Getting Started</span>
          <span className="bp-tag orange">Citizen Management</span>
          <span className="bp-tag blue">Trade &amp; Economy</span>
          <span className="bp-tag green">Mechanics</span>
          <span className="bp-tag orange">Technical</span>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6 mb-16">
          {faqItems.map((item, i) => (
            <div key={i} className="bluepr-card">
              <div className="flex items-start gap-3 mb-3">
                {item.tags.map((tag, j) => (
                  <span key={j} className={`bp-tag ${tag}`}>
                    {tag === 'blue' ? 'Gameplay' : tag === 'green' ? 'Beginner' : 'Systems'}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">
                Q: {item.question}
              </h3>
              <p className="text-blueprint-muted leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="tip-box mb-16">
          <p className="font-semibold text-blueprint-text mb-1">Still have a question?</p>
          <p className="text-blueprint-muted leading-relaxed">
            Check out the Beginner&apos;s Guide, Tips &amp; Tricks, or specific topic pages for deeper dives into each system. If your question isn&apos;t covered anywhere on the site, feel free to reach out via the contact methods listed on the About page — community-contributed questions help us keep this FAQ relevant and comprehensive.
          </p>
        </div>

        {/* Bottom separator */}
        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of FAQ</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>

      </div>
    </main>
  );
}
