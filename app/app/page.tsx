"use client";

import Link from "next/link";
import { useState } from "react";
const darkPanelBg =
  "radial-gradient(700px 700px at 50% 0%, rgba(107,212,255,0.04) 0%, rgba(107,212,255,0) 36%), linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%), #10151D";

const lightPanelBg = "linear-gradient(180deg, #FFFFFF 0%, #FBF8EE 100%)";

type Tab = "overview" | "pipeline" | "team" | "billing";

function Tabs({ tab, setTab }: { tab: Tab; setTab: (t: Tab) => void }) {
  const items: { key: Tab; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "pipeline", label: "Pipeline" },
    { key: "team", label: "Team" },
    { key: "billing", label: "Billing" },
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
    { name: "Sarah Johnson", role: "Lead Editor", active: 4, today: 12 },
    { name: "Mike Wilson", role: "Photographer", active: 2, today: 6 },
    { name: "Carla Lopez", role: "QC Reviewer", active: 3, today: 9 },
    { name: "Daniel Villafranca", role: "Owner", active: 1, today: 4 },
  ];
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
            <div key={m.name} className="flex items-center gap-3 rounded-[14px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-white dark:bg-white/[0.03] p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.10] bg-black/[0.04] dark:bg-white/[0.06] font-manrope text-[15px] font-bold text-ph-azure11 dark:text-ph-zircon">
                {m.name.charAt(0)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-inter text-[14px] font-semibold text-ph-azure11 dark:text-ph-zircon">{m.name}</p>
                <p className="font-inter text-[12px] text-ph-azure11/55 dark:text-ph-zircon/55">{m.role}</p>
              </div>
              <div className="text-right">
                <p className="font-manrope text-[16px] font-bold text-ph-azure11 dark:text-ph-zircon tabular-nums">{m.active}<span className="ml-1 font-inter text-[11px] font-normal text-ph-azure11/45 dark:text-ph-zircon/40">active</span></p>
                <p className="font-inter text-[11px] text-ph-azure11/55 dark:text-ph-zircon/55">{m.today} today</p>
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
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-ph-azure11 dark:bg-ph-accent font-manrope text-[32px] font-bold text-white dark:text-ph-azure11 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
              P
            </div>
            <div>
              <Eyebrow>Welcome back</Eyebrow>
              <h1 className="mt-1 font-manrope text-[36px] font-bold leading-[40px] tracking-[-1px] text-ph-azure11 dark:text-ph-zircon">
                Pixel Hive
              </h1>
              <p className="mt-1 font-inter text-[13.5px] text-ph-azure11/55 dark:text-ph-zircon/55">
                The Pixel Hive Team · 11 clients · 18 jobs in flight
              </p>
            </div>
          </div>
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

        <div className="mt-6">
          <Tabs tab={tab} setTab={setTab} />
        </div>

        {tab === "overview" && <OverviewTab />}
        {tab === "pipeline" && <PipelineTab />}
        {tab === "team" && <TeamTab />}
        {tab === "billing" && <BillingTab />}
      </div>
    </div>
  );
}
