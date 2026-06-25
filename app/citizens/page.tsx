import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Citizens Guide: Happiness, Tiers & Family — Town to City Guide',
  description: 'Master citizen management in Town to City. Learn Worker/Artisan/Bourgeoisie tiers, happiness mechanics, family formation, pets, and individual requests.',
};

const citizenTiers = [
  { tier: 'Worker', icon: 'W', color: 'blue', desc: 'The backbone workforce. Workers staff farms, fishing docks, lumber mills, quarries, and basic production buildings. They have simple needs — food, water, and basic shelter. Worker Houses cost 30 Wood and support 2 family members each.', upgradeTo: 'Artisan: requires Education (School nearby), Food Variety (bread + fish), and Happiness ≥ 60%.' },
  { tier: 'Artisan', icon: 'A', color: 'orange', desc: 'Skilled craftsmen and tradespeople. Artisans run bakeries, windmills, vineyards, olive groves, and workshops. They demand better food (bread), access to markets, and entertainment. Artisan Houses cost 60 Wood + 40 Stone and support 3 family members.', upgradeTo: 'Bourgeoisie: requires University access, Luxury Good (wine or olive oil), Beauty score ≥ 70%, and Happiness ≥ 75%.' },
  { tier: 'Bourgeoisie', icon: 'B', color: 'green', desc: 'The elite citizen class. Bourgeoisie generate the most tax income and staff universities, churches, tourist buildings, and administrative roles. They require luxury goods, education, high beauty, and regular entertainment. Bourgeoisie Houses cost 100 Wood + 80 Stone + 20 Bricks and support 4 family members.', upgradeTo: 'Peak tier — cannot upgrade further. Can attract special characters (Historians, Artists) who provide unique bonuses.' },
];

