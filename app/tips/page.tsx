import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '15+ Advanced Tips & Tricks — Town to City Guide',
  description: 'Expert-level Town to City tips covering layout optimization, economy tricks, citizen management, beauty strategies, and research priorities. Actionable strategies for mid-to-late game players.',
};

const tips = {
  layout: [
    {
      title: 'Use Photo Mode to Scout Before Placing Expensive Buildings',
      content: 'Before dropping a University (150 Wood, 120 Stone, 30 Bricks) or a Tourist Pier (200 Wood, 150 Stone, 50 Bricks), press P to enter Photo Mode. Zoom out to bird\'s-eye view and free-camera around the build site. Photo Mode removes UI clutter and lets you see the exact terrain contours, existing coverage overlaps, and sight lines. This prevents the classic mistake of placing a pier on a coastline tile that looks valid but sits outside the coverage radius of your markets and churches — forcing demolish cost (50% resource refund only) and hours of rebuilding.',
      tags: ['blue'],
    },
    {
      title: 'Place Parks Between Houses, Not in Dedicated Districts',
      content: 'Grouping all parks into a central "park district" is the most common layout mistake among intermediate players. Beauty radius radiates from each park individually — a park 10 tiles away from a house provides zero beauty to that house. Instead, scatter 2-3 parks throughout each residential block, leaving 1-tile gaps between every 3-4 houses specifically for park placement. This ensures every house receives at least 40% beauty coverage from proximity alone. A park between two houses serves both simultaneously, doubling its efficiency.',
      tags: ['green'],
    },
    {
      title: 'The Three-Block Zoning Pattern',
      content: 'Organize your town into three distinct zones: a civic core (Town Hall, School, University, Church, Marketplace), a production belt (Farms, Bakeries, Windmills, Quarries), and residential blocks (houses with interspersed parks). The civic core should be centrally located with all service buildings overlapping radii. The production belt should be offset from residential by 3-4 tiles of park buffer — each park reduces the noise penalty from industrial buildings by 8%. This tri-zone pattern scales from 20 to 300 population without needing structural reorganization.',
      tags: ['blue'],
    },
  ],
  economy: [
    {
      title: 'Tax Rate Sweet Spot: 15%, Not 10% or 20%',
      content: 'The tax slider ranges from 0% to 50%, but extensive testing reveals a precise sweet spot. At 10%, you leave gold on the table for no happiness gain (the happiness formula uses discrete brackets, and 10% falls in the same bracket as 15%). At 20%, you cross into the "High Tax" bracket, triggering a -15% happiness penalty that reduces productivity and birth rates — the extra gold is not worth the population loss. Set tax at exactly 15% and leave it there for the entire early and mid-game. Only raise to 18% once you have Bourgeoisie citizens whose luxury consumption offsets the penalty.',
      tags: ['orange'],
    },
    {
      title: 'Build a Second Marketplace Before Population Hits 80',
      content: 'Each Marketplace serves approximately 80 citizens efficiently. At 81+ citizens, the market becomes overcrowded — citizens queue for goods, purchase times increase, and market satisfaction drops from green to yellow. This triggers a chain reaction: lower market satisfaction reduces happiness, which slows birth rate, which reduces immigration. Many players mistake this for a food shortage and overbuild farms. Before building your 8th farm, check if your market is overcrowded. A second Marketplace costs 100 Wood and 80 Stone — cheaper than three additional farms and solves the actual bottleneck.',
      tags: ['orange'],
    },
    {
      title: 'Export Wine and Olive Oil, Not Raw Grapes and Olives',
      content: 'The trading dock allows you to export both raw agricultural products (grapes, olives, wheat) and processed goods (wine, olive oil, bread). Raw grapes sell for 4 gold per unit through trade routes, while wine sells for 12 gold per unit — a 3x value multiplier. The Windmill and the Village Press (an Artisan-tier building that converts olives to oil) have the same operating cost as a farm but triple the output value. Build a Vineyard + Press + Trade Dock triangle: grapes flow to the press, olive oil flows to the dock, gold flows to your treasury. Each trade ship purchases 30 units per visit, generating 360 gold per wine shipment versus 120 gold for grapes.',
      tags: ['green'],
    },
    {
      title: 'Stockpile 200 Gold Before Starting Any Research',
      content: 'Research nodes cost gold and continue draining gold while active. Starting a research project with 50 gold in the bank causes a gold deficit that halts construction, prevents building maintenance, and stops market purchases — cascading into a food and happiness crisis within 2 season cycles. Always accumulate 200 gold before clicking any research node. This buffer covers the research cost plus 3 season cycles of normal expenses. Interrupt and resume research is not supported, so wait for the gold buffer or you waste the invested time entirely.',
      tags: ['orange'],
    },
  ],
  citizens: [
    {
      title: 'Never Exceed 60% Upgrade Rate — Keep 40% Workers',
      content: 'The Worker tier is not a stepping stone to transcend. Workers are the only citizens who will work farms, quarries, and basic production buildings. Every Worker upgraded to Artisan leaves their farm job slot for a bakery job. Upgrade too many Workers and you create two simultaneous crises: food production plummets while food demand rises (Artisans consume 40% more food). The 40% Worker minimum is non-negotiable. Use the population overlay (F4) to monitor your tier ratios — if Workers drop below 40%, stop all upgrades and build new Worker Houses to attract immigrant Workers.',
      tags: ['blue'],
    },
    {
      title: 'Click Individual Citizens to Discover Hidden Quests',
      content: 'The citizen detail panel accessed by clicking walking citizens is not just informational — it reveals timed quests that are otherwise invisible. Some quests only appear during specific season cycles or when a citizen\'s happiness drops below a threshold. A citizen who just crossed below 60% happiness may show a golden-border priority quest: "I miss the taste of fresh fish — bring a fishing dock within view." Completing it grants a permanent +10% happiness bonus to that family. Players who never click individual citizens miss approximately 30% of available quest rewards.',
      tags: ['green'],
    },
    {
      title: 'Marry Citizens from Different Residential Blocks',
      content: 'Citizens form couples when two unmarried adults of the same tier live within 15 tiles of each other and both have happiness ≥ 50%. If you segregate your housing by tier (all Workers in one block, all Artisans in another), you slow couple formation because the pool of eligible partners shrinks to same-block only. Mix Worker and Artisan houses on alternating streets — Workers and Artisans do not marry across tiers, but proximity to the general population increases the chance that two Workers or two Artisans happen to be within the 15-tile radius. Mixed blocks produce 40% more couples than segregated blocks over a 20-season period.',
      tags: ['blue'],
    },
    {
      title: 'Pets Are Not Cosmetic — They Provide Stacking Bonuses',
      content: 'Pets (cats, dogs, exotic birds) appear randomly when citizen happiness exceeds 60% and specific goods (fish for cats, meat for dogs) are available. Each pet provides +5% happiness to its household and stacks up to the house\'s pet limit (1 for Workers, 2 for Artisans, 3 for Bourgeoisie). Three pets in a Bourgeoisie house provide a constant +15% happiness buff that is immune to seasonal fluctuations — it never decays. Build a Livestock Pen for meat, maintain a Fishing Dock for fish, and place a Park for exotic bird attraction. The investment costs less than a Beauty building while providing comparable happiness returns.',
      tags: ['green'],
    },
  ],
  beauty: [
    {
      title: 'The Plaza Adjacency Bonus Multiplier',
      content: 'Plazas provide a 12-tile beauty radius, but their hidden power is the adjacency bonus. Any building placed directly adjacent to a Plaza tile gains a 25% beauty score bonus to its own output. A Plaza next to a Church creates a Church with +25% beauty radius. A Plaza next to the Marketplace boosts the market\'s commerce score by 15%, which increases tax income from shopping citizens. The optimal Plaza placement is adjacent to exactly two buildings: the Church and the Marketplace, forming a triangular civic-blessing-commerce nexus. This single arrangement is worth more than three standalone Plazas scattered around town.',
      tags: ['blue'],
    },
    {
      title: 'Trees Are Cheaper Than Parks Over 50+ Tiles of Coverage',
      content: 'Parks cost 10 Wood and 5 Stone per 6-tile coverage radius — that is 1.67 resources per tile. Individual trees (plantable from the decoration menu for 2 Wood each, with no maintenance cost) provide 1 tile of beauty radius each. At small scale, parks are more efficient due to overlapping radii. But at scale — filling a 50-tile residential district with beauty coverage — trees cost 100 Wood total while parks cost 83 Wood plus 42 Stone (5 parks). Trees also provide a 3% shade bonus that reduces citizen water consumption during summer seasons, something parks do not offer. Plant trees along every road and between every pair of houses.',
      tags: ['orange'],
    },
    {
      title: 'Monuments Unlock the Tourism Economy',
      content: 'Monuments (Statue of a Founder, Obelisk, Triumphal Arch) are end-game Beauty buildings with a 20-tile radius and unique bonuses. They cost heavily (300+ Wood, 200+ Stone, and rare materials) but each Monument unlocks a tourism multiplier. Tourists arrive based on your town\'s Prestige score, which is a composite of Monuments built, Bourgeoisie count, and overall Beauty. Each Monument adds 15% to tourism income. A town with 3 Monuments generates more passive income from tourists than from taxes. Start Monument construction the moment your Bourgeoisie population reaches 5 families — the return on investment is the highest of any building in the game.',
      tags: ['green'],
    },
  ],
  research: [
    {
      title: 'Research Order: Crop Rotation → Advanced Masonry → Medicine',
      content: 'The Research Tree has 22 nodes, but the first three are critical path. Crop Rotation (Tier 1) improves farm output by 20% — the highest impact-per-gold investment in the entire tree. Research it immediately when available. Advanced Masonry (Tier 1) reduces all stone costs by 15%, which saves approximately 600 Stone over the course of a full game. Medicine (Tier 2) unlocks the Apothecary building, which prevents disease outbreaks — the least visible but most devastating event in the game. A disease outbreak kills 20-40% of livestock, contaminates food stores, and causes mass emigration. These three nodes are non-negotiable before any other research.',
      tags: ['blue'],
    },
    {
      title: 'Skip Aesthetics Research Until You Have a University',
      content: 'The Aesthetics branch (Beautification, Landscaping, Grand Architecture) offers bonuses to beauty building efficiency. These are trap nodes early game. The base versions of Parks and Plazas already provide enough beauty for Worker and Artisan happiness. Aesthetics bonuses (+15% beauty radius, -20% decoration building cost) apply percentage increases to small base numbers — +15% of a 6-tile park radius is 6.9 tiles, which rounds down to 6 in the game engine due to integer tile math. The bonus is genuinely useful only once you have large-radius Monuments and Plaza clusters. Research Aesthetics after Medicine, not before.',
      tags: ['orange'],
    },
    {
      title: 'Time Research During Festivals for Double Speed',
      content: 'When your town\'s entertainment satisfaction triggers a Festival event, all research nodes progress at double speed for the 4-season festival duration. Plan your research around Festivals — if a Festival is approaching within 3 season cycles, save your gold and do not start any research until the Festival begins. A 40-cycle research project during Festival completes in 20 cycles, saving 20 cycles of gold drain. Use the Entertainment overlay to track festival probability — when the meter reaches 80%, pause all research starts and wait for the Festival trigger.',
      tags: ['green'],
    },
  ],
};

