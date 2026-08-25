import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://towntocityguide.wiki/beginner-walkthrough",
  },
  title: 'Town to City Beginner Walkthrough — Step-by-Step First City (2026) | Town to City Guide',
  description: 'Step-by-step Town to City beginner walkthrough covering your first 10 hours, essential buildings, resource management, and growth strategies for new mayors.',
};

const firstBuildings = [
  { priority: 1, building: 'Lumber Camp', purpose: 'Produce timber for construction', workers: 2, cost: '50 Gold, 10 Wood', tip: 'Build 2 right away' },
  { priority: 2, building: 'Stone Quarry', purpose: 'Produce stone for advanced buildings', workers: 3, cost: '100 Gold, 20 Wood', tip: 'Place near mountain tiles' },
  { priority: 3, building: 'Farm', purpose: 'Grow wheat for food supply', workers: 2, cost: '75 Gold, 15 Wood', tip: 'Build on fertile soil (green tiles)' },
  { priority: 4, building: 'Windmill', purpose: 'Process wheat into flour', workers: 1, cost: '150 Gold, 30 Wood, 10 Stone', tip: 'Place near farms for efficiency' },
  { priority: 5, building: 'Bakery', purpose: 'Produce bread (main food source)', workers: 2, cost: '200 Gold, 25 Wood, 15 Stone', tip: '1 bakery feeds ~50 citizens' },
  { priority: 6, building: 'Market', purpose: 'Distribute goods and generate tax', workers: 1, cost: '300 Gold, 40 Wood, 20 Stone', tip: 'Central location maximizes coverage' },
  { priority: 7, building: 'Well', purpose: 'Provide water to citizens', workers: 0, cost: '50 Gold, 10 Stone', tip: '1 well per 25 citizens' },
  { priority: 8, building: 'School', purpose: 'Educate citizens (unlocks advanced jobs)', workers: 1, cost: '400 Gold, 50 Wood, 30 Stone', tip: 'Build once you hit 150 population' },
];

const hourMilestones = [
  { hour: '0-1', goal: 'Place roads, Lumber Camp x2, 4 Houses', popTarget: 20, keyAction: 'Clear trees for wood' },
  { hour: '1-2', goal: 'Stone Quarry, Farm x2, more Houses', popTarget: 40, keyAction: 'Set up food production chain' },
  { hour: '2-4', goal: 'Windmill, Bakery, Well x2', popTarget: 60, keyAction: 'Connect production buildings with roads' },
  { hour: '4-6', goal: 'Market, Warehouse, Trade Post', popTarget: 100, keyAction: 'Start your first trade route' },
  { hour: '6-8', goal: 'School, Church, additional Farms', popTarget: 150, keyAction: 'Upgrade houses to level 2' },
  { hour: '8-10', goal: 'City Hall, Stone Walls, advanced production', popTarget: 200, keyAction: 'Establish city defenses' },
];

const walkthroughFaqs = [
  { q: '刚开始应该先建什么？', a: '建设顺序：道路→伐木场×2→房屋×4→农场×2。千万不要先建装饰或高级建筑！第一个小时的目标是建立基础资源供应链：木材（建造）和食物（人口增长）。很多人犯的错误是过早建造市场或学校，导致资源紧张。' },
  { q: '怎么解决食物不够的问题？', a: '食物短缺是新手最常见的瓶颈。解决方案：1) 确保每个农场工人都分配在肥沃土地上（绿色地块产量是黄色的2倍）；2) 建立完整的面包生产链（农场→风车→面包房），不要只靠生小麦；3) 人口每增加50就多建一个农场。紧急情况可以从贸易站购买食物。' },
  { q: '贸易路线什么时候开最好？', a: '建议在第4-5小时（人口80-100时）开启第一条贸易路线。优先选择\"石材进口\"路线——因为石材是中后期最紧缺的资源。第二条贸易路线选择\"工具出口\"，因为工具是高利润商品。不要在人口少于50时开贸易，维护费用会让你入不敷出。' },
  { q: '装饰建筑有必要吗？', a: '中期（人口150+）开始很重要！装饰建筑提供幸福感加成，幸福感影响工作效率（每10点幸福感=+5%工作效率）。高幸福感还能解锁高级建筑升级。建议在每个住宅区放置长椅和花坛（性价比最高的装饰），广场放置喷泉（范围最大）。' },
];

