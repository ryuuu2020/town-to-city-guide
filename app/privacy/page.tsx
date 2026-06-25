import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Town to City Guide',
  description: 'Privacy Policy for the Town to City Guide — information about data collection, cookies, third-party services, and how we handle your information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-blueprint-bg">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="text-sm text-blueprint-muted mb-8">
          <a href="/" className="hover:text-blueprint-accent">Home</a>
          <span className="mx-2">/</span>
          <span>Privacy Policy</span>
        </div>

        {/* Page Header */}
        <h1 className="font-display text-4xl font-bold text-blueprint-text mb-4">Privacy Policy</h1>
        <p className="text-lg text-blueprint-muted mb-2 max-w-3xl">
          Last updated: June 2026
        </p>
        <p className="text-lg text-blueprint-muted mb-8 max-w-3xl">
          Your privacy is important to us. This Privacy Policy explains what information is collected when you visit the Town to City Guide, how it is used, and your choices regarding that information.
        </p>

        {/* Information We Collect */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Information We Collect</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            The Town to City Guide itself does not collect, store, or process any personal information from visitors. We do not have user accounts, login systems, comment sections, or any form that requests personal data. When you visit this site, no personally identifiable information is gathered or retained by us.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Third-Party Services and Automatic Data Collection</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              While we do not directly collect personal data, our site integrates third-party services that may automatically collect certain information as part of their standard operation. These services operate independently and have their own privacy policies governing the data they collect.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-1">Google Analytics</h4>
                <p className="text-blueprint-muted leading-relaxed">
                  We use Google Analytics to understand how visitors interact with the site — which pages are most popular, how long readers spend on guide content, and where our traffic originates. Google Analytics uses cookies and similar technologies to collect anonymous usage data, including pages visited, time spent on pages, browser type, device information, and approximate geographic location derived from IP addresses. This data is aggregated and does not identify individual users. You can learn more about how Google handles data at{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blueprint-accent hover:underline">policies.google.com/privacy</a>. To opt out of Google Analytics tracking across all websites, you can install the{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blueprint-accent hover:underline">Google Analytics Opt-out Browser Add-on</a>.
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-blueprint-text mb-1">Google AdSense</h4>
                <p className="text-blueprint-muted leading-relaxed">
                  This site displays advertisements through Google AdSense to support its operation and ongoing content development. AdSense may use cookies and web beacons to serve ads based on your prior visits to this site or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your browsing history. You can manage your ad personalization settings or opt out of personalized advertising through{' '}
                  <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blueprint-accent hover:underline">Google&apos;s Ad Settings</a>. For more information about how Google uses data when you use our site, visit{' '}
                  <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-blueprint-accent hover:underline">How Google uses information from sites or apps that use our services</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Cookies</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Cookies are small text files placed on your device by websites you visit. The Town to City Guide does not set any first-party cookies. However, our third-party service providers — specifically Google Analytics and Google AdSense — may set cookies through our site for the purposes described above.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Managing Cookies</h3>
            <p className="text-blueprint-muted leading-relaxed">
              Most web browsers allow you to control cookie behavior through their settings. You can configure your browser to block all cookies, delete existing cookies, or notify you when a cookie is being set. Instructions for managing cookies vary by browser — consult your browser&apos;s help documentation for specific steps. Please note that blocking all cookies may affect the functionality of some websites, though the Town to City Guide&apos;s core content and navigation do not require cookies to function. For more detailed information about cookies and how to manage them, visit{' '}
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blueprint-accent hover:underline">allaboutcookies.org</a>.
            </p>
          </div>
        </section>

        {/* No Personal Data Collection */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Personal Data Collection</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            To be explicitly clear: the Town to City Guide does not collect, store, share, or sell personal data. We do not operate a user database, we do not have access to individual visitor data from third-party services beyond aggregated analytics reports, and we do not engage in any form of data brokerage or targeted marketing beyond what Google AdSense provides at the aggregate level.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">What We Do Not Collect</h3>
            <ul className="space-y-2 text-blueprint-muted leading-relaxed list-disc list-inside">
              <li>Names, email addresses, or physical addresses</li>
              <li>Account credentials or login information</li>
              <li>Payment information or financial data</li>
              <li>User-generated content (comments, posts, uploads)</li>
              <li>Directly identifiable browsing history tied to individuals</li>
              <li>Social media profiles or connected account data</li>
            </ul>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Children&apos;s Privacy</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            The Town to City Guide is a general-audience informational website about a video game. It is not directed at children under the age of 13, and we do not knowingly collect personal information from children. If you believe a child has provided personal information through a third-party service accessed via our site, please contact us so we can address the situation.
          </p>

          <div className="tip-box">
            <p className="font-semibold text-blueprint-text mb-1">Parental Controls for Ad Personalization</p>
            <p className="text-blueprint-muted leading-relaxed">
              If you are concerned about ad personalization affecting minors using your device, you can disable personalized ads through Google&apos;s Ad Settings at{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blueprint-accent hover:underline">adssettings.google.com</a> or configure your browser to block third-party cookies entirely.
            </p>
          </div>
        </section>

        {/* Data Security & Retention */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Data Security &amp; Retention</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            Since we do not collect or store personal data ourselves, there is no user data for us to retain, secure, or delete. Data collected by third-party services (Google Analytics, Google AdSense) is governed by their respective data retention and security policies. Google Analytics data is retained for a standard period as configured in our Analytics account and is subject to Google&apos;s data processing terms.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">External Links</h3>
            <p className="text-blueprint-muted leading-relaxed">
              Our site contains links to external websites, including the Town to City Steam store page and other game-related resources. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any website you visit after following a link from the Town to City Guide.
            </p>
          </div>
        </section>

        {/* Changes & Contact */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-blueprint-text mb-2">Changes to This Policy &amp; Contact</h2>
          <p className="text-blueprint-muted leading-relaxed mb-6">
            This Privacy Policy may be updated periodically to reflect changes in our practices, the services we use, or applicable regulations. The date at the top of this page indicates when the policy was last revised. Continued use of the site after any changes constitutes acceptance of the updated policy.
          </p>

          <div className="bluepr-card">
            <h3 className="font-display text-lg font-semibold text-blueprint-text mb-4">Contact</h3>
            <p className="text-blueprint-muted leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or the data practices of the Town to City Guide, you can reach us at:
            </p>
            <p className="font-mono text-blueprint-accent text-lg">
              sonic6640@gmail.com
            </p>
            <p className="text-blueprint-muted leading-relaxed mt-4">
              We will respond to privacy-related inquiries as promptly as possible, typically within 5 business days. Please note that since we do not maintain user accounts or collect personal data directly, data access or deletion requests related to third-party services must be directed to those services (Google Analytics, Google AdSense) in accordance with their respective policies.
            </p>
          </div>
        </section>

        {/* Bottom separator */}
        <div className="flex items-center gap-4 mt-16 mb-8">
          <div className="h-px flex-1 bg-blueprint-border"></div>
          <span className="text-xs text-blueprint-muted">End of Privacy Policy</span>
          <div className="h-px flex-1 bg-blueprint-border"></div>
        </div>

      </div>
    </main>
  );
}
