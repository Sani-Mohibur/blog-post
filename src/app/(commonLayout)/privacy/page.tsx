export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      content: [
        "We collect information you provide directly to us, including account details, profile information, messages, uploaded content, and communication preferences.",
        "We may also automatically collect technical information such as browser type, device information, operating system, IP address, pages visited, session duration, and interaction patterns to improve platform reliability and performance.",
        "Cookies and similar technologies may be used to personalize experiences, maintain sessions, analyze traffic, and improve usability across devices.",
      ],
    },
    {
      id: "how-we-use-information",
      title: "How We Use Information",
      content: [
        "We use collected information to provide, maintain, secure, and improve our services.",
        "Information may also be used for personalization, customer support, analytics, fraud prevention, feature development, service optimization, and communication regarding updates or policy changes.",
        "We may use aggregated and anonymized data for research, reporting, and platform improvement purposes.",
      ],
    },
    {
      id: "sharing-information",
      title: "Sharing Information",
      content: [
        "We do not sell your personal information.",
        "Information may be shared with trusted service providers that help us operate infrastructure, analytics, payment processing, communication systems, or security monitoring.",
        "We may disclose information when required by applicable law, legal process, or governmental request, or when necessary to protect rights, users, systems, or public safety.",
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention",
      content: [
        "We retain information for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements.",
        "Retention periods may vary depending on the type of data, account activity, operational requirements, and legal obligations.",
      ],
    },
    {
      id: "security",
      title: "Security",
      content: [
        "We implement administrative, technical, and organizational safeguards designed to protect information against unauthorized access, disclosure, alteration, or destruction.",
        "While we work continuously to maintain strong security standards, no online system can guarantee absolute security.",
      ],
    },
    {
      id: "your-controls",
      title: "Your Controls and Choices",
      content: [
        "You may access, update, export, or delete certain account information through account settings where available.",
        "You may also manage browser cookies, notification preferences, and communication settings.",
        "Depending on your location, you may have additional rights related to personal data access, correction, restriction, portability, or deletion.",
      ],
    },
    {
      id: "children",
      title: "Children’s Privacy",
      content: [
        "Our services are not directed toward children under the applicable minimum age in your jurisdiction.",
        "We do not knowingly collect personal information from children without appropriate legal authorization.",
      ],
    },
    {
      id: "international-transfers",
      title: "International Data Transfers",
      content: [
        "Information may be processed and stored in countries outside your place of residence where data protection laws may differ.",
        "We take reasonable measures to ensure appropriate safeguards are in place for international data transfers.",
      ],
    },
    {
      id: "policy-updates",
      title: "Policy Updates",
      content: [
        "We may update this Privacy Policy periodically to reflect operational, legal, regulatory, or technical changes.",
        "When significant changes are made, we may provide additional notice through the platform or other communication channels.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300">
      {/* Top Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-neutral-950/80 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold tracking-tight">
              Privacy Policy
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
            <a
              href="#information-we-collect"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Data
            </a>

            <a
              href="#security"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Security
            </a>

            <a
              href="#your-controls"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Controls
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mb-5">
              Transparency & Trust
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Your privacy matters.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              This Privacy Policy explains how we collect, use, protect, and
              process information when you use our platform, products, and
              services.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <span>Last updated: May 26, 2026</span>
              <span className="hidden sm:block">•</span>
              <span>Global Privacy Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-5">
                ON THIS PAGE
              </p>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-xl px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white transition-all"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="max-w-3xl">
            <div className="space-y-20">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />

                    <span className="text-sm text-neutral-400 dark:text-neutral-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-3xl font-semibold tracking-tight mb-8">
                    {section.title}
                  </h3>

                  <div className="space-y-6">
                    {section.content.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-[17px] leading-8 text-neutral-700 dark:text-neutral-300"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              {/* Extra Long Legal Section */}
              <section className="border-t border-neutral-200 dark:border-neutral-800 pt-16">
                <h3 className="text-3xl font-semibold tracking-tight mb-8">
                  Additional Legal Information
                </h3>

                <div className="space-y-6 text-[17px] leading-8 text-neutral-700 dark:text-neutral-300">
                  <p>
                    We are committed to maintaining responsible data practices,
                    transparency, and user trust across all products and
                    services. Our systems are designed with privacy
                    considerations integrated into development, operational
                    processes, and infrastructure.
                  </p>

                  <p>
                    Access to personal information is restricted to authorized
                    personnel, contractors, and service providers who require
                    access for legitimate operational purposes and are subject
                    to appropriate confidentiality obligations.
                  </p>

                  <p>
                    Depending on jurisdiction, certain privacy rights may apply
                    differently under regional regulations. Users may contact us
                    regarding requests related to personal data access,
                    correction, deletion, objection, portability, or processing
                    restrictions.
                  </p>

                  <p>
                    We continuously review our privacy and security practices to
                    improve reliability, accountability, compliance, and
                    platform integrity in response to evolving technologies and
                    regulatory requirements.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
