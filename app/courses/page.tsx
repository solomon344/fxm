"use client";

import Link from "next/link";

export default function CoursesPage() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-[16px] md:px-[40px] h-20 bg-surface/80 backdrop-blur-xl border-b border-outline-variant">
        <div className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold text-primary">
          FOREX MINDSET ACADEMY
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            className="text-[#4ae176] font-medium hover:text-primary transition-colors text-[16px] leading-[1.5]"
            href="/"
          >
            Markets
          </Link>
          <Link
            className="text-primary font-bold border-b-2 border-primary pb-1 text-[16px] leading-[1.5]"
            href="/courses"
          >
            Academy
          </Link>
          <Link
            className="text-[#4ae176] font-medium hover:text-primary transition-colors text-[16px] leading-[1.5]"
            href="#"
          >
            Signals
          </Link>
          <Link
            className="text-[#4ae176] font-medium hover:text-primary transition-colors text-[16px] leading-[1.5]"
            href="#"
          >
            Terminals
          </Link>
          <Link
            className="text-[#4ae176] font-medium hover:text-primary transition-colors text-[16px] leading-[1.5]"
            href="#"
          >
            Institutional
          </Link>
          <Link
            className="text-[#4ae176] font-medium hover:text-primary transition-colors text-[16px] leading-[1.5]"
            href="/contact"
          >
            Support
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-6 py-2 border border-outline text-on-surface font-medium rounded-lg hover:bg-surface-container transition-all active:scale-95 duration-150">
            Login
          </button>
          <button className="px-6 py-2 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90 transition-all active:scale-95 duration-150">
            Open Account
          </button>
          <button className="md:hidden p-2 text-on-surface">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-primary uppercase mb-4 block">
                Institutional Grade Education
              </span>
              <h1 className="font-['Playfair_Display'] text-[32px] md:text-[48px] leading-[1.2] md:leading-[1.1] font-bold tracking-[-0.02em] text-on-surface mb-6">
                Master the Market with Psychological Discipline
              </h1>
              <p className="text-[18px] leading-[1.6] text-on-surface-variant max-w-xl mb-8">
                Our curriculum is designed for serious traders. Move beyond
                retail concepts and embrace the structural discipline required
                for professional capital management.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-lg border border-outline-variant">
                  <span className="material-symbols-outlined text-primary">
                    verified
                  </span>
                  <span className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em]">
                    PRO CERTIFIED
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-lg border border-outline-variant">
                  <span className="material-symbols-outlined text-primary">
                    groups
                  </span>
                  <span className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em]">
                    15,000+ TRADERS
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl border border-outline-variant">
              <div className="absolute inset-0 bg-primary/5 z-10" />
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlE3k7iDTjkS09_xtBz26UZPgc8RvECsor8oauFnQ-QQk27YYnyWJTwP9OVhmEk1NSNl-nfrtvG7nMre6dRGuiV2FChr8gYHk5ysXrrNPPusc9Hmdi24Nh-Yhs3EIzzSV8RtAMSbRklo5HEUvra-6QL_AlbmXEZBQ_-ARJYUw-Aq5ku85PJViOkCvATOsIbspg744lF-UEtn0Oj1iuOazQp9BgTJGP9l7ZLvYCMG5dZTJu-2Ood_Lj"
              />
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] mb-12">
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="relative w-full md:w-96">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
              <input
                className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-on-surface transition-all placeholder-on-surface-variant"
                placeholder="Search programs..."
                type="text"
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-medium whitespace-nowrap">
                All Levels
              </button>
              <button className="px-4 py-2 bg-surface border border-outline-variant hover:bg-surface-container-high text-on-surface transition-colors rounded-lg font-medium whitespace-nowrap">
                Beginner
              </button>
              <button className="px-4 py-2 bg-surface border border-outline-variant hover:bg-surface-container-high text-on-surface transition-colors rounded-lg font-medium whitespace-nowrap">
                Intermediate
              </button>
              <button className="px-4 py-2 bg-surface border border-outline-variant hover:bg-surface-container-high text-on-surface transition-colors rounded-lg font-medium whitespace-nowrap">
                Advanced
              </button>
            </div>
          </div>
        </section>

        {/* Course Grid */}
        <section className="max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]">
            {/* Beginner Forex */}
            <div className="bg-surface-container-low border border-outline-variant rounded-lg flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_10px_40px_rgba(0,0,0,0.5)] hover:border-primary">
              <div className="h-48 relative">
                <div className="absolute top-4 left-4 z-20 bg-primary/90 px-3 py-1 rounded text-[10px] font-bold text-on-primary uppercase tracking-wider">
                  Level: Beginner
                </div>
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzLSGRBcA_gthAR4s3ZKcM1go7x7YbwhEml-cFA1is5DWsm5Y188BOM_pybjXutyIYbJdYe4pMaScko4CLVUi3W2C7Tw61nA-6_iCT34Vtlk_UDMnidW4Ng-a361Et8At2FMMspEEeloWw1_IFDUPeNOywM4GE56gtNBlpXAbVnr8OFZfYHh9jWGfDaXMYUOp6vrW85DVagoc51sToZaMjK48cU1PS7aigdemuTeFJqUHXD-aTzQ2b"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col border-t border-primary/20">
                <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-primary mb-2">
                  Beginner Forex
                </h3>
                <p className="text-on-surface-variant text-sm mb-4 line-clamp-3">
                  Master the fundamentals of the global currency markets. Learn
                  terminal navigation, order types, and basic chart anatomy.
                </p>
                <div className="flex items-center gap-4 mb-4 py-3 border-y border-outline-variant">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">
                      schedule
                    </span>
                    <span className="text-xs font-medium text-on-surface">
                      4 Weeks
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary">
                      payments
                    </span>
                    <span className="text-xs font-bold text-on-surface">
                      $299
                    </span>
                  </div>
                </div>
                <div className="mb-6 flex-grow">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    Learning Outcomes
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Market Structure 101</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Economic Calendars</span>
                    </li>
                  </ul>
                </div>
                <button className="w-full py-3 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Intermediate Forex */}
            <div className="bg-surface-container-low border border-outline-variant rounded-lg flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_10px_40px_rgba(0,0,0,0.5)] hover:border-primary">
              <div className="h-48 relative">
                <div className="absolute top-4 left-4 z-20 bg-primary/90 px-3 py-1 rounded text-[10px] font-bold text-on-primary uppercase tracking-wider">
                  Level: Intermediate
                </div>
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxvekOqshtKjGbY6T01slTJzsKhWxGLMbSg9HhE3fWwX4EjZDXZ7jTdH9igLVDjVknpd13ZYcEB7jy961Z4dEQiR4IHjIGPdAiofUb_jl9CEL8q1OUxyWFOnGj2sRxyd5aNk3SJTTQv3O2cFYB_fQY7o_1ICtohZkfOWAZJG45iHLA33wboDmrFRNZTcPKXyJtAX9AoIiIPMIdPVWvacSTnA7BpRX7FIUHMHShsejju-XchBByEuMq"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col border-t border-primary/20">
                <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-primary mb-2">
                  Intermediate Forex
                </h3>
                <p className="text-on-surface-variant text-sm mb-4 line-clamp-3">
                  Transition from theory to execution. Deep dive into Fibonacci
                  extensions, confluence trading, and trend analysis.
                </p>
                <div className="flex items-center gap-4 mb-4 py-3 border-y border-outline-variant">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">
                      schedule
                    </span>
                    <span className="text-xs font-medium text-on-surface">
                      6 Weeks
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary">
                      payments
                    </span>
                    <span className="text-xs font-bold text-on-surface">
                      $499
                    </span>
                  </div>
                </div>
                <div className="mb-6 flex-grow">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    Learning Outcomes
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Confluence Checklists</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Session Transitions</span>
                    </li>
                  </ul>
                </div>
                <button className="w-full py-3 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Advanced Forex */}
            <div className="bg-surface-container-low border border-outline-variant rounded-lg flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_10px_40px_rgba(0,0,0,0.5)] hover:border-primary">
              <div className="h-48 relative">
                <div className="absolute top-4 left-4 z-20 bg-primary/90 px-3 py-1 rounded text-[10px] font-bold text-on-primary uppercase tracking-wider">
                  Level: Advanced
                </div>
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY1XwlnxuV4P4pXWrPpo5zAXblyyJ6g5zQZ65qHkGL1Weoa3qDaBET03A3fO-9hO-zZ7lY7ixAXtKy8giYE1l_UYkXyJQjOMwZg_MItcZw0itzCKVJ9sRiDoyKFyAx005zWbBkxNBNsPBQWZvgop6IGhqdDUko8ZZQUDCfN2U2VVrdjL86f6A7mrmwKozs6rNZNkqVjr92k0hVF5vERN7rmOwqnQE-Fv6oVCsrGInJaIoMIg-5NSTq"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col border-t border-primary/20">
                <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-primary mb-2">
                  Advanced Forex
                </h3>
                <p className="text-on-surface-variant text-sm mb-4 line-clamp-3">
                  Master institutional order flow and HTF/LTF alignment.
                  Designed for those seeking professional funding.
                </p>
                <div className="flex items-center gap-4 mb-4 py-3 border-y border-outline-variant">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">
                      schedule
                    </span>
                    <span className="text-xs font-medium text-on-surface">
                      8 Weeks
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary">
                      payments
                    </span>
                    <span className="text-xs font-bold text-on-surface">
                      $799
                    </span>
                  </div>
                </div>
                <div className="mb-6 flex-grow">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    Learning Outcomes
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Prop Firm Readiness</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Volume Profile Mastery</span>
                    </li>
                  </ul>
                </div>
                <button className="w-full py-3 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Trading Psychology */}
            <div className="bg-surface-container-low border border-outline-variant rounded-lg flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_10px_40px_rgba(0,0,0,0.5)] hover:border-primary">
              <div className="h-48 relative">
                <div className="absolute top-4 left-4 z-20 bg-primary/90 px-3 py-1 rounded text-[10px] font-bold text-on-primary uppercase tracking-wider">
                  Level: Professional
                </div>
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2G2ANSAXsYLeTaZqNexs-tfRmYyms8a4pFh0cobr_cj0WneZtDGq6wj8pOTFk2a1N4NPY3gkmf8C0TEj9I5hI40JMn53hWTJ5ptrcMT4subIfyQrIHAQSF0XAiGclkGCt7NED1aw0L3oej2GaTXTVd-RmQUwR109TT19Yv6VnFgumKV0gLfkF5TjkXPZfGuerQQiX3HTQ-RnihfzlRbxLTd4yJ6OJa56UiLhhKjIb-hv3jWOMOQ-E"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col border-t border-primary/20">
                <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-primary mb-2">
                  Trading Psychology
                </h3>
                <p className="text-on-surface-variant text-sm mb-4 line-clamp-3">
                  The most critical pillar. Conquer fear, greed, and FOMO
                  through structured mental frameworks.
                </p>
                <div className="flex items-center gap-4 mb-4 py-3 border-y border-outline-variant">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">
                      schedule
                    </span>
                    <span className="text-xs font-medium text-on-surface">
                      4 Weeks
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary">
                      payments
                    </span>
                    <span className="text-xs font-bold text-on-surface">
                      $349
                    </span>
                  </div>
                </div>
                <div className="mb-6 flex-grow">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    Learning Outcomes
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Cognitive Bias Awareness</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Routine Optimization</span>
                    </li>
                  </ul>
                </div>
                <button className="w-full py-3 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Risk Management */}
            <div className="bg-surface-container-low border border-outline-variant rounded-lg flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_10px_40px_rgba(0,0,0,0.5)] hover:border-primary">
              <div className="h-48 relative">
                <div className="absolute top-4 left-4 z-20 bg-primary/90 px-3 py-1 rounded text-[10px] font-bold text-on-primary uppercase tracking-wider">
                  Level: Essential
                </div>
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxR1tfCXE1Xs5JlVdIZkBDcMmDbBZ_7CNbkaQZuqNz1FMujU5HO62e6A_Ojc6njMuVOrfY6ukwBAcndAuuRLFMhteHgDnNNef3SzZJ6h5FgAJXJE8G27WeSah-UcRYyB7dUHJfYsA4FW-gzwxFfpujT7DmOSBHzsQMJIvGqP7omkcKuFVoJ12ZsU-XZkRjIiUIhGVQPD5oTV0_cd2WLlJoh6vxQPpcxKnO97904XjwJ9tlJR5KGegf"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col border-t border-primary/20">
                <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-primary mb-2">
                  Risk Management
                </h3>
                <p className="text-on-surface-variant text-sm mb-4 line-clamp-3">
                  Survival is the goal. Master position sizing, drawdown
                  control, and the mathematics of probability.
                </p>
                <div className="flex items-center gap-4 mb-4 py-3 border-y border-outline-variant">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">
                      schedule
                    </span>
                    <span className="text-xs font-medium text-on-surface">
                      3 Weeks
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary">
                      payments
                    </span>
                    <span className="text-xs font-bold text-on-surface">
                      $199
                    </span>
                  </div>
                </div>
                <div className="mb-6 flex-grow">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    Learning Outcomes
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Portfolio Scaling</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Equity Curve Analysis</span>
                    </li>
                  </ul>
                </div>
                <button className="w-full py-3 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Smart Money Concepts */}
            <div className="bg-surface-container-low border border-outline-variant rounded-lg flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_10px_40px_rgba(0,0,0,0.5)] hover:border-primary">
              <div className="h-48 relative">
                <div className="absolute top-4 left-4 z-20 bg-primary/90 px-3 py-1 rounded text-[10px] font-bold text-on-primary uppercase tracking-wider">
                  Level: Expert
                </div>
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_RJqT77Q9Nbj-yguZ25lDn84jBmV-P2FvuPXuci5mR2k5X8RAFfyPaf2852pPsR9_TenGOyVhL01Gz1DO_vzCSuMy8zP4ypedP5361h2nxGqaIN29iRhNRQMW0K1ODR7mjbzTNNd1arx9cJ7_mgacFAIDRR76_lP8fjdh1ptqy7vkHU9RfxqRqSyBBd-yRide998v53yaPIPwUrKrlKDqOWz59qqNx01juEreGK7Q0cn2CRC55u6j"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col border-t border-primary/20">
                <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-primary mb-2">
                  Smart Money Concepts
                </h3>
                <p className="text-on-surface-variant text-sm mb-4 line-clamp-3">
                  Uncover where the banks are hiding. Learn Liquidity, Fair
                  Value Gaps (FVG), and Mitigation Blocks.
                </p>
                <div className="flex items-center gap-4 mb-4 py-3 border-y border-outline-variant">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">
                      schedule
                    </span>
                    <span className="text-xs font-medium text-on-surface">
                      10 Weeks
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary">
                      payments
                    </span>
                    <span className="text-xs font-bold text-on-surface">
                      $999
                    </span>
                  </div>
                </div>
                <div className="mb-6 flex-grow">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    Learning Outcomes
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Institutional Footprints</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Order Flow Trading</span>
                    </li>
                  </ul>
                </div>
                <button className="w-full py-3 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Live Market Analysis */}
            <div className="bg-surface-container-low border border-outline-variant rounded-lg flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_10px_40px_rgba(0,0,0,0.5)] hover:border-primary">
              <div className="h-48 relative">
                <div className="absolute top-4 left-4 z-20 bg-primary/90 px-3 py-1 rounded text-[10px] font-bold text-on-primary uppercase tracking-wider">
                  Level: Practical
                </div>
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6acTvPQplQVa_J8J6VpVLPVF2WL_7kBhpsFP8gc62-ih5xzXqdwsfBMDJa7R1Dc1X0Bddx-c7l-5V4xQTd3r0yYKvy8eU5ACw6gJm5pe08y0rV08WVAxRhPFBwj7Q-Vk3fFuEW2v0bLicBELTuoktrrnarRblQPaOY7UNn_Xtx4GNAwXJ4biwGVCDuSI-HBUs-vm6G7bE-2ugW1iwWf33N3n22EJB4ofgFgIsTAR6OvJrcrk3qvm4"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col border-t border-primary/20">
                <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-primary mb-2">
                  Live Market Analysis
                </h3>
                <p className="text-on-surface-variant text-sm mb-4 line-clamp-3">
                  Daily live sessions covering London and NY opens. Witness
                  professional analysis applied in real-time.
                </p>
                <div className="flex items-center gap-4 mb-4 py-3 border-y border-outline-variant">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">
                      schedule
                    </span>
                    <span className="text-xs font-medium text-on-surface">
                      Monthly
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary">
                      payments
                    </span>
                    <span className="text-xs font-bold text-on-surface">
                      $149/mo
                    </span>
                  </div>
                </div>
                <div className="mb-6 flex-grow">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    Learning Outcomes
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Live Execution Training</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Daily Bias Development</span>
                    </li>
                  </ul>
                </div>
                <button className="w-full py-3 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Mentorship Program */}
            <div className="bg-surface-container-low border border-outline-variant rounded-lg flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_10px_40px_rgba(0,0,0,0.5)] hover:border-primary">
              <div className="h-48 relative">
                <div className="absolute top-4 left-4 z-20 bg-primary/90 px-3 py-1 rounded text-[10px] font-bold text-on-primary uppercase tracking-wider">
                  Level: Elite
                </div>
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYcNtV1tejoTBWE39ozjyNtEtQO2cVGPb0GDac-VUAbWfzbR6QMB03xVwCOIEiJWH0bjMQnjE4EQ9B3Ug1aLJ-8Bxn40plizONU68xLEmTcONnSOnC9Xee7qmXqV0IJ3alIUsiN-nMu4AsOnJHjs6eXcUcbOZ9RWTqE7MtP_nXd96Ag_Vdga09e-QdooIimojtbVV785DPF-oU7qIkPK6azmA61Q4EfBwt0j7cdTgeN1zYd6Ex2a07"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col border-t border-primary/20">
                <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-primary mb-2">
                  Mentorship Program
                </h3>
                <p className="text-on-surface-variant text-sm mb-4 line-clamp-3">
                  Direct 1-on-1 coaching with senior academy mentors.
                  Customized trading plan development and review.
                </p>
                <div className="flex items-center gap-4 mb-4 py-3 border-y border-outline-variant">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">
                      schedule
                    </span>
                    <span className="text-xs font-medium text-on-surface">
                      12 Weeks
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary">
                      payments
                    </span>
                    <span className="text-xs font-bold text-on-surface">
                      $2,499
                    </span>
                  </div>
                </div>
                <div className="mb-6 flex-grow">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    Learning Outcomes
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Personalized Feedback</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span>Private Group Access</span>
                    </li>
                  </ul>
                </div>
                <button className="w-full py-3 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90 transition-all">
                  Apply to Join
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-24 max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
          <div className="bg-surface-container text-on-surface p-12 rounded-2xl relative overflow-hidden border border-outline-variant shadow-2xl">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 hidden lg:block" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-['Playfair_Display'] text-[32px] md:text-[48px] leading-[1.2] md:leading-[1.1] font-bold tracking-[-0.02em] text-primary mb-4">
                Ready to Change Your Mindset?
              </h2>
              <p className="text-[18px] leading-[1.6] text-on-surface-variant mb-8">
                Join the academy today and get instant access to our beginner
                foundation course and our community of over 15,000 traders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary text-on-primary font-bold rounded-lg text-lg hover:opacity-95 transition-all">
                  Start Your Journey
                </button>
                <button className="px-8 py-4 border border-outline text-on-surface font-bold rounded-lg text-lg hover:bg-white/5 transition-all">
                  View Curriculum PDF
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant">
        <div className="w-full py-16 px-[16px] md:px-[40px] flex flex-col md:flex-row justify-between items-center gap-[8px] max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold text-primary mb-4">
              FOREX MINDSET ACADEMY
            </div>
            <p className="text-[16px] leading-[1.5] text-on-surface-variant max-w-md text-center md:text-left">
              &copy; 2024 Forex Mindset Academy. Institutional Grade Trading.
              All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-8 md:mt-0">
            <Link
              className="text-[12px] leading-[1.2] font-[600] text-on-surface-variant hover:text-primary transition-colors hover:underline"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-[12px] leading-[1.2] font-[600] text-on-surface-variant hover:text-primary transition-colors hover:underline"
              href="#"
            >
              Risk Disclosure
            </Link>
            <Link
              className="text-[12px] leading-[1.2] font-[600] text-on-surface-variant hover:text-primary transition-colors hover:underline"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-[12px] leading-[1.2] font-[600] text-on-surface-variant hover:text-primary transition-colors hover:underline"
              href="#"
            >
              AML Policy
            </Link>
            <Link
              className="text-[12px] leading-[1.2] font-[600] text-on-surface-variant hover:text-primary transition-colors hover:underline"
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