export default function CitizensPage() {
  return (
    <main className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Citizens</span>
        </div>

        {/* Page Header */}
        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Citizens Guide</h1>
        <p className="text-lg text-blueprint-muted mb-8 max-w-3xl">
          Citizens are the heart of your town. Manage their happiness, guide them through three social tiers, support families as they grow, and fulfill their individual needs to build a thriving Mediterranean community.
        </p>

        {/* Section tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="bp-tag blue">Tiers</span>
          <span className="bp-tag orange">Happiness</span>
          <span className="bp-tag green">Family</span>
          <span className="bp-tag blue">Needs</span>
          <span className="bp-tag green">Pets</span>
          <span className="bp-tag orange">Quests</span>
        </div>

        {/* ===== Section 1: Three Citizen Tiers ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Three Citizen Tiers</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Town to City features a tiered citizen system where each family progresses from basic Workers through skilled Artisans to wealthy Bourgeoisie. Tiers are not just cosmetic changes — each tier unlocks new buildings, produces different goods, pays different tax rates, and demands increasingly complex services. Managing this progression is the central economic and social challenge of the game.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Worker */}
            <div className="bluepr-card text-center">
              <div className="w-16 h-16 rounded-full bg-blueprint-accent-light flex items-center justify-center text-blueprint-accent font-display font-bold text-2xl mx-auto mb-3">W</div>
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">Worker</h3>
              <span className="bp-tag blue mb-3">Foundation Tier</span>
              <p className="text-sm text-blueprint-muted leading-relaxed mt-3">
                Workers are your starting population. They staff all basic production buildings and require only simple food and water. Tax income per Worker House is low (2 gold/day), but they form the essential labor force for farms, docks, lumber mills, and quarries. Most towns start with 12-16 Workers.
              </p>
              <div className="mt-4 pt-3 border-t border-blueprint-border text-xs text-blueprint-muted space-y-1">
                <p><strong>Upgrade:</strong> School + Bread + Fish + 60% Happiness</p>
                <p><strong>House:</strong> 30 Wood</p>
                <p><strong>Max Family:</strong> 2 members</p>
              </div>
            </div>

            {/* Artisan */}
            <div className="bluepr-card text-center">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-blueprint-warm font-display font-bold text-2xl mx-auto mb-3">A</div>
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">Artisan</h3>
              <span className="bp-tag orange mb-3">Skilled Tier</span>
              <p className="text-sm text-blueprint-muted leading-relaxed mt-3">
                Artisans are upgraded Workers who have received education and demand food variety. They run advanced production: bakeries, windmills, vineyards, olive groves, and workshops. Artisan tax income is significantly higher (5 gold/day) and they unlock mid-game buildings through research.
              </p>
              <div className="mt-4 pt-3 border-t border-blueprint-border text-xs text-blueprint-muted space-y-1">
                <p><strong>Upgrade:</strong> University + Wine/Olive Oil + 70% Beauty + 75% Happiness</p>
                <p><strong>House:</strong> 60 Wood + 40 Stone</p>
                <p><strong>Max Family:</strong> 3 members</p>
              </div>
            </div>

            {/* Bourgeoisie */}
            <div className="bluepr-card text-center">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-blueprint-green font-display font-bold text-2xl mx-auto mb-3">B</div>
              <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">Bourgeoisie</h3>
              <span className="bp-tag green mb-3">Elite Tier</span>
              <p className="text-sm text-blueprint-muted leading-relaxed mt-3">
                Bourgeoisie are the wealthiest and most demanding citizens. They generate the highest taxes (12 gold/day), staff elite buildings like universities and churches, and drive end-game tourism. Their needs are complex — luxury goods, education, high beauty scores, and regular festivals.
              </p>
              <div className="mt-4 pt-3 border-t border-blueprint-border text-xs text-blueprint-muted space-y-1">
                <p><strong>Upgrade:</strong> Peak tier — cannot upgrade</p>
                <p><strong>House:</strong> 100 Wood + 80 Stone + 20 Bricks</p>
                <p><strong>Max Family:</strong> 4 members</p>
              </div>
            </div>
          </div>

          <div className="tip-box">
            <strong>Pro tip on tier ratios:</strong> A healthy town maintains roughly 50% Workers, 35% Artisans, and 15% Bourgeoisie. Upgrading too many Workers to Artisan too quickly without sufficient food production creates a labor shortage in basic industries. Use the population overlay (F4) to monitor your tier distribution in real time.
          </div>

          {/* Tier requirements detail */}
          <div className="bluepr-card mt-6">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Tier Upgrade Requirements at a Glance</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-blueprint-border">
                    <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Upgrade Path</th>
                    <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Education</th>
                    <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Food</th>
                    <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Luxury</th>
                    <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Beauty</th>
                    <th className="text-left py-3 px-2 font-semibold text-blueprint-text">Happiness</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blueprint-border/50">
                    <td className="py-3 px-2 font-medium text-blueprint-text">Worker → Artisan</td>
                    <td className="py-3 px-2">School nearby</td>
                    <td className="py-3 px-2">Bread + Fish</td>
                    <td className="py-3 px-2 text-blueprint-muted">Not required</td>
                    <td className="py-3 px-2 text-blueprint-muted">Not required</td>
                    <td className="py-3 px-2">≥ 60%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-medium text-blueprint-text">Artisan → Bourgeoisie</td>
                    <td className="py-3 px-2">University nearby</td>
                    <td className="py-3 px-2">Bread + Fish + Meat*</td>
                    <td className="py-3 px-2">Wine or Olive Oil</td>
                    <td className="py-3 px-2">≥ 70%</td>
                    <td className="py-3 px-2">≥ 75%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-blueprint-muted mt-3">* Meat is available through livestock pens (Artisan tier) or hunting lodges.</p>
          </div>
        </section>

        {/* ===== Section 2: Citizen Needs ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Citizen Needs: The Six Pillars</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Every citizen has six core needs that must be satisfied. Unmet needs directly reduce happiness, slow population growth, and eventually cause citizens to leave. The complexity of these needs increases with each citizen tier.
          </p>

          <div className="bluepr-card">
            <div className="space-y-5">
              {/* Food */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-blueprint-accent-light flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-blueprint-accent text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Food</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    The most fundamental need. Workers can survive on wheat alone, but food variety becomes essential at higher tiers. Artisans demand bread and fish; Bourgeoisie add meat and luxury foods to their diet. A citizen without food access for more than 2 season cycles will abandon your town permanently. Food must also be within walking distance — if the nearest market or granary is too far, citizens starve despite having food in storage.
                  </p>
                </div>
              </div>

              {/* Water */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-blueprint-accent-light flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-blueprint-accent text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Water</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    Water access is provided through wells (early game) and aqueducts (mid-game). Each well covers a 12-tile radius and serves approximately 40 citizens. Aqueducts triple that capacity and radius. Without water, citizens become dehydrated within one season — this is the fastest need to cause abandonment. Build a well before your third house, always.
                  </p>
                </div>
              </div>

              {/* Services */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-blueprint-accent-light flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-blueprint-accent text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Services</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    Services encompass education (Schools, Universities), healthcare (Apothecary, Hospital), and spiritual needs (Church, Cathedral). Workers only need basic healthcare access; Artisans require school access for their children; Bourgeoisie demand university proximity and regular church attendance. Services have coverage radii — houses outside the radius receive partial or no benefit. Overlap service coverage in residential districts for maximum effect.
                  </p>
                </div>
              </div>

              {/* Market */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-blueprint-accent-light flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-blueprint-accent text-lg">4</span>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Market Access</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    The Marketplace is where citizens purchase goods. It also serves as a trade hub and community center. Artisans and Bourgeoisie require market access to purchase bread, fish, wine, and olive oil. A well-placed market boosts surrounding property values and provides a happiness bonus to nearby houses. One Marketplace serves approximately 80 citizens — build a second market when your population exceeds this threshold.
                  </p>
                </div>
              </div>

              {/* Beauty */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-blueprint-accent-light flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-blueprint-accent text-lg">5</span>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Beauty</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    Beauty is a cumulative score based on decoration buildings (Parks, Plazas), trees, and water features within view of citizens. Parks provide a small beauty radius (6 tiles); Plazas double that (12 tiles); Gardens and Monuments provide even larger coverage. Bourgeoisie are especially sensitive to beauty — low beauty is the most common reason Bourgeoisie families downgrade. Use the Beauty overlay (F5) to see which areas score well and which need attention.
                  </p>
                </div>
              </div>

              {/* Entertainment */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-blueprint-accent-light flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-blueprint-accent text-lg">6</span>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Entertainment</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    The most overlooked need. Entertainment buildings include the Theatre, Circus, Baths, and Festival Ground. Artisans need basic entertainment access; Bourgeoisie require multiple entertainment types. Entertainment also generates the Festival event mechanic — when entertainment satisfaction is high, citizens organize festivals that provide temporary happiness bonuses and attract tourists. One Theatre serves approximately 120 citizens with a coverage radius of 20 tiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 3: Happiness System ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Happiness System</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Happiness is the master metric that drives citizen behavior. It is calculated as a weighted average of all six needs, plus bonuses from pets, festivals, and special events. Happiness ranges from 0% (citizens revolting) to 100% (utopia).
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Happiness Calculation</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              The happiness formula uses weighted averages based on citizen tier. Base weights for all tiers:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-blueprint-border">
                    <th className="text-left py-2 px-2 font-semibold text-blueprint-text">Need</th>
                    <th className="text-center py-2 px-2 font-semibold text-blueprint-text">Worker Weight</th>
                    <th className="text-center py-2 px-2 font-semibold text-blueprint-text">Artisan Weight</th>
                    <th className="text-center py-2 px-2 font-semibold text-blueprint-text">Bourgeoisie Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Food</td><td className="py-2 px-2 text-center">35%</td><td className="py-2 px-2 text-center">25%</td><td className="py-2 px-2 text-center">15%</td></tr>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Water</td><td className="py-2 px-2 text-center">25%</td><td className="py-2 px-2 text-center">15%</td><td className="py-2 px-2 text-center">10%</td></tr>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Services</td><td className="py-2 px-2 text-center">15%</td><td className="py-2 px-2 text-center">20%</td><td className="py-2 px-2 text-center">25%</td></tr>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Market</td><td className="py-2 px-2 text-center">10%</td><td className="py-2 px-2 text-center">15%</td><td className="py-2 px-2 text-center">20%</td></tr>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Beauty</td><td className="py-2 px-2 text-center">10%</td><td className="py-2 px-2 text-center">15%</td><td className="py-2 px-2 text-center">15%</td></tr>
                  <tr><td className="py-2 px-2">Entertainment</td><td className="py-2 px-2 text-center">5%</td><td className="py-2 px-2 text-center">10%</td><td className="py-2 px-2 text-center">15%</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-display text-base font-semibold text-blueprint-text mb-2">Happiness Thresholds and Effects</h4>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-3 p-2 bg-green-50 rounded-card">
                <span className="bp-tag green">85-100%</span>
                <span className="text-sm text-blueprint-text">Utopia: +20% birth rate, +15% productivity, tourists arrive uninvited</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-blueprint-accent-light rounded-card">
                <span className="bp-tag blue">60-84%</span>
                <span className="text-sm text-blueprint-text">Content: Normal population growth, standard productivity, eligible for tier upgrades</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-orange-50 rounded-card">
                <span className="bp-tag orange">40-59%</span>
                <span className="text-sm text-blueprint-text">Stressed: -10% productivity, slowed birth rate, citizens consider leaving</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-red-50 rounded-card">
                <span className="bp-tag" style={{ background: '#fecaca', color: '#dc2626' }}>0-39%</span>
                <span className="text-sm text-blueprint-text">Revolt: -30% productivity, families emigrate, Bourgeoisie downgrade to Artisan</span>
              </div>
            </div>

            <div className="tip-box">
              <strong>Happiness cascades:</strong> Low happiness triggers a negative spiral. Unhappy citizens produce less food, which lowers happiness further, which causes more food shortages. Break the cycle by using the Happiness overlay to identify and fix the root cause immediately — usually it is a single unmet need dragging the average down.
            </div>
          </div>
        </section>

        {/* ===== Section 4: Family Formation ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Family Formation & Natural Growth</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Population grows through two mechanisms: immigration (new settlers arriving) and natural growth (families forming and having children). Understanding how families work is essential for long-term town planning.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">How Couples Form</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Single adult citizens of the same tier can form couples when they meet three conditions: both are happy (≥50%), both are housed (or there is an empty house available), and they live within 15 tiles of each other. Once formed, couples move into the larger-tile house together and begin generating children after 2 season cycles. Couple formation is automatic but influenced by happiness — higher happiness means faster coupling.
            </p>

            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">Children and Population Expansion</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Couples produce children at a rate determined by happiness, food availability, and education level. On average, a happy couple (≥75% happiness) produces one child every 4 season cycles. Children go through a maturation period of 8 season cycles before becoming working adults. During maturation, children consume 50% of the food of an adult but provide no labor. Schools reduce maturation time by 25% — a critical reason to build schools early.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="stat-card">
                <div className="font-display text-2xl font-bold text-blueprint-accent mb-1">2 Cycles</div>
                <p className="text-xs text-blueprint-muted">Couple Formation<br/>After housing available</p>
              </div>
              <div className="stat-card">
                <div className="font-display text-2xl font-bold text-blueprint-warm mb-1">8 Cycles</div>
                <p className="text-xs text-blueprint-muted">Child Maturation<br/>4 cycles with School</p>
              </div>
              <div className="stat-card">
                <div className="font-display text-2xl font-bold text-blueprint-green mb-1">+25%</div>
                <p className="text-xs text-blueprint-muted">Birth Rate Bonus<br/>With ≥75% Happiness</p>
              </div>
            </div>

            <div className="tip-box">
              <strong>Housing strategy for growth:</strong> Always maintain 2-3 empty houses above your current population. Couples cannot form without available housing, and children cannot move out without empty houses. Empty houses also serve as immigration targets — new settlers will only arrive if there is vacant housing stock.
            </div>
          </div>
        </section>

        {/* ===== Section 5: Pets & Livestock ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Pets and Livestock</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Pets and livestock are a mid-game feature that adds depth to citizen management. They provide passive happiness bonuses, generate resources, and add life to your streets and homes.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">How Pets Work</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Pets are personal animals that citizens adopt when happiness exceeds 60%. Each house can support one pet (Worker), two pets (Artisan), or three pets (Bourgeoisie). Pets provide a flat +5% happiness bonus per pet to their household. Available pet types include cats (most common, adopted when fish is available), dogs (adopted when meat is available), and exotic birds (rare, adopted near parks and gardens). Pets roam the town visually and add to the "liveliness score," a hidden metric that contributes to tourism appeal.
            </p>

            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">Livestock Buildings</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Livestock pens (unlocked at Artisan tier) allow you to raise animals for food and resources. The Livestock Pen building (80 Wood, 50 Stone, 2 workers) produces meat — a food type required for Bourgeoisie citizens — as well as wool, leather, and milk depending on the animal type. Available livestock: sheep (wool + meat), cattle (meat + leather + milk), and pigs (fastest meat production, no secondary goods). Each pen can hold 10 animals; upgrade pens to increase capacity. Livestock require feed (wheat surplus) to remain productive — starving animals produce nothing and eventually die.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="stat-card">
                <div className="font-display text-lg font-bold text-blueprint-text mb-1">Cat</div>
                <p className="text-xs text-blueprint-muted">+5% Happiness<br/>Adopted near Fish supply<br/>Most common pet</p>
              </div>
              <div className="stat-card">
                <div className="font-display text-lg font-bold text-blueprint-text mb-1">Dog</div>
                <p className="text-xs text-blueprint-muted">+5% Happiness<br/>Adopted near Meat supply<br/>+2% security bonus</p>
              </div>
              <div className="stat-card">
                <div className="font-display text-lg font-bold text-blueprint-text mb-1">Exotic Bird</div>
                <p className="text-xs text-blueprint-muted">+8% Happiness<br/>Adopted near Parks/Gardens<br/>Tourism appeal +3%</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 6: Individual Citizen Requests ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Individual Citizen Requests (Quests)</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Citizens periodically make individual requests — small quests that, when fulfilled, provide happiness bonuses, unique items, or special building blueprints. These requests personalize the city-building experience and reward attentive town management.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">Types of Citizen Requests</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Requests appear as speech bubble icons above citizens' heads. Click any citizen to view their current request in the citizen detail panel. Common request types include:
            </p>

            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3 p-3 bg-blueprint-alt rounded-card">
                <span className="bp-tag blue shrink-0">Food</span>
                <div>
                  <p className="text-sm font-medium text-blueprint-text">"I crave fresh bread from the new bakery"</p>
                  <p className="text-xs text-blueprint-muted">Reward: +15% happiness for 3 seasons. Requires: Bakery within range producing bread.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blueprint-alt rounded-card">
                <span className="bp-tag orange shrink-0">Building</span>
                <div>
                  <p className="text-sm font-medium text-blueprint-text">"Our children need a school nearby"</p>
                  <p className="text-xs text-blueprint-muted">Reward: 3x Artisan upgrade tokens (instant upgrade for 3 Worker families). Requires: Build a School within 15 tiles.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blueprint-alt rounded-card">
                <span className="bp-tag green shrink-0">Decoration</span>
                <div>
                  <p className="text-sm font-medium text-blueprint-text">"The view from my window is so dull..."</p>
                  <p className="text-xs text-blueprint-muted">Reward: +10% beauty score permanently. Requires: Plant 3 trees or place a Park within 10 tiles.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blueprint-alt rounded-card">
                <span className="bp-tag blue shrink-0">Trade</span>
                <div>
                  <p className="text-sm font-medium text-blueprint-text">"I need rare dyes for my workshop"</p>
                  <p className="text-xs text-blueprint-muted">Reward: Unique Dye Workshop blueprint. Requires: Trade route to a distant town that exports dyes.</p>
                </div>
              </div>
            </div>

            <div className="tip-box">
              <strong>Priority requests:</strong> Requests marked with a gold border are "priority" requests that unlock unique buildings or provide permanent bonuses. These can be declined without penalty, but fulfilling them permanently enhances your town. Priority requests become rarer over time, so do not ignore them — you may not get the same offer again.
            </div>

            <p className="text-blueprint-muted leading-relaxed">
              Unfulfilled requests do not directly penalize happiness, but repeatedly ignoring citizen requests lowers the "trust" metric, which reduces request frequency and makes citizens less likely to form couples. Fulfill requests regularly to maintain high trust, which unlocks more valuable requests over time.
            </p>
          </div>
        </section>

        {/* ===== Section 7: Citizen Management View ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Citizen Management View & Overlays</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Town to City provides powerful overlay tools to diagnose citizen problems at a glance. The Citizen Management View (F4) and its companion overlays let you see exactly what each citizen needs and where your town is falling short.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Available Overlays</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-blueprint-accent-light rounded-card">
                <h4 className="font-display text-sm font-semibold text-blueprint-accent mb-1">F4 — Population Overlay</h4>
                <p className="text-xs text-blueprint-muted leading-relaxed">
                  Shows every citizen as a colored dot: Blue = Worker, Orange = Artisan, Green = Bourgeoisie. Hover over a dot to see name, tier, happiness, and current needs. Click to open the detailed citizen panel with full stats, family tree, and request history. Use this overlay to find unhappy citizens quickly — look for dots with a red outline.
                </p>
              </div>
              <div className="p-4 bg-blueprint-accent-light rounded-card">
                <h4 className="font-display text-sm font-semibold text-blueprint-accent mb-1">F5 — Beauty Overlay</h4>
                <p className="text-xs text-blueprint-muted leading-relaxed">
                  Color-codes the entire map by beauty score: Green (≥80%), Yellow (50-79%), Orange (30-49%), Red (&lt;30%). Beauty scores are calculated per-tile based on nearby decorations, views, and pollution sources. Target: every residential tile should be at least yellow; Bourgeoisie districts should be all green.
                </p>
              </div>
              <div className="p-4 bg-blueprint-accent-light rounded-card">
                <h4 className="font-display text-sm font-semibold text-blueprint-accent mb-1">F6 — Needs Overlay</h4>
                <p className="text-xs text-blueprint-muted leading-relaxed">
                  Displays coverage radii for all service buildings: blue circles for water (wells/aqueducts), yellow for education (schools/universities), red for spiritual (churches), and green for entertainment (theatres). Houses outside all circles will show as bright red — these are your critical needs failures that demand immediate attention.
                </p>
              </div>
              <div className="p-4 bg-blueprint-accent-light rounded-card">
                <h4 className="font-display text-sm font-semibold text-blueprint-accent mb-1">F7 — Happiness Heatmap</h4>
                <p className="text-xs text-blueprint-muted leading-relaxed">
                  A gradient heatmap from green (happy) to red (miserable) overlaid on your town. This is your diagnostic tool for finding neighborhood-level problems. If a block of houses is consistently orange/red, investigate the specific needs failing in that area. Likely causes: insufficient service coverage, no market access, or the area is too far from food storage.
                </p>
              </div>
            </div>

            <div className="tip-box">
              <strong>Diagnostic workflow:</strong> Start with F7 (Happiness Heatmap) to find problem areas → switch to F4 (Population) and click unhappy citizens to identify which need is failing → use F6 (Needs Overlay) to see coverage gaps → build the missing service building or adjust placement → wait 2 season cycles for happiness to recover → verify with F7 that the area has shifted from red to green.
            </div>
          </div>
        </section>

        {/* ===== Section 8: Population Growth Mechanics ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Population Growth: Attracting New Settlers</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Population growth in Town to City is driven by two forces: natural reproduction within existing families and immigration from the outside world. Both are influenced by town metrics and can be accelerated with the right strategies.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">Immigration Factors</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              New settlers arrive periodically, drawn by your town's reputation. The immigration rate is determined by a weighted score of several factors. Each factor contributes to an "Attraction Score" — the higher the score, the more frequently settlers arrive.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-blueprint-border">
                    <th className="text-left py-2 px-2 font-semibold text-blueprint-text">Factor</th>
                    <th className="text-center py-2 px-2 font-semibold text-blueprint-text">Weight</th>
                    <th className="text-left py-2 px-2 font-semibold text-blueprint-text">How to Improve</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Vacant Housing</td><td className="py-2 px-2 text-center text-blueprint-accent font-semibold">30%</td><td className="py-2 px-2">Build empty houses of all tiers</td></tr>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Food Surplus</td><td className="py-2 px-2 text-center text-blueprint-accent font-semibold">25%</td><td className="py-2 px-2">Maintain 150%+ food stockpile</td></tr>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Town Happiness</td><td className="py-2 px-2 text-center text-blueprint-accent font-semibold">20%</td><td className="py-2 px-2">Keep happiness above 70% average</td></tr>
                  <tr className="border-b border-blueprint-border/50"><td className="py-2 px-2">Beauty Score</td><td className="py-2 px-2 text-center text-blueprint-accent font-semibold">15%</td><td className="py-2 px-2">Decorate residential districts</td></tr>
                  <tr><td className="py-2 px-2">Prestige Buildings</td><td className="py-2 px-2 text-center text-blueprint-accent font-semibold">10%</td><td className="py-2 px-2">Build Church, University, Monuments</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">Growth Caps and Expansion</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Each town has a soft population cap based on available services and housing. A town with only Worker-tier buildings caps at roughly 50 population. Unlocking Artisan buildings raises the soft cap to 150, and Bourgeoisie buildings push it to 300+. To exceed 300 population, you must build multiple towns connected by trade routes. The game supports multi-town empires where each settlement specializes — one agricultural town, one industrial town, one tourism town — with citizens commuting between them via roads and trade paths.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="stat-card">
                <div className="font-display text-2xl font-bold text-blueprint-accent mb-1">~50</div>
                <p className="text-xs text-blueprint-muted">Worker Tier Cap<br/>Basic services only</p>
              </div>
              <div className="stat-card">
                <div className="font-display text-2xl font-bold text-blueprint-warm mb-1">~150</div>
                <p className="text-xs text-blueprint-muted">Artisan Tier Cap<br/>Education + markets added</p>
              </div>
              <div className="stat-card">
                <div className="font-display text-2xl font-bold text-blueprint-green mb-1">~300+</div>
                <p className="text-xs text-blueprint-muted">Bourgeoisie Tier Cap<br/>Multi-town empire strategy</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Bottom separator ===== */}
        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of Citizens Guide</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>

      </div>
    </main>
  );
}
