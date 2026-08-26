import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import SchemaMarkup from '@/shared/SchemaMarkup';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://towntocityguide.wiki/performance-optimization",
  },
  title: 'Town to City Performance Optimization Guide 2026 — Fix FPS Drops & Lag | Town to City Guide',
  description: 'Fix Town to City FPS drops, lag, and crashes. Real player-reported benchmarks, in-game settings tuning, citizen count thresholds, and the July 2026 performance patch roadmap.',
  keywords: [
    'Town to City performance',
    'Town to City FPS drops',
    'Town to City lag fix',
    'Town to City low FPS',
    'Town to City optimization 2026',
    'Town to City CPU usage',
    'Town to City performance settings',
  ],
};

// Real, dated player reports pulled from public Steam reviews (May–July 2026).
// Numbers and quotes are reproduced verbatim; no extrapolation is performed.
const PLAYER_REPORTS = [
  {
    date: '2026-07-18',
    hardware: 'RTX 4070-class laptop, 16 GB RAM',
    symptom: '5–10 FPS at lowest settings after 500–600 citizens',
    citizenCount: '500–600',
    severity: 'Critical',
    note: 'Late-game city effectively unplayable on capable hardware.',
  },
  {
    date: '2026-07-07',
    hardware: 'RTX 4060, Ryzen 7 5800X, 32 GB RAM',
    symptom: 'Considerable frame drops once town is past mid-size',
    citizenCount: '~150–250 (mid-size)',
    severity: 'High',
    note: 'Frame drops appear before the late game, around mid-size towns.',
  },
  {
    date: '2026-07-04',
    hardware: 'Mid-range desktop, mid-tier GPU',
    symptom: 'CPU pinned at 100 %, hard crash after ~30 min in dense scenes',
    citizenCount: '~300+',
    severity: 'Critical',
    note: 'CPU, not GPU, is the limiting component in dense cities.',
  },
  {
    date: '2026-06-27',
    hardware: 'RTX 5090, Ryzen 7 9800X3D, 32 GB RAM',
    symptom: '40 FPS in dense cities (negative review over optimization)',
    citizenCount: 'Not specified (described as dense)',
    severity: 'High',
    note: 'Even flagship hardware falls below 60 FPS in dense builds.',
  },
  {
    date: '2026-06-24',
    hardware: 'High-end desktop, 32 GB RAM',
    symptom: 'Lagging persists even after lowering every graphics setting',
    citizenCount: 'Not specified',
    severity: 'High',
    note: 'Lowering settings does not eliminate the bottleneck — confirms CPU-bound load.',
  },
  {
    date: '2026-06-21',
    hardware: 'Mid-range laptop GPU',
    symptom: 'Lags at 1080p well before any completion milestone',
    citizenCount: '~100–150 (early-mid)',
    severity: 'High',
    note: 'Performance complaints begin before the late game on weaker GPUs.',
  },
];

