import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Town to City Guide',
  description: 'Terms of Service for the Town to City Guide — informational use, accuracy disclaimers, affiliate disclosure, copyright, and intellectual property notices.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Terms of Service</span>
        </div>

        {/* Page Header */}
        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Terms of Service</h1>
        <p className="text-lg text-blueprint-muted mb-2 max-w-3xl">
          Last updated: June 2026
        </p>
        <p className="text-lg text-blueprint-muted mb-8 max-w-3xl">
          By accessing and using the Town to City Guide, you agree to the following terms. Please read them carefully. If you do not agree with any part of these terms, you should discontinue use of this site.
        </p>

        {/* Informational Use Only */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Informational Use Only</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            The Town to City Guide is a fan-created informational resource. All content — including guides, tips, strategy recommendations, data tables, and gameplay analysis — is provided for educational and entertainment purposes only.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">No Professional Advice</h3>
            <p className="text-blueprint-muted leading-relaxed">
              Nothing on this site constitutes professional advice of any kind. The guides and tips are compiled from community gameplay experience and represent strategies that have worked for specific players in specific scenarios. Your individual gameplay experience may vary based on game version, map choice, playstyle, and random in-game events. The content on this site should not be treated as official game documentation, developer-endorsed strategies, or guaranteed outcomes. Use your own judgment when applying any strategy or tip to your personal playthrough.
            </p>
          </div>
        </section>

        {/* Accuracy */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Accuracy and Completeness</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            We strive to maintain accurate, up-to-date, and comprehensive information, but we cannot guarantee that every detail on the site is correct, complete, or current at all times.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Disclaimer of Accuracy</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Town to City is an actively developed game that may receive updates, patches, and balance changes at any time. Information on this site — including but not limited to resource costs, building stats, upgrade requirements, research tree data, trade route mechanics, and citizen behavior — may become outdated following game updates.
            </p>
            <p className="text-blueprint-muted leading-relaxed">
              We make reasonable efforts to review and update content after major patches, but there may be gaps between a game update and the corresponding guide update. The Town to City Guide and its contributors assume no responsibility for any gameplay outcomes, lost progress, or other consequences resulting from reliance on information found on this site. If you notice inaccurate or outdated information, please reach out and let us know — we correct errors as quickly as possible.
            </p>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Affiliate Disclosure</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Transparency about how this site is funded is important to us. The Town to City Guide participates in advertising and affiliate programs to offset hosting and content development costs.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Advertising and Affiliate Relationships</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              This site displays advertisements through Google AdSense. These ads are served by Google and its advertising partners. We do not directly select or endorse the specific advertisements shown on any given page. Revenue from these advertisements helps keep the guide free to access for all players.
            </p>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Links to the Town to City Steam store page (App ID: 3115220) are provided for convenience. We are not affiliated with Valve Corporation, Steam, Galaxy Grove, or Kwalee, and we do not receive compensation from any game developer or publisher for links, mentions, or recommendations. If any affiliate relationship is established in the future that could influence the content or recommendations on this site, it will be clearly disclosed on the relevant pages.
            </p>
            <p className="text-blueprint-muted leading-relaxed">
              Your use of the site and any purchases you make on external platforms are entirely voluntary. Advertising and links do not affect the editorial content of our guides — we recommend strategies and approaches based on gameplay effectiveness, not commercial relationships.
            </p>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Intellectual Property</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Respect for intellectual property rights is a core principle of this guide. We take care to clearly distinguish between original community-created content and content that belongs to the game&apos;s developers and publishers.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Game Content Ownership</h3>
            <p className="text-blueprint-muted leading-relaxed">
              Town to City, its name, logo, in-game assets, character designs, building names, mechanics terminology, story elements, and all related intellectual property are the exclusive property of Galaxy Grove (developer) and Kwalee (publisher). This guide is an independent, unofficial resource created by fans of the game. We claim no ownership over any Town to City game content. References to game elements — including building names, resource types, citizen tiers, and game mechanics — are used for identification and educational purposes and do not imply any endorsement by or affiliation with the rights holders.
            </p>
          </div>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Guide Content Copyright</h3>
            <p className="text-blueprint-muted leading-relaxed">
              The original content on the Town to City Guide — including written guides, strategy analysis, layout suggestions, data compilations, tips, FAQ answers, and the site&apos;s design and structure — is the original work of the guide&apos;s contributors and is protected by copyright. You may reference or quote reasonable portions of guide content for personal, non-commercial use, provided you credit the Town to City Guide and include a link back to the source page. Republishing substantial portions of guide content on other websites, in videos, or in any commercial context without permission is not permitted. If you would like to use our content beyond what fair use allows, please contact us to discuss.
            </p>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Limitation of Liability</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            The Town to City Guide is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Scope of Liability</h3>
            <p className="text-blueprint-muted leading-relaxed">
              To the fullest extent permitted by applicable law, the Town to City Guide, its operators, and its contributors shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this site. This includes, but is not limited to, damages resulting from reliance on guide content, gameplay decisions made based on site information, interruptions in site availability, errors or omissions in content, or any issues arising from third-party services used on the site (including Google Analytics and Google AdSense). Your sole remedy for dissatisfaction with the site or its content is to stop using the site.
            </p>
          </div>
        </section>

        {/* Third-Party Links */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Third-Party Links and Services</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            The Town to City Guide contains links to external websites and integrates third-party services. We do not control and are not responsible for the content, privacy practices, or terms of these external resources.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">External Sites</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              Links to external sites — including the Town to City Steam store page, Google services, and any other third-party websites — are provided for your convenience. Following these links is at your own discretion. The inclusion of a link does not imply endorsement of the linked site or its content. Each external site has its own terms of service and privacy policy, which you should review before engaging with that site.
            </p>
            <p className="text-blueprint-muted leading-relaxed">
              Third-party services integrated on this site — including Google Analytics for usage tracking and Google AdSense for advertising — are governed by Google&apos;s terms of service and privacy policy. We do not control the data collection, processing, or storage practices of these services. For details on how these services handle your data, please refer to our{' '}
              <a href="/privacy" className="text-blueprint-accent hover:underline">Privacy Policy</a> and Google&apos;s own documentation.
            </p>
          </div>
        </section>

        {/* Changes */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Changes to These Terms</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            We reserve the right to modify these Terms of Service at any time. Changes take effect immediately upon posting to this page.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Updates and Notification</h3>
            <p className="text-blueprint-muted leading-relaxed">
              When we update these terms, the &quot;Last updated&quot; date at the top of this page will be revised. Material changes may be highlighted on the site or communicated through other reasonable means. Your continued use of the Town to City Guide after any changes to these terms constitutes your acceptance of the revised terms. We encourage you to review this page periodically to stay informed about the terms governing your use of the site.
            </p>
          </div>

          <div className="tip-box">
            <p className="font-semibold text-blueprint-text mb-1">Questions About These Terms</p>
            <p className="text-blueprint-muted leading-relaxed">
              If you have questions about these Terms of Service, need clarification on any section, or would like to discuss permissions beyond what these terms allow, please contact us at{' '}
              <span className="font-mono text-blueprint-accent">sonic6640@gmail.com</span>. We aim to respond to all inquiries within 5 business days.
            </p>
          </div>
        </section>

        {/* Bottom separator */}
        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of Terms of Service</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>

      </div>
    </main>
  );
}
