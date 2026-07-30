"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-[16px] md:px-[40px] h-20 bg-surface/80 backdrop-blur-xl border-b border-outline-variant">
        <div className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold text-primary">
          FOREX MINDSET ACADEMY
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            className="text-[16px] leading-[1.5] text-[#4ae176] font-medium hover:text-primary transition-colors"
            href="/"
          >
            Markets
          </Link>
          <Link
            className="text-[16px] leading-[1.5] text-primary font-bold border-b-2 border-primary pb-1"
            href="/courses"
          >
            Academy
          </Link>
          <Link
            className="text-[16px] leading-[1.5] text-[#4ae176] font-medium hover:text-primary transition-colors"
            href="#"
          >
            Signals
          </Link>
          <Link
            className="text-[16px] leading-[1.5] text-[#4ae176] font-medium hover:text-primary transition-colors"
            href="#"
          >
            Terminals
          </Link>
          <Link
            className="text-[16px] leading-[1.5] text-[#4ae176] font-medium hover:text-primary transition-colors"
            href="#"
          >
            Institutional
          </Link>
          <Link
            className="text-[16px] leading-[1.5] text-[#4ae176] font-medium hover:text-primary transition-colors"
            href="/contact"
          >
            Support
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 text-on-surface">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <button className="hidden md:block text-[16px] leading-[1.5] text-on-surface hover:text-primary transition-all duration-300">
            Login
          </button>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-[16px] leading-[1.5] active:scale-95 duration-150 ease-in-out transition-all">
            Open Account
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section: Academy Story */}
        <section className="py-24 px-[16px] md:px-[40px] max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
            <div className="md:col-span-7">
              <span className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-primary uppercase block mb-4">
                Our Legacy
              </span>
              <h1 className="font-['Playfair_Display'] text-[32px] md:text-[48px] leading-[1.2] md:leading-[1.1] font-bold tracking-[-0.02em] mb-8 text-on-surface">
                Forging Discipline in a World of Chaos.
              </h1>
              <p className="text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl mb-8">
                Forex Mindset Academy was born from a singular observation:
                technical skill alone does not create profitable traders.
                Founded in 2018, we bridge the gap between market theory and
                psychological mastery, providing a structured environment where
                serious traders develop the mental fortitude required for
                long-term success.
              </p>
              <div className="flex gap-4">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-primary">
                    5,000+
                  </div>
                  <div className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-on-surface-variant">
                    Active Students
                  </div>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-primary">
                    92%
                  </div>
                  <div className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-on-surface-variant">
                    Retention Rate
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="rounded-xl overflow-hidden aspect-[4/5] shadow-2xl border border-outline-variant/30 transition-all duration-300">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF78-hhooEhoGPMEUJJLfA0DJ2ypeU7UTV_gtFWPUl_fwwTmmdcPMlwJBc6UhKsPbSEyOt64j8daeZZ1C2Gc1WjaOQaxmdx4Y9mP-kzBInTOcmMszFdcrZ3dozeakZ7gwlZaCkTRE5hFhYhK4fDB9Zbs--SAaEydt7eaajnzAY9sgiPN6rDJI8H47k9qn47M6om2mwwQdzYw_wTv9kfwz7gHxvsjlmTy5DcTUqf6H5ek4Xs60316rs"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-surface-container-lowest px-[16px] md:px-[40px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {/* Mission */}
              <div className="bg-surface-container p-10 rounded-xl md:col-span-2 border-t-4 border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-6"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  target
                </span>
                <h2 className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold mb-4 text-primary">
                  The Academy Mission
                </h2>
                <p className="text-[16px] leading-[1.5] text-on-surface-variant leading-relaxed">
                  Our mission is to empower individuals with the psychological
                  resilience and structural discipline necessary to navigate
                  global markets. We don't just teach indicators; we
                  engineer the mindset of an institutional professional. By
                  combining rigorous technical analysis with cognitive
                  behavioral strategies, we transform retail traders into elite
                  market operators.
                </p>
              </div>
              {/* Vision */}
              <div className="bg-surface-bright p-10 rounded-xl text-on-surface border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  visibility
                </span>
                <h2 className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold mb-4 text-primary">
                  Vision 2030
                </h2>
                <p className="text-[16px] leading-[1.5] text-on-surface-variant leading-relaxed">
                  To become the global gold standard for psychological trading
                  education, setting the benchmark for ethical mentorship and
                  professional integrity in the financial world.
                </p>
              </div>
              {/* Values Grid Item 1 */}
              <div className="bg-surface-container p-8 rounded-xl flex flex-col items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50">
                <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">
                    verified_user
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold mb-3 text-primary">
                  Integrity First
                </h3>
                <p className="text-[16px] leading-[1.5] text-on-surface-variant">
                  We prioritize honest performance metrics and transparent risk
                  management over false promises of wealth.
                </p>
              </div>
              {/* Values Grid Item 2 */}
              <div className="bg-surface-container p-8 rounded-xl flex flex-col items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50">
                <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">
                    psychology
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold mb-3 text-primary">
                  Mindset Mastery
                </h3>
                <p className="text-[16px] leading-[1.5] text-on-surface-variant">
                  Success is 20% strategy and 80% psychology. Our curriculum
                  reflects this fundamental reality.
                </p>
              </div>
              {/* Values Grid Item 3 */}
              <div className="bg-surface-container p-8 rounded-xl flex flex-col items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50">
                <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">
                    groups
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold mb-3 text-primary">
                  Radical Support
                </h3>
                <p className="text-[16px] leading-[1.5] text-on-surface-variant">
                  We foster a community of accountability where no trader is
                  left behind in their journey to consistency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Profile Section */}
        <section className="py-24 px-[16px] md:px-[40px] max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 aspect-square rounded-xl overflow-hidden shadow-xl border border-outline-variant/30">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYO8UkoxGto_xRwQLeUohIQR9h5nkIwI3yb7dvsSQDi0B0cRe9m7xoi5A3bXDNAEtxQtstJLlt9AaseboZNLQd3IsJkziz2LHuCIpwXfPpdjOkUQohAO0KOWkqUsk4jVUzZweYNCIhN6h8e9q6GsUnLTlHim3KdgviN_IY0vxtsWmIk-YkvmifOek6IInaCJ3hzOumvhjqwmuGGMsk1rkh-drQW8Vz6ke6MPSiquicOBCbdVLHOFt2"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-primary mb-4 block">
                The Visionary
              </span>
              <h2 className="font-['Playfair_Display'] text-[32px] md:text-[48px] leading-[1.2] md:leading-[1.1] font-bold tracking-[-0.02em] mb-6 text-on-surface">
                Marcus Sterling
              </h2>
              <div className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] bg-primary text-on-primary inline-block px-3 py-1 rounded mb-6">
                Founder & Head Mentor
              </div>
              <div className="space-y-6">
                <p className="text-[18px] leading-[1.6] text-on-surface-variant leading-relaxed">
                  With over 15 years of institutional trading experience, Marcus
                  Sterling founded Forex Mindset Academy to solve the
                  &ldquo;emotional burnout&rdquo; he witnessed in countless
                  talented traders. Having managed private equity funds in London
                  and Singapore, Marcus understands that the market doesn't
                  trade price—it trades human emotion.
                </p>
                <p className="text-[16px] leading-[1.5] text-on-surface-variant italic border-l-2 border-primary pl-6">
                  &ldquo;Most traders fail because they fight the market. The
                  elite succeed because they have mastered themselves. My
                  mission is to provide the roadmap for that internal
                  mastery.&rdquo;
                </p>
                <div className="flex gap-4 pt-4">
                  <Link
                    className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-sm">
                      link
                    </span>
                  </Link>
                  <Link
                    className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-sm">
                      public
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-24 bg-surface-container px-[16px] md:px-[40px] border-t border-outline-variant/30">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-['Playfair_Display'] text-[32px] md:text-[48px] leading-[1.2] md:leading-[1.1] font-bold tracking-[-0.02em] mb-4 text-primary">
                The Execution Team
              </h2>
              <p className="text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl mx-auto">
                Our multi-disciplinary team brings together global expertise in
                technical analysis, behavioral psychology, and community
                management.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {/* Technical Analyst */}
              <div className="group">
                <div className="bg-surface-container-low rounded-xl overflow-hidden mb-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50 border border-outline-variant/30">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW0MAEiJrHXW47DG8O86TBVxeRLpqauybW1bialJ2yaqtkKeC0g95eHJBy86f2VWcFjm48teQT-uH1t_ZDbw68gI6MRP89_C_XlCPV6bMThJkAZz_aLwFCeaY7Lz1DdCWAzG0KikllsxF2Eeth-2wo0jCdFFDMacUSgDWHNHaPZVqWW5xjSQcZeDyWnOf7SWOKsyEHewThzw_3_1u8jwsd4WvD-YrSt-ADklpPm_uTwi3mJ5Aba3BV"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-primary">
                      Sarah Jenkins
                    </h4>
                    <p className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-primary/70 mb-3 uppercase">
                      Technical Analyst
                    </p>
                    <p className="text-[16px] leading-[1.5] text-on-surface-variant line-clamp-3">
                      Specializing in price action and structural market
                      dynamics with a focus on high-timeframe confluence.
                    </p>
                  </div>
                </div>
              </div>
              {/* Student Support */}
              <div className="group">
                <div className="bg-surface-container-low rounded-xl overflow-hidden mb-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50 border border-outline-variant/30">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE-8l-8uoGAaVK6kU_ZphdWOoVG1QuV5ekI9bH9JOgwaN6kfaItL8Jpdj-wVt90iAISniFvJeKTGm3wAxWNHKEVuhGFS1qda03JKb44kz8Qsa_fJgla2H81TKn0A0f3GRw03GWCoLMXGFAQd8sxde4WCZoh4_YDwfPTzga4kxJ9w23mnyUfexSpOM3kobK6oywZZQclDmM2RD4BV0unX9egkW_YF_QmRCoLLDI7dc9CpQ__7GkyKyO"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-primary">
                      David Chen
                    </h4>
                    <p className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-primary/70 mb-3 uppercase">
                      Student Support
                    </p>
                    <p className="text-[16px] leading-[1.5] text-on-surface-variant line-clamp-3">
                      Dedicated to ensuring every academy member has the tools
                      and technical help they need to progress.
                    </p>
                  </div>
                </div>
              </div>
              {/* Marketing Lead */}
              <div className="group">
                <div className="bg-surface-container-low rounded-xl overflow-hidden mb-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50 border border-outline-variant/30">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQipbpdD8iYLdIwCanH28rqQ10DS8825TAQaQuuitFipIXMt596V6JTZhziRMW-cRNdTciii4l0Vm7GEie0OpG4TQdks6yrLNZ8aPSSsGAzEtzLGUYJR0QwzN6nzLFqpIEFF4J4VplRmo-3_q44hYV2lwnTD6l1xWY9yzoFt1o_Pzv-zYvgQ-M5jFEI344PbageacRyoJwBVu7h-8afWHmUOG8T6dk_mQGAC_8T16UX7NEnqVQOHQ_"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-primary">
                      Elena Rodriguez
                    </h4>
                    <p className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-primary/70 mb-3 uppercase">
                      Marketing Lead
                    </p>
                    <p className="text-[16px] leading-[1.5] text-on-surface-variant line-clamp-3">
                      Crafting our global message of discipline and resilience
                      to reach traders who are ready for the next level.
                    </p>
                  </div>
                </div>
              </div>
              {/* Community Manager */}
              <div className="group">
                <div className="bg-surface-container-low rounded-xl overflow-hidden mb-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50 border border-outline-variant/30">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx9KqB0Kw8AjzJG6Q1diTGt1I-xHoqUG8Ag0pLUum3-M4T6pUzGpMpHfA5IQMeJ_PNj5TRjH99B930GNJEyeJ1h7e31ZUlM55486O8xo9YS4yjLth8fUi3OQpwucj3scFdQJHciDfyMffqIk13YSXQHBWYatW3AFcpbaNS0UkUhnHjGizIyiyWXz5LSUmrvaAx-nIkAxbUt2cmM5921x7y8A8KGd4Ps0UyBP37qPMLa9Wuyt_XaYTy"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-primary">
                      James Wilson
                    </h4>
                    <p className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-primary/70 mb-3 uppercase">
                      Community Manager
                    </p>
                    <p className="text-[16px] leading-[1.5] text-on-surface-variant line-clamp-3">
                      The heartbeat of our Discord and Telegram groups,
                      fostering a culture of mutual respect and growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-[16px] md:px-[40px] text-center">
          <div className="max-w-3xl mx-auto bg-surface-container p-12 rounded-2xl shadow-xl border-t-4 border-primary transition-all duration-300 hover:-translate-y-1">
            <h2 className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold mb-6 text-primary">
              Ready to Rewrite Your Trading Story?
            </h2>
            <p className="text-[18px] leading-[1.6] opacity-80 mb-10 text-on-surface-variant">
              Join thousands of disciplined traders who have moved beyond the
              noise and mastered the mindset of the 1%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-[16px] leading-[1.5] hover:bg-tertiary transition-all shadow-md active:scale-95">
                Start Your Journey
              </button>
              <button className="border border-primary text-primary px-10 py-4 rounded-lg font-bold text-[16px] leading-[1.5] hover:bg-primary hover:text-on-primary transition-all active:scale-95">
                Download Academy Prospectus
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant">
        <div className="w-full py-16 px-[16px] md:px-[40px] flex flex-col md:flex-row justify-between items-center gap-[8px] max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold text-primary">
              FOREX MINDSET ACADEMY
            </div>
            <p className="text-[16px] leading-[1.5] text-on-surface-variant max-w-md text-center md:text-left">
              Empowering traders through psychological resilience and
              institutional grade discipline.
            </p>
            <p className="text-[12px] leading-[1.2] font-[600] text-on-surface-variant opacity-60">
              &copy; 2024 Forex Mindset Academy. Institutional Grade Trading.
              All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8 md:mt-0">
            <Link
              className="text-[16px] leading-[1.5] text-on-surface-variant hover:text-primary hover:underline transition-all"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-[16px] leading-[1.5] text-on-surface-variant hover:text-primary hover:underline transition-all"
              href="#"
            >
              Risk Disclosure
            </Link>
            <Link
              className="text-[16px] leading-[1.5] text-on-surface-variant hover:text-primary hover:underline transition-all"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-[16px] leading-[1.5] text-on-surface-variant hover:text-primary hover:underline transition-all"
              href="#"
            >
              AML Policy
            </Link>
            <Link
              className="text-[16px] leading-[1.5] text-on-surface-variant hover:text-primary hover:underline transition-all"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}