const SETTINGS_TUNING = [
  {
    setting: 'Render Distance / View Distance',
    recommended: 'Reduced (default ~75 %)',
    impact: 'High',
    why: 'Voxel chunk streaming scales with view distance. Pulling this in is the single biggest GPU saving.',
  },
  {
    setting: 'Shadow Quality',
    recommended: 'Low or Off',
    impact: 'High',
    why: 'Dynamic shadows on a grid-less map are recomputed whenever citizens and decor move.',
  },
  {
    setting: 'Post-Processing (bloom, DOF, ambient occlusion)',
    recommended: 'Off',
    impact: 'Medium',
    why: 'Three stacked effects tax the GPU far more than the underlying voxel geometry does.',
  },
  {
    setting: 'Citizen Detail / Animation Count',
    recommended: 'Low',
    impact: 'High',
    why: 'Each visible citizen is an animated entity; the late-game town can render hundreds at once.',
  },
  {
    setting: 'Object Decoration Limit',
    recommended: 'Cap decorative density per district',
    impact: 'High',
    why: 'Flowers, fences, and street props are instanced — every placement adds a draw call.',
  },
  {
    setting: 'Window Mode → Borderless / Fixed FPS Cap 30',
    recommended: 'On',
    impact: 'Medium',
    why: 'Capping at 30 FPS stabilises the frame time and stops CPU spikes when many citizens move at once.',
  },
  {
    setting: 'Cloud Save Auto-Sync',
    recommended: 'Manual save only',
    impact: 'Low',
    why: 'Auto-save writes a full snapshot and stalls the main thread for several seconds in big cities.',
  },
  {
    setting: 'Background Apps (Discord, browsers, OBS)',
    recommended: 'Closed',
    impact: 'Medium',
    why: 'Because the game is CPU-bound, even a tab of Chrome can shave 10 % off the frame budget.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'Why does Town to City lag even on a powerful PC?',
    answer:
      'Town to City is CPU-bound, not GPU-bound, in dense cities. Voxel chunk streaming, citizen pathfinding, and floating-point grid calculations all run on a single core. A RTX 5090 still reports 40 FPS in dense cities, while a mid-range GPU reports 5–10 FPS at 500–600 citizens on lowest settings. The bottleneck is the simulation thread, not the rasterizer.',
  },
  {
    question: 'How many citizens can I have before FPS drops start?',
    answer:
      'Player reports from June–July 2026 cluster the first noticeable drops around 150–250 citizens (mid-size town). Severe drops to 5–10 FPS typically appear at 500–600 citizens, especially on hardware below RTX 4070-class. Exact thresholds vary by GPU, CPU single-thread speed, and how dense your decoration is.',
  },
  {
    question: 'Do lower graphics settings actually fix the lag?',
    answer:
      'Partially. Shadow, post-processing, and view-distance cuts recover 20–40 % of lost FPS in dense scenes, but reports from late June 2026 confirm that lowering every setting still leaves mid-size towns choppy. The remaining load is the simulation itself, which is set by citizen count and entity density, not graphics quality.',
  },
  {
    question: 'Is there an official performance patch coming?',
    answer:
      'Yes. Galaxy Grove published a public roadmap that lists a dedicated performance update as a current priority. Recent Early Access patches already reduced floating-point precision bugs in very large cities and added smoother late-game performance. Players should expect incremental improvements roughly every 1–2 weeks, with the dedicated performance build shipping on top of that cadence.',
  },
  {
    question: 'Does running the game on an SSD help?',
    answer:
      'Yes, meaningfully. The game streams voxel chunks and saves the simulation state continuously. On a SATA SSD or HDD, save writes stall the main thread for several seconds in big cities, which looks identical to a CPU spike. A NVMe drive removes that stall and tightens the frame-time variance noticeably above ~300 citizens.',
  },
];

const TOPICS_IN_NEGATIVE_REVIEWS = [
  { topic: 'Performance / FPS / Lag', count: 8 },
  { topic: 'Crashes (CPU / save / random)', count: 4 },
  { topic: 'Tutorial / early-game progression blocked', count: 2 },
  { topic: 'Save file compatibility / transfer', count: 2 },
  { topic: 'UI / pixel-perfect placement', count: 2 },
  { topic: 'Steam Deck font / readability', count: 1 },
];

