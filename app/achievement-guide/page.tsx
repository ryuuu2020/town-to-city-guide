import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Town to City Achievement Guide — All Achievements & How to Unlock (2026) | Town to City Guide',
  description: 'Complete Town to City achievement guide with all achievements, unlock conditions, tips, and strategies. 100% your medieval city builder experience.',
};

const achievements = [
  { name: 'First Settlement', condition: 'Build your first house', difficulty: 'Easy', reward: '50 Gold', tip: 'Automatically unlocked in tutorial' },
  { name: 'Population Boom', condition: 'Reach 100 citizens', difficulty: 'Easy', reward: '100 Gold, +5 Happiness', tip: 'Focus on food supply and housing' },
  { name: 'Trade Empire', condition: 'Establish 5 trade routes', difficulty: 'Medium', reward: '200 Gold, Trade License', tip: 'Diversify exports across regions' },
  { name: 'Industrial Revolution', condition: 'Build 10 production buildings', difficulty: 'Medium', reward: '300 Gold, +10% Production', tip: 'Focus on chains: Raw → Processed → Goods' },
  { name: 'Happy Citizens', condition: 'Maintain 90%+ happiness for 30 days', difficulty: 'Hard', reward: '500 Gold, Golden Statue', tip: 'Build decorations in every district' },
  { name: 'Stone Fortress', condition: 'Upgrade walls to level 5', difficulty: 'Hard', reward: '400 Gold, Fortification Blueprint', tip: 'Prioritize stone quarry early' },
  { name: 'Master Architect', condition: 'Build every building type at least once', difficulty: 'Very Hard', reward: '1000 Gold, Architect Title', tip: 'Use a checklist; there are 47 building types' },
  { name: 'Winter Survivor', condition: 'Survive 5 winters without any deaths', difficulty: 'Hard', reward: '300 Gold, Winter Coat', tip: 'Stock 500+ food before first snow' },
  { name: 'Cultural Hub', condition: 'Build Cathedral, Theater, and University', difficulty: 'Medium', reward: '250 Gold, Cultural Influence', tip: 'These are late-game prestige buildings' },
  { name: 'Millionaire Mayor', condition: 'Accumulate 10,000 gold in treasury', difficulty: 'Very Hard', reward: '2000 Gold, Golden Crown', tip: 'Tax at 15% once city is self-sufficient' },
  { name: 'Green Thumb', condition: 'Plant 100 trees in your city', difficulty: 'Easy', reward: '50 Gold, Nature\'s Blessing', tip: 'Trees also boost citizen happiness' },
  { name: 'Grand Cathedral', condition: 'Complete a Cathedral to level 3', difficulty: 'Very Hard', reward: '1500 Gold, Divine Blessing', tip: 'Requires rare marble — set up trade routes early' },
];

const hiddenAchievements = [
  { name: 'Secret Garden', how: 'Plant a garden in the exact center of your city', reward: '200 Gold' },
  { name: 'Night Owl', how: 'Play 10 consecutive in-game nights without pausing', reward: 'Unique night-themed decoration' },
  { name: 'Perfect Grid', how: 'Have exactly 100 buildings arranged in a 10x10 grid', reward: '500 Gold' },
  { name: 'Lonely Mountain', how: 'Build a single house on the highest elevation tile', reward: 'Hobbit-themed statue' },
];

const achievementFaqs = [
  { q: '哪些成就最简单，新手应该优先做？', a: 'First Settlement（自动解锁）、Population Boom（达到100人口）、Green Thumb（种100棵树）是最容易的三个。建议先专注于这三个，它们不需要特别的策略，只要正常发展城市就能自然解锁，同时还能获得启动资金奖励。' },
  { q: 'Master Architect成就需要建造哪些建筑？', a: '总共需要建造47种建筑类型，包括：8种住宅、12种生产建筑、6种农业建筑、5种商业建筑、4种军事建筑、3种教育建筑、3种文化建筑、3种行政建筑、3种装饰建筑。建议打印一份清单逐项完成，最容易漏掉的是小装饰建筑（Fountain、Bench、Flower Bed）。' },
  { q: 'Winter Survivor（5个冬天零死亡）有什么诀窍？', a: '关键准备：1) 每个冬天前囤积至少500食物（每个公民约5单位）；2) 建造足够的房屋（每人1单位居住空间）；3) 确保所有房屋在供暖范围内（篝火或壁炉3格半径）；4) 设置冬季配给制（Rationing Policy）减少消耗。第五个冬天是最难的，因为人口可能已经很大了。' },
  { q: '隐藏成就怎么解锁？', a: '游戏中有4个隐藏成就（如上表），它们不会在成就列表中显示条件。Secret Garden最简单——找到城市地图最中心的格子建花园即可。Perfect Grid需要精确规划，建议在新游戏中专门做。Lonely Mountain需要找到最高的地形格子，通常在山区地图中。' },
];