export default function TipsPage() {
  return (
    <main className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Tips &amp; Tricks</span>
        </div>

        {/* Page Header */}
        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">15+ Advanced Tips &amp; Tricks</h1>
        <p className="text-lg text-blueprint-muted mb-8 max-w-3xl">
          These are not general pieces of advice. Every tip on this page is a specific, testable strategy — a lever you can pull right now to improve your town. They cover layout optimization, economy efficiency, citizen management, beauty tactics, and research priorities. Each tip comes from hundreds of hours of combined community testing. If you are past the beginner stage and looking to optimize, this is your handbook.
        </p>

        {/* Section tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="bp-tag blue">Layout</span>
          <span className="bp-tag orange">Economy</span>
          <span className="bp-tag blue">Citizens</span>
          <span className="bp-tag green">Beauty</span>
          <span className="bp-tag orange">Research</span>
        </div>

        {/* ===== Layout Tips ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Layout &amp; Zoning</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Town layout is the foundation upon which everything else is built. A well-zoned town with 150 citizens outperforms a sprawling mess with 250. These three tips cover the most impactful layout decisions you will make.
          </p>

          <div className="space-y-6">
            {tips.layout.map((tip, i) => (
              <div key={i} className="bluepr-card">
                <div className="flex items-start gap-3 mb-3">
                  {tip.tags.map((tag, j) => (
                    <span key={j} className={`bp-tag ${tag}`}>{tag === 'blue' ? 'Layout' : 'Strategy'}</span>
                  ))}
                </div>
                <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">{tip.title}</h3>
                <p className="text-blueprint-muted leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Economy Tips ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Economy &amp; Trade</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Gold is the bottleneck for everything: building construction, research, trade routes, and festivals. Understanding the economic levers transforms a struggling town into a wealthy city.
          </p>

          <div className="space-y-6">
            {tips.economy.map((tip, i) => (
              <div key={i} className="bluepr-card">
                <div className="flex items-start gap-3 mb-3">
                  {tip.tags.map((tag, j) => (
                    <span key={j} className={`bp-tag ${tag}`}>{tag === 'orange' ? 'Economy' : 'Trade'}</span>
                  ))}
                </div>
                <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">{tip.title}</h3>
                <p className="text-blueprint-muted leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Citizens Tips ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Citizen Management</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Citizens are not just numbers on a screen — they are dynamic agents with individual behaviors, hidden quests, and complex interaction systems. Managing them well unlocks growth rates that other players cannot match.
          </p>

          <div className="space-y-6">
            {tips.citizens.map((tip, i) => (
              <div key={i} className="bluepr-card">
                <div className="flex items-start gap-3 mb-3">
                  {tip.tags.map((tag, j) => (
                    <span key={j} className={`bp-tag ${tag}`}>{tag === 'blue' ? 'Citizens' : 'Strategy'}</span>
                  ))}
                </div>
                <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">{tip.title}</h3>
                <p className="text-blueprint-muted leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Beauty Tips ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Beauty &amp; Aesthetics</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Beauty is the most underutilized system in Town to City. Players treat it as optional decoration, but it is a core economic lever that directly controls happiness, tier progression, and tourism income.
          </p>

          <div className="space-y-6">
            {tips.beauty.map((tip, i) => (
              <div key={i} className="bluepr-card">
                <div className="flex items-start gap-3 mb-3">
                  {tip.tags.map((tag, j) => (
                    <span key={j} className={`bp-tag ${tag}`}>{tag === 'green' ? 'Beauty' : 'Strategy'}</span>
                  ))}
                </div>
                <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">{tip.title}</h3>
                <p className="text-blueprint-muted leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Research Tips ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Research &amp; Technology</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            The Research Tree contains 22 nodes, and the order in which you research them determines whether you dominate the mid-game or struggle through it. Avoid the trap nodes and prioritize what actually moves the needle.
          </p>

          <div className="space-y-6">
            {tips.research.map((tip, i) => (
              <div key={i} className="bluepr-card">
                <div className="flex items-start gap-3 mb-3">
                  {tip.tags.map((tag, j) => (
                    <span key={j} className={`bp-tag ${tag}`}>{tag === 'blue' ? 'Research' : 'Strategy'}</span>
                  ))}
                </div>
                <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">{tip.title}</h3>
                <p className="text-blueprint-muted leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Tip Summary Table ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Quick Reference: Tips at a Glance</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            All 15 tips summarized in a scannable table. Drill into the sections above for the full explanation and reasoning behind each one.
          </p>

          <div className="bluepr-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-blueprint-border">
                  <th className="text-left py-2 px-2 font-semibold text-blueprint-text w-12">#</th>
                  <th className="text-left py-2 px-2 font-semibold text-blueprint-text">Tip</th>
                  <th className="text-left py-2 px-2 font-semibold text-blueprint-text w-24">Category</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: 'Layout', items: tips.layout },
                  { cat: 'Economy', items: tips.economy },
                  { cat: 'Citizens', items: tips.citizens },
                  { cat: 'Beauty', items: tips.beauty },
                  { cat: 'Research', items: tips.research },
                ].flatMap(({ cat, items }) =>
                  items.map((tip, i) => ({
                    cat,
                    title: tip.title,
                    tagColor: cat === 'Layout' || cat === 'Citizens' || cat === 'Research' ? 'blue' : cat === 'Economy' ? 'orange' : 'green',
                  }))
                ).map((tip, i) => (
                  <tr key={i} className="border-b border-blueprint-border/50 hover:bg-blueprint-alt/50">
                    <td className="py-3 px-2 text-blueprint-muted">{i + 1}</td>
                    <td className="py-3 px-2 font-medium text-blueprint-text">{tip.title}</td>
                    <td className="py-3 px-2"><span className={`bp-tag ${tip.tagColor}`}>{tip.cat}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bottom separator */}
        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of Tips &amp; Tricks</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>

      </div>
    </main>
  );
}
