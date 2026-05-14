"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiveMark } from "@/components/Icon";

const menuItems = [
  {
    href: "/app/clients",
    label: "Clients",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    href: "/app/feature-requests",
    label: "Feature Requests",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    href: "/app/review-queue",
    label: "Review Queue",
    badge: "3 Pending",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Manage Team",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    href: "/app/billing",
    label: "Plan & Billing",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Notification Templates",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Edit Workspace",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Add Workspace",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
];

export default function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
      if (userRef.current && !userRef.current.contains(e.target as Node)) setUserOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="w-full bg-[#0B0E13] text-white">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between px-8 py-4">
        <Link href="/app" className="flex items-center gap-2">
          <span className="text-ph-accent">
            <HiveMark size={22} strokeWidth={1.75} />
          </span>
          <span className="font-manrope text-[16.8px] font-bold leading-[25.2px] tracking-[-0.336px] text-white">PixelHive</span>
        </Link>

        {/* Workspace switcher dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-3 rounded-full bg-white/[0.06] px-4 py-2 hover:bg-white/[0.10] transition-colors"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.10] font-inter text-[12px] font-semibold text-white">M</span>
            <span className="font-inter text-[12.5px] font-bold uppercase tracking-[1.498px] text-white">Main Demo Account</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white/60 transition-transform ${menuOpen ? "rotate-180" : ""}`}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute left-1/2 top-[calc(100%+8px)] z-50 w-[340px] -translate-x-1/2 overflow-hidden rounded-[16px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] shadow-[0_16px_40px_rgba(23,26,32,0.16)]">
              <div className="flex flex-col py-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-[rgba(23,26,32,0.04)] dark:hover:bg-white/[0.06] dark:bg-white/[0.04]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ph-azure11 text-white">
                      {item.icon}
                    </span>
                    <span className="flex-1 font-inter text-[14px] font-semibold text-ph-azure11 dark:text-ph-zircon">
                      {item.label}
                      {item.badge && (
                        <span className="block font-inter text-[11.5px] font-normal text-ph-azure11/55 dark:text-ph-zircon/55">{item.badge}</span>
                      )}
                    </span>
                  </Link>
                ))}
              </div>
              <button className="flex w-full items-center justify-between border-t border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] px-5 py-3 font-inter text-[13px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70 hover:bg-[rgba(23,26,32,0.03)] dark:hover:bg-white/[0.04] dark:bg-white/[0.03]">
                Switch Workspace
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* User */}
        <div className="relative" ref={userRef}>
          <button
            onClick={() => setUserOpen((v) => !v)}
            className="flex items-center gap-2 rounded-full bg-white/[0.06] px-4 py-2 hover:bg-white/[0.10] transition-colors"
          >
            <span className="text-ph-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5L3 21l4.5-1.5" />
                <path d="M14 4l6 6-9 9-4 1 1-4 6-12z" />
              </svg>
            </span>
            <span className="font-inter text-[13.1px] font-semibold text-white">pixelhivedemo</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white/60 transition-transform ${userOpen ? "rotate-180" : ""}`}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {userOpen && (
            <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-[220px] overflow-hidden rounded-[16px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] shadow-[0_16px_40px_rgba(23,26,32,0.16)]">
              <div className="px-4 py-3 border-b border-[rgba(23,26,32,0.06)] dark:border-white/[0.08]">
                <p className="font-inter text-[14px] font-bold text-ph-azure11 dark:text-ph-zircon">pixelhivedemo</p>
                <p className="font-inter text-[12px] text-ph-azure11/55 dark:text-ph-zircon/55">demo@pixelhive.app</p>
              </div>
              <div className="py-1">
                <Link href="/app" onClick={() => setUserOpen(false)} className="flex items-center gap-2 px-4 py-2 font-inter text-[13.5px] text-ph-azure11 dark:text-ph-zircon hover:bg-[rgba(23,26,32,0.04)] dark:hover:bg-white/[0.06] dark:bg-white/[0.04]">Dashboard</Link>
                <Link href="/app/clients" onClick={() => setUserOpen(false)} className="flex items-center gap-2 px-4 py-2 font-inter text-[13.5px] text-ph-azure11 dark:text-ph-zircon hover:bg-[rgba(23,26,32,0.04)] dark:hover:bg-white/[0.06] dark:bg-white/[0.04]">Clients</Link>
                <Link href="/" onClick={() => setUserOpen(false)} className="flex items-center gap-2 px-4 py-2 font-inter text-[13.5px] text-ph-azure11 dark:text-ph-zircon hover:bg-[rgba(23,26,32,0.04)] dark:hover:bg-white/[0.06] dark:bg-white/[0.04]">Marketing Site</Link>
              </div>
              <button className="w-full border-t border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] px-4 py-2.5 text-left font-inter text-[13.5px] font-semibold text-[#C04747] hover:bg-[rgba(192,71,71,0.05)]">Sign out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
