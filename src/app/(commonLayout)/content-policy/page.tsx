export default function ContentPolicyPage() {
  const sections = [
    {
      id: "overview",
      title: "Platform Overview",
      paragraphs: [
        "Our platform is designed to encourage creativity, discussion, learning, and responsible publishing while maintaining a safe and trustworthy environment for all users.",
        "These Content Policies explain what content is allowed, restricted, or prohibited across our services, products, applications, communities, and related systems.",
        "By using the platform, publishing content, or interacting with other users, you agree to follow these policies and all applicable laws and regulations.",
        "These guidelines apply to all forms of user-generated content including text, comments, images, videos, links, metadata, profile information, messages, embedded content, and external references.",
      ],
    },

    {
      id: "illegal-content",
      title: "Illegal Content",
      paragraphs: [
        "Users may not publish, distribute, promote, or facilitate illegal activities through the platform.",
        "Content that violates local, national, or international laws may be removed without prior notice and may result in account suspension or permanent termination.",
        "Examples include fraud, financial scams, identity theft, phishing, unauthorized access attempts, illegal distribution of copyrighted material, or facilitation of criminal activity.",
        "We may cooperate with law enforcement agencies or legal authorities when legally required or when necessary to protect users, systems, or the public.",
        "Attempts to evade enforcement actions, moderation systems, or platform restrictions may also result in penalties under these policies.",
      ],
    },

    {
      id: "dangerous-content",
      title: "Dangerous and Harmful Content",
      paragraphs: [
        "Content intended to encourage violence, physical harm, terrorism, organized criminal activity, or dangerous behavior is strictly prohibited.",
        "Users may not promote instructions for violent acts, harmful weapons usage, explosives creation, or coordinated harmful activity.",
        "Graphic or excessively violent content may be removed if it is considered disturbing, exploitative, or intended to glorify violence.",
        "Educational, documentary, scientific, or journalistic references may be allowed when context is clear and the content serves legitimate public interest purposes.",
        "We reserve the right to restrict content that may create substantial real-world safety risks, even when legality varies by jurisdiction.",
      ],
    },

    {
      id: "hate-harassment",
      title: "Hate Speech and Harassment",
      paragraphs: [
        "Users must not engage in hateful conduct, harassment, intimidation, abuse, or targeted attacks against individuals or groups.",
        "Content that promotes discrimination or hatred based on protected characteristics may be removed immediately.",
        "This includes attacks related to race, ethnicity, nationality, religion, disability, gender identity, sexual orientation, or similar protected categories.",
        "Harassment may include repeated unwanted contact, coordinated abuse campaigns, threats, humiliation, or attempts to silence or intimidate others.",
        "We aim to support open discussion while preventing behavior that creates hostile or unsafe participation environments.",
        "Context matters during enforcement decisions, including satire, criticism, educational discussion, public interest reporting, and artistic expression.",
      ],
    },

    {
      id: "misinformation",
      title: "Misinformation and Deceptive Practices",
      paragraphs: [
        "Users may not intentionally spread misleading or deceptive information that could cause harm to individuals, communities, or public systems.",
        "This includes fraudulent impersonation, manipulated media, deceptive financial schemes, false emergency claims, or coordinated misinformation campaigns.",
        "Content designed to manipulate engagement, artificially inflate metrics, or deceive users regarding authenticity may also violate these policies.",
        "We may reduce visibility, label, restrict, or remove misleading content depending on severity, risk level, and potential harm.",
        "Certain sensitive topics may require additional review standards, including public safety issues, elections, health information, and financial fraud.",
      ],
    },

    {
      id: "spam",
      title: "Spam and Platform Manipulation",
      paragraphs: [
        "Spam, repetitive posting, automated abuse, mass solicitation, and manipulative engagement tactics are not permitted.",
        "Users may not artificially increase views, followers, reactions, comments, rankings, or engagement through deceptive or automated means.",
        "Unsolicited promotional behavior, malicious linking practices, and excessive repetitive publishing may result in visibility restrictions or enforcement actions.",
        "Accounts created primarily for manipulation, traffic redirection, or deceptive monetization may be permanently removed.",
        "We continuously monitor abusive behavior patterns to maintain platform quality and user trust.",
      ],
    },

    {
      id: "adult-content",
      title: "Adult and Explicit Content",
      paragraphs: [
        "Certain forms of adult content may be restricted depending on context, local regulations, platform surfaces, and audience accessibility.",
        "Sexually exploitative material, non-consensual intimate imagery, exploitative nudity, or harmful sexual content is strictly prohibited.",
        "Content involving minors in any sexualized context will result in immediate enforcement actions and may be reported to appropriate authorities.",
        "We may age-restrict or limit distribution of sensitive content that is legal but unsuitable for broader audiences.",
        "Repeated violations involving explicit or exploitative content may result in permanent account removal.",
      ],
    },

    {
      id: "child-safety",
      title: "Child Safety",
      paragraphs: [
        "Protecting minors is a high-priority responsibility across our services.",
        "Any content involving child exploitation, grooming behavior, abuse material, or sexualization of minors is strictly prohibited.",
        "Users may not use the platform to endanger children, facilitate exploitation, or bypass child safety protections.",
        "We may employ automated systems, moderation technologies, and reporting mechanisms to identify and remove harmful material.",
        "Violations involving child safety may result in immediate reporting to relevant legal authorities.",
      ],
    },

    {
      id: "copyright",
      title: "Copyright and Intellectual Property",
      paragraphs: [
        "Users are responsible for ensuring they have the legal rights necessary to publish or distribute content on the platform.",
        "Unauthorized reproduction, distribution, or monetization of copyrighted material may result in removal or enforcement actions.",
        "Trademark violations, impersonation of brands, counterfeit promotion, or unauthorized commercial use may also violate these policies.",
        "Rights holders may submit valid legal requests regarding infringing content in accordance with applicable laws.",
        "Repeated intellectual property violations may lead to account restrictions or permanent removal.",
      ],
    },

    {
      id: "privacy",
      title: "Privacy and Personal Information",
      paragraphs: [
        "Users may not publish private or confidential information without proper authorization.",
        "This includes sensitive identification details, financial records, passwords, private contact information, medical data, or confidential documents.",
        "Doxxing, stalking, surveillance abuse, or publication of personal information intended to threaten or intimidate others is prohibited.",
        "We may remove content and restrict accounts involved in privacy violations even when content originates from external sources.",
        "Users are encouraged to report unauthorized sharing of personal information through available safety channels.",
      ],
    },

    {
      id: "security-abuse",
      title: "Security Abuse",
      paragraphs: [
        "Users may not exploit vulnerabilities, bypass security systems, distribute malware, or interfere with platform integrity.",
        "Attempts to disrupt infrastructure, abuse APIs, scrape restricted systems, or gain unauthorized access are prohibited.",
        "Malicious software distribution, credential theft, phishing attempts, or deceptive login interfaces may result in immediate enforcement actions.",
        "Security research conducted responsibly and disclosed appropriately may be treated differently depending on intent and impact.",
        "We reserve the right to investigate suspicious technical behavior to protect platform security and reliability.",
      ],
    },

    {
      id: "monetization",
      title: "Monetization and Advertising",
      paragraphs: [
        "Users participating in monetization or promotional activities must comply with advertising standards, disclosure requirements, and applicable regulations.",
        "Misleading advertising, deceptive affiliate behavior, fake endorsements, or hidden sponsorships are not permitted.",
        "Financial schemes promising unrealistic returns or exploiting vulnerable users may result in immediate restrictions.",
        "We may review monetized content under enhanced quality and trust standards to protect users and advertisers.",
        "Advertising systems may include additional review requirements depending on region, category, and risk level.",
      ],
    },

    {
      id: "enforcement",
      title: "Enforcement and Moderation",
      paragraphs: [
        "We use a combination of automated systems, human review, user reports, and policy analysis to enforce these Content Policies.",
        "Enforcement actions may include content removal, reduced visibility, temporary restrictions, demonetization, account suspension, or permanent termination.",
        "Severity, context, recurrence, intent, and real-world harm potential may influence enforcement decisions.",
        "Some violations may result in immediate action without warning, especially where safety or legal risks are involved.",
        "We may also restrict access to certain features or platform surfaces based on repeated policy violations.",
        "Appeal mechanisms may be available in certain situations where users believe enforcement actions were incorrect.",
      ],
    },

    {
      id: "algorithmic-distribution",
      title: "Recommendation Systems and Distribution",
      paragraphs: [
        "Platform recommendation systems are designed to improve content discovery while maintaining safety, quality, and trust standards.",
        "Content that violates or approaches policy boundaries may have reduced distribution even if not fully removed.",
        "We may limit amplification of misleading, low-quality, manipulative, or harmful material.",
        "Ranking systems may consider factors such as authenticity signals, user feedback, safety indicators, and engagement quality.",
        "Distribution decisions may vary across products, surfaces, and geographic regions.",
      ],
    },

    {
      id: "government-requests",
      title: "Government Requests and Legal Compliance",
      paragraphs: [
        "We may respond to lawful requests from governments, regulators, or courts where legally required.",
        "Requests may involve content restrictions, account information disclosures, or compliance obligations under applicable laws.",
        "We evaluate requests carefully and may challenge requests that appear overbroad, invalid, or inconsistent with user rights.",
        "In some situations, users may be notified regarding legal requests unless prohibited by law or safety concerns.",
      ],
    },

    {
      id: "policy-evolution",
      title: "Policy Evolution",
      paragraphs: [
        "Our Content Policies may evolve over time to reflect technological developments, legal requirements, safety research, and emerging risks.",
        "We regularly review enforcement systems, platform design, and moderation practices to improve consistency and fairness.",
        "Changes may be introduced without prior notice when necessary to address urgent abuse patterns or legal obligations.",
        "Users are encouraged to periodically review policy updates to remain informed about platform expectations and responsibilities.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 backdrop-blur bg-white/80 dark:bg-neutral-950/80">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold tracking-tight">
              Content Policy
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
            <a
              href="#overview"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Overview
            </a>

            <a
              href="#enforcement"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Enforcement
            </a>

            <a
              href="#policy-evolution"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Updates
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.25em] text-sm text-neutral-500 dark:text-neutral-400 mb-6">
              Community Standards
            </p>

            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
              Building a safer,
              <br />
              more trusted platform.
            </h2>

            <p className="mt-10 text-lg leading-8 text-neutral-600 dark:text-neutral-300 max-w-3xl">
              These Content Policies help protect users, maintain platform
              integrity, encourage responsible participation, and support
              healthy digital communities across all products and services.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <span>Last updated: May 26, 2026</span>
              <span className="hidden sm:block">•</span>
              <span>Global Policy Standards</span>
              <span className="hidden sm:block">•</span>
              <span>Trust & Safety Framework</span>
            </div>
          </div>
        </div>
      </section>

      {/* Layout */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-20">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-5">
                CONTENT POLICY
              </p>

              <nav className="space-y-1 max-h-[80vh] overflow-auto pr-2">
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

          {/* Main Content */}
          <div className="max-w-4xl">
            <div className="space-y-24">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  <div className="flex items-center gap-5 mb-8">
                    <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />

                    <span className="text-sm text-neutral-400 dark:text-neutral-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-4xl font-semibold tracking-tight mb-10">
                    {section.title}
                  </h3>

                  <div className="space-y-7">
                    {section.paragraphs.map((paragraph, idx) => (
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

              {/* Huge Ending */}
              <section className="border-t border-neutral-200 dark:border-neutral-800 pt-20">
                <h3 className="text-4xl font-semibold tracking-tight mb-10">
                  Final Notes
                </h3>

                <div className="space-y-7 text-[17px] leading-8 text-neutral-700 dark:text-neutral-300">
                  <p>
                    Maintaining a safe and reliable platform requires ongoing
                    cooperation between users, moderators, safety teams,
                    engineers, researchers, and policy specialists.
                  </p>

                  <p>
                    We recognize that policy enforcement can involve complex
                    contextual decisions, evolving cultural expectations, and
                    varying legal standards across jurisdictions.
                  </p>

                  <p>
                    Our goal is to balance freedom of expression with the
                    responsibility to reduce harm, prevent abuse, and protect
                    users from exploitation, manipulation, and dangerous
                    behavior.
                  </p>

                  <p>
                    We continue investing in safety systems, transparency
                    initiatives, moderation infrastructure, reporting tools, and
                    educational resources to improve platform health and
                    accountability over time.
                  </p>

                  <p>
                    Users who repeatedly or severely violate these policies may
                    permanently lose access to platform services, monetization
                    systems, or community participation privileges.
                  </p>

                  <p>
                    By continuing to use the platform, users acknowledge
                    responsibility for their content, interactions, and
                    compliance with these policies and applicable laws.
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
