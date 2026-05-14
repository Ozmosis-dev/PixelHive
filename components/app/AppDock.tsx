"use client";

import { useTheme } from "./ThemeProvider";

export default function AppDock() {
  const { theme, toggle } = useTheme();

  return (
    <div className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-black/[0.06] bg-white/90 dark:bg-[#10151D]/90 px-3 py-2 shadow-[0_8px_24px_rgba(23,26,32,0.08)] backdrop-blur dark:border-white/[0.08] dark:bg-[#10151D]/90">
      <button
        onClick={toggle}
        className="flex h-8 w-8 items-center justify-center rounded-full text-ph-azure11 dark:text-ph-zircon hover:bg-black/[0.04] dark:hover:bg-white/[0.06] dark:text-ph-zircon dark:hover:bg-white/[0.06]"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
          </svg>
        )}
      </button>
      <button className="flex h-8 w-8 items-center justify-center rounded-full text-ph-azure11 dark:text-ph-zircon hover:bg-black/[0.04] dark:hover:bg-white/[0.06] dark:text-ph-zircon dark:hover:bg-white/[0.06]" aria-label="Apps">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      </button>
      <button className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-ph-azure11 dark:text-ph-zircon hover:bg-black/[0.04] dark:hover:bg-white/[0.06] dark:text-ph-zircon dark:hover:bg-white/[0.06]" aria-label="Locale">
        <span className="font-inter text-[12px] font-semibold">US</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  );
}
