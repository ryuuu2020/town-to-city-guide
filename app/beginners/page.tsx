import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Beginner's Guide: First Hour — Town to City Guide",
  description: 'Complete beginner walkthrough for Town to City. First buildings to place, common mistakes to avoid, early game priorities, UI tips, getting your first 10 citizens, and upgrading to Artisan tier.',
};

export default function BeginnersPage() {
  return (
    <main className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Beginner&apos;s Guide</span>
        </div>

        {/* Page Header */}
        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Beginner&apos;s Guide: Your First Hour</h1>
        <p className="text-lg text-blueprint-muted mb-8 max-w-3xl">
          Welcome to Town to City. You just bought the game, the Mediterranean coastline stretches before you, and the blank canvas is both exciting and intimidating. This guide walks you through everything you need to know in the first hour — which buildings to place first, how to read the interface, the mistakes every new player makes, and how to reach your first major milestone: upgrading your citizens to the Artisan tier. No prior city builder experience required.
        </p>

        {/* Section tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="bp-tag blue">First Buildings</span>
          <span className="bp-tag green">Game Settings</span>
          <span className="bp-tag orange">UI Overview</span>
          <span className="bp-tag blue">First 10 Citizens</span>
          <span className="bp-tag green">Artisan Tier</span>
          <span className="bp-tag orange">Mistakes</span>
        </div>

        {/* ===== Section 1: First 10 Minutes ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">The First 10 Minutes: What to Build and When</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            When the game starts, you have a small sum of starting resources (approximately 300 Wood and your first 6 Worker families), and a vast empty coastal map. The temptation is to immediately scatter buildings across the landscape, but the first 10 minutes determine whether your town thrives or struggles. Follow this exact build order.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Build Order: First 10 Minutes</h3>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="step-num">1</div>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Town Hall (200 Wood, 150 Stone)</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    This is non-negotiable. The Town Hall is the administrative heart of your settlement and the game will not let you build anything else until it is placed. Position it centrally on flat terrain, roughly where you want your civic district to be. The Town Hall has a wide coverage radius and will anchor all future service buildings. Do not put it on the coastline or at the edge of the map — you will regret it later when you need its coverage to reach every residential area. Assign 4 Workers to staff it immediately.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="step-num">2</div>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Worker Houses (30 Wood each) — Build 4</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    Your starting families need shelter before anything else. Place the first 4 Worker Houses in a tight cluster within 8 tiles of the Town Hall. This proximity ensures they receive the Town Hall coverage bonus and makes future service placement efficient. Worker Houses are small — you can fit them in a 3x2 grid. Leave 1-tile gaps between houses for future park placement. Each house supports 2 family members, so 4 houses house your initial 8 citizens comfortably.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="step-num">3</div>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Well (20 Wood) — Build 1</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    Water is the most urgent citizen need. Citizens who lack water access for more than one season cycle will abandon your town. A single well covers a 12-tile radius and serves approximately 40 citizens. Place it adjacent to your housing cluster so every house falls within the blue coverage circle. Without a well, you will lose citizens before you can even build a farm. This is the single most common cause of early-game collapse.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="step-num">4</div>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Farms (20 Wood each) — Build 3</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    Now food. Farms produce wheat, the foundational food type that feeds all Worker-tier citizens. Place farms on flat, fertile land — the game highlights valid placement tiles in green when you select the farm blueprint. Each farm produces enough wheat for approximately 10 citizens. With 3 farms, you feed 30 citizens — more than double your starting population, giving you a food surplus buffer. Position farms on the outskirts of your housing, not in the center. Leave 2-tile paths between farms and houses for roads later.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="step-num">5</div>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Marketplace (100 Wood, 80 Stone) — Build 1</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    The Marketplace is the distribution center. Citizens buy food and goods here. Without a marketplace, your farms produce wheat that sits unused in storage while citizens starve — the food must reach them through a market. Place the marketplace centrally between your housing cluster and your farm area. A single marketplace serves approximately 80 citizens, so one will carry you through the entire early game. Staff it with 3 Workers.
                  </p>
                </div>
              </div>
            </div>

            <div className="tip-box mt-6">
              <strong>Resource check after 10 minutes:</strong> You should have approximately 80-100 Wood remaining after this build order, and your first wheat harvest will arrive in 2 season cycles. If you are out of Wood, you built too many houses. If your citizens have a red water icon, your well is too far from housing. Use the F6 Needs Overlay to verify coverage.
            </div>
          </div>
        </section>

        {/* ===== Section 2: Understanding the UI ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">How to Read the UI</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Town to City has a clean but information-dense interface. New players often miss critical data because they do not know where to look. Here is a quick tour of the most important UI elements you need to understand in your first hour.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Essential UI Elements</h3>

            <div className="space-y-5">
              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-1">Top Bar: Resources at a Glance</h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  The top bar displays your five core resources: Wood, Stone, Food, Gold, and Population. Pay attention to the small trend arrows next to each number — a green up arrow means the resource is growing (production exceeds consumption), while a red down arrow means you are running a deficit. If you see a red arrow next to Food, you need more farms or fishing docks immediately. The population number shows current/max capacity — if these are equal, build more houses before new settlers arrive or they will turn away.
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-1">Bottom Left: Build Menu</h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  The build menu is organized into tabs: Civic, Housing, Food, Economy, and Decoration. Buildings you cannot afford are greyed out but still visible — clicking them shows the cost so you know what to save for. Buildings locked by research or tier show a small lock icon and display the unlock requirement when clicked. The search bar at the top of the build menu lets you type a building name directly instead of scrolling through tabs.
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-1">Bottom Right: Citizen Panel (Click Any Citizen)</h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  Click any citizen walking the streets to open a detailed panel showing their name, tier, happiness percentage, current needs status (colored bars: green = satisfied, yellow = partially met, red = failing), family members, and current request or quest. This panel is your diagnostic tool — if a citizen is unhappy, the panel shows exactly which need is failing and why. Use this during your first hour to verify that every citizen has water, food, and shelter satisfaction.
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-1">F-Key Overlays: Your Diagnostic Toolset</h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  Four function keys are essential for beginners. <strong>F4</strong> opens the Population Overlay, showing every citizen as a colored dot — click dots to inspect individual satisfaction. <strong>F5</strong> activates the Beauty Overlay, color-coding the map by aesthetic score. <strong>F6</strong> shows the Needs Overlay with coverage radii for wells, schools, markets, and churches. <strong>F7</strong> displays the Happiness Heatmap, which is your go-to diagnostic tool for finding problem areas at a glance. Memorize these four keys.
                </p>
              </div>
            </div>

            <div className="tip-box mt-4">
              <strong>UI habit for beginners:</strong> Every 3-4 minutes of gameplay, press F7 to check the Happiness Heatmap. If you see any orange or red zones, click the area to open the citizen panel and identify the unmet need. This single habit will prevent 90% of early-game crises.
            </div>
          </div>
        </section>

        {/* ===== Section 3: Recommended Settings ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Recommended Game Settings for Beginners</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            The default settings work well, but a few tweaks make the first experience dramatically smoother. Change these before starting your first serious town.
          </p>

          <div className="bluepr-card">
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blueprint-accent-light flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-blueprint-accent text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Difficulty: Relaxed (for first town)</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    The Relaxed difficulty disables citizen abandonment and resource decay, giving you unlimited time to learn the mechanics without pressure. Once you understand the core loop, restart on Normal for the intended experience. Relaxed mode also reduces the tax burden and slows down citizen need decay, which means your happiness does not plummet while you figure out the UI.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blueprint-accent-light flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-blueprint-accent text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Enable Tutorial Prompts</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    The tutorial prompt system appears as pop-up messages guiding you through your first buildings and citizen needs. Turn this on even if you dislike tutorials — it pauses the game while explaining, which gives you breathing room. Each prompt introduces a key concept with a practical next action. You can disable them individually as you understand each system.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blueprint-accent-light flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-blueprint-accent text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Map: Mediterranean Coast (flat variant)</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    Town to City offers multiple biomes and terrain types. The Mediterranean Coast with flat terrain is the ideal beginner map. Hillside maps are beautiful but significantly harder because farms must be placed on flat land and vineyards/olive groves require slopes — terrain management adds a layer of complexity that will frustrate a new player. Flat coastal maps give you ample farmland and easy fishing dock placement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blueprint-accent-light flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-blueprint-accent text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Season Pace: Normal (not Fast)</h4>
                  <p className="text-sm text-blueprint-muted leading-relaxed">
                    Fast season pace may seem appealing because it accelerates growth, but it means citizens consume food and water twice as quickly while your production buildings work at the same rate. This creates a supply crisis before you have time to react. Normal pace gives you 4 real minutes per season cycle — enough time to assess needs, plan builds, and respond to problems without rushing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 4: Common Beginner Mistakes ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">5 Common Beginner Mistakes (and How to Avoid Them)</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Every veteran player made these mistakes in their first town. Learn from them so you do not have to.
          </p>

          <div className="bluepr-card">
            <div className="space-y-6">
              <div className="p-4 bg-red-50 rounded-card border-l-4 border-red-400">
                <h4 className="font-display text-base font-semibold text-red-700 mb-1">Mistake 1: Building Too Many Houses Too Early</h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  Empty houses drain gold in maintenance costs and attract immigration before you have food and water infrastructure ready. Each new family increases food consumption by roughly 10% — if you have 8 empty houses when settlers arrive, your 3 farms cannot keep up and mass starvation follows. <strong>Fix:</strong> Build houses only when your current housing is at 80% capacity or higher. Watch the population number in the top bar — when it reads 14/16, it is time for two more houses.
                </p>
              </div>

              <div className="p-4 bg-red-50 rounded-card border-l-4 border-red-400">
                <h4 className="font-display text-base font-semibold text-red-700 mb-1">Mistake 2: Spreading Buildings Too Far Apart</h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  New players see a large map and spread buildings across it. This creates road network costs, increases citizen travel time, and most critically, puts houses outside service building coverage radii. A house 20 tiles from the nearest well is a house that will become abandoned. <strong>Fix:</strong> Keep all buildings within a 15-tile radius of the Town Hall for the first 2 hours. The map is large for a reason — you expand into it gradually over dozens of hours, not in the first 10 minutes.
                </p>
              </div>

              <div className="p-4 bg-red-50 rounded-card border-l-4 border-red-400">
                <h4 className="font-display text-base font-semibold text-red-700 mb-1">Mistake 3: Ignoring the Needs Overlay (F6)</h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  The F6 Needs Overlay is the single most useful tool for beginners, yet most new players never press it. It shows exactly which houses are covered by each service building, with green circles indicating satisfied needs and red circles showing gaps. <strong>Fix:</strong> After placing any service building (well, school, marketplace, church), immediately press F6 and verify that every house falls within the coverage circle. If a house is outside, demolish and rebuild the service building closer, or build a second one.
                </p>
              </div>

              <div className="p-4 bg-red-50 rounded-card border-l-4 border-red-400">
                <h4 className="font-display text-base font-semibold text-red-700 mb-1">Mistake 4: Upgrading Citizens Before Building Infrastructure</h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  When a Worker meets the Artisan upgrade requirements, the game prompts you to upgrade them. Many beginners upgrade every eligible citizen immediately. But Artisans consume more food, demand bread and fish instead of just wheat, and refuse to work basic farms — creating a labor shortage in food production while simultaneously increasing food demand. <strong>Fix:</strong> Upgrade citizens one at a time and check the top bar after each upgrade. If Food trend turns red, stop upgrading and build more food production. A healthy town maintains at least 40% Workers throughout the entire game.
                </p>
              </div>

              <div className="p-4 bg-red-50 rounded-card border-l-4 border-red-400">
                <h4 className="font-display text-base font-semibold text-red-700 mb-1">Mistake 5: Neglecting Beauty Until Late Game</h4>
                <p className="text-sm text-blueprint-muted leading-relaxed">
                  Beauty seems like a cosmetic stat, and new players ignore it entirely while focusing on production. But beauty directly affects happiness, and happiness drives tier upgrades, birth rates, and immigration. A town with 30% beauty struggles to retain citizens past 50 population regardless of how much food it produces. <strong>Fix:</strong> After your first 5 buildings are placed, place 2 Parks (10 Wood, 5 Stone each) between your housing cluster. This costs nearly nothing and provides a happiness buffer that carries you through the entire early game.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 5: Getting Your First 10 Citizens ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Getting Your First 10 Citizens: From 6 to 16</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            You start with 6 citizens (3 Worker families). Population growth happens through two channels: immigration of new families and natural reproduction within existing couples. The first 10 additional citizens arrive primarily through immigration, which is triggered by meeting basic needs and having available housing. Here is how to attract settlers efficiently.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Immigration Attraction Checklist</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Immigration is driven by an invisible Attraction Score calculated from your town metrics. Each factor below contributes to the score — the higher the total, the faster settlers arrive. The target is to achieve at least 80 Attraction Score to trigger a settler arrival every 3-4 season cycles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="stat-card">
                <div className="font-display text-2xl font-bold text-blueprint-accent mb-1">30%</div>
                <p className="text-xs text-blueprint-muted">Vacant Housing<br/>Weight in attraction score</p>
              </div>
              <div className="stat-card">
                <div className="font-display text-2xl font-bold text-blueprint-warm mb-1">25%</div>
                <p className="text-xs text-blueprint-muted">Food Surplus<br/>Weight in attraction score</p>
              </div>
              <div className="stat-card">
                <div className="font-display text-2xl font-bold text-blueprint-green mb-1">20%</div>
                <p className="text-xs text-blueprint-muted">Town Happiness<br/>Weight in attraction score</p>
              </div>
            </div>

            <h4 className="font-display text-base font-semibold text-blueprint-text mb-3">Step-by-Step to 16 Citizens</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start p-3 bg-blueprint-alt rounded-card">
                <span className="bp-tag blue shrink-0">Step 1</span>
                <div>
                  <p className="text-sm font-medium text-blueprint-text">Ensure all 4 Worker Houses are built and staffed</p>
                  <p className="text-xs text-blueprint-muted">Your starting 6 citizens fill 3 houses. The 4th empty house is the immigration beacon.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 bg-blueprint-alt rounded-card">
                <span className="bp-tag blue shrink-0">Step 2</span>
                <div>
                  <p className="text-sm font-medium text-blueprint-text">Maintain Food Surplus above 150%</p>
                  <p className="text-xs text-blueprint-muted">Build a Fishing Dock (40 Wood) on the coastline to supplement wheat with fish. Two food sources dramatically increase the food variety bonus to attraction score.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 bg-blueprint-alt rounded-card">
                <span className="bp-tag blue shrink-0">Step 3</span>
                <div>
                  <p className="text-sm font-medium text-blueprint-text">Keep Happiness above 70%</p>
                  <p className="text-xs text-blueprint-muted">Check F7 overlay. Address any red or orange houses by clicking them and fulfilling the specific need shown in their citizen panel.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 bg-blueprint-alt rounded-card">
                <span className="bp-tag blue shrink-0">Step 4</span>
                <div>
                  <p className="text-sm font-medium text-blueprint-text">Build 2 more Worker Houses when immigration notification appears</p>
                  <p className="text-xs text-blueprint-muted">The notification "New settlers approaching" means a family is about to arrive. Have empty housing ready before they show up — if they arrive with no empty house, they leave permanently.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 bg-blueprint-alt rounded-card">
                <span className="bp-tag blue shrink-0">Step 5</span>
                <div>
                  <p className="text-sm font-medium text-blueprint-text">Repeat until Population reaches 16</p>
                  <p className="text-xs text-blueprint-muted">At 16 citizens, you have critical mass for the next phase: building a School, starting research, and upgrading your first citizens to Artisan tier.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 6: Upgrading to Artisan Tier ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Upgrading to Artisan Tier: Your First Major Milestone</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            The Worker-to-Artisan upgrade is the first major progression gate. It unlocks bakeries, windmills, vineyards, workshops, and the mid-game economy. But upgrading too early or without preparation causes more problems than it solves. Here is the exact checklist to complete before upgrading your first citizen.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Pre-Upgrade Checklist</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Each of these items must be done before you click the upgrade button on your first Worker. Skipping any item causes cascading failures that can undo hours of progress.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 p-2">
                <span className="bp-tag green">Food</span>
                <span className="text-sm text-blueprint-text">Build a Bakery (50 Wood, 30 Stone) and a Fishing Dock. Artisans demand bread and fish instead of raw wheat.</span>
              </div>
              <div className="flex items-center gap-3 p-2">
                <span className="bp-tag blue">Education</span>
                <span className="text-sm text-blueprint-text">Build a School (80 Wood, 60 Stone) within 15 tiles of the house you are upgrading. Without a school, the upgrade prompt will not even appear.</span>
              </div>
              <div className="flex items-center gap-3 p-2">
                <span className="bp-tag orange">Happiness</span>
                <span className="text-sm text-blueprint-text">Ensure the target Worker House has happiness ≥ 60%. Use F7 to verify — if the house is yellow or green, it qualifies.</span>
              </div>
              <div className="flex items-center gap-3 p-2">
                <span className="bp-tag green">Market</span>
                <span className="text-sm text-blueprint-text">Verify the Marketplace is within range (F6 overlay) and fully staffed. Artisans buy bread and fish from the market.</span>
              </div>
              <div className="flex items-center gap-3 p-2">
                <span className="bp-tag blue">Labor</span>
                <span className="text-sm text-blueprint-text">Do NOT upgrade a Worker who staffs a critical building (farm, well, market). Choose an unemployed Worker or a Worker from a less essential building. The upgraded Artisan will leave their old job slot.</span>
              </div>
            </div>

            <h3 className="font-display text-base font-semibold text-blueprint-text mb-2">What Changes After the Upgrade</h3>
            <p className="text-sm text-blueprint-muted leading-relaxed mb-4">
              Once upgraded, the Worker House transforms into an Artisan House. The citizen and their family gain access to new job slots (baker, miller, vintner, artisan). Their food consumption increases by 40%, and they now refuse to eat raw wheat — they need bread and fish specifically. Their happiness calculation shifts: Beauty jumps from 10% weight to 15%, while Food drops from 35% to 25%. Most importantly, Artisans pay significantly higher taxes (5 gold/day vs. 2 gold/day for Workers), making them net-positive on your economy despite their higher consumption.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="stat-card">
                <div className="font-display text-lg font-bold text-blueprint-text mb-1">5 Gold/Day</div>
                <p className="text-xs text-blueprint-muted">Artisan Tax Income<br/>vs. 2 gold/day for Workers</p>
              </div>
              <div className="stat-card">
                <div className="font-display text-lg font-bold text-blueprint-warm mb-1">3 Members</div>
                <p className="text-xs text-blueprint-muted">Artisan House Capacity<br/>vs. 2 members for Workers</p>
              </div>
              <div className="stat-card">
                <div className="font-display text-lg font-bold text-blueprint-green mb-1">New Jobs</div>
                <p className="text-xs text-blueprint-muted">Bakery, Windmill, Vineyard<br/>Olive Grove, Workshops</p>
              </div>
            </div>

            <div className="tip-box">
              <strong>Upgrade strategy:</strong> Upgrade one family at a time. After the first upgrade, let 3-4 season cycles pass to observe the impact on food consumption and tax income. If your economy stabilizes, upgrade a second family. Rush-upgrading 4 families simultaneously causes a food shock that your farms and bakery cannot absorb. A common healthy pattern: maintain 3 Workers for every 1 Artisan in the early mid-game.
            </div>
          </div>
        </section>

        {/* ===== Section 7: Next Steps After First Hour ===== */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">What to Do After Your First Hour</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Congratulations — if you followed this guide, your town should have 16-20 citizens, at least 2 Artisan families, a functioning food supply chain (farms + bakery + fishing dock), and a positive happiness trend. Here is your roadmap for the next 2 hours.
          </p>

          <div className="bluepr-card">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="bp-tag blue shrink-0">Priority 1</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Build a Church (100 Wood, 80 Stone)</h4>
                  <p className="text-sm text-blueprint-muted">Unlocks spiritual needs satisfaction and generates passive donation income. Place it centrally in your civic district for maximum coverage.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bp-tag orange shrink-0">Priority 2</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Start the Research Tree</h4>
                  <p className="text-sm text-blueprint-muted">Begin researching Crop Rotation (improves farm output by 20%) as your first tech. Research costs Gold and requires a University — but early research nodes are accessible without one.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bp-tag green shrink-0">Priority 3</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Expand Food Production</h4>
                  <p className="text-sm text-blueprint-muted">Add a Windmill (80 Wood, 50 Stone) near your farms to boost grain output by 25%. If you have hillside terrain, place a Vineyard for luxury goods that generate trade income.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bp-tag blue shrink-0">Priority 4</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-blueprint-text">Build Your Second Housing District</h4>
                  <p className="text-sm text-blueprint-muted">Now that you have services established, plan a second residential area 10-15 tiles from the civic center. Use Parks and Plazas between houses for beauty bonuses from the start — it is easier than retrofitting later.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom separator */}
        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of Beginner&apos;s Guide</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>

      </div>
    </main>
  );
}
