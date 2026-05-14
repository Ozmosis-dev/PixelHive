"use client";

import Link from "next/link";
import { useState } from "react";

type ReviewItem = {
  id: string;
  title: string;
  status: "Event cancelled" | "Pending review";
  time: string;
  location: string;
  attendees: string;
  uncertainty?: string[];
};

const items: ReviewItem[] = [
  {
    id: "1",
    title: "25/682 Nicholson Street Fitzroy North",
    status: "Event cancelled",
    time: "3/2/2026 - 10:00 PM",
    location: "25/682 Nicholson St, Fitzroy North VIC 3068, Australia",
    attendees: "pixelhivedemo@gmail.com, carl.elly.house@gmail.com",
  },
  {
    id: "2",
    title: "24/682 Nicholson Street Fitzroy North",
    status: "Event cancelled",
    time: "3/2/2026 - 07:30 PM",
    location: "24/682 Nicholson St, Fitzroy North VIC 3068, Australia",
    attendees: "mr.lafraldo@gmail.com, pixelhivedemo@gmail.com",
    uncertainty: [
      "No photography-related keywords found",
      "Generic email domain detected",
      "Empty or very short description",
      "Multiple uncertainty indicators",
    ],
  },
];

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 font-inter text-[13px] text-ph-azure11/55 dark:text-ph-zircon/55">
      <Link href="/app/clients" className="flex items-center gap-1.5 hover:text-ph-azure11 dark:hover:text-ph-zircon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12l9-9 9 9" />
          <path d="M5 10v10h14V10" />
        </svg>
        Clients
      </Link>
      <span className="text-ph-azure11/30 dark:text-ph-zircon/30">›</span>
      <span>Workspaces</span>
      <span className="text-ph-azure11/30 dark:text-ph-zircon/30">›</span>
      <span>google-calendar-review</span>
      <span className="text-ph-azure11/30 dark:text-ph-zircon/30">›</span>
      <span className="font-mono text-[12px] text-ph-azure11/55 dark:text-ph-zircon/55">adfe3bb8-bc0c-49b2-8c8a-4ae63f1ed2f5</span>
    </nav>
  );
}

function Disclosure({
  label,
  tone = "neutral",
  icon,
  open,
  onToggle,
  children,
}: {
  label: string;
  tone?: "neutral" | "warning";
  icon: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  const toneRing =
    tone === "warning"
      ? "border-[rgba(226,165,0,0.30)] dark:border-[rgba(255,194,71,0.28)] bg-[rgba(226,165,0,0.06)] dark:bg-[rgba(255,194,71,0.05)]"
      : "border-[rgba(23,26,32,0.10)] dark:border-white/[0.10] bg-black/[0.02] dark:bg-white/[0.03]";
  const labelColor =
    tone === "warning"
      ? "text-ph-azure11 dark:text-ph-zircon"
      : "text-ph-azure11/75 dark:text-ph-zircon/70";
  const iconWrap =
    tone === "warning"
      ? "bg-[rgba(226,165,0,0.18)] text-[#B07A00] dark:text-ph-accent"
      : "border border-[rgba(23,26,32,0.12)] dark:border-white/[0.12] text-ph-azure11/60 dark:text-ph-zircon/60";
  return (
    <div className={`flex-1 rounded-[12px] border ${toneRing}`}>
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-3 px-3.5 py-2.5"
      >
        <span className={`flex h-7 w-7 items-center justify-center rounded-full ${iconWrap}`}>
          {icon}
        </span>
        <span className={`font-inter text-[13px] font-semibold ${labelColor}`}>{label}</span>
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`ml-auto text-ph-azure11/55 dark:text-ph-zircon/55 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="border-t border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] px-4 py-3">
          {children}
        </div>
      )}
    </div>
  );
}

function ReviewRow({ item }: { item: ReviewItem }) {
  const [openData, setOpenData] = useState(false);
  const [openWarn, setOpenWarn] = useState(false);
  return (
    <div className="rounded-[16px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-6 shadow-[0_2px_8px_rgba(23,26,32,0.04)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/55 dark:text-ph-zircon/55">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <h3 className="font-manrope text-[18px] font-bold text-ph-azure11 dark:text-ph-zircon">{item.title}</h3>
          <span className="rounded-full bg-[rgba(23,26,32,0.08)] dark:bg-white/[0.08] px-3 py-0.5 font-inter text-[12px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">
            {item.status}
          </span>
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(23,26,32,0.10)] dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-4 py-1.5 font-inter text-[12.5px] font-semibold text-ph-azure11 dark:text-ph-zircon transition hover:border-ph-accent/60 hover:bg-ph-accent hover:text-ph-azure11">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          View job
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-2 font-inter text-[13.5px] text-ph-azure11/70 dark:text-ph-zircon/70">
        <p className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {item.time}
        </p>
        <p className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {item.location}
        </p>
        <p className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          {item.attendees}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Disclosure
          label="Extracted Data"
          open={openData}
          onToggle={() => setOpenData((o) => !o)}
          icon={
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          }
        >
          <p className="font-inter text-[13px] text-ph-azure11/70 dark:text-ph-zircon/70">No extracted fields available.</p>
        </Disclosure>

        {item.uncertainty && (
          <Disclosure
            label="Uncertainty Reasons"
            tone="warning"
            open={openWarn}
            onToggle={() => setOpenWarn((o) => !o)}
            icon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            }
          >
            <ul className="flex flex-col gap-1.5 font-inter text-[13px] text-ph-azure11/85 dark:text-ph-zircon/85">
              {item.uncertainty.map((r) => (
                <li key={r} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#B07A00] dark:bg-ph-accent" />
                  {r}
                </li>
              ))}
            </ul>
          </Disclosure>
        )}
      </div>
    </div>
  );
}

export default function ReviewQueuePage() {
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  return (
    <div className="mx-auto max-w-[1200px] px-8 pt-10">
      <div
        className="rounded-[20px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-8 py-10 shadow-[0_2px_8px_rgba(23,26,32,0.04)]"
        style={{
          backgroundImage:
            "radial-gradient(800px 200px at 0 0, rgba(255,194,71,0.10) 0%, rgba(255,194,71,0) 60%)",
        }}
      >
        <Breadcrumb />
        <h1 className="mt-4 font-manrope text-[40px] font-bold leading-[44px] tracking-[-1.2px] text-ph-azure11 dark:text-ph-zircon">Review Queue</h1>
        <p className="mt-1 font-inter text-[14px] text-ph-azure11/55 dark:text-ph-zircon/55">Review uncertain calendar events that may be photography jobs</p>
      </div>

      {/* Filter row */}
      <div className="mt-6 flex items-center justify-between rounded-[16px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-5 py-4 shadow-[0_2px_8px_rgba(23,26,32,0.04)]">
        <div className="flex flex-col">
          <span className="font-inter text-[10.5px] uppercase tracking-[0.6px] text-ph-azure11/55 dark:text-ph-zircon/55">Filter by Status</span>
          <button className="mt-0.5 flex items-center gap-2 font-inter text-[14px] font-semibold text-ph-azure11 dark:text-ph-zircon">
            {statusFilter}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/40 dark:text-ph-zircon/40">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
        <button className="flex items-center gap-2 rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-5 py-2.5 font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
          Refresh
        </button>
      </div>

      {/* Review items */}
      <div className="mt-6 flex flex-col gap-4">
        {items.map((item) => (
          <ReviewRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
