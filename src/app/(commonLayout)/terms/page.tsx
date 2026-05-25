export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
            Last updated: May 26, 2026
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-10 space-y-12 leading-relaxed">
        {/* Intro */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            These Terms describe the rules for using our services, how we
            operate, and what responsibilities both you and we have while using
            the platform. By accessing the service, you agree to these Terms.
          </p>
        </div>

        {/* Section 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3">1. Using Our Services</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            You must follow all applicable laws when using our services. You
            agree not to misuse, disrupt, or attempt to access the system in
            unauthorized ways.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-3">2. Accounts</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            Some features may require an account. You are responsible for
            maintaining the security of your account and all activity under it.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-3">3. Content</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            You retain ownership of content you create, but you grant us
            permission to process and display it as required to operate the
            service.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-3">4. Service Changes</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            We may update, modify, or discontinue features to improve
            performance, security, or compliance with legal obligations.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-xl font-semibold mb-3">5. Termination</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            We may suspend or terminate access if you violate these Terms or if
            required by law. You may also stop using the service at any time.
          </p>
        </div>

        {/* Liability */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            6. Limitation of Liability
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            To the maximum extent permitted by law, we are not responsible for
            indirect, incidental, or consequential damages arising from use of
            the service.
          </p>
        </div>

        {/* Legal */}
        <div>
          <h2 className="text-xl font-semibold mb-3">7. Legal Terms</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            These Terms are governed by applicable laws. If any provision is
            found invalid, the remaining provisions remain in effect.
          </p>
        </div>

        {/* Contact */}
        <div className="border-t pt-8">
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            If you have questions about these Terms, contact us at:
          </p>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            support@yourdomain.com
          </p>
        </div>
      </section>
    </main>
  );
}
