"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-[16px] md:px-[40px] h-20 bg-surface/80 backdrop-blur-xl border-b border-outline-variant">
        <div className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold text-primary">
          FOREX MINDSET ACADEMY
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 text-[16px] leading-[1.5]"
            href="/"
          >
            Markets
          </Link>
          <Link
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 text-[16px] leading-[1.5]"
            href="/courses"
          >
            Academy
          </Link>
          <Link
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 text-[16px] leading-[1.5]"
            href="#"
          >
            Signals
          </Link>
          <Link
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 text-[16px] leading-[1.5]"
            href="#"
          >
            Terminals
          </Link>
          <Link
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 text-[16px] leading-[1.5]"
            href="#"
          >
            Institutional
          </Link>
          <Link
            className="text-primary font-bold border-b-2 border-primary pb-1 text-[16px] leading-[1.5]"
            href="/contact"
          >
            Support
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 border border-outline rounded-lg text-primary font-medium hover:bg-surface-container-high transition-all active:scale-95 duration-150">
            Login
          </button>
          <button className="px-6 py-2 bg-primary text-on-primary rounded-lg font-bold hover:opacity-90 transition-all active:scale-95 duration-150">
            Open Account
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 overflow-hidden bg-surface">
          <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] text-center relative z-10">
            <span className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-primary mb-4 block uppercase">
              Get in Touch
            </span>
            <h1 className="font-['Playfair_Display'] text-[32px] md:text-[48px] leading-[1.2] md:leading-[1.1] font-bold tracking-[-0.02em] text-on-surface mb-6">
              Institutional Support
            </h1>
            <p className="text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl mx-auto">
              Take the next step in your professional trading career. Our elite
              support team and mentors are ready to assist with your
              institutional mindset development journey.
            </p>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary opacity-10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary opacity-5 rounded-full blur-[120px]" />
        </section>

        {/* Main Contact Grid */}
        <section className="py-12 mb-24 bg-surface">
          <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px]">
              {/* Contact Information Column */}
              <div className="lg:col-span-5 space-y-[24px]">
                {/* Direct Links Card */}
                <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-xl">
                  <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-on-surface mb-8">
                    Direct Communication
                  </h3>
                  <div className="space-y-6">
                    <Link
                      className="flex items-center p-4 rounded-lg hover:bg-surface-container-low transition-colors group border border-transparent hover:border-outline-variant"
                      href="#"
                    >
                      <div className="w-12 h-12 bg-surface-container-high text-primary flex items-center justify-center rounded-lg mr-4 border border-outline-variant">
                        <span className="material-symbols-outlined">chat</span>
                      </div>
                      <div>
                        <p className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-on-surface-variant mb-1">
                          WHATSAPP SUPPORT
                        </p>
                        <p className="text-[16px] leading-[1.5] font-bold text-on-surface">
                          +1 (555) 234-5678
                        </p>
                      </div>
                      <span className="material-symbols-outlined ml-auto text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                        arrow_forward
                      </span>
                    </Link>
                    <Link
                      className="flex items-center p-4 rounded-lg hover:bg-surface-container-low transition-colors group border border-transparent hover:border-outline-variant"
                      href="mailto:support@forexmindset.academy"
                    >
                      <div className="w-12 h-12 bg-surface-container-high text-primary flex items-center justify-center rounded-lg mr-4 border border-outline-variant">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div>
                        <p className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-on-surface-variant mb-1">
                          EMAIL ENQUIRIES
                        </p>
                        <p className="text-[16px] leading-[1.5] font-bold text-on-surface">
                          support@forexmindset.academy
                        </p>
                      </div>
                      <span className="material-symbols-outlined ml-auto text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                        arrow_forward
                      </span>
                    </Link>
                    <Link
                      className="flex items-center p-4 rounded-lg hover:bg-surface-container-low transition-colors group border border-transparent hover:border-outline-variant"
                      href="tel:+1234567890"
                    >
                      <div className="w-12 h-12 bg-surface-container-high text-primary flex items-center justify-center rounded-lg mr-4 border border-outline-variant">
                        <span className="material-symbols-outlined">call</span>
                      </div>
                      <div>
                        <p className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-on-surface-variant mb-1">
                          HEAD OFFICE
                        </p>
                        <p className="text-[16px] leading-[1.5] font-bold text-on-surface">
                          +1 (555) 987-6543
                        </p>
                      </div>
                      <span className="material-symbols-outlined ml-auto text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Office Location Card */}
                <div className="bg-surface-container-low border border-primary/20 p-8 rounded-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-primary mb-4">
                      The Sovereign Office
                    </h3>
                    <p className="text-on-surface-variant mb-6 opacity-90">
                      Our physical academy is located in the heart of the
                      financial district, providing a disciplined environment
                      for advanced institutional learning.
                    </p>
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary">
                        location_on
                      </span>
                      <div>
                        <p className="font-bold text-on-surface">
                          Mindset Tower, Floor 42
                        </p>
                        <p className="text-on-surface-variant">
                          1280 Capital Plaza, Financial District
                        </p>
                        <p className="text-on-surface-variant">
                          New York, NY 10004
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                </div>
              </div>

              {/* Contact Form Column */}
              <div className="lg:col-span-7">
                <div className="bg-surface-container-lowest border border-outline-variant p-8 md:p-12 rounded-xl">
                  <h3 className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold text-on-surface mb-2">
                    Send an Inquiry
                  </h3>
                  <p className="text-on-surface-variant mb-8">
                    Fill out the form below and an institutional coordinator
                    will contact you within 24 hours.
                  </p>
                  <form action="#" className="space-y-6" method="POST">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                      <div className="space-y-2">
                        <label className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-on-surface uppercase block">
                          Full Name
                        </label>
                        <input
                          className="w-full bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-[16px] leading-[1.5] outline-none transition-all text-on-surface"
                          placeholder="John Doe"
                          type="text"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-on-surface uppercase block">
                          Email Address
                        </label>
                        <input
                          className="w-full bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-[16px] leading-[1.5] outline-none transition-all text-on-surface"
                          placeholder="john@example.com"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                      <div className="space-y-2">
                        <label className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-on-surface uppercase block">
                          Subject
                        </label>
                        <select className="w-full bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-[16px] leading-[1.5] outline-none transition-all text-on-surface">
                          <option className="bg-surface-container-low">
                            Institutional Information
                          </option>
                          <option className="bg-surface-container-low">
                            Masterclass Registration
                          </option>
                          <option className="bg-surface-container-low">
                            Priority Support
                          </option>
                          <option className="bg-surface-container-low">
                            Strategic Partnership
                          </option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-on-surface uppercase block">
                          AUM / Tier
                        </label>
                        <select className="w-full bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-[16px] leading-[1.5] outline-none transition-all text-on-surface">
                          <option className="bg-surface-container-low">
                            Professional {'(<$500k)'}
                          </option>
                          <option className="bg-surface-container-low">
                            High Net Worth ($500k - $2M)
                          </option>
                          <option className="bg-surface-container-low">
                            Institutional ($2M+)
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] leading-[1.2] font-[600] tracking-[0.1em] text-on-surface uppercase block">
                        Your Message
                      </label>
                      <textarea
                        className="w-full bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-[16px] leading-[1.5] outline-none transition-all text-on-surface"
                        placeholder="How can we help you achieve your professional trading goals?"
                        rows={5}
                      />
                    </div>
                    <div className="flex items-center gap-4 py-4">
                      <input
                        className="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-low"
                        id="privacy"
                        type="checkbox"
                      />
                      <label
                        className="text-[16px] leading-[1.5] text-on-surface-variant"
                        htmlFor="privacy"
                      >
                        I agree to the{" "}
                        <Link className="text-primary hover:underline" href="#">
                          Privacy Policy
                        </Link>{" "}
                        and institutional terms.
                      </label>
                    </div>
                    <button
                      className="w-full bg-primary text-on-primary font-bold py-4 rounded-lg hover:brightness-110 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
                      type="submit"
                    >
                      <span className="material-symbols-outlined">send</span>
                      Submit Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative h-[600px] w-full bg-surface-container-lowest overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-surface-container-lowest grayscale brightness-50 contrast-125">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBt9i6F975cEhdY43sbl0iYeF2pQ-8xFv4DdVOOnC26z0vhFALPszPo5vZCLTEk5_5Mmvz4qIQ7MGdhp4oaIPZ_0NpCE0fIeg8NFjom5GaOGUnVB33HeN2P0KVhiaGirP7bR3DXmoZDOs8nnX1pM9DATPMdQp9DHc-nTzNF-tKPaQt-II2t3RXlX-XaTGv53VksxskrtQpLdCSSnHQZGXAw6H6NQkdfUwamIfH68B-Y9Wr2_LG9g_Ri')",
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
              <div className="w-16 h-16 bg-primary rounded-full animate-ping absolute opacity-10" />
              <div className="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center text-primary relative z-10 shadow-2xl border-2 border-primary/50">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
              </div>
              <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-surface-container-lowest px-6 py-3 rounded border border-primary/30 whitespace-nowrap shadow-2xl">
                <p className="font-bold text-on-surface">
                  Forex Mindset Academy
                </p>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Global Headquarters
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] text-center">
            <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.4] font-semibold text-on-surface mb-12 opacity-80">
              Institutional Partners & Global Reach
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] opacity-30 hover:opacity-100 transition-opacity duration-700">
              <div className="flex items-center justify-center h-16 invert">
                <img
                  className="max-h-8"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnENm3S5N_Kf2uPwzNNEqv5JWM7XgvMWFnaJmDGec-FYUc-71DMctqKDF9beoQNYzuwpfzAHNGeG7BzVSxZOTcHa7l2lfmpH5L8p7syYty52IZ1X013JOQsPxCq1sx8UPac7KtZNyV01qruJh589AOI5TcbQnR0lQXeXOBaZ91ylsSLQFhlkVor2ajqEltMM2v3BR5ff_ro_IwW1zfh3WNR8ZiKN3JrvDll-wC2AVfK-Qhu5FdAIJ2"
                />
              </div>
              <div className="flex items-center justify-center h-16 invert">
                <img
                  className="max-h-8"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeq1Fb_pSQP2ADr_vKhJRdaFtPKccayMtl-VSBAnFpFW3vKj7H-Nr5p6SGQ7xQ890WAFqOLiOmw5Cgkl3mloS1z6UuRHDXVlxuOkGj7mJRJPhJRcbnnQ3_NqnSwFUgLDOoWEmFcz59nOqR8j6S_QslEvc_mpy3SN-cRd-FzIxklnxzrMwDNz6Es3u96S2o8D-hDzHyJ2WlLwfuzZlISTqkfhG4lQo1BlyfxLpBv3eZUujaTdU4FQUW"
                />
              </div>
              <div className="flex items-center justify-center h-16 invert">
                <img
                  className="max-h-8"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdbYtRA_HFw-nO6_5HPXUPYrSm-Z59ER2l3BQ3efjcJNe_caaW1IAEU0aIjQ51vkbmsx2v7knb_AaLYDb9WKRftXUV-fB7pMqFSKj9W-Vvm4nGBQqDLOurigYJW21WJktmE8XQyw7m6dVzecAGJjkAWEupEMXBzursGgn3r8Y4Ty7R-qAnPGatsby_Gr3hEDkzSWvSA2bxwUmzFXzikMZALzXEn2I_ovbkdg2gK1ixCvGqhJXjLeCn"
                />
              </div>
              <div className="flex items-center justify-center h-16 invert">
                <img
                  className="max-h-8"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB7vdbnZ4bzgqN4FyEgiQGbehXhtTj2SpNbPv_XGVHZ1lvzhS5kbwVrgk35tf9GbdWC8pcdJjKHvKI3BzyE1rXZLiKBT5RCrr1Y-nKX15lYzlVinWrGec5pe-dBao1J1HGuyz1Ra8qrYxW9g9OpFf14671JUo0T8OS7MLmCz7omYwG8dCpTy2QrG_L-_kzlg5zTKBk8Bu_rwpFrA9aZxVlr3hoXjt5kpfR7wD6Bl0hXbfwUvD5E_zi"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-[16px] md:px-[40px] flex flex-col md:flex-row justify-between items-center gap-[8px] max-w-[1280px] mx-auto border-t border-outline-variant bg-surface-container-lowest">
        <div className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold text-primary">
          FMA
        </div>
        <p className="text-on-surface-variant text-[16px] leading-[1.5] text-center md:text-left">
          &copy; 2024 Forex Mindset Academy. Institutional Grade Trading. All
          rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors hover:underline text-[16px] leading-[1.5]"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors hover:underline text-[16px] leading-[1.5]"
            href="#"
          >
            Risk Disclosure
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors hover:underline text-[16px] leading-[1.5]"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors hover:underline text-[16px] leading-[1.5]"
            href="#"
          >
            AML Policy
          </Link>
          <Link
            className="text-primary underline text-[16px] leading-[1.5]"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </footer>
    </>
  );
}