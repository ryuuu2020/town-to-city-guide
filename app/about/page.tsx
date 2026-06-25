import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Town to City Guide',
  description: 'About the Town to City Guide — a community-maintained resource covering building guides, beginner tips, trade routes, citizen management, beauty scoring, and research strategies for Town to City by Galaxy Grove.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>About</span>
        </div>

        {/* Page Header */}
        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">About the Town to City Guide</h1>
        <p className="text-lg text-blueprint-muted mb-8 max-w-3xl">
          A comprehensive, community-maintained resource for players of Town to City — the Mediterranean city builder by Galaxy Grove. Whether you are building your first fishing dock or optimizing a 500-citizen trade empire, this guide has you covered.
        </p>

        {/* The Game */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">The Game</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Town to City is a grid-less city builder and management simulation set along the sun-drenched Mediterranean coastline. Developed by Galaxy Grove and published by Kwalee, the game challenges you to transform a humble coastal settlement into a thriving maritime city through careful resource management, strategic trade, and attentive citizen care.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Game Details</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="font-semibold text-blueprint-text shrink-0 w-28">Title</span>
                <span className="text-blueprint-muted">Town to City</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-blueprint-text shrink-0 w-28">Developer</span>
                <span className="text-blueprint-muted">Galaxy Grove</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-blueprint-text shrink-0 w-28">Publisher</span>
                <span className="text-blueprint-muted">Kwalee</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-blueprint-text shrink-0 w-28">Genre</span>
                <span className="text-blueprint-muted">City Builder, Management Simulation, Strategy</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-blueprint-text shrink-0 w-28">Platform</span>
                <span className="text-blueprint-muted">PC (Steam)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-blueprint-text shrink-0 w-28">Steam App ID</span>
                <span className="font-mono text-blueprint-accent">3115220</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-blueprint-text shrink-0 w-28">Setting</span>
                <span className="text-blueprint-muted">Mediterranean coastline, pre-modern era</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-blueprint-text shrink-0 w-28">Key Features</span>
                <span className="text-blueprint-muted">Grid-less free building, tier-based citizen progression, dynamic trade routes, beauty and aesthetics system, scenario mode, research tree</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-blueprint-border">
              <p className="text-sm text-blueprint-muted leading-relaxed">
                Find Town to City on Steam:
                <a
                  href="https://store.steampowered.com/app/3115220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blueprint-accent hover:underline ml-2"
                >
                  store.steampowered.com/app/3115220
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* About This Guide */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">About This Guide</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            The Town to City Guide was created to fill a gap: when the game launched, information was scattered across Steam forums, Reddit threads, and YouTube comments. Players needed a single, well-organized resource that covered everything from the first 10 minutes of gameplay to advanced optimization strategies. This site is that resource.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Site Mission</h3>
            <p className="text-blueprint-muted leading-relaxed">
              Our mission is simple: provide the most accurate, comprehensive, and accessible Town to City guide available anywhere. Every guide page is written from tested gameplay experience — not speculation, not marketing copy, not AI-generated filler. When we say a tax rate of 15% is optimal, it is because we tested every percentage from 0% to 50% across multiple playthroughs. When we recommend a build order, it is because we ran the first hour of the game dozens of times to find the most reliable sequence. We believe community knowledge should be freely available and permanently accessible — no paywalls, no login requirements, no account needed.
            </p>
          </div>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">What We Cover</h3>
            <p className="text-blueprint-muted leading-relaxed">
              The guide currently spans eight major topic areas, each with dedicated pages that go deep on mechanics and strategy. The Beginner&apos;s Guide walks new players through the first hour with an exact build order and UI walkthrough. The Buildings page catalogs every structure in the game with resource costs, requirements, and placement tips. Citizens covers tier progression, happiness management, couples, pets, and hidden quests. Resources maps out production chains, raw material management, and supply chain optimization. The Economy page details taxation, gold management, marketplace dynamics, and trade profitability. Research breaks down all 22 tech tree nodes with priority rankings. Tips and Tricks collects 15 battle-tested strategies that experienced players use. And Layouts explains the three-zone planning system and beauty adjacency mechanics.
            </p>
          </div>
        </section>

        {/* Community & Updates */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Community &amp; Updates</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            This guide is community-maintained and regularly updated to reflect game patches, balance changes, and newly discovered strategies. If you spot outdated information, have a tip that should be included, or want to suggest a new topic, your input is welcome.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">How to Contribute</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              The best way to contribute is to share your tested strategies and discoveries. If you have found an optimal tax rate, a better build order, a hidden citizen interaction, or a research priority that outperforms what is currently documented, let us know. We verify all community submissions through testing before publishing, ensuring the guide maintains its standard of accuracy.
            </p>
            <p className="text-blueprint-muted leading-relaxed">
              Additionally, if you notice any information that has become outdated due to a game patch — building costs that changed, mechanics that were rebalanced, or new systems that are not yet covered — reporting it helps keep the guide current for everyone. The game is actively developed, and our guide evolves alongside it.
            </p>
          </div>

          <div className="tip-box">
            <p className="font-semibold text-blueprint-text mb-1">Update Frequency</p>
            <p className="text-blueprint-muted leading-relaxed">
              The guide is reviewed and updated within one week of major game patches. Minor corrections are applied as soon as they are verified. The last comprehensive review was completed in 2026, and all information reflects the latest publicly available build of Town to City.
            </p>
          </div>
        </section>

        {/* Attribution */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Attribution &amp; Disclaimer</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            This guide is an independent, community-created resource and is not affiliated with, endorsed by, or connected to Galaxy Grove or Kwalee in any official capacity. All game-related content, including building names, mechanics descriptions, and gameplay systems, are the intellectual property of Galaxy Grove and Kwalee.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Copyright Notice</h3>
            <p className="text-blueprint-muted leading-relaxed">
              Town to City and all related game assets, names, and trademarks are the property of Galaxy Grove and published by Kwalee. The Town to City Guide content — including guides, tips, data tables, layout suggestions, and strategy analysis — is original work created by the community and is not derived from or a reproduction of the game&apos;s code or assets. Game screenshots and references to in-game content are used under fair use for the purpose of education, commentary, and gameplay assistance.
            </p>
          </div>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Steam Integration</h3>
            <p className="text-blueprint-muted leading-relaxed">
              This site references the Town to City Steam store page (App ID: 3115220) for the convenience of players who wish to purchase, review, or learn more about the game on Steam. We are not affiliated with Valve Corporation or the Steam platform. Links to Steam are provided as a convenience and do not constitute an endorsement or partnership.
            </p>
          </div>
        </section>

        {/* Bottom separator */}
        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of About</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>

      </div>
    </div>
  );
}
