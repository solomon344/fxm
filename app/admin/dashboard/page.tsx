"use client";

import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="bg-[#131313] text-[#e5e2e1] min-h-screen">
      {/* SIDE NAVIGATION BAR */}
      <aside className="flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant z-50">
        <div className="mb-10 px-4 pt-4">
          <h1 className="font-['Playfair_Display'] text-[24px] leading-[1.3] font-semibold text-primary tracking-tight">
            Forex Mindset
          </h1>
          <p className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant opacity-60">
            Institutional Tier
          </p>
        </div>
        <nav className="flex-1 space-y-2 px-2">
          <Link
            className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container font-bold rounded-lg transition-all duration-150"
            href="/admin/dashboard"
          >
            <span className="material-symbols-outlined">monitoring</span>
            <span className="text-[14px] leading-[1.4] font-[500] tracking-[0.05em]">
              Analytics
            </span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg"
            href="/courses"
          >
            <span className="material-symbols-outlined">school</span>
            <span className="text-[14px] leading-[1.4] font-[500] tracking-[0.05em]">
              Academy
            </span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">auto_stories</span>
            <span className="text-[14px] leading-[1.4] font-[500] tracking-[0.05em]">
              Journal
            </span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">security</span>
            <span className="text-[14px] leading-[1.4] font-[500] tracking-[0.05em]">
              Risk Manager
            </span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[14px] leading-[1.4] font-[500] tracking-[0.05em]">
              Settings
            </span>
          </Link>
        </nav>
        <div className="mt-auto px-2 space-y-2">
          <button className="w-full bg-primary text-on-primary font-bold py-3 rounded-lg flex items-center justify-center gap-2 mb-6 hover:brightness-110 active:scale-95 transition-all">
            <span className="material-symbols-outlined">add_card</span>
            <span className="text-[14px] leading-[1.4] font-[500] tracking-[0.05em]">
              Deposit Funds
            </span>
          </button>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg"
            href="/contact"
          >
            <span className="material-symbols-outlined">headset_mic</span>
            <span className="text-[14px] leading-[1.4] font-[500] tracking-[0.05em]">
              Support
            </span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg"
            href="/admin/login"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="text-[14px] leading-[1.4] font-[500] tracking-[0.05em]">
              Logout
            </span>
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="ml-64 min-h-screen">
        {/* TOP APP BAR */}
        <header className="sticky top-0 z-40 h-20 bg-surface flex justify-between items-center w-full px-[24px] border-b border-outline-variant">
          <div className="flex items-center gap-6">
            <h2 className="font-['Playfair_Display'] text-[24px] leading-[1.3] font-semibold text-on-surface">
              Executive Suite
            </h2>
            <div className="hidden md:flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">verified</span>
              <span className="text-[14px] leading-[1.4] font-[500] tracking-[0.05em]">
                Institutional Tier Active
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer group-hover:text-primary transition-colors">
                notifications
              </span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full" />
            </div>
            <div className="flex items-center gap-3 bg-surface-container p-1 pr-4 rounded-full border border-outline-variant">
              <img
                className="w-8 h-8 rounded-full border border-primary object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKp47zBb2cGQ0a4CEEWAm9wE6q7BQopQmE_Ht8chq10g3tH1DChcoIBzk9nO2DzryfQ-XioQ_xeIyrZf6SfzFpDFX5yGQYH6uUWM1We1ShSCRb4VkpCev90SrQhk765ghw_gHD68nTpfkCHNF5MI6d1qECnraWuVv9UEICURnK4TBFfvc_T5nzhj1zyRdJsu5AWLm6d2fHlEzi2VZKg4lo8R5vAZPBH8LJpE15nI_VDwuQqJAoS2xx"
              />
              <div className="flex flex-col">
                <span className="text-[12px] leading-[1.3] font-[500] leading-none">
                  Admin User Profile
                </span>
                <span className="text-[10px] text-primary uppercase font-bold tracking-widest">
                  Master Admin
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-[1440px] mx-auto">
          {/* KEY STATS SECTION */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Total Students */}
            <div className="bg-[rgba(20,20,20,0.7)] backdrop-blur-[20px] border border-[#262626] p-6 rounded-xl flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">groups</span>
              </div>
              <span className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant uppercase tracking-widest">
                Total Students
              </span>
              <div className="flex items-end justify-between">
                <span className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold bg-gradient-to-br from-[#f2ca50] to-[#d4af37] bg-clip-text text-transparent">
                  12,482
                </span>
                <span className="text-emerald-400 text-[14px] leading-[1.4] font-[500] tracking-[0.05em] flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">arrow_upward</span>{" "}
                  12%
                </span>
              </div>
              <div className="w-full bg-surface-container-highest h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[78%]" />
              </div>
            </div>

            {/* Active Courses */}
            <div className="bg-[rgba(20,20,20,0.7)] backdrop-blur-[20px] border border-[#262626] p-6 rounded-xl flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">menu_book</span>
              </div>
              <span className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant uppercase tracking-widest">
                Active Courses
              </span>
              <div className="flex items-end justify-between">
                <span className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold text-secondary">
                  42
                </span>
                <span className="text-on-surface-variant text-[14px] leading-[1.4] font-[500] tracking-[0.05em]">
                  7 Drafts
                </span>
              </div>
              <div className="w-full bg-surface-container-highest h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[92%]" />
              </div>
            </div>

            {/* Monthly Revenue */}
            <div className="bg-[rgba(20,20,20,0.7)] backdrop-blur-[20px] border border-[#262626] p-6 rounded-xl flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">payments</span>
              </div>
              <span className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant uppercase tracking-widest">
                Monthly Revenue
              </span>
              <div className="flex items-end justify-between">
                <span className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold bg-gradient-to-br from-[#f2ca50] to-[#d4af37] bg-clip-text text-transparent">
                  $842.5k
                </span>
                <span className="text-emerald-400 text-[14px] leading-[1.4] font-[500] tracking-[0.05em] flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">arrow_upward</span>{" "}
                  8.4%
                </span>
              </div>
              <div className="w-full bg-surface-container-highest h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[65%]" />
              </div>
            </div>

            {/* Pending Support */}
            <div className="bg-[rgba(20,20,20,0.7)] backdrop-blur-[20px] border border-[#262626] p-6 rounded-xl flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">headset_mic</span>
              </div>
              <span className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant uppercase tracking-widest">
                Pending Support
              </span>
              <div className="flex items-end justify-between">
                <span className="font-['Playfair_Display'] text-[32px] leading-[1.3] font-semibold text-error">
                  14
                </span>
                <span className="text-on-surface-variant text-[14px] leading-[1.4] font-[500] tracking-[0.05em]">
                  Avg 2h 4m
                </span>
              </div>
              <div className="w-full bg-surface-container-highest h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-error h-full w-[35%]" />
              </div>
            </div>
          </section>

          {/* DATA GRID: REVENUE & DISTRIBUTION */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Revenue Overview Chart */}
            <section className="lg:col-span-2 bg-[rgba(20,20,20,0.7)] backdrop-blur-[20px] border border-[#262626] rounded-xl p-8 flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.3] font-semibold text-on-surface">
                    Revenue Overview
                  </h3>
                  <p className="text-on-surface-variant text-[16px] leading-[1.5]">
                    Institutional growth trajectory (Last 6 Months)
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-1 rounded border border-outline-variant text-[12px] leading-[1.3] font-[500] hover:border-primary transition-colors">
                    1M
                  </button>
                  <button className="px-4 py-1 rounded bg-primary text-on-primary text-[12px] leading-[1.3] font-[500]">
                    6M
                  </button>
                  <button className="px-4 py-1 rounded border border-outline-variant text-[12px] leading-[1.3] font-[500] hover:border-primary transition-colors">
                    1Y
                  </button>
                </div>
              </div>
              <div className="h-64 w-full flex items-end justify-between gap-4 px-4 pt-10 border-b border-outline-variant relative">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-[1px]">
                  <div className="border-b border-[#262626] w-full" />
                  <div className="border-b border-[#262626] w-full" />
                  <div className="border-b border-[#262626] w-full" />
                  <div className="border-b border-[#262626] w-full" />
                </div>
                {[
                  { month: "JAN", height: "40%", value: "$420k", active: false },
                  { month: "FEB", height: "55%", value: "$580k", active: false },
                  { month: "MAR", height: "45%", value: "$490k", active: false },
                  { month: "APR", height: "75%", value: "$720k", active: false },
                  { month: "MAY", height: "65%", value: "$650k", active: false },
                  { month: "JUN", height: "95%", value: "$842k", active: true },
                ].map((bar) => (
                  <div
                    key={bar.month}
                    className="flex-1 flex flex-col items-center gap-4 z-10"
                  >
                    <div
                      className={`w-full max-w-[40px] rounded-t h-[${bar.height}] ${bar.active ? "bg-primary" : "bg-secondary-container"} hover:bg-primary transition-colors group cursor-pointer relative`}
                    >
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface border border-primary px-2 py-1 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {bar.value}
                      </div>
                    </div>
                    <span
                      className={`text-[10px] text-on-surface-variant ${bar.active ? "text-primary font-bold" : ""}`}
                    >
                      {bar.month}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Distribution */}
            <section className="bg-[rgba(20,20,20,0.7)] backdrop-blur-[20px] border border-[#262626] rounded-xl p-8 flex flex-col gap-6">
              <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.3] font-semibold text-on-surface">
                Distribution
              </h3>
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-[12px] leading-[1.3] font-[500]">
                    <span className="text-on-surface-variant">
                      Institutional Masters
                    </span>
                    <span className="text-primary">3,240</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-highest rounded-full">
                    <div className="h-full bg-primary rounded-full w-[25%]" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-[12px] leading-[1.3] font-[500]">
                    <span className="text-on-surface-variant">Elite Traders</span>
                    <span className="text-secondary">5,102</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-highest rounded-full">
                    <div className="h-full bg-secondary rounded-full w-[45%]" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-[12px] leading-[1.3] font-[500]">
                    <span className="text-on-surface-variant">
                      Standard Academy
                    </span>
                    <span className="text-on-surface-variant">4,140</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-highest rounded-full">
                    <div className="h-full bg-surface-variant rounded-full w-[30%]" />
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-outline-variant">
                <p className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant mb-4">
                  Quick Navigation
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button className="p-3 bg-surface-container hover:bg-surface-container-highest rounded-lg transition-colors flex flex-col items-center gap-2 border border-outline-variant">
                    <span className="material-symbols-outlined text-primary">
                      person_add
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-tighter">
                      Add Student
                    </span>
                  </button>
                  <button className="p-3 bg-surface-container hover:bg-surface-container-highest rounded-lg transition-colors flex flex-col items-center gap-2 border border-outline-variant">
                    <span className="material-symbols-outlined text-secondary">
                      mail
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-tighter">
                      Blast Email
                    </span>
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* RECENT STUDENT ACTIVITY TABLE */}
          <section className="mt-10 bg-[rgba(20,20,20,0.7)] backdrop-blur-[20px] border border-[#262626] rounded-xl overflow-hidden">
            <div className="p-8 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
              <h3 className="font-['Playfair_Display'] text-[24px] leading-[1.3] font-semibold text-on-surface">
                Recent Student Activity
              </h3>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <input
                    className="bg-surface-container-lowest border border-outline-variant text-[12px] leading-[1.3] font-[500] py-2 px-10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all w-64"
                    placeholder="Search students..."
                    type="text"
                  />
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                    search
                  </span>
                </div>
                <button className="flex items-center gap-2 text-[12px] leading-[1.3] font-[500] text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">filter_list</span>
                  Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant border-b border-outline-variant bg-surface-container-low/50 uppercase tracking-widest">
                    <th className="px-8 py-4 font-medium">Student Name</th>
                    <th className="px-8 py-4 font-medium">Course Enrolled</th>
                    <th className="px-8 py-4 font-medium">Tier</th>
                    <th className="px-8 py-4 font-medium">Date Joined</th>
                    <th className="px-8 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]">
                  {[
                    {
                      initials: "JD",
                      name: "Jonathan Devlin",
                      course: "Institutional Order Flow Mastery",
                      tier: "Institutional",
                      tierColor: "primary",
                      date: "Oct 24, 2023",
                    },
                    {
                      initials: "AM",
                      name: "Alicia Montgomery",
                      course: "Price Action Core Foundations",
                      tier: "Elite",
                      tierColor: "secondary",
                      date: "Oct 23, 2023",
                    },
                    {
                      initials: "HK",
                      name: "Hassan Karim",
                      course: "Risk Management Executive Seminar",
                      tier: "Standard",
                      tierColor: "surface",
                      date: "Oct 23, 2023",
                    },
                    {
                      initials: "SL",
                      name: "Sarah Lindholm",
                      course: "Psychology of Scale Trading",
                      tier: "Institutional",
                      tierColor: "primary",
                      date: "Oct 22, 2023",
                    },
                  ].map((student) => (
                    <tr
                      key={student.initials}
                      className="hover:bg-surface-container-highest/30 transition-colors"
                    >
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full ${student.tierColor === "primary" ? "bg-primary-container text-on-primary-container" : student.tierColor === "secondary" ? "bg-secondary-container text-on-secondary-container" : "bg-surface-container-highest text-on-surface-variant"} flex items-center justify-center font-bold text-[10px]`}
                          >
                            {student.initials}
                          </div>
                          <span className="text-[14px] leading-[1.4] font-[500] tracking-[0.05em] text-on-surface">
                            {student.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-[16px] leading-[1.5] text-on-surface-variant">
                        {student.course}
                      </td>
                      <td className="px-8 py-5">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase ${student.tierColor === "primary" ? "bg-primary/10 text-primary border-primary/20" : student.tierColor === "secondary" ? "bg-secondary/10 text-secondary border-secondary/20" : "bg-surface-variant text-on-surface-variant border-outline-variant"}`}
                        >
                          {student.tier}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-[14px] leading-[1.4] font-[500] tracking-[0.05em] text-on-surface-variant opacity-60">
                        {student.date}
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button className="material-symbols-outlined text-on-surface-variant hover:text-primary">
                          more_vert
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 border-t border-outline-variant flex items-center justify-center">
              <button className="text-primary text-[14px] leading-[1.4] font-[500] tracking-[0.05em] hover:underline decoration-primary/30 underline-offset-8 transition-all">
                View All Activity Log
              </button>
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <footer className="w-full py-12 border-t border-outline-variant bg-surface-container-lowest flex flex-col md:flex-row justify-between items-center px-[24px] max-w-[1440px] mx-auto gap-[8px]">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="font-['Playfair_Display'] text-[24px] leading-[1.3] font-semibold text-primary">
              Forex Mindset Academy
            </span>
            <p className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant">
              &copy; 2024 Forex Mindset Academy. All Rights Reserved.
              Institutional Grade Trading.
            </p>
          </div>
          <div className="flex gap-8">
            <Link
              className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
              href="#"
            >
              Risk Disclosure
            </Link>
            <Link
              className="text-[12px] leading-[1.3] font-[500] text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}