export default function BeginnerWalkthroughPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <h1 className="chapter-heading">
            Town to City <span className="text-accent">Beginner Walkthrough</span>
          </h1>
          <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
            A complete step-by-step walkthrough for your first 10 hours in Town to City.
            This guide will take you from an empty plot of land to a thriving medieval city of 200 citizens,
            covering every essential building, resource chain, and growth milestone along the way.
          </p>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              Before You Build — Map Selection
            </h2>
            <p className="text-ink-light leading-relaxed mb-4">
              For your first game, choose a map with <strong className="text-ink">Plains</strong> terrain
              and <strong className="text-ink">River</strong> access. Avoid Mountain or Desert maps —
              they require advanced resource management skills. Plains maps have abundant fertile soil
              and flat terrain, making them ideal for learning the game mechanics.
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              Look for a starting location near both <strong className="text-ink">forest tiles</strong>
              (for wood) and <strong className="text-ink">stone deposits</strong> (visible as grey
              rocky tiles on the map). Having both within 10 tiles of your starting point saves
              significant transport time in the early game.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              Essential First Buildings
            </h2>
            <p className="text-ink-light leading-relaxed mb-4">
              The order you build matters more than the buildings themselves. Follow this priority
              list exactly — it has been optimized through hundreds of playthroughs for maximum
              efficiency while keeping your citizens fed and happy.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Priority</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Building</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Purpose</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Workers</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Cost</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Tip</th>
                  </tr>
                </thead>
                <tbody>
                  {firstBuildings.map((b, i) => (
                    <tr key={i}>
                      <td className="p-3 text-accent font-bold">{b.priority}</td>
                      <td className="p-3 text-ink font-medium text-xs">{b.building}</td>
                      <td className="p-3 text-ink-light text-xs">{b.purpose}</td>
                      <td className="p-3 text-ink-light text-xs">{b.workers}</td>
                      <td className="p-3 text-ink-light text-xs">{b.cost}</td>
                      <td className="p-3 text-ink-faded text-xs">{b.tip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              Hour-by-Hour Milestones
            </h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Use this timeline as your roadmap. Each milestone represents a checkpoint —
              if you are falling behind, pause and reassess your resource allocation
              before continuing.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Hour</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Goals</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Pop Target</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Key Action</th>
                  </tr>
                </thead>
                <tbody>
                  {hourMilestones.map((m, i) => (
                    <tr key={i}>
                      <td className="p-3 text-accent font-bold text-xs">{m.hour}</td>
                      <td className="p-3 text-ink-light text-xs">{m.goal}</td>
                      <td className="p-3 text-ink font-medium text-xs">{m.popTarget}</td>
                      <td className="p-3 text-ink-faded text-xs">{m.keyAction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              Common Beginner Mistakes
            </h2>
            <ul className="list-decimal list-inside space-y-3 text-ink-light text-sm">
              <li><strong className="text-ink">Building too many houses too early.</strong> Houses consume wood for maintenance. Only build houses when you have unemployed citizens ready to move in. Each house supports 5 citizens.</li>
              <li><strong className="text-ink">Ignoring road placement.</strong> Roads reduce transport time by 40%. A poor road network means your workers spend more time walking than working. Build roads before buildings!</li>
              <li><strong className="text-ink">Over-expanding without defenses.</strong> Once your city reaches 150 population, raids become possible. Build walls and a guard tower before hitting this threshold.</li>
              <li><strong className="text-ink">Neglecting citizen happiness.</strong> Low happiness reduces productivity by up to 30%. Place decorations (benches, flowers) in every residential area — they are cheap and effective.</li>
              <li><strong className="text-ink">Setting taxes too high too early.</strong> Taxes above 10% before population 100 will stunt growth. Start at 5%, increase to 10% at 100 pop, and 15% at 200+ pop.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-4">
              {walkthroughFaqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-ink mb-1">Q: {faq.q}</h3>
                  <p className="text-ink-light text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">
            Last updated: July 5, 2026 · Town to City Beginner Walkthrough · Part of GameGuideHub Network
          </p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display font-semibold text-ink text-sm mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/beginner-colony-guide" className="text-accent hover:underline">Beginner Colony Guide</a></li>
              <li><a href="/production-chain-guide" className="text-accent hover:underline">Production Chain Guide</a></li>
              <li><a href="/resource-management" className="text-accent hover:underline">Resource Management</a></li>
              <li><a href="/city-layout" className="text-accent hover:underline">City Layout Guide</a></li>
              <li><a href="/faq" className="text-accent hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display font-semibold text-ink text-sm mb-3">Quick Checklist</h3>
            <ul className="list-disc list-inside space-y-2 text-xs text-ink-light">
              <li>Pick Plains map with river access</li>
              <li>Build roads before buildings</li>
              <li>Lumber Camp x2 then Farm x2</li>
              <li>Complete bread production chain by hour 4</li>
              <li>First trade route at pop 80-100</li>
              <li>Walls before pop 150</li>
              <li>Decorations in every residential area</li>
              <li>Keep taxes at 5-10% until pop 200+</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
