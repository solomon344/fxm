"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add("bg-surface/95", "shadow-2xl", "shadow-black/20");
        } else {
          header.classList.remove("bg-surface/95", "shadow-2xl", "shadow-black/20");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-[16px] md:px-[40px] h-20 bg-surface/80 backdrop-blur-xl border-b border-outline-variant">
        <div className="flex items-center gap-3">
          <img
            alt="Forex Mindset Logo"
            className="h-10 w-10 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLRxCdh5uzPgk59Kuoi2U5wwV_bdI2uK05gCjCvdEFSFhyQRbzV6jMdXm0qFpCTk7mY4sPUjV1utOO9aoOK5J8fOJSzBzKY5wZyG_tZmWc0ihWNmek--Ial1hDnWc7WY6jiTJRQdC5KD-0twH8aYEhcRInZaN_fQfQNrtbS4pqz7n0tM9k_mckZp0oki7_d9VCEYB2nGa-q8Kt0iHgQ0TEJRhbflpXirtZigMi_GRvWEv_5Z4XFnn-Pm5oFXZsq09bBw"
          />
          <div className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold text-primary tracking-tight">
            FOREX MINDSET
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            className="text-[16px] leading-[1.5] font-[400] text-primary font-bold border-b-2 border-primary pb-1 transition-all duration-300"
            href="/"
          >
            Markets
          </Link>
          <Link
            className="text-[16px] leading-[1.5] font-[400] text-on-surface-variant hover:text-primary transition-all duration-300"
            href="/courses"
          >
            Academy
          </Link>
          <Link
            className="text-[16px] leading-[1.5] font-[400] text-on-surface-variant hover:text-primary transition-all duration-300"
            href="#"
          >
            Signals
          </Link>
          <Link
            className="text-[16px] leading-[1.5] font-[400] text-on-surface-variant hover:text-primary transition-all duration-300"
            href="#"
          >
            Terminals
          </Link>
          <Link
            className="text-[16px] leading-[1.5] font-[400] text-on-surface-variant hover:text-primary transition-all duration-300"
            href="#"
          >
            Institutional
          </Link>
          <Link
            className="text-[16px] leading-[1.5] font-[400] text-on-surface-variant hover:text-primary transition-all duration-300"
            href="/contact"
          >
            Support
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 border border-outline text-on-surface font-bold rounded-lg hover:bg-surface-container-low transition-all scale-95 active:opacity-80">
            Login
          </button>
          <button className="px-6 py-2 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90 transition-all scale-95 active:opacity-80">
            Open Account
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative hero-gradient py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYDifC9qndSbefqa3CtEUmL5lnaznagAEGCFTL2GX4NI-XNI8khAR132wVDkMFc6As6bovMdelT2CrA4Pscrkf29g69Y8uLsbmasjfqc3HtStch7llq3Jrj3dJtQ08JQn1AzuMSQ5Z1dCP-gF04qIUU9B-JOrIRtCSX-6Ub5Wai-kZt9aBE_DL3jmvvgh3qFOboExJYjCoslEsy8Hly7jiVcEDhKFFM6cjJ79IPB1XFQalAwrfwaOn')",
              }}
            />
          </div>
          <div className="relative z-10 px-[16px] md:px-[40px] max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[24px] items-center">
            <div className="text-white space-y-8">
              <span className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-primary uppercase">
                Mastery through Discipline
              </span>
              <h1 className="font-['Playfair_Display'] text-[32px] md:text-[48px] leading-[1.2] md:leading-[1.1] font-bold tracking-[-0.02em] text-white">
                Master Your Mind.
                <br />
                Master The Market.
              </h1>
              <p className="text-[18px] leading-[1.6] font-[400] text-on-tertiary-container max-w-lg">
                Transform your trading journey with structural discipline and
                psychological resilience. Join the academy where professionals
                are forged.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-primary text-on-primary font-bold rounded-lg text-[16px] leading-[1.5] transition-all hover:scale-105 active:opacity-80 gold-glow">
                  Register Now
                </button>
                <button className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-lg text-[16px] leading-[1.5] transition-all hover:bg-white/10">
                  View Courses
                </button>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-transparent text-white font-bold rounded-lg text-[16px] leading-[1.5] flex items-center gap-2 group"
                >
                  Contact Us{" "}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative bg-surface-container-low/40 backdrop-blur-md rounded-xl p-6 border border-white/10 card-shadow">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-primary">
                    Institutional Flow Logic
                  </span>
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4" />
                  </div>
                  <div className="flex justify-between text-sm text-on-tertiary-container">
                    <span>Sovereign Accuracy</span>
                    <span>92% Precision</span>
                  </div>
                  <div className="h-32 bg-black rounded-lg border border-white/5 flex items-end p-2 gap-1">
                    <div className="flex-1 bg-primary h-1/2 opacity-30 rounded-t-sm" />
                    <div className="flex-1 bg-primary h-2/3 opacity-50 rounded-t-sm" />
                    <div className="flex-1 bg-primary h-4/5 opacity-80 rounded-t-sm" />
                    <div className="flex-1 bg-primary h-1/3 opacity-20 rounded-t-sm" />
                    <div className="flex-1 bg-primary h-3/4 opacity-100 rounded-t-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News & Upcoming Events */}
        <section className="py-24 px-[16px] md:px-[40px] max-w-[1280px] mx-auto">
          <div className="mb-12">
            <h2 className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold text-on-surface">
              Intelligence & Engagement
            </h2>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {/* Large Event Card */}
            <div className="md:col-span-2 bg-surface-container-low rounded-xl overflow-hidden card-shadow card-shadow-hover flex flex-col md:flex-row group transition-all duration-300">
              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKyUqju-KYYzzl7iaBel0cIBGjG4tNm-csp9BpmbzUoz0ZxUNbC-8xDscG6b_70VSD0SJzYrhJH_YFdGK5YeyDeo1efirpQz787nWgY5SQj3bpj7HQwRfReTyr0I0QE7v7imglo1e4_5CZdep-ri1GqyPVpS2un4fGcRTzxEg5e3oagk1r0FK_eklKJQqe9bPVvxMTg_6bC8HI8viaAz2_1aXKaak1B6mEt1r7eHqMCg992xzVg7v2"
                />
                <div className="absolute top-4 left-4 bg-primary text-on-primary px-4 py-2 font-bold rounded-lg text-sm">
                  Upcoming Workshop
                </div>
              </div>
              <div className="md:w-1/2 p-8 space-y-4 flex flex-col justify-center">
                <span className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-primary">
                  Nov 15, 2024
                </span>
                <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-on-surface">
                  Advanced Structural Discipline Seminar
                </h3>
                <p className="text-on-surface-variant">
                  Master the art of emotional control and institutional order
                  flow in this intensive 3-day workshop.
                </p>
                <button className="mt-4 font-bold text-primary flex items-center gap-2 group/btn">
                  Book Your Seat{" "}
                  <span className="material-symbols-outlined text-primary group-hover/btn:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Latest News Column */}
            <div className="space-y-[24px]">
              <div className="bg-surface-container-high rounded-xl p-6 text-on-surface card-shadow h-full flex flex-col justify-between border border-outline-variant">
                <div>
                  <span className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-primary block mb-4 uppercase">
                    Market Brief
                  </span>
                  <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold mb-4">
                    Q4 Sentiment Analysis
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Our analysts have released the latest psychology report on
                    consumer confidence and its impact on major currency pairs.
                  </p>
                </div>
                <Link
                  className="mt-6 text-primary font-bold flex items-center gap-2 hover:underline"
                  href="#"
                >
                  Read Report{" "}
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </Link>
              </div>
            </div>

            {/* Market News List */}
            <div className="bg-surface-container-low rounded-xl p-6 card-shadow space-y-6 border border-outline-variant">
              <h4 className="font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  newspaper
                </span>{" "}
                Academy News
              </h4>
              <div className="space-y-4">
                <Link className="block group" href="#">
                  <p className="text-xs text-on-surface-variant mb-1">
                    2 hours ago
                  </p>
                  <h5 className="font-bold group-hover:text-primary transition-colors">
                    New Mentor Joined the Academy
                  </h5>
                </Link>
                <hr className="border-outline-variant" />
                <Link className="block group" href="#">
                  <p className="text-xs text-on-surface-variant mb-1">
                    Yesterday
                  </p>
                  <h5 className="font-bold group-hover:text-primary transition-colors">
                    Psychology Module Update 2.0
                  </h5>
                </Link>
                <hr className="border-outline-variant" />
                <Link className="block group" href="#">
                  <p className="text-xs text-on-surface-variant mb-1">
                    3 days ago
                  </p>
                  <h5 className="font-bold group-hover:text-primary transition-colors">
                    Forex Mindset Community reaches 10k
                  </h5>
                </Link>
              </div>
            </div>

            {/* Event Quick Links */}
            <div className="bg-surface-container-low rounded-xl p-6 card-shadow flex flex-col justify-center border-l-4 border-primary border border-outline-variant">
              <h4 className="font-bold text-on-surface mb-2">
                Live Q&A Session
              </h4>
              <p className="text-sm text-on-surface-variant mb-4">
                Every Friday at 16:00 GMT for all premium academy members.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-bright overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRUiRrhSLy2yNVZ_i8nKfffrOmbZEoXfkPWjWFggIm4VYbTtxZ-wAGkmo40MeQ-xRRT6f5ulI_Tpm2M9ZhTzdyeVbBitYumuiptv4qMGakiu_f6JNDWa3QZ63AQIFeZam7YoSLuS3dLTmoueYemnI2E7rDAGVj-rAZfy3LJzXd_IMA7uP3Altu-RRwW2ljO2oS9u0uM7LSMsOKh0BNHN4pQA8OsbIapOZ3n6mCLLVxcvnEVwBOTfpM"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-bright overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB9eCNRVJaqFm3sgYxV_r3T6ATiv0ZOSJkS8kPgtdDWcEUI_J7BnX-nVyrjOr5HdnUzxeKBzXm-_fObupXwx2gw-Y0iHIK-cdy4pCoThbcXMiJ41Dyca8HLrdTGI98Z5ZHzJqbyoXrCPqlxkKJtdJ_WwUOHLigOCPvBlnBdSHMhSsEim2mUFrSEcDyNx7RX0mbBKJbRCO-iKV2MeetOZjwpIyoReFaODG8Y9T1znHwNLjR4HtrBAXy"
                    />
                  </div>
                </div>
                <span className="text-xs font-bold text-on-surface-variant">
                  +80 traders attending
                </span>
              </div>
            </div>

            {/* Small Event Card */}
            <div className="bg-surface-container-low rounded-xl p-6 card-shadow card-shadow-hover transition-all border border-outline-variant">
              <span className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-primary mb-2 block">
                Workshop
              </span>
              <h4 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-on-surface mb-2">
                Risk Management 101
              </h4>
              <p className="text-sm text-on-surface-variant mb-4">
                A foundational workshop on protecting your capital at all costs.
              </p>
              <div className="flex justify-between items-center text-xs font-bold text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-primary">
                    calendar_today
                  </span>{" "}
                  Dec 05
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-primary">
                    location_on
                  </span>{" "}
                  Online
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-surface-container-lowest py-24 border-y border-outline-variant">
          <div className="px-[16px] md:px-[40px] max-w-[1280px] mx-auto text-center mb-16">
            <span className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-primary uppercase block mb-4">
              Success Stories
            </span>
            <h2 className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold text-on-surface">
              Voices of Resilience
            </h2>
          </div>
          <div className="px-[16px] md:px-[40px] max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {/* Testimonial 1 */}
            <div className="bg-surface-container-low p-8 rounded-xl card-shadow border border-outline-variant relative">
              <div className="absolute -top-4 right-8 bg-primary w-8 h-8 flex items-center justify-center rounded-full text-on-primary shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-sm">
                  format_quote
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOfpJjkwhqUoSHOTFegWsHTJetwh-QBQN4FQkMl5y_VgvDg3Oqj3melBm-B6DqtOr0PMWVm18tGyC97EvmTJJg2LGWv05NJwjg7uJKlYm0QsLiwByAewq5KffM3_iV7tl0yMBu1ns3XvPXhiDgLJhOQpUEqNEfpBwzePySm9dCOeZvOxoP8NHO3ykI82stoiaSElD672eyn6f85hqJUJV8iR7dDL2CfJw6Hsl_zGgbMrKtXHq0DCEt"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-on-surface">David Chen</h5>
                  <p className="text-xs text-on-surface-variant">
                    Full-time Trader
                  </p>
                </div>
              </div>
              <p className="text-on-surface-variant italic leading-relaxed">
                &ldquo;The Mindset Academy didn't just teach me how to
                read charts; it taught me how to read myself. My consistency has
                improved ten-fold since implementing the structural discipline
                modules.&rdquo;
              </p>
              <div className="mt-6 flex text-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-surface-container-low p-8 rounded-xl card-shadow border border-outline-variant relative">
              <div className="absolute -top-4 right-8 bg-primary w-8 h-8 flex items-center justify-center rounded-full text-on-primary shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-sm">
                  format_quote
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLvOIodqJR9yY3nXePklNZLykJDbeh77RV_w8U1SJjVBzRihsmRRyGW7dZLU-9TvETjFAyoEP-QCHWOvh-AvXunIrNRWgQP9kQv3qg4iVtpp-V-w5BPFcSdrYMR8duOLJhTG3dpDjoq_wTO-uiXOw1zk5Jg3itH7Ob7up9ev3vTia9wKyqtbBLKXd6KB-Ga_1MqduherouiroYyuq-moRmuPNqHD6YaPZ1Mj2S3KCRIeJac051BB-T"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-on-surface">Sarah Miller</h5>
                  <p className="text-xs text-on-surface-variant">
                    Hedge Fund Analyst
                  </p>
                </div>
              </div>
              <p className="text-on-surface-variant italic leading-relaxed">
                &ldquo;Transitioning from gambling to professional trading
                requires a shift in identity. This academy provides the
                blueprint for that transformation. The mentorship is
                world-class.&rdquo;
              </p>
              <div className="mt-6 flex text-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-surface-container-low p-8 rounded-xl card-shadow border border-outline-variant relative">
              <div className="absolute -top-4 right-8 bg-primary w-8 h-8 flex items-center justify-center rounded-full text-on-primary shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-sm">
                  format_quote
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_aiJ1e1uaDQG3L8XIYOaLe1CCflQtOZuV4nhsg4D3su0NvW9SCVnUgXWV1V1EJebTk8ASNBSdiiRszHEzSc1bsfV5Ut6cY7NaMIW39suHEfoY8J98joqI0kP4yp5x3DvDED2kvMi2aMu6nKTg5xTZVJ-sxF77h8QyRGiclQPn4tAin8761K0HgJ1NZ0gZafyQ8qmIeuA14gwDosSDrOE3mi4H_rUQxyGXbiPAbMhY9rzN0HyTbn0j"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-on-surface">Marcus Thorne</h5>
                  <p className="text-xs text-on-surface-variant">
                    Prop Firm Trader
                  </p>
                </div>
              </div>
              <p className="text-on-surface-variant italic leading-relaxed">
                &ldquo;The focus on psychology is what sets them apart.
                I've taken many courses, but none have addressed the root
                cause of trading failure like Forex Mindset Academy
                does.&rdquo;
              </p>
              <div className="mt-6 flex text-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-[16px] md:px-[40px] max-w-[1280px] mx-auto">
          <div className="bg-surface-container-high rounded-2xl p-12 text-center text-on-surface relative overflow-hidden border border-outline-variant">
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full bg-cover"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkciKXCGnM3YC0WodlJhYRo1yfZBGqZfBiPibYn7zjd_am1LTQMJob5C231KyDEFoogZXUA2bWTqtmx0UXW1RiORqnE96T3B4ZSXYJIGkIuhpIEcxTDkJ5r0yZP7HzZlbALOyVV-Kn3J7f1b-Zq12XExpe_OIAfNAsE6dN5r7hQHJSaGxZO-IuUzqWN-iPA-SFGeWxWnzxxQko6yZ-uJlqUq3_ZvH32cVngAlsxy4eZ9SQUyebVaGP')",
                }}
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold">
                Ready to Forge a Professional Mindset?
              </h2>
              <p className="text-on-surface-variant text-[18px] leading-[1.6]">
                Stop gambling and start trading. Access our elite modules and
                join a community of disciplined traders today.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button className="px-10 py-4 bg-primary text-on-primary font-bold rounded-lg transition-transform hover:scale-105 active:opacity-90 gold-glow">
                  Get Started Today
                </button>
                <button className="px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold rounded-lg hover:bg-white/10">
                  Talk to a Mentor
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant">
        <div className="w-full py-16 px-[16px] md:px-[40px] flex flex-col md:flex-row justify-between items-center gap-[8px] max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <img
                alt="Logo"
                className="h-8 w-8 object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvKopX3ehH3tOWZmTkWIgKbC9lW9mJzdnC8hyHjujWHBs9RDEeW1AU9MtaCGWMIqcDnDedGha_MHT6vmdp50Wolsx-1-Ona9mg3WRnybfrruV57rX3VhJnimzLze5TIt3LxnA0XGkx3vgwMhXpf3XQugMKPrAg2cgT7DCqGXETjhLqUdkN0PlIWAUr93KcJeI-CFwrM-d4axTZ1qrRCH_RoP_bcDCaosuCjTtSDAkNiNIxcvMftJ65r6lt4l_3ILkpmw"
              />
              <div className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold text-primary">
                FOREX MINDSET
              </div>
            </div>
            <p className="text-on-surface-variant text-[16px] leading-[1.5] max-w-sm text-center md:text-left opacity-80">
              Empowering traders through psychological resilience and structural
              discipline.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors text-[16px] leading-[1.5]"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors text-[16px] leading-[1.5]"
              href="#"
            >
              Risk Disclosure
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors text-[16px] leading-[1.5]"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors text-[16px] leading-[1.5]"
              href="#"
            >
              AML Policy
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors text-[16px] leading-[1.5]"
              href="/contact"
            >
              Contact Us
            </Link>
          </nav>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <Link
                className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary border border-outline-variant hover:bg-primary hover:text-on-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">
                  share
                </span>
              </Link>
              <Link
                className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary border border-outline-variant hover:bg-primary hover:text-on-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">
                  camera
                </span>
              </Link>
              <Link
                className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary border border-outline-variant hover:bg-primary hover:text-on-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">
                  forum
                </span>
              </Link>
            </div>
            <p className="text-[12px] leading-[1.2] font-[600] text-on-surface-variant">
              &copy; 2024 Forex Mindset Academy. Institutional Grade Trading.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}