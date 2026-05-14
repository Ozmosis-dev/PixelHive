"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { darkPanelBg } from "@/components/sections/feature-helpers";

const lightPanelBg =
  "linear-gradient(180deg, #FFFFFF 0%, #FBF8EE 100%)";

type Client = {
  name: string;
  initial: string;
  color: string;
  members: number;
  jobs: number;
  activeJobs: number;
  photos: number;
  revisions: number;
  date: string;
  status: "active" | "idle" | "new";
};

const clients: Client[] = [
  { name: "Cabin", initial: "C", color: "#8A5A3F", members: 1, jobs: 1, activeJobs: 1, photos: 24, revisions: 0, date: "May 11, 2026", status: "active" },
  { name: "Joe Bullock Test", initial: "J", color: "#3B82F6", members: 1, jobs: 3, activeJobs: 2, photos: 86, revisions: 1, date: "May 5, 2026", status: "active" },
  { name: "Gmail", initial: "G", color: "#C04747", members: 1, jobs: 1, activeJobs: 0, photos: 18, revisions: 0, date: "Mar 2, 2026", status: "idle" },
  { name: "Gmail", initial: "G", color: "#C04747", members: 1, jobs: 13, activeJobs: 1, photos: 412, revisions: 2, date: "Feb 3, 2026", status: "active" },
  { name: "Realestate Company", initial: "R", color: "#E2A500", members: 1, jobs: 0, activeJobs: 0, photos: 0, revisions: 0, date: "Feb 2, 2026", status: "idle" },
  { name: "Simple Realestate", initial: "S", color: "#C04747", members: 1, jobs: 0, activeJobs: 0, photos: 0, revisions: 0, date: "Feb 1, 2026", status: "idle" },
  { name: "Fitzroy Brokers", initial: "F", color: "#E2A500", members: 1, jobs: 0, activeJobs: 0, photos: 0, revisions: 0, date: "Feb 1, 2026", status: "idle" },
  { name: "Northcote Realestate", initial: "N", color: "#2A2F38", members: 1, jobs: 2, activeJobs: 1, photos: 62, revisions: 1, date: "Feb 1, 2026", status: "active" },
  { name: "Melbourne Realestate", initial: "M", color: "#C04747", members: 1, jobs: 0, activeJobs: 0, photos: 0, revisions: 0, date: "Feb 1, 2026", status: "idle" },
  { name: "Springfield Realestate", initial: "S", color: "#C04747", members: 4, jobs: 12, activeJobs: 3, photos: 384, revisions: 4, date: "Jan 21, 2026", status: "active" },
  { name: "Default Project", initial: "D", color: "#3B82F6", members: 2, jobs: 4, activeJobs: 0, photos: 128, revisions: 0, date: "Jan 21, 2026", status: "new" },
];

function statusDot(status: Client["status"]) {
  if (status === "active") return "bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.18)]";
  if (status === "new") return "bg-sky-400 shadow-[0_0_0_3px_rgba(56,189,248,0.18)]";
  return "bg-ph-azure11/25 dark:bg-white/30";
}

function statusLabel(status: Client["status"]) {
  if (status === "active") return "Active";
  if (status === "new") return "New";
  return "Idle";
}

function Breadcrumb() {
  return (
    <Link
      href="/app/clients"
      className="flex items-center gap-1.5 font-inter text-[14px] font-semibold text-ph-azure11 dark:text-ph-zircon"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12l9-9 9 9" />
        <path d="M5 10v10h14V10" />
      </svg>
      <span>Clients</span>
    </Link>
  );
}

function ViewToggle({ view, setView }: { view: "grid" | "list"; setView: (v: "grid" | "list") => void }) {
  const activeCls =
    "bg-[#FFF1CF] dark:bg-ph-accent/15 text-ph-brown dark:text-ph-accent";
  const idleCls =
    "text-ph-azure11/55 dark:text-ph-zircon/55 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]";
  return (
    <div className="flex items-center gap-1 rounded-full border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-1">
      <button
        onClick={() => setView("list")}
        className={`flex h-9 w-9 items-center justify-center rounded-full transition ${view === "list" ? activeCls : idleCls}`}
        aria-label="List view"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      </button>
      <button
        onClick={() => setView("grid")}
        className={`flex h-9 w-9 items-center justify-center rounded-full transition ${view === "grid" ? activeCls : idleCls}`}
        aria-label="Grid view"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      </button>
    </div>
  );
}

