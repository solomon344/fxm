"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      {/* Transactional Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[24px] h-20">
        <div className="font-['Playfair_Display'] text-[24px] leading-[1.3] font-semibold text-primary tracking-tight">
          Forex Mindset Academy
        </div>
        <div className="hidden md:flex gap-[8px]">
          <Link
            className="text-[14px] leading-[1.4] font-[500] tracking-[0.05em] text-on-surface-variant hover:text-primary transition-colors py-2 px-4"
            href="/admin/login"
          >
            Login
          </Link>
        </div>
      </header>

      <main className="min-h-screen flex">
        {/* Visual Side (Institutional Feel) */}
        <div className="hidden lg:flex w-1/2 relative bg-surface-container-lowest overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-[rgba(10,10,10,0.8)] to-[rgba(20,20,20,0.4)]" />
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDICA6xfXS2sj-UxT9O-MGXxhuf-C9vBbjnYZMP63xngFK_pUGhSRruLwTnoqB2G2zhpX2kIItLGRufh11FNJTHyxBnxuulB0k9WcXCocRlUVL6j4uS81GyTSzBhf0e1Y3xgZg_crHsq-EvYmmg5RmYqcfWjbUptf0XoTXcHVFz5wpDQqOJN0HUtTGp8HatVMRUJSOG7c34Ufu10zaDrELEEUSI3kvNbsli9n5VuLyQbyOOG6Nmibu3')",
            }}
          />
          <div className="relative z-20 flex flex-col justify-end px-[64px] py-[64px] h-full w-full">
            <div className="max-w-xl">
              <span className="text-[14px] leading-[1.4] font-[500] tracking-[0.05em] text-primary tracking-[0.2em] uppercase mb-4 block">
                Institutional Access
              </span>
              <h1 className="font-['Playfair_Display'] text-[48px] leading-[1.2] font-bold tracking-[-0.02em] text-on-surface mb-6">
                Master the Market <br />
                <span className="italic text-primary-fixed-dim">Psychology.</span>
              </h1>
              <p className="text-[18px] leading-[1.6] text-on-surface-variant leading-relaxed">
                Join an elite circle of disciplined traders. Our academy focuses
                on the institutional mindset required to navigate global
                liquidity with surgical precision.
              </p>
            </div>
            <div className="mt-12 flex gap-8 border-t border-outline-variant pt-8">
              <div>
                <p className="text-[12px] leading-[1.3] font-[500] text-primary mb-1">
                  MEMBERS
                </p>
                <p className="font-['Playfair_Display'] text-[24px] leading-[1.3] font-semibold">
                  12.5k+
                </p>
              </div>
              <div>
                <p className="text-[12px] leading-[1.3] font-[500] text-primary mb-1">
                  PROFITABILITY
                </p>
                <p className="font-['Playfair_Display'] text-[24px] leading-[1.3] font-semibold">
                  94%
                </p>
              </div>
              <div>
                <p className="text-[12px] leading-[1.3] font-[500] text-primary mb-1">
                  RATING
                </p>
                <p className="font-['Playfair_Display'] text-[24px] leading-[1.3] font-semibold">
                  4.9/5
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-[64px] bg-surface pt-24">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <h2 className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold mb-2">
                Create Academy Account
              </h2>
              <p className="text-[16px] leading-[1.5] text-on-surface-variant">
                Enter your credentials to begin your institutional journey.
              </p>
            </div>
            <form className="space-y-6">
              {/* Full Name */}
              <div className="relative group">
                <label className="block text-[12px] leading-[1.3] font-[500] text-outline mb-2 group-focus-within:text-primary transition-colors">
                  Full Name
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant transition-colors">
                    person
                  </span>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg py-4 pl-12 pr-4 text-[16px] leading-[1.5] text-on-surface focus:outline-none focus:border-primary transition-all focus:ring-1 focus:ring-primary/20 placeholder:text-surface-container-highest"
                    placeholder="Johnathan Sterling"
                    type="text"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative group">
                <label className="block text-[12px] leading-[1.3] font-[500] text-outline mb-2 group-focus-within:text-primary transition-colors">
                  Institutional Email
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant transition-colors">
                    mail
                  </span>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg py-4 pl-12 pr-4 text-[16px] leading-[1.5] text-on-surface focus:outline-none focus:border-primary transition-all focus:ring-1 focus:ring-primary/20 placeholder:text-surface-container-highest"
                    placeholder="name@firm.com"
                    type="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="relative group">
                <label className="block text-[12px] leading-[1.3] font-[500] text-outline mb-2 group-focus-within:text-primary transition-colors">
                  Secure Password
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant transition-colors">
                    lock
                  </span>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg py-4 pl-12 pr-4 text-[16px] leading-[1.5] text-on-surface focus:outline-none focus:border-primary transition-all focus:ring-1 focus:ring-primary/20 placeholder:text-surface-container-highest"
                    placeholder="••••••••••••"
                    type="password"
                  />
                </div>
              </div>

              {/* Experience Level */}
              <div className="relative group">
                <label className="block text-[12px] leading-[1.3] font-[500] text-outline mb-2 group-focus-within:text-primary transition-colors">
                  Trading Experience Level
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <label className="cursor-pointer">
                    <input className="hidden peer" name="exp" type="radio" />
                    <div className="text-center py-3 border border-outline-variant rounded-lg text-[14px] leading-[1.4] font-[500] tracking-[0.05em] hover:bg-surface-container-high peer-checked:border-primary peer-checked:bg-primary-container/10 peer-checked:text-primary transition-all">
                      Beginner
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      defaultChecked
                      className="hidden peer"
                      name="exp"
                      type="radio"
                    />
                    <div className="text-center py-3 border border-outline-variant rounded-lg text-[14px] leading-[1.4] font-[500] tracking-[0.05em] hover:bg-surface-container-high peer-checked:border-primary peer-checked:bg-primary-container/10 peer-checked:text-primary transition-all">
                      Intermediate
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input className="hidden peer" name="exp" type="radio" />
                    <div className="text-center py-3 border border-outline-variant rounded-lg text-[14px] leading-[1.4] font-[500] tracking-[0.05em] hover:bg-surface-container-high peer-checked:border-primary peer-checked:bg-primary-container/10 peer-checked:text-primary transition-all">
                      Advanced
                    </div>
                  </label>
                </div>
              </div>

              {/* Terms Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="mt-1">
                  <input
                    className="w-5 h-5 rounded border-outline-variant bg-surface-container-low text-primary focus:ring-primary focus:ring-offset-surface"
                    type="checkbox"
                  />
                </div>
                <span className="text-[14px] leading-[1.4] font-[500] tracking-[0.05em] text-on-surface-variant leading-tight">
                  I agree to the{" "}
                  <Link className="text-primary hover:underline" href="#">
                    Terms of Service
                  </Link>{" "}
                  and acknowledge the high-risk nature of Forex trading.
                </span>
              </label>

              {/* CTA Button */}
              <button
                className="w-full bg-primary hover:brightness-110 text-on-primary text-[14px] leading-[1.4] font-[500] tracking-[0.05em] py-4 rounded-lg transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2 mt-8"
                type="submit"
              >
                Join Elite Academy
                <span className="material-symbols-outlined text-[20px]">
                  trending_up
                </span>
              </button>
            </form>
            <div className="mt-10 pt-8 border-t border-outline-variant text-center">
              <p className="text-[16px] leading-[1.5] text-on-surface-variant">
                Already have an institutional account?
              </p>
              <Link
                className="inline-block mt-2 text-[14px] leading-[1.4] font-[500] tracking-[0.05em] text-primary hover:text-primary-fixed transition-colors"
                href="/admin/login"
              >
                Sign In to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Transactional Footer */}
      <footer className="w-full py-8 border-t border-outline-variant bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto px-[24px] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant">
            &copy; 2024 Forex Mindset Academy. All Rights Reserved. Institutional
            Grade Trading.
          </p>
          <div className="flex gap-6">
            <Link
              className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Risk Disclosure
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}