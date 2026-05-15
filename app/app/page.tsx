"use client";

import Link from "next/link";
import { useState } from "react";
const darkPanelBg =
  "radial-gradient(700px 700px at 50% 0%, rgba(107,212,255,0.04) 0%, rgba(107,212,255,0) 36%), linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%), #10151D";

const lightPanelBg = "linear-gradient(180deg, #FFFFFF 0%, #FBF8EE 100%)";

type Tab = "overview" | "pipeline" | "team" | "billing" | "settings";

function Tabs({ tab, setTab }: { tab: Tab; setTab: (t: Tab) => void }) {
  const items: { key: Tab; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "pipeline", label: "Pipeline" },
    { key: "team", label: "Team" },
    { key: "billing", label: "Billing" },
    { key: "settings", label: "Settings" },
  ];
  return (
    <div className="inline-flex items-center rounded-full border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-1">
      {items.map((i) => {
        const on = tab === i.key;
        return (
          <button
            key={i.key}
            onClick={() => setTab(i.key)}
            className={`rounded-full px-5 py-2 font-inter text-[12px] font-bold uppercase tracking-[1.5px] transition ${
              on
                ? "bg-[#FFF1CF] dark:bg-ph-accent/15 text-ph-brown dark:text-ph-accent"
                : "text-ph-azure11/45 dark:text-ph-zircon/45 hover:text-ph-azure11 dark:hover:text-ph-zircon"
            }`}
          >
            {i.label}
          </button>
        );
      })}
    </div>
  );
}