function Avatar({ client, size = 44 }: { client: Client; size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-2xl font-manrope font-bold text-white"
      style={{ width: size, height: size, fontSize: size * 0.42, backgroundColor: client.color }}
    >
      {client.initial}
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: number | string; accent?: "amber" | "sky" | "rose" }) {
  const accentText =
    accent === "amber" ? "text-ph-accent" :
    accent === "sky" ? "text-sky-400" :
    accent === "rose" ? "text-rose-400" :
    "text-ph-azure11 dark:text-ph-zircon";
  return (
    <div className="flex flex-col gap-0.5">
      <p className="font-inter text-[10px] font-semibold uppercase tracking-[1.6px] text-ph-azure11/55 dark:text-white/55">
        {label}
      </p>
      <p className={`font-manrope text-[16px] font-bold leading-none tabular-nums ${accentText}`}>
        {value}
      </p>
    </div>
  );
}

function ClientCard({ client }: { client: Client }) {
  const slug = client.name.toLowerCase().replace(/\s+/g, "-");
  return (
    <Link
      href={`/app/clients/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-[22px] border border-[rgba(23,26,32,0.07)] dark:border-white/[0.08] p-5 shadow-[0_2px_10px_rgba(23,26,32,0.05)] dark:shadow-[0_38px_90px_rgba(3,8,18,0.35)] transition-all hover:-translate-y-0.5 hover:border-ph-accent/45 hover:shadow-[0_20px_48px_rgba(3,8,18,0.18)] dark:hover:shadow-[0_22px_52px_rgba(3,8,18,0.55)]"
      style={{ background: `var(--panel-bg)` }}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3.5">
          <Avatar client={client} />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className={`block h-1.5 w-1.5 rounded-full ${statusDot(client.status)}`} />
              <p className="font-inter text-[10.9px] font-semibold uppercase tracking-[1.741px] text-ph-azure11/55 dark:text-white/55">
                {statusLabel(client.status)} · Client
              </p>
            </div>
            <h3 className="font-manrope text-[19px] font-bold leading-[22px] tracking-[-0.3px] text-ph-azure11 dark:text-ph-zircon">
              {client.name}
            </h3>
          </div>
        </div>
        <button
          onClick={(e) => { e.preventDefault(); }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ph-azure11/40 dark:text-ph-zircon/40 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
          aria-label="More"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </div>

      <div className="mt-5 rounded-[18px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.015] p-3.5">
        <div className="grid grid-cols-4 gap-2">
          <Stat label="Jobs" value={client.jobs} />
          <Stat label="Active" value={client.activeJobs} accent={client.activeJobs > 0 ? "amber" : undefined} />
          <Stat label="Photos" value={client.photos} />
          <Stat label="Revisions" value={client.revisions} accent={client.revisions > 0 ? "rose" : undefined} />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 font-inter text-[11.5px] text-ph-azure11/55 dark:text-ph-zircon/55">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>Last delivery {client.date}</span>
        </div>
        <div className="flex items-center -space-x-2">
          {Array.from({ length: Math.min(client.members, 3) }).map((_, i) => (
            <span
              key={i}
              className="block h-5 w-5 rounded-full border-2 border-white dark:border-[#10151D] bg-gradient-to-br from-ph-pale-sky to-ph-azure11"
            />
          ))}
          {client.members > 3 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white dark:border-[#10151D] bg-ph-azure11 dark:bg-white/[0.10] px-1 font-inter text-[9px] font-semibold text-white dark:text-ph-zircon">
              +{client.members - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

type SortKey = "name" | "status" | "jobs" | "active" | "photos" | "revisions" | "date";
type SortDir = "asc" | "desc";

function SortIcon({ active, dir }: { active: boolean; dir: SortDir }) {
  return (
    <span className={`inline-flex flex-col leading-none ${active ? "text-ph-accent" : "text-ph-azure11/35 dark:text-ph-zircon/35"}`}>
      <svg width="8" height="5" viewBox="0 0 8 5" fill="none" className={active && dir === "asc" ? "" : "opacity-50"}>
        <path d="M4 0L8 5H0L4 0Z" fill="currentColor" />
      </svg>
      <svg width="8" height="5" viewBox="0 0 8 5" fill="none" className={active && dir === "desc" ? "" : "opacity-50"} style={{ marginTop: 2 }}>
        <path d="M4 5L0 0H8L4 5Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function ClientRow({ client }: { client: Client }) {
  const slug = client.name.toLowerCase().replace(/\s+/g, "-");
  return (
    <Link
      href={`/app/clients/${slug}`}
      className="group grid grid-cols-[minmax(0,1.6fr)_0.6fr_0.4fr_0.4fr_0.5fr_0.65fr_0.9fr_96px] items-center gap-4 border-b border-[rgba(23,26,32,0.05)] dark:border-white/[0.05] px-5 py-3.5 transition hover:bg-black/[0.02] dark:hover:bg-white/[0.03]"
    >
      <div className="flex items-center gap-3">
        <Avatar client={client} size={36} />
        <div className="min-w-0">
          <h3 className="truncate font-manrope text-[15px] font-bold text-ph-azure11 dark:text-ph-zircon">
            {client.name}
          </h3>
          <p className="font-inter text-[11px] text-ph-azure11/50 dark:text-ph-zircon/45">
            Client
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className={`block h-1.5 w-1.5 rounded-full ${statusDot(client.status)}`} />
        <span className="font-inter text-[12px] text-ph-azure11/70 dark:text-ph-zircon/70">
          {statusLabel(client.status)}
        </span>
      </div>
      <div className="font-manrope text-[14px] font-bold text-ph-azure11 dark:text-ph-zircon tabular-nums">
        {client.jobs}
      </div>
      <div className={`font-manrope text-[14px] font-bold tabular-nums ${client.activeJobs > 0 ? "text-ph-accent" : "text-ph-azure11/40 dark:text-ph-zircon/40"}`}>
        {client.activeJobs}
      </div>
      <div className="font-manrope text-[14px] font-bold text-ph-azure11 dark:text-ph-zircon tabular-nums">
        {client.photos}
      </div>
      <div className={`font-manrope text-[14px] font-bold tabular-nums ${client.revisions > 0 ? "text-rose-400" : "text-ph-azure11/40 dark:text-ph-zircon/40"}`}>
        {client.revisions}
      </div>
      <div className="font-inter text-[12px] text-ph-azure11/55 dark:text-ph-zircon/55">
        {client.date}
      </div>
      <span className="inline-flex items-center justify-center gap-1 justify-self-end rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.10] bg-black/[0.02] dark:bg-white/[0.04] px-3 py-1.5 font-inter text-[11px] font-semibold text-ph-azure11/75 dark:text-ph-zircon/75 transition group-hover:border-ph-accent/60 group-hover:bg-ph-accent group-hover:text-ph-azure11">
        Open
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </Link>
  );
}

function ListHeader({
  sortKey,
  sortDir,
  toggleSort,
}: {
  sortKey: SortKey;
  sortDir: SortDir;
  toggleSort: (key: SortKey) => void;
}) {
  const cols: { key: SortKey | null; label: string }[] = [
    { key: "name", label: "Client" },
    { key: "status", label: "Status" },
    { key: "jobs", label: "Jobs" },
    { key: "active", label: "Active" },
    { key: "photos", label: "Photos" },
    { key: "revisions", label: "Revisions" },
    { key: "date", label: "Last delivery" },
    { key: null, label: "" },
  ];
  return (
    <div className="grid grid-cols-[minmax(0,1.6fr)_0.6fr_0.4fr_0.4fr_0.5fr_0.65fr_0.9fr_96px] items-center gap-4 border-b border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.015] px-5 py-3">
      {cols.map((c, i) => {
        const isSortable = c.key !== null;
        const isActive = sortKey === c.key;
        const baseCls = "font-inter text-[10px] font-semibold uppercase tracking-[1.4px] text-ph-azure11/55 dark:text-ph-zircon/50";
        const firstColPad = i === 0 ? "pl-[48px]" : "";
        if (!isSortable) return <span key={i} className={baseCls}>{c.label}</span>;
        return (
          <button
            key={i}
            onClick={() => toggleSort(c.key as SortKey)}
            className={`flex items-center gap-1.5 p-0 m-0 bg-transparent ${firstColPad} ${baseCls} hover:text-ph-azure11 dark:hover:text-ph-zircon ${isActive ? "text-ph-azure11 dark:text-ph-zircon" : ""}`}
          >
            <span>{c.label}</span>
            <SortIcon active={isActive} dir={sortDir} />
          </button>
        );
      })}
    </div>
  );
}

export default function ClientsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir(key === "name" ? "asc" : "desc");
    }
  }

  const sorted = useMemo(() => {
    const arr = clients.filter((c) =>
      c.name.toLowerCase().includes(query.toLowerCase())
    );
    const dir = sortDir === "asc" ? 1 : -1;
    arr.sort((a, b) => {
      switch (sortKey) {
        case "name": return a.name.localeCompare(b.name) * dir;
        case "status": return a.status.localeCompare(b.status) * dir;
        case "jobs": return (a.jobs - b.jobs) * dir;
        case "active": return (a.activeJobs - b.activeJobs) * dir;
        case "photos": return (a.photos - b.photos) * dir;
        case "revisions": return (a.revisions - b.revisions) * dir;
        case "date": return (new Date(a.date).getTime() - new Date(b.date).getTime()) * dir;
      }
    });
    return arr;
  }, [query, sortKey, sortDir]);

  const totalActive = clients.reduce((s, c) => s + c.activeJobs, 0);
  const totalRevisions = clients.reduce((s, c) => s + c.revisions, 0);

  return (
    <div
      className="relative w-full"
      style={
        {
          ["--panel-bg" as string]: lightPanelBg,
        } as React.CSSProperties
      }
    >
      <style>{`.dark [style*="--panel-bg"] { --panel-bg: ${darkPanelBg}; }`}</style>

      <div className="relative mx-auto max-w-[1280px] px-8 pt-10 pb-16">

      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <Breadcrumb />
          <div className="flex items-baseline gap-4">
            <h1 className="font-manrope text-[32px] font-bold tracking-[-0.6px] text-ph-azure11 dark:text-ph-zircon">
              Clients
            </h1>
            <div className="flex items-center gap-3 font-inter text-[12.5px] text-ph-azure11/60 dark:text-ph-zircon/55">
              <span>{clients.length} total</span>
              <span className="block h-1 w-1 rounded-full bg-ph-azure11/20 dark:bg-white/15" />
              <span className="flex items-center gap-1.5">
                <span className="block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {totalActive} active jobs
              </span>
              {totalRevisions > 0 && (
                <>
                  <span className="block h-1 w-1 rounded-full bg-ph-azure11/20 dark:bg-white/15" />
                  <span className="flex items-center gap-1.5">
                    <span className="block h-1.5 w-1.5 rounded-full bg-rose-400" />
                    {totalRevisions} revisions pending
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-3.5 py-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/45 dark:text-ph-zircon/45">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search clients"
              className="w-44 bg-transparent font-inter text-[13px] text-ph-azure11 dark:text-ph-zircon placeholder:text-ph-azure11/40 dark:placeholder:text-ph-zircon/35 outline-none"
            />
          </div>
          <ViewToggle view={view} setView={setView} />
          <button className="flex items-center gap-2 rounded-full bg-ph-azure11 px-5 py-2.5 font-inter text-[14px] font-semibold text-white hover:bg-black transition-colors dark:bg-ph-accent dark:text-ph-azure11 dark:hover:bg-ph-yellow-mid">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add Client
          </button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="mt-8 grid grid-cols-3 gap-5">
          {sorted.map((c, i) => (
            <ClientCard key={`${c.name}-${i}`} client={c} />
          ))}
        </div>
      ) : (
        <div
          className="mt-8 overflow-hidden rounded-[28px] border border-[rgba(23,26,32,0.07)] dark:border-white/[0.08] shadow-[0_2px_10px_rgba(23,26,32,0.05)] dark:shadow-[0_38px_90px_rgba(3,8,18,0.35)]"
          style={{ background: `var(--panel-bg)` }}
        >
          <ListHeader sortKey={sortKey} sortDir={sortDir} toggleSort={toggleSort} />
          {sorted.map((c, i) => (
            <ClientRow key={`${c.name}-${i}`} client={c} />
          ))}
        </div>
      )}

      {sorted.length === 0 && (
        <div className="mt-16 text-center font-inter text-[14px] text-ph-azure11/55 dark:text-ph-zircon/55">
          No clients match &ldquo;{query}&rdquo;.
        </div>
      )}
      </div>
    </div>
  );
}