export default function AchievementGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <h1 className="chapter-heading">
            Town to City <span className="text-accent">Achievement Guide</span>
          </h1>
          <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
            Complete achievement guide for Town to City, covering every achievement with exact unlock conditions,
            difficulty ratings, rewards, and pro tips. Whether you are a completionist aiming for 100% or a new
            mayor looking for easy early-game achievements, this guide has everything you need.
          </p>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              Achievement Overview
            </h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Town to City features <strong className="text-ink">12 standard achievements</strong> and 4 hidden
              achievements. Achievements are a great source of early-game gold and unique rewards that cannot be
              obtained any other way. The Golden Crown from Millionaire Mayor provides a permanent +10% tax
              income bonus — making it one of the most impactful rewards to chase.
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              Achievements are divided into four difficulty tiers: Easy (can be unlocked naturally through
              gameplay), Medium (requires some planning), Hard (requires dedicated effort), and Very Hard
              (may require a specialized playthrough).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              Complete Achievement List
            </h2>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Achievement</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Condition</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Difficulty</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Reward</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Pro Tip</th>
                  </tr>
                </thead>
                <tbody>
                  {achievements.map((a, i) => (
                    <tr key={i}>
                      <td className="p-3 text-ink font-medium text-xs">{a.name}</td>
                      <td className="p-3 text-ink-light text-xs">{a.condition}</td>
                      <td className="p-3">
                        <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                          a.difficulty === 'Very Hard' ? 'bg-red-900/30 text-red-400' :
                          a.difficulty === 'Hard' ? 'bg-orange-900/30 text-orange-400' :
                          a.difficulty === 'Medium' ? 'bg-yellow-900/30 text-yellow-400' :
                          'bg-green-900/30 text-green-400'
                        }`}>{a.difficulty}</span>
                      </td>
                      <td className="p-3 text-ink-light text-xs">{a.reward}</td>
                      <td className="p-3 text-ink-faded text-xs">{a.tip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              Hidden Achievements
            </h2>
            <p className="text-ink-light leading-relaxed mb-4">
              These achievements do not appear in the in-game achievement panel until unlocked.
              They reward exploration and creative city design.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Achievement</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">How to Unlock</th>
                    <th className="p-3 text-left text-xs uppercase tracking-wider">Reward</th>
                  </tr>
                </thead>
                <tbody>
                  {hiddenAchievements.map((h, i) => (
                    <tr key={i}>
                      <td className="p-3 text-accent font-medium text-xs">{h.name}</td>
                      <td className="p-3 text-ink-light text-xs">{h.how}</td>
                      <td className="p-3 text-ink-light text-xs">{h.reward}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-4">
              {achievementFaqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-ink mb-1">Q: {faq.q}</h3>
                  <p className="text-ink-light text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">
            Last updated: July 5, 2026 · Town to City Achievement Guide · Part of GameGuideHub Network
          </p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display font-semibold text-ink text-sm mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/beginner-colony-guide" className="text-accent hover:underline">Beginner Colony Guide</a></li>
              <li><a href="/beginners" className="text-accent hover:underline">Beginners Guide</a></li>
              <li><a href="/citizen-happiness-guide" className="text-accent hover:underline">Citizen Happiness Guide</a></li>
              <li><a href="/economy" className="text-accent hover:underline">Economy Guide</a></li>
              <li><a href="/faq" className="text-accent hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display font-semibold text-ink text-sm mb-3">Achievement Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-xs text-ink-light">
              <li>Prioritize Green Thumb early — it takes no effort and gives free gold</li>
              <li>Plan Master Architect with a spreadsheet or checklist</li>
              <li>Winter Survivor is easiest on Easy difficulty maps</li>
              <li>Millionaire Mayor requires tax optimization and trade</li>
              <li>Hidden achievements can be done in any game mode</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
