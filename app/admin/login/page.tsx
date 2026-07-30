"use client";

import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <body className="font-['Inter'] text-[16px] leading-[1.5] text-[#e5e2e1] bg-[#131313] selection:bg-primary/30 selection:text-primary min-h-screen flex flex-col justify-center items-center relative px-[24px]">
      {/* Subtle Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-primary/3 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      {/* Login Container */}
      <main className="w-full max-w-md z-10">
        <div className="bg-[rgba(20,20,20,0.8)] backdrop-blur-[20px] border border-[rgba(153,144,124,0.15)] p-10 rounded-xl shadow-2xl flex flex-col items-center">
          {/* Logo Section */}
          <div className="mb-10 text-center">
            <img
              alt="Forex Mindset Academy Logo"
              className="w-24 h-24 object-contain mb-6 mx-auto transition-transform duration-500 hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJfOvEYIhgvsA1RGMBoEkW0PUzzNRXqlq6CtYP3lhiSF0qsAUt0CUbyUvYCwlij1VverPv-nUiGF_ERvrBhDciGHmPrreNzY7KYsldrpGWCuKeR0Ijy5Z0UZUApdpHrk4ohda4CdsDanpvTO2-XPIQgFb-FI4cQk2KEjBwKw9O5vzC_cc49B0Z1WDJ5a2W_0aBZxMMcHGlWkP8aVctDcPYSxSgVT-IdgjguHs8vxMbX5uzi1kaqP70kGY85qEFKHWz9A"
            />
            <h1 className="font-['Playfair_Display'] text-[24px] leading-[1.3] font-semibold text-primary tracking-tight">
              Executive Portal
            </h1>
            <p className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant mt-2 uppercase tracking-[0.2em]">
              Forex Mindset Academy
            </p>
          </div>

          {/* Login Form */}
          <form className="w-full space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[14px] leading-[1.4] font-[500] tracking-[0.05em] text-on-surface-variant block ml-1" htmlFor="email">
                Administrator Email
              </label>
              <div className="relative flex items-center bg-surface-container-low border border-outline-variant rounded-lg transition-all duration-300 focus-within:border-primary">
                <span className="material-symbols-outlined absolute left-4 text-outline">mail</span>
                <input
                  className="w-full bg-transparent border-none py-4 pl-12 pr-4 text-on-surface text-[16px] leading-[1.5] focus:ring-0 placeholder:text-outline/40"
                  id="email"
                  name="email"
                  placeholder="admin@forexmindset.com"
                  required
                  type="email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[14px] leading-[1.4] font-[500] tracking-[0.05em] text-on-surface-variant" htmlFor="password">
                  Secure Password
                </label>
                <Link
                  className="text-[12px] leading-[1.3] font-[500] text-primary hover:text-primary-fixed-dim transition-colors"
                  href="#"
                >
                  Forgot Access?
                </Link>
              </div>
              <div className="relative flex items-center bg-surface-container-low border border-outline-variant rounded-lg transition-all duration-300 focus-within:border-primary">
                <span className="material-symbols-outlined absolute left-4 text-outline">lock</span>
                <input
                  className="w-full bg-transparent border-none py-4 pl-12 pr-12 text-on-surface text-[16px] leading-[1.5] focus:ring-0 placeholder:text-outline/40"
                  id="password"
                  name="password"
                  placeholder="••••••••••••"
                  required
                  type="password"
                />
                <button className="absolute right-4 text-outline hover:text-primary transition-colors flex items-center" type="button">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2 px-1">
              <input
                className="w-4 h-4 rounded border-outline-variant bg-surface-container text-primary focus:ring-primary focus:ring-offset-surface-dim"
                id="remember"
                type="checkbox"
              />
              <label className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant select-none" htmlFor="remember">
                Maintain encrypted session
              </label>
            </div>

            {/* Action Button */}
            <button
              className="w-full bg-primary hover:brightness-110 active:scale-[0.98] transition-all duration-200 py-4 rounded-lg text-[14px] leading-[1.4] font-[500] tracking-[0.05em] text-on-primary font-bold shadow-lg shadow-primary/10 flex justify-center items-center gap-2 mt-4"
              type="submit"
            >
              Login as Administrator
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
            </button>
          </form>

          {/* Footer within Card */}
          <div className="mt-8 pt-8 border-t border-outline-variant w-full text-center">
            <p className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">security</span>
              Institutional Grade SSL Encryption Active
            </p>
          </div>
        </div>

        {/* External Footer */}
        <footer className="mt-12 text-center">
          <p className="text-[12px] leading-[1.3] font-[500] text-outline-variant mb-4">
            &copy; 2024 Forex Mindset Academy. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-6">
            <Link className="text-[12px] leading-[1.3] font-[500] text-outline-variant hover:text-primary transition-colors" href="#">
              Privacy Protocol
            </Link>
            <Link className="text-[12px] leading-[1.3] font-[500] text-outline-variant hover:text-primary transition-colors" href="#">
              Terms of Access
            </Link>
            <Link className="text-[12px] leading-[1.3] font-[500] text-outline-variant hover:text-primary transition-colors" href="#">
              Risk Disclosure
            </Link>
          </div>
        </footer>
      </main>
    </body>
  );
}