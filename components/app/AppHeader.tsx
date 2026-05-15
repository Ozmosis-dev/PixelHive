"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiveMark } from "@/components/Icon";

const menuItems = [
  {
    href: "/app",
    label: "My Workspace",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12l9-9 9 9" />
        <path d="M5 10v10h14V10" />
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
    href: "/app/notification-templates",
    label: "Notification Templates",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    href: "/app/workspaces",
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

const workspaces = [
  { id: "main-demo", name: "Main Demo Account", initial: "M", current: true },
  { id: "pixel-hive", name: "Pixel Hive", initial: "P" },
  { id: "demo-3", name: "3 PixelHive Demo's Workspace", initial: "3" },
  { id: "ashley", name: "ashley.pixel.hive.demo's Workspace", initial: "A" },
  { id: "abundant-minds", name: "Abundant Minds", initial: "A" },
];

export default function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [switchView, setSwitchView] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setSwitchView(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function closeAll() {
    setMenuOpen(false);
    setSwitchView(false);
  }

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
            className="flex items-center gap-3 rounded-full bg-white/[0.03] px-4 py-2 hover:bg-white/[0.06] transition-colors"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ph-accent font-inter text-[12px] font-bold text-ph-azure11">M</span>
            <span className="font-inter text-[12.5px] font-bold uppercase tracking-[1.498px] text-white">Main Demo Account</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white/60 transition-transform ${menuOpen ? "rotate-180" : ""}`}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-[340px] overflow-hidden rounded-[16px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] shadow-[0_16px_40px_rgba(23,26,32,0.16)]">
              {!switchView ? (
                <>
                  <div className="flex flex-col py-2">
                    {menuItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeAll}
                        className="group flex items-center gap-3 px-4 py-2.5 hover:bg-ph-accent dark:hover:bg-ph-accent transition-colors"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ph-azure11 text-white group-hover:bg-ph-azure11 group-hover:text-ph-accent transition-colors">
                          {item.icon}
                        </span>
                        <span className="flex-1 font-inter text-[14px] font-semibold text-ph-azure11 dark:text-ph-zircon group-hover:text-ph-azure11">
                          {item.label}
                          {item.badge && (
                            <span className="block font-inter text-[11.5px] font-normal text-ph-azure11/55 dark:text-ph-zircon/55 group-hover:text-ph-azure11/70">{item.badge}</span>
                          )}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <button
                    onClick={() => setSwitchView(true)}
                    className="flex w-full items-center justify-between border-t border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] px-5 py-3 font-inter text-[13px] font-semibold text-ph-azure11/45 dark:text-ph-zircon/45 hover:bg-[rgba(23,26,32,0.03)] dark:hover:bg-white/[0.04] hover:text-ph-azure11 dark:hover:text-ph-zircon transition-colors"
                  >
                    Switch Workspace
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 border-b border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] px-4 py-3">
                    <button
                      onClick={() => setSwitchView(false)}
                      className="flex h-7 w-7 items-center justify-center rounded-full text-ph-azure11/55 dark:text-ph-zircon/55 hover:bg-[rgba(23,26,32,0.06)] dark:hover:bg-white/[0.06] hover:text-ph-azure11 dark:hover:text-ph-zircon transition-colors"
                      aria-label="Back"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <p className="font-inter text-[11px] font-bold uppercase tracking-[1.2px] text-ph-azure11/45 dark:text-ph-zircon/45">Switch Workspace</p>
                  </div>
                  <div className="flex max-h-[320px] flex-col overflow-y-auto py-2">
                    {workspaces.map((w) => (
                      <button
                        key={w.id}
                        onClick={closeAll}
                        className="flex items-center gap-3 px-4 py-2.5 text-left hover:bg-[rgba(23,26,32,0.04)] dark:hover:bg-white/[0.06]"
                      >
                        <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-inter text-[13px] font-bold ${w.current ? "bg-ph-accent text-ph-azure11" : "bg-ph-azure11 text-white"}`}>
                          {w.initial}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">{w.name}</span>
                          {w.current && (
                            <span className="block font-inter text-[11px] font-semibold uppercase tracking-[0.8px] text-ph-accent">Current</span>
                          )}
                        </span>
                        {w.current && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="text-ph-accent">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                  <Link
                    href="/app/workspaces"
                    onClick={closeAll}
                    className="flex items-center justify-center gap-1.5 border-t border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] px-5 py-3 font-inter text-[13px] font-semibold text-ph-azure11/45 dark:text-ph-zircon/45 hover:bg-[rgba(23,26,32,0.03)] dark:hover:bg-white/[0.04] hover:text-ph-azure11 dark:hover:text-ph-zircon transition-colors"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                    Manage Workspaces
                  </Link>
                </>
              )}
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
