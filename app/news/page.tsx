import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates — Town to City Guide',
  description: 'Town to City launch information and game updates. Released by Galaxy Grove on Steam.',
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>News</span>
        </div>

        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">News &amp; Updates</h1>
        <p className="text-lg text-blueprint-muted mb-10">
          Latest information about Town to City from Galaxy Grove and Kwalee.
        </p>

        <div className="space-y-6">
          
          <div className="bluepr-card">
            <div className="flex items-center gap-2 mb-3">
              <span className="bp-tag green">Update</span>
              <span className="text-xs text-blueprint-muted">June 26, 2026</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">Steam Summer Sale + New Patch</h3>
            <p className="text-blueprint-muted leading-relaxed">
              Town to City is participating in the Steam Summer Sale 2026, its first major discount since the May 26 full launch. Galaxy Grove and Kwalee have also released a new patch with quality-of-life improvements: enhanced photo mode controls, additional building placement grid snapping options, and UI refinements for the trade route panel. The community continues to grow with 97% positive reviews from over 3,900 players — Town to City remains one of the highest-rated city builders of 2026. For new players picking up the game during the sale: our Beginner&apos;s Guide covers the first 2 hours of gameplay, including optimal starting layouts.
            </p>
          </div>
<div className="bluepr-card">
            <div className="flex items-center gap-2 mb-3">
              <span className="bp-tag green">Launch</span>
              <span className="text-xs text-blueprint-muted">May 26, 2026</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">Town to City Full Launch</h3>
            <p className="text-blueprint-muted leading-relaxed">
              Town to City officially launched on Steam on May 26, 2026, following an Early Access period that began on September 16, 2025. Developed by Galaxy Grove (the creators of Station to Station) and published by Kwalee, the game has received overwhelmingly positive reviews from players.
            </p>
          </div>

          <div className="bluepr-card">
            <div className="flex items-center gap-2 mb-3">
              <span className="bp-tag orange">Early Access</span>
              <span className="text-xs text-blueprint-muted">Sep 16, 2025</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">Early Access Launch</h3>
            <p className="text-blueprint-muted leading-relaxed">
              Town to City entered Steam Early Access on September 16, 2025. The Early Access period allowed the developers to gather player feedback and refine the game&apos;s systems ahead of the full 1.0 launch.
            </p>
          </div>

          <div className="bluepr-card">
            <div className="flex items-center gap-2 mb-3">
              <span className="bp-tag blue">Community</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-2">Community Reception</h3>
            <p className="text-blueprint-muted leading-relaxed mb-2">
              As of June 2026, Town to City has achieved:
            </p>
            <ul className="list-disc list-inside text-blueprint-muted leading-relaxed space-y-1">
              <li>Overwhelmingly Positive reviews on Steam (97% positive from 3,854+ reviews)</li>
              <li>38 Steam Achievements</li>
              <li>11 supported languages</li>
              <li>Active community sharing town creations through photo mode</li>
            </ul>
          </div>
        </div>

        <div className="tip-box mt-8">
          <strong>Note:</strong> For the most up-to-date patch notes and developer announcements, visit the official Town to City Steam page or follow Galaxy Grove on social media.
        </div>

        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of News &amp; Updates</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>
      </div>
    </div>
  );
}