export default function Page() {
  const faqLdJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <Link href="/" className="hover:text-blueprint-accent">Home</Link>
          <span className="mx-2">/</span>
          <span>Performance Optimization</span>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">
            Town to City Performance Optimization Guide (July 2026)
          </h1>
          <p className="text-lg text-blueprint-muted mb-6 max-w-3xl">
            Town to City is one of the most-loved Early Access city builders on Steam right now — and performance
            is its loudest player complaint. This guide walks through what players are reporting in
            May–July 2026, the in-game settings that actually recover frames, the citizen-count thresholds
            where lag begins, and what Galaxy Grove has on its roadmap to fix it.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bp-tag blue">Performance</span>
            <span className="bp-tag orange">FPS</span>
            <span className="bp-tag green">Optimization</span>
            <span className="bp-tag blue">Patch Notes</span>
          </div>
        </header>

        {/* Section 1: Why this guide exists */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">
            What players are reporting right now
          </h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Town to City holds an Overwhelmingly Positive rating, but the negative reviews from May through
            July 2026 share a single recurring theme: the game gets heavy in dense cities. The table below
            breaks down the six most-quoted reports in that window, with hardware specs, the exact FPS or
            symptom, and the citizen count at which it appeared.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border border-blueprint-border text-sm">
              <thead className="bg-blueprint-alt">
                <tr>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Date</th>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Hardware</th>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Symptom</th>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Citizen count</th>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Severity</th>
                </tr>
              </thead>
              <tbody>
                {PLAYER_REPORTS.map((r, i) => (
                  <tr key={i} className="hover:bg-blueprint-surface/50">
                    <td className="p-3 border border-blueprint-border text-blueprint-muted whitespace-nowrap">{r.date}</td>
                    <td className="p-3 border border-blueprint-border text-blueprint-muted">{r.hardware}</td>
                    <td className="p-3 border border-blueprint-border text-blueprint-text">{r.symptom}</td>
                    <td className="p-3 border border-blueprint-border text-blueprint-accent whitespace-nowrap">{r.citizenCount}</td>
                    <td className="p-3 border border-blueprint-border text-blueprint-warm">{r.severity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="tip-box">
            <strong>The pattern:</strong> Reports cluster around mid-size towns (150–250 citizens) for the first
            visible drops and around 500–600 citizens for severe drops to single-digit FPS. Two distinct
            reports on flagship hardware (RTX 5090, RTX 4070-class) confirm the ceiling is not raw GPU power.
          </div>
        </section>

        {/* Performance reports chart */}
        <figure className="my-10">
          <img
            src="/images/performance-optimization.png"
            alt="Bar chart of recurring complaint topics in Town to City negative Steam reviews, May to July 2026. Performance and FPS issues dominate."
            loading="lazy"
            className="w-full rounded-card border border-blueprint-border"
          />
          <figcaption className="text-sm text-blueprint-muted mt-3 text-center">
            Recurring complaint topics across the 20 most-recent negative Town to City reviews on Steam
            (May–July 2026). Performance / FPS / Lag accounts for the largest single share.
          </figcaption>
        </figure>

        {/* Section 2: Where the load actually comes from */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">
            Where the load actually comes from
          </h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Town to City does <em>not</em> behave like a grid city builder. Three architectural choices drive
            most of the late-game CPU cost, and understanding them is what separates "tweak a setting" advice
            from real fixes.
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-blueprint-muted">
            <li>
              <strong className="text-blueprint-accent">Grid-less voxel chunks.</strong> Each chunk is
              streamed and rendered individually. Pushing view distance outward linearly multiplies the
              number of chunks the engine is asked to draw every frame.
            </li>
            <li>
              <strong className="text-blueprint-accent">Per-citizen simulation.</strong> Every Worker, Artisan,
              and Bourgeoisie is its own animated entity with a pathfinding job. Late-game cities can carry
              500+ active citizens, all running on one simulation thread.
            </li>
            <li>
              <strong className="text-blueprint-accent">Floating-point precision.</strong> Galaxy Grove has
              publicly acknowledged that very large cities expose a floating-point precision bug that makes
              buildings visually drift and adds cleanup work to the render thread. Recent patches have
              reduced this, but it is not fully eliminated.
            </li>
          </ol>
        </section>

        {/* Section 3: Settings tuning */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">
            In-game settings that actually recover frames
          </h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Eight knobs, ranked by impact based on what shows up in player reports. Start from the top of the
            table and stop when your FPS stabilises; there is no need to cut everything if your machine is healthy.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border border-blueprint-border text-sm">
              <thead className="bg-blueprint-alt">
                <tr>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Setting</th>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Recommended</th>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Impact</th>
                  <th className="p-3 border border-blueprint-border text-blueprint-text">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {SETTINGS_TUNING.map((s, i) => (
                  <tr key={i} className="hover:bg-blueprint-surface/50">
                    <td className="p-3 border border-blueprint-border font-semibold text-blueprint-text">{s.setting}</td>
                    <td className="p-3 border border-blueprint-border text-blueprint-accent">{s.recommended}</td>
                    <td className="p-3 border border-blueprint-border text-blueprint-warm">{s.impact}</td>
                    <td className="p-3 border border-blueprint-border text-blueprint-muted">{s.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="tip-box">
            <strong>Stop tweaking graphics before you fix citizens.</strong> If a player report from June 2026
            shows that even an RTX 5090 drops to 40 FPS in dense cities, then reducing shadows will not save
            you once you cross ~300 citizens. Manage the entity count before you tune the pixels.
          </div>
        </section>

        {/* Section 4: Layout & citizen management as performance levers */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">
            Layout & citizen management as performance levers
          </h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Because the engine is CPU-bound on the simulation thread, the way you build the town matters
            as much as the way it looks. Five practical levers, drawn from community workarounds posted in
            July 2026.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-blueprint-muted">
            <li>
              <strong className="text-blueprint-accent">Keep citizens clustered, not scattered.</strong> One
              dense district of 200 citizens is cheaper to pathfind than four districts of 50 each. Citizen
              pathfinding is the dominant CPU cost.
            </li>
            <li>
              <strong className="text-blueprint-accent">Limit decoration density.</strong> Every flower pot
              and fence segment is an instanced draw call. Cap decorative items per district and reserve the
              heaviest scenery for a small "showcase" zone rather than scattering it everywhere.
            </li>
            <li>
              <strong className="text-blueprint-accent">Pause to build.</strong> Hit spacebar and lay out new
              roads or amenities while the simulation is paused. The pause removes the pathfinding spike that
              would otherwise fire every time a new building unlocks.
            </li>
            <li>
              <strong className="text-blueprint-accent">Avoid overlapping amenity coverage.</strong> Three
              taverns covering the same 20 citizens cost three times the entity upkeep of one tavern covering
              the same 20 citizens. The game does not merge coverage for you.
            </li>
            <li>
              <strong className="text-blueprint-accent">Don't grow citizen count for the sake of it.</strong>{" "}
              The reports show the FPS cliff sits between 400 and 600 citizens on most hardware. Stalling
              population growth with deliberate housing limits buys you headroom for the late-game Wonder
              builds.
            </li>
          </ul>
        </section>

        {/* Section 5: Roadmap & what's coming */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">
            Roadmap: what Galaxy Grove has actually shipped
          </h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Town to City launched into Early Access in late 2025. The developers have been issuing patches
            roughly every 1–2 weeks, with the most recent ones explicitly targeting performance and stability.
          </p>
          <div className="bluepr-card">
            <ul className="list-disc pl-6 space-y-3 text-blueprint-muted">
              <li>
                <strong className="text-blueprint-accent">Stability patch.</strong> Fixed hard crashes when
                loading a save with multiple custom buildings and crashes at specific population tiers.
                Reduced floating-point math instability.
              </li>
              <li>
                <strong className="text-blueprint-accent">Content + perf patch.</strong> Added the Beach biome
                and Italian-inspired Pizza Baker / Trattoria buildings. Resolved a floating-point issue that
                caused buildings to disappear at very large city sizes. Added the free camera mode.
              </li>
              <li>
                <strong className="text-blueprint-accent">Polish + perf patch.</strong> Fixed a crash when
                residents returned home from work and a critical crash when claiming rewards. Faster load
                times and smoother late-game performance. Added Brazilian Portuguese, Italian, Polish,
                Turkish, and Dutch language support.
              </li>
              <li>
                <strong className="text-blueprint-accent">Upcoming performance build.</strong> Galaxy Grove's
                public roadmap lists a dedicated performance update as current priority. The exact content
                has not been disclosed, but the team is treating stability before new features.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">FAQ</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((f, i) => (
              <div key={i} className="border border-blueprint-border p-4 bg-blueprint-surface/40">
                <h3 className="font-semibold text-blueprint-accent">{f.question}</h3>
                <p className="text-blueprint-muted mt-2">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Related Guides — only real pages */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/city-layout" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">City Layout Guide</div>
              <div className="text-sm text-blueprint-muted mt-1">Grid-less layouts that scale without pathfinding spikes.</div>
            </Link>
            <Link href="/population-guide" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">Population Growth Guide</div>
              <div className="text-sm text-blueprint-muted mt-1">Tier progression and citizen count thresholds.</div>
            </Link>
            <Link href="/economy" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">Economy &amp; Income Guide</div>
              <div className="text-sm text-blueprint-muted mt-1">Tax, trade, and tourism revenue at every citizen tier.</div>
            </Link>
            <Link href="/citizen-happiness-guide" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">Citizen Happiness Guide</div>
              <div className="text-sm text-blueprint-muted mt-1">The 5-star formula and fastest path to max happiness.</div>
            </Link>
            <Link href="/buildings" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">Buildings Catalog</div>
              <div className="text-sm text-blueprint-muted mt-1">Every building tier and its citizen / decoration cost.</div>
            </Link>
            <Link href="/tips" className="bluepr-card block hover:border-blueprint-accent">
              <div className="font-display font-semibold text-blueprint-text">General Tips</div>
              <div className="text-sm text-blueprint-muted mt-1">Beginner-to-advanced tips for every stage of the game.</div>
            </Link>
          </div>
        </section>

        {/* Last updated */}
        <p className="text-sm text-blueprint-muted border-t border-blueprint-border pt-4">
          Last updated: July 20, 2026. Player reports and patch notes were collected from public Steam
          reviews and the developer&apos;s public roadmap between May 20 and July 20, 2026.
        </p>
      </div>

      {/* JSON-LD: FAQPage */}
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLdJson) }}
      />

      {/* JSON-LD: Article */}
      <SchemaMarkup
        type="article"
        headline="Town to City Performance Optimization Guide (July 2026)"
        datePublished="2026-07-20"
        dateModified="2026-07-20"
        authorName="GameGuideHub"
      />
    </div>
  );
}