function Panel({ children, className = "", padding = "p-6" }: { children: React.ReactNode; className?: string; padding?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[22px] border border-[rgba(23,26,32,0.07)] dark:border-white/[0.08] shadow-[0_2px_10px_rgba(23,26,32,0.04)] dark:shadow-[0_38px_90px_rgba(3,8,18,0.35)] ${padding} ${className}`}
      style={{ background: `var(--panel-bg)` }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-inter text-[10.9px] font-semibold uppercase tracking-[1.741px] text-ph-azure11/55 dark:text-white/55">
      {children}
    </p>
  );
}

// Action cards
const actions = [
  {
    title: "Review queue",
    count: 3,
    sub: "uncertain events need confirmation",
    href: "/app/review-queue",
    tone: "amber" as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Revisions pending",
    count: 8,
    sub: "from 4 clients awaiting your team",
    href: "/app/clients",
    tone: "rose" as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
  {
    title: "Photos to upload",
    count: 142,
    sub: "across 3 active shoots today",
    href: "/app/clients",
    tone: "sky" as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    title: "Ready to deliver",
    count: 5,
    sub: "approved jobs awaiting handoff",
    href: "/app/clients",
    tone: "emerald" as const,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

const toneStyles: Record<string, { wrap: string; icon: string; count: string }> = {
  amber: {
    wrap: "border-[rgba(226,165,0,0.30)] dark:border-[rgba(255,194,71,0.28)]",
    icon: "bg-[rgba(226,165,0,0.18)] text-[#B07A00] dark:text-ph-accent",
    count: "text-[#B07A00] dark:text-ph-accent",
  },
  rose: {
    wrap: "border-[rgba(244,63,94,0.25)] dark:border-[rgba(251,113,133,0.25)]",
    icon: "bg-[rgba(244,63,94,0.12)] text-rose-500 dark:text-rose-400",
    count: "text-rose-500 dark:text-rose-400",
  },
  sky: {
    wrap: "border-[rgba(56,189,248,0.25)] dark:border-[rgba(125,211,252,0.25)]",
    icon: "bg-[rgba(56,189,248,0.12)] text-sky-500 dark:text-sky-400",
    count: "text-sky-500 dark:text-sky-400",
  },
  emerald: {
    wrap: "border-[rgba(16,185,129,0.25)] dark:border-[rgba(52,211,153,0.25)]",
    icon: "bg-[rgba(16,185,129,0.12)] text-emerald-500 dark:text-emerald-400",
    count: "text-emerald-500 dark:text-emerald-400",
  },
};

// Pipeline stages
const pipeline = [
  { stage: "Ingest", count: 4, items: ["Rodeo Dr", "Maple Ave", "Oak St", "+1 more"] },
  { stage: "Editing", count: 6, items: ["Nicholson St", "Pine Pl", "Cherry Ln", "+3 more"] },
  { stage: "QC Review", count: 3, items: ["Bay View", "Hilltop", "Lakeside"] },
  { stage: "Ready to Deliver", count: 5, items: ["Sunset Rd", "Birch Ave", "Maple Pl", "+2 more"] },
];

// Activity feed
const activity = [
  { who: "Sarah Johnson", what: "approved Nicholson St #12 — ready for delivery", when: "2m ago", tone: "emerald" },
  { who: "Mike Wilson", what: "uploaded 24 photos to Rodeo Dr shoot", when: "18m ago", tone: "sky" },
  { who: "Compass Northwest", what: "requested revisions on Living_01.jpg, Kitchen_03.jpg", when: "1h ago", tone: "amber" },
  { who: "Auto-tagger", what: "flagged 3 calendar events as uncertain", when: "2h ago", tone: "amber" },
  { who: "Daniel V.", what: "added Fitzroy Brokers as a new client", when: "Yesterday", tone: "neutral" },
];

const activityToneDot: Record<string, string> = {
  emerald: "bg-emerald-400",
  sky: "bg-sky-400",
  amber: "bg-ph-accent",
  rose: "bg-rose-400",
  neutral: "bg-ph-azure11/30 dark:bg-white/30",
};

// Active jobs linking to client pages
const activeJobs = [
  { id: "CABIN-e5c7", title: "Rodeo Dr, Beverly Hills", clientSlug: "cabin", clientName: "Cabin", stage: "Editing", photos: 24, due: "Today" },
  { id: "JOE-2b91", title: "Nicholson St #24", clientSlug: "joe-bullock-test", clientName: "Joe Bullock Test", stage: "QC Review", photos: 18, due: "Tomorrow" },
  { id: "SPRING-7f3a", title: "Hilltop Dr", clientSlug: "springfield-realestate", clientName: "Springfield Realestate", stage: "Ingest", photos: 32, due: "May 16" },
  { id: "NORTH-9e1c", title: "Bay View Terrace", clientSlug: "northcote-realestate", clientName: "Northcote Realestate", stage: "Ready to Deliver", photos: 28, due: "May 17" },
];

const stageStyles: Record<string, string> = {
  "Ingest": "bg-sky-500/10 text-sky-500 dark:text-sky-400 border-sky-500/20",
  "Editing": "bg-ph-accent/15 text-[#B07A00] dark:text-ph-accent border-ph-accent/30",
  "QC Review": "bg-rose-500/10 text-rose-500 dark:text-rose-400 border-rose-500/20",
  "Ready to Deliver": "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border-emerald-500/20",
};

// Top clients
const topClients = [
  { name: "Springfield Realestate", slug: "springfield-realestate", initial: "S", activeJobs: 3, openRevisions: 4 },
  { name: "Gmail", slug: "gmail", initial: "G", activeJobs: 1, openRevisions: 2 },
  { name: "Joe Bullock Test", slug: "joe-bullock-test", initial: "J", activeJobs: 2, openRevisions: 1 },
  { name: "Northcote Realestate", slug: "northcote-realestate", initial: "N", activeJobs: 1, openRevisions: 1 },
];

// KPIs
const kpis = [
  { label: "Jobs delivered", value: "42", delta: "+8 vs last wk", trend: "up" },
  { label: "On-time rate", value: "94%", delta: "+2.1%", trend: "up" },
  { label: "Avg turnaround", value: "4.2h", delta: "-12m", trend: "up" },
  { label: "Photos processed", value: "1,284", delta: "+186", trend: "up" },
];

function ActionCard({ a }: { a: (typeof actions)[number] }) {
  const t = toneStyles[a.tone];
  return (
    <Link
      href={a.href}
      className={`group relative flex flex-col gap-3 rounded-[18px] border ${t.wrap} bg-white/70 dark:bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(3,8,18,0.10)]`}
    >
      <div className="flex items-center justify-between">
        <span className={`flex h-10 w-10 items-center justify-center rounded-[12px] ${t.icon}`}>
          {a.icon}
        </span>
        <span className={`font-manrope text-[28px] font-bold leading-none tabular-nums ${t.count}`}>
          {a.count}
        </span>
      </div>
      <div>
        <p className="font-inter text-[13px] font-semibold text-ph-azure11 dark:text-ph-zircon">{a.title}</p>
        <p className="mt-1 font-inter text-[12px] leading-[16px] text-ph-azure11/55 dark:text-ph-zircon/55">{a.sub}</p>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-4 bottom-4 text-ph-azure11/35 dark:text-ph-zircon/35 transition group-hover:translate-x-0.5 group-hover:text-ph-azure11 dark:group-hover:text-ph-zircon">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </Link>
  );
}

function KpiTile({ k }: { k: (typeof kpis)[number] }) {
  return (
    <div className="rounded-[18px] border border-[rgba(23,26,32,0.07)] dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.03] p-4">
      <Eyebrow>{k.label}</Eyebrow>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="font-manrope text-[28px] font-bold leading-none tracking-[-0.4px] text-ph-azure11 dark:text-ph-zircon tabular-nums">
          {k.value}
        </p>
        <span className={`font-inter text-[12px] font-semibold ${k.trend === "up" ? "text-emerald-500 dark:text-emerald-400" : "text-rose-500 dark:text-rose-400"}`}>
          {k.delta}
        </span>
      </div>
    </div>
  );
}

function PipelineColumn({ p }: { p: (typeof pipeline)[number] }) {
  return (
    <div className="flex flex-col rounded-[16px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.015] p-4">
      <div className="flex items-center justify-between">
        <p className="font-inter text-[11px] font-semibold uppercase tracking-[1.4px] text-ph-azure11/55 dark:text-ph-zircon/55">
          {p.stage}
        </p>
        <span className="rounded-full bg-white dark:bg-white/[0.06] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] px-2 py-0.5 font-manrope text-[12px] font-bold text-ph-azure11 dark:text-ph-zircon tabular-nums">
          {p.count}
        </span>
      </div>
      <div className="mt-3 flex flex-col gap-1.5">
        {p.items.map((i) => (
          <div key={i} className="rounded-[10px] border border-[rgba(23,26,32,0.05)] dark:border-white/[0.05] bg-white dark:bg-white/[0.03] px-3 py-2 font-inter text-[12.5px] text-ph-azure11/80 dark:text-ph-zircon/80">
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="mt-6 flex flex-col gap-6">
      {/* Needs Attention */}
      <Panel padding="p-5">
        <div className="flex items-center justify-between">
          <div>
            <Eyebrow>Needs Your Attention</Eyebrow>
            <h3 className="mt-1 font-manrope text-[20px] font-bold tracking-[-0.3px] text-ph-azure11 dark:text-ph-zircon">
              16 items waiting on your team
            </h3>
          </div>
          <Link href="/app/review-queue" className="font-inter text-[12.5px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70 hover:text-ph-accent">
            View all →
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {actions.map((a) => (
            <ActionCard key={a.title} a={a} />
          ))}
        </div>
      </Panel>

      {/* KPIs + Upcoming + Activity */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          {/* KPIs */}
          <Panel padding="p-5">
            <div className="flex items-center justify-between">
              <div>
                <Eyebrow>This Week</Eyebrow>
                <h3 className="mt-1 font-manrope text-[18px] font-bold text-ph-azure11 dark:text-ph-zircon">
                  Workspace performance
                </h3>
              </div>
              <button className="font-inter text-[12.5px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">
                Last 7 days ▾
              </button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {kpis.map((k) => <KpiTile key={k.label} k={k} />)}
            </div>
          </Panel>

          {/* Active jobs */}
          <Panel padding="p-5">
            <div className="flex items-center justify-between">
              <div>
                <Eyebrow>Active Jobs</Eyebrow>
                <h3 className="mt-1 font-manrope text-[18px] font-bold text-ph-azure11 dark:text-ph-zircon">
                  In flight across your clients
                </h3>
              </div>
              <Link href="/app/clients" className="font-inter text-[12.5px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70 hover:text-ph-accent">
                All clients →
              </Link>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {activeJobs.map((j) => (
                <Link
                  key={j.id}
                  href={`/app/clients/${j.clientSlug}/jobs/${j.id.toLowerCase()}`}
                  className="group flex items-center gap-3 rounded-[14px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-white dark:bg-white/[0.03] px-4 py-3 transition hover:border-ph-accent/40 hover:bg-black/[0.02] dark:hover:bg-white/[0.05]"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.10] bg-black/[0.04] dark:bg-white/[0.06] font-manrope text-[13px] font-bold text-ph-azure11 dark:text-ph-zircon">
                    {j.clientName.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">{j.title}</p>
                    <p className="font-inter text-[12px] text-ph-azure11/55 dark:text-ph-zircon/55">{j.clientName} · {j.photos} photos · due {j.due}</p>
                  </div>
                  <span className={`rounded-full border px-2.5 py-0.5 font-inter text-[10.5px] font-bold uppercase tracking-[1px] ${stageStyles[j.stage]}`}>
                    {j.stage}
                  </span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/35 dark:text-ph-zircon/35 transition group-hover:translate-x-0.5 group-hover:text-ph-accent">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              ))}
            </div>
          </Panel>

          {/* Top clients */}
          <Panel padding="p-5">
            <div className="flex items-center justify-between">
              <div>
                <Eyebrow>Top Clients</Eyebrow>
                <h3 className="mt-1 font-manrope text-[18px] font-bold text-ph-azure11 dark:text-ph-zircon">
                  Most active this month
                </h3>
              </div>
              <Link href="/app/clients" className="font-inter text-[12.5px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70 hover:text-ph-accent">
                View all clients →
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
              {topClients.map((c) => (
                <Link
                  key={c.slug}
                  href={`/app/clients/${c.slug}`}
                  className="group flex items-center gap-3 rounded-[14px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-white dark:bg-white/[0.03] px-4 py-3 transition hover:border-ph-accent/40 hover:bg-black/[0.02] dark:hover:bg-white/[0.05]"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.10] bg-black/[0.04] dark:bg-white/[0.06] font-manrope text-[13px] font-bold text-ph-azure11 dark:text-ph-zircon">
                    {c.initial}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">{c.name}</p>
                    <p className="font-inter text-[11.5px] text-ph-azure11/55 dark:text-ph-zircon/55">
                      {c.activeJobs} active · {c.openRevisions} revisions
                    </p>
                  </div>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/35 dark:text-ph-zircon/35 transition group-hover:translate-x-0.5 group-hover:text-ph-accent">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              ))}
            </div>
          </Panel>
        </div>

        {/* Activity */}
        <div className="col-span-12 lg:col-span-4">
          <Panel padding="p-5" className="h-full">
            <div className="flex items-center justify-between">
              <div>
                <Eyebrow>Recent Activity</Eyebrow>
                <h3 className="mt-1 font-manrope text-[18px] font-bold text-ph-azure11 dark:text-ph-zircon">
                  Live feed
                </h3>
              </div>
              <span className="flex items-center gap-1.5 font-inter text-[11px] font-semibold text-emerald-500 dark:text-emerald-400">
                <span className="block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.18)]" />
                LIVE
              </span>
            </div>
            <ul className="mt-4 flex flex-col gap-3.5">
              {activity.map((a, i) => (
                <li key={i} className="flex gap-3">
                  <span className={`mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full ${activityToneDot[a.tone]}`} />
                  <div className="min-w-0 flex-1">
                    <p className="font-inter text-[12.5px] text-ph-azure11/80 dark:text-ph-zircon/80">
                      <span className="font-semibold text-ph-azure11 dark:text-ph-zircon">{a.who}</span>{" "}
                      {a.what}
                    </p>
                    <p className="mt-0.5 font-inter text-[11px] text-ph-azure11/45 dark:text-ph-zircon/40">{a.when}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  );
}

function PipelineTab() {
  return (
    <div className="mt-6">
      <Panel padding="p-5">
        <div className="flex items-center justify-between">
          <div>
            <Eyebrow>Production Pipeline</Eyebrow>
            <h3 className="mt-1 font-manrope text-[18px] font-bold text-ph-azure11 dark:text-ph-zircon">
              Active jobs by stage
            </h3>
          </div>
          <Link href="/app/clients" className="font-inter text-[12.5px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70 hover:text-ph-accent">
            Open jobs board →
          </Link>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {pipeline.map((p) => <PipelineColumn key={p.stage} p={p} />)}
        </div>
      </Panel>
    </div>
  );
}

function TeamTab() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Lead Editor",
      email: "sarah.johnson@pixelhive.app",
      active: 4,
      today: 12,
      jobs: [
        { id: "CABIN-e5c7", title: "Rodeo Dr · Beverly Hills", stage: "Editing", due: "Today" },
        { id: "JOE-2b91", title: "Nicholson St #24", stage: "QC Review", due: "Tomorrow" },
        { id: "SPRING-7f3a", title: "Hilltop Dr", stage: "Editing", due: "May 16" },
      ],
    },
    {
      name: "Mike Wilson",
      role: "Photographer",
      email: "mike.wilson@pixelhive.app",
      active: 2,
      today: 6,
      jobs: [
        { id: "NORTH-9e1c", title: "Bay View Terrace", stage: "Ingest", due: "May 17" },
        { id: "FITZ-4d22", title: "Fitzroy Brokers Set", stage: "Ingest", due: "May 18" },
      ],
    },
    {
      name: "Carla Lopez",
      role: "QC Reviewer",
      email: "carla.lopez@pixelhive.app",
      active: 3,
      today: 9,
      jobs: [
        { id: "JOE-2b91", title: "Nicholson St #24", stage: "QC Review", due: "Tomorrow" },
        { id: "BAY-8c10", title: "Bay View Terrace", stage: "QC Review", due: "May 17" },
        { id: "MAPLE-3a45", title: "Maple Ave", stage: "QC Review", due: "May 19" },
      ],
    },
    {
      name: "Daniel Villafranca",
      role: "Owner",
      email: "daniel@pixelhive.app",
      active: 1,
      today: 4,
      jobs: [{ id: "OAK-1f88", title: "Oak St", stage: "Ready to Deliver", due: "May 17" }],
    },
  ];

  const stageTone: Record<string, string> = {
    "Ingest": "bg-sky-500/10 text-sky-500 dark:text-sky-400",
    "Editing": "bg-ph-accent/15 text-[#B07A00] dark:text-ph-accent",
    "QC Review": "bg-rose-500/10 text-rose-500 dark:text-rose-400",
    "Ready to Deliver": "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400",
  };

  return (
    <div className="mt-6">
      <Panel padding="p-5">
        <div className="flex items-center justify-between">
          <div>
            <Eyebrow>Team Workload</Eyebrow>
            <h3 className="mt-1 font-manrope text-[18px] font-bold text-ph-azure11 dark:text-ph-zircon">
              4 active members
            </h3>
          </div>
          <button className="rounded-full bg-ph-azure11 dark:bg-ph-accent px-4 py-2 font-inter text-[12.5px] font-semibold text-white dark:text-ph-azure11 hover:bg-black dark:hover:bg-ph-yellow-mid">
            Invite member
          </button>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          {team.map((m) => (
            <div key={m.name} className="flex flex-col gap-4 rounded-[14px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-white dark:bg-white/[0.03] p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[12px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.10] bg-black/[0.04] dark:bg-white/[0.06] font-manrope text-[15px] font-bold text-ph-azure11 dark:text-ph-zircon">
                  {m.name.charAt(0)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-inter text-[14px] font-semibold text-ph-azure11 dark:text-ph-zircon">{m.name}</p>
                  <p className="font-inter text-[12px] text-ph-azure11/55 dark:text-ph-zircon/55">{m.role}</p>
                  <a href={`mailto:${m.email}`} className="mt-1 flex items-center gap-1.5 font-inter text-[11.5px] text-ph-azure11/50 dark:text-ph-zircon/50 hover:text-ph-accent">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                    {m.email}
                  </a>
                </div>
                <div className="text-right">
                  <p className="font-manrope text-[16px] font-bold text-ph-azure11 dark:text-ph-zircon tabular-nums">{m.active}<span className="ml-1 font-inter text-[11px] font-normal text-ph-azure11/45 dark:text-ph-zircon/40">active</span></p>
                  <p className="font-inter text-[11px] text-ph-azure11/55 dark:text-ph-zircon/55">{m.today} today</p>
                </div>
              </div>

              <div className="rounded-[10px] border border-[rgba(23,26,32,0.05)] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-3">
                <p className="mb-2 font-inter text-[10px] font-bold uppercase tracking-[0.8px] text-ph-azure11/45 dark:text-ph-zircon/45">Assigned Jobs · {m.jobs.length}</p>
                <ul className="flex flex-col gap-1.5">
                  {m.jobs.map((j) => (
                    <li key={j.id} className="flex items-center gap-2">
                      <span className={`flex-shrink-0 rounded-full px-2 py-0.5 font-inter text-[10px] font-semibold ${stageTone[j.stage]}`}>{j.stage}</span>
                      <span className="min-w-0 flex-1 truncate font-inter text-[12.5px] text-ph-azure11/85 dark:text-ph-zircon/85">{j.title}</span>
                      <span className="font-inter text-[11px] text-ph-azure11/50 dark:text-ph-zircon/50">{j.due}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

function BillingTab() {
  return (
    <div className="mt-6 grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-7">
        <Panel padding="p-6">
          <Eyebrow>Current Plan</Eyebrow>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <h3 className="font-manrope text-[28px] font-bold tracking-[-0.6px] text-ph-azure11 dark:text-ph-zircon">Pro</h3>
              <p className="mt-1 font-inter text-[13px] text-ph-azure11/55 dark:text-ph-zircon/55">$79/month · renews May 31, 2026</p>
            </div>
            <Link href="/app/billing" className="rounded-full border border-[rgba(23,26,32,0.10)] dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-4 py-2 font-inter text-[12.5px] font-semibold text-ph-azure11 dark:text-ph-zircon hover:border-ph-accent/60 hover:bg-ph-accent hover:text-ph-azure11">
              Manage plan
            </Link>
          </div>
          <div className="mt-5 rounded-[14px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-white dark:bg-white/[0.03] p-4">
            <div className="flex items-center justify-between">
              <p className="font-inter text-[12.5px] text-ph-azure11/70 dark:text-ph-zircon/70">Photo uploads this cycle</p>
              <p className="font-manrope text-[13px] font-bold text-ph-azure11 dark:text-ph-zircon tabular-nums">1,284 / 2,000</p>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.06]">
              <div className="h-full rounded-full bg-ph-accent" style={{ width: "64%" }} />
            </div>
          </div>
        </Panel>
      </div>
      <div className="col-span-12 lg:col-span-5">
        <Panel padding="p-6" className="h-full">
          <Eyebrow>Subscription</Eyebrow>
          <ul className="mt-3 flex flex-col gap-3 font-inter text-[13px] text-ph-azure11 dark:text-ph-zircon">
            <li className="flex items-center justify-between"><span className="text-ph-azure11/55 dark:text-ph-zircon/55">Seats</span><span className="font-semibold">8 of 10</span></li>
            <li className="flex items-center justify-between"><span className="text-ph-azure11/55 dark:text-ph-zircon/55">Storage</span><span className="font-semibold">142 GB / 500 GB</span></li>
            <li className="flex items-center justify-between"><span className="text-ph-azure11/55 dark:text-ph-zircon/55">Next invoice</span><span className="font-semibold">$79 · May 31</span></li>
            <li className="flex items-center justify-between"><span className="text-ph-azure11/55 dark:text-ph-zircon/55">Payment</span><span className="font-semibold">Visa •••• 4242</span></li>
          </ul>
        </Panel>
      </div>
    </div>
  );
}

const photographyServices = [
  "Interior Photography (20-30 photos)",
  "Exterior Photography (5-10 photos)",
  "Drone Photography (10-15 photos)",
  "Virtual Staging (per room)",
  "Twilight Photography",
];

const workspaceLimits = [
  {
    label: "Max Users",
    value: "3",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Max Workspaces",
    value: "1",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Max Storage",
    value: "1GB",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    label: "Max API Calls",
    value: "1000/month",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

function SectionHeader({ icon, title, action }: { icon: React.ReactNode; title: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <span className="text-[#B07A00] dark:text-ph-accent">{icon}</span>
        <h3 className="font-manrope text-[15.5px] font-bold tracking-[-0.2px] text-ph-azure11 dark:text-ph-zircon">{title}</h3>
      </div>
      {action}
    </div>
  );
}

function SettingsTab() {
  const [services, setServices] = useState<string[]>([]);
  const [breakdownOpen, setBreakdownOpen] = useState(false);

  const toggleService = (s: string) =>
    setServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  return (
    <div className="mt-6 grid grid-cols-12 gap-4">
      {/* Workspace identity */}
      <div className="col-span-12">
        <Panel padding="p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>Workspace</Eyebrow>
              <h2 className="font-manrope text-[22px] font-bold tracking-[-0.4px] text-ph-azure11 dark:text-ph-zircon">Main Demo Account</h2>
              <span className="font-inter text-[12.5px] text-ph-azure11/55 dark:text-ph-zircon/55">· Default workspace</span>
              <span className="inline-flex items-center rounded-full bg-ph-azure11 dark:bg-white/[0.10] px-2.5 py-0.5 font-inter text-[10.5px] font-bold uppercase tracking-[0.8px] text-white dark:text-ph-zircon">
                Owner
              </span>
            </div>
            <button
              aria-label="Edit workspace"
              className="flex h-8 w-8 items-center justify-center rounded-full text-ph-azure11/55 dark:text-ph-zircon/55 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-ph-azure11 dark:hover:text-ph-zircon transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </button>
          </div>
        </Panel>
      </div>

      {/* Profile */}
      <div className="col-span-12 lg:col-span-6">
        <Panel padding="p-5" className="h-full">
          <SectionHeader
            title="Profile"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }
            action={
              <button className="flex items-center gap-1.5 rounded-full border border-[rgba(23,26,32,0.10)] dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-3 py-1.5 font-inter text-[11.5px] font-semibold text-ph-azure11 dark:text-ph-zircon hover:border-ph-accent/60">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
                Edit Profile
              </button>
            }
          />
          <div className="mt-4 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ph-accent font-manrope text-[20px] font-bold text-ph-azure11">P</div>
            <div className="min-w-0">
              <p className="font-manrope text-[16px] font-bold text-ph-azure11 dark:text-ph-zircon">pixelhivedemo</p>
              <p className="font-inter text-[12.5px] text-ph-azure11/60 dark:text-ph-zircon/60">demo@pixelhive.app</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-[10px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.03] px-3 py-2.5">
              <p className="font-inter text-[10.5px] uppercase tracking-[0.6px] text-ph-azure11/50 dark:text-ph-zircon/50">Role</p>
              <p className="mt-0.5 font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">Owner</p>
            </div>
            <div className="rounded-[10px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.03] px-3 py-2.5">
              <p className="font-inter text-[10.5px] uppercase tracking-[0.6px] text-ph-azure11/50 dark:text-ph-zircon/50">Member Since</p>
              <p className="mt-0.5 font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">May 2026</p>
            </div>
            <div className="rounded-[10px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.03] px-3 py-2.5">
              <p className="font-inter text-[10.5px] uppercase tracking-[0.6px] text-ph-azure11/50 dark:text-ph-zircon/50">Timezone</p>
              <p className="mt-0.5 font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">PT (UTC−8)</p>
            </div>
            <div className="rounded-[10px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.03] px-3 py-2.5">
              <p className="font-inter text-[10.5px] uppercase tracking-[0.6px] text-ph-azure11/50 dark:text-ph-zircon/50">Phone</p>
              <p className="mt-0.5 font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">—</p>
            </div>
          </div>
        </Panel>
      </div>

      {/* Security */}
      <div className="col-span-12 lg:col-span-6">
        <Panel padding="p-5" className="h-full">
          <SectionHeader
            title="Security"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            }
          />
          <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between rounded-[12px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.03] px-4 py-3">
              <div className="min-w-0">
                <p className="font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">Password</p>
                <p className="font-inter text-[12px] text-ph-azure11/55 dark:text-ph-zircon/55">Last changed 3 months ago</p>
              </div>
              <button className="flex items-center gap-1.5 rounded-full border border-[rgba(23,26,32,0.10)] dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-3.5 py-1.5 font-inter text-[12px] font-semibold text-ph-azure11 dark:text-ph-zircon hover:border-ph-accent/60">
                Change Password
              </button>
            </div>
            <div className="flex items-center justify-between rounded-[12px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.03] px-4 py-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">Email</p>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 font-inter text-[10.5px] font-semibold text-[#B07A00] dark:text-ph-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-ph-accent" /> Unverified
                  </span>
                </div>
                <p className="font-inter text-[12px] text-ph-azure11/55 dark:text-ph-zircon/55">demo@pixelhive.app</p>
              </div>
              <button className="rounded-full bg-ph-accent px-3.5 py-1.5 font-inter text-[12px] font-semibold text-ph-azure11 hover:bg-ph-yellow-mid">
                Verify Email
              </button>
            </div>
            <div className="flex items-center justify-between rounded-[12px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.03] px-4 py-3">
              <div className="min-w-0">
                <p className="font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">Two-Factor Auth</p>
                <p className="font-inter text-[12px] text-ph-azure11/55 dark:text-ph-zircon/55">Add an extra layer of security</p>
              </div>
              <button className="flex items-center gap-1.5 rounded-full border border-[rgba(23,26,32,0.10)] dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-3.5 py-1.5 font-inter text-[12px] font-semibold text-ph-azure11 dark:text-ph-zircon hover:border-ph-accent/60">
                Enable
              </button>
            </div>
          </div>
        </Panel>
      </div>

      {/* Storage Usage — wide */}
      <div className="col-span-12 lg:col-span-6">
        <Panel padding="p-5" className="h-full">
          <SectionHeader
            title="Storage Usage"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            }
            action={
              <button className="flex items-center gap-1.5 rounded-full border border-[rgba(23,26,32,0.10)] dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-3 py-1.5 font-inter text-[11.5px] font-semibold text-ph-azure11 dark:text-ph-zircon hover:border-ph-accent/60">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10" />
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                </svg>
                Refresh
              </button>
            }
          />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { label: "Total Storage", value: "2.24 MB" },
              { label: "Total Files", value: "1" },
              { label: "Data Source", value: "s3" },
            ].map((s) => (
              <div key={s.label} className="rounded-[10px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-white dark:bg-white/[0.03] px-3 py-2.5">
                <p className="font-manrope text-[18px] font-bold tracking-[-0.3px] text-ph-azure11 dark:text-ph-zircon">{s.value}</p>
                <p className="mt-0.5 font-inter text-[10.5px] uppercase tracking-[0.6px] text-ph-azure11/50 dark:text-ph-zircon/50">{s.label}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setBreakdownOpen((o) => !o)}
            className="mt-2 flex w-full items-center justify-between rounded-[10px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-white dark:bg-white/[0.03] px-3.5 py-2.5"
          >
            <span className="flex items-center gap-2.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/55 dark:text-ph-zircon/55">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <span className="font-inter text-[12.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">File Breakdown</span>
              <span className="font-inter text-[11px] text-ph-azure11/50 dark:text-ph-zircon/50">· 1 file</span>
            </span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-ph-azure11/45 dark:text-ph-zircon/45 transition-transform ${breakdownOpen ? "rotate-180" : ""}`}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {breakdownOpen && (
            <div className="mt-2 rounded-[10px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.025] px-3.5 py-2.5 font-inter text-[12px] text-ph-azure11/65 dark:text-ph-zircon/65">
              No detailed breakdown available yet.
            </div>
          )}
        </Panel>
      </div>

      {/* Workspace Limits — narrow */}
      <div className="col-span-12 lg:col-span-6">
        <Panel padding="p-5" className="h-full">
          <SectionHeader
            title="Workspace Limits"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            }
          />
          <div className="mt-4 grid grid-cols-2 gap-2">
            {workspaceLimits.map((l) => (
              <div key={l.label} className="rounded-[10px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-white dark:bg-white/[0.03] px-3 py-2.5">
                <span className="flex items-center gap-1.5 font-inter text-[10.5px] uppercase tracking-[0.6px] text-ph-azure11/50 dark:text-ph-zircon/50">
                  <span className="text-ph-azure11/40 dark:text-ph-zircon/40">{l.icon}</span>
                  {l.label}
                </span>
                <p className="mt-1 font-manrope text-[16px] font-bold text-ph-azure11 dark:text-ph-zircon tabular-nums">{l.value}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* Photography Services */}
      <div className="col-span-12 lg:col-span-6">
        <Panel padding="p-5" className="h-full">
          <SectionHeader
            title="Photography Services"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            }
            action={
              <button className="rounded-full bg-ph-azure11 dark:bg-ph-accent px-4 py-1.5 font-inter text-[12px] font-semibold text-white dark:text-ph-azure11 hover:bg-black dark:hover:bg-ph-yellow-mid transition-colors">
                Save
              </button>
            }
          />
          <div className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {photographyServices.map((s) => {
              const on = services.includes(s);
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleService(s)}
                  className={`flex items-center gap-2.5 rounded-[10px] border px-3 py-2 text-left transition-colors ${
                    on
                      ? "border-ph-accent/40 bg-ph-accent/8"
                      : "border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-white dark:bg-white/[0.03] hover:border-ph-accent/30"
                  }`}
                  aria-pressed={on}
                >
                  <span
                    className={`flex h-[16px] w-[16px] flex-shrink-0 items-center justify-center rounded-[4px] border transition-colors ${
                      on
                        ? "border-ph-accent bg-ph-accent text-ph-azure11"
                        : "border-[rgba(23,26,32,0.20)] dark:border-white/[0.20]"
                    }`}
                  >
                    {on && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </span>
                  <span className="font-inter text-[12.5px] text-ph-azure11/85 dark:text-ph-zircon/85">{s}</span>
                </button>
              );
            })}
          </div>
        </Panel>
      </div>

      {/* Notification Templates */}
      <div className="col-span-12 lg:col-span-6">
        <Panel padding="p-5" className="h-full">
          <SectionHeader
            title="Notification Templates"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            }
          />
          <p className="mt-3 font-inter text-[12.5px] text-ph-azure11/65 dark:text-ph-zircon/65">
            Configure email notification templates for your workspace.
          </p>
          <Link
            href="/app/notification-templates"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-ph-azure11 dark:bg-ph-accent px-4 py-2 font-inter text-[12.5px] font-semibold text-white dark:text-ph-azure11 hover:bg-black dark:hover:bg-ph-yellow-mid transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            Manage Templates
          </Link>
        </Panel>
      </div>

      {/* Danger Zone */}
      <div className="col-span-12">
        <Panel padding="p-5" className="border-rose-500/25 dark:border-rose-500/25">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500 dark:text-rose-400">
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <div>
                <h3 className="font-manrope text-[15.5px] font-bold tracking-[-0.2px] text-rose-500 dark:text-rose-400">Danger Zone</h3>
                <p className="font-inter text-[12px] text-ph-azure11/55 dark:text-ph-zircon/55">Permanent actions. Cannot be undone.</p>
              </div>
            </div>
            <button className="flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/8 px-4 py-2 font-inter text-[12.5px] font-semibold text-rose-500 dark:text-rose-400 hover:bg-rose-500/12 transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
                <path d="M10 11v6M14 11v6" />
              </svg>
              Delete Workspace
            </button>
          </div>
        </Panel>
      </div>
    </div>
  );
}

export default function WorkspaceDashboard() {
  const [tab, setTab] = useState<Tab>("overview");

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
        {/* Hero */}
        <div className="flex items-center gap-5">
          <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-ph-azure11 dark:bg-ph-accent font-manrope text-[32px] font-bold text-white dark:text-ph-azure11 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
            P
          </div>
          <div>
            <Eyebrow>Welcome back</Eyebrow>
            <h1 className="mt-1 font-manrope text-[36px] font-bold leading-[40px] tracking-[-1px] text-ph-azure11 dark:text-ph-zircon">
              pixelhivedemo
            </h1>
            <p className="mt-1 font-inter text-[13.5px] text-ph-azure11/55 dark:text-ph-zircon/55">
              Main Demo Account · 11 clients · 18 jobs in flight
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <Tabs tab={tab} setTab={setTab} />
          <div className="flex items-center gap-3">
            <Link href="/app/clients" className="flex items-center gap-2 rounded-full border border-[rgba(23,26,32,0.10)] dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-5 py-2.5 font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon hover:border-ph-accent/60">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              Upload photos
            </Link>
            <button className="flex items-center gap-2 rounded-full bg-ph-azure11 dark:bg-ph-accent px-5 py-2.5 font-inter text-[13.5px] font-semibold text-white dark:text-ph-azure11 hover:bg-black dark:hover:bg-ph-yellow-mid">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              New job
            </button>
          </div>
        </div>

        {tab === "overview" && <OverviewTab />}
        {tab === "pipeline" && <PipelineTab />}
        {tab === "team" && <TeamTab />}
        {tab === "billing" && <BillingTab />}
        {tab === "settings" && <SettingsTab />}
      </div>
    </div>
  );
}
