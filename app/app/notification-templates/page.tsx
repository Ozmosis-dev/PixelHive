"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
      <span className="text-ph-azure11 dark:text-ph-zircon">Notification Templates</span>
    </nav>
  );
}

type Template = {
  id: string;
  title: string;
  category: { label: string; tone: "neutral" | "amber" | "sky" | "rose" };
  description: string;
  active: boolean;
  scope: "Global" | "Workspace";
  updated: string;
};

const templates: Template[] = [
  {
    id: "event-review",
    title: "Google Calendar — Event Review Required",
    category: { label: "Event Review Required", tone: "neutral" },
    description: "Sent to the workspace owner when an uncertain calendar event is added to the review queue. Includes event details and action links to approve, reject, or review in the app.",
    active: true,
    scope: "Global",
    updated: "1/30/2026",
  },
  {
    id: "feedback-received",
    title: "New Feedback / Comment Received",
    category: { label: "Feedback Received", tone: "amber" },
    description: "Notification sent when new feedback or a comment is received on a job from a client.",
    active: true,
    scope: "Global",
    updated: "12/9/2025",
  },
  {
    id: "job-assigned",
    title: "Job Assigned to Editor",
    category: { label: "Job Assigned", tone: "neutral" },
    description: "Notification sent when a job is assigned to an editor on your team.",
    active: true,
    scope: "Global",
    updated: "12/7/2025",
  },
  {
    id: "property-prep",
    title: "Property Preparation Checklist",
    category: { label: "Property Prep Checklist", tone: "sky" },
    description: "Pre-shoot notification with property preparation checklist sent to the photographer the day before.",
    active: true,
    scope: "Global",
    updated: "2/1/2026",
  },
];

const categoryTone: Record<string, string> = {
  neutral: "bg-black/[0.06] dark:bg-white/[0.08] text-ph-azure11/75 dark:text-ph-zircon/75 border-[rgba(23,26,32,0.08)] dark:border-white/[0.10]",
  amber: "bg-[rgba(244,180,0,0.14)] text-[#B07A00] dark:text-ph-accent border-[rgba(244,180,0,0.30)]",
  sky: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/25",
  rose: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/25",
};

function ScopePill({ scope }: { scope: Template["scope"] }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/25 bg-sky-500/10 px-2 py-0.5 font-inter text-[10.5px] font-semibold uppercase tracking-[1px] text-sky-600 dark:text-sky-400">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {scope}
    </span>
  );
}

function ActiveDot({ active }: { active: boolean }) {
  if (!active) {
    return <span className="block h-2 w-2 rounded-full bg-ph-azure11/20 dark:bg-white/20" title="Off" />;
  }
  return (
    <span className="relative flex h-2 w-2" title="Active">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.18),0_0_12px_rgba(52,211,153,0.7)]" />
    </span>
  );
}

function Menu({ active, onToggleActive }: { active: boolean; onToggleActive: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const items: { label: string; icon: React.ReactNode; tone?: "danger"; onClick?: () => void }[] = [
    {
      label: "Edit template",
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
      ),
    },
    {
      label: "Send test email",
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      ),
    },
    {
      label: "Preview",
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      label: "Duplicate",
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      ),
    },
    {
      label: "View history",
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      label: active ? "Disable" : "Enable",
      onClick: onToggleActive,
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
      ),
    },
    {
      label: "Delete",
      tone: "danger",
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
          <path d="M10 11v6M14 11v6" />
          <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex h-7 w-7 items-center justify-center rounded-full text-ph-azure11/40 dark:text-ph-zircon/40 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
        aria-label="More"
        aria-expanded={open}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-9 z-20 w-52 overflow-hidden rounded-[12px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.10] bg-white dark:bg-[#10151D] py-1 shadow-[0_18px_42px_rgba(3,8,18,0.12)] dark:shadow-[0_22px_52px_rgba(3,8,18,0.55)]">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => { it.onClick?.(); setOpen(false); }}
              className={`flex w-full items-center gap-2.5 px-3 py-2 font-inter text-[12.5px] transition ${
                it.tone === "danger"
                  ? "text-rose-600 dark:text-rose-400 hover:bg-rose-500/10"
                  : "text-ph-azure11 dark:text-ph-zircon hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
              }`}
            >
              <span className={it.tone === "danger" ? "text-rose-500 dark:text-rose-400" : "text-ph-azure11/55 dark:text-ph-zircon/55"}>
                {it.icon}
              </span>
              {it.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function TemplateCard({ t }: { t: Template }) {
  const [active, setActive] = useState(t.active);
  return (
    <article className="flex h-full flex-col rounded-[20px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-5 shadow-[0_2px_8px_rgba(23,26,32,0.04)] transition hover:border-ph-accent/40 hover:shadow-[0_14px_36px_rgba(3,8,18,0.08)] dark:hover:shadow-[0_22px_52px_rgba(3,8,18,0.45)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-manrope text-[16.5px] font-bold leading-[20px] tracking-[-0.2px] text-ph-azure11 dark:text-ph-zircon">
          {t.title}
        </h3>
        <Menu active={active} onToggleActive={() => setActive((v) => !v)} />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <ScopePill scope={t.scope} />
        <span className={`inline-flex items-center rounded-full border px-2 py-0.5 font-inter text-[10.5px] font-semibold uppercase tracking-[1px] ${categoryTone[t.category.tone]}`}>
          {t.category.label}
        </span>
      </div>

      <p className="mt-4 font-inter text-[13px] leading-[19px] text-ph-azure11/70 dark:text-ph-zircon/70">
        {t.description}
      </p>

      <div className="mt-auto pt-5">
        <div className="flex items-center justify-between border-t border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] pt-3">
          <div className="flex items-center gap-2">
            <ActiveDot active={active} />
            <p className="font-inter text-[11.5px] text-ph-azure11/50 dark:text-ph-zircon/45">
              Updated {t.updated}
            </p>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(23,26,32,0.10)] dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-3 py-1 font-inter text-[12px] font-semibold text-ph-azure11 dark:text-ph-zircon transition hover:border-ph-accent/60 hover:bg-ph-accent hover:text-ph-azure11">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
            </svg>
            Edit
          </button>
        </div>
      </div>
    </article>
  );
}

export default function NotificationTemplatesPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-8 pt-10 pb-16">
      {/* Hero card — matches feature-requests style */}
      <div
        className="rounded-[20px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-8 py-10 shadow-[0_2px_8px_rgba(23,26,32,0.04)]"
        style={{
          backgroundImage:
            "radial-gradient(800px 200px at 0 0, rgba(255,194,71,0.10) 0%, rgba(255,194,71,0) 60%)",
        }}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <Breadcrumb />
            <h1 className="mt-4 font-manrope text-[44px] font-bold leading-[48px] tracking-[-1.4px] text-ph-azure11 dark:text-ph-zircon">
              Notification Templates
            </h1>
            <p className="mt-2 font-inter text-[15px] text-ph-azure11/55 dark:text-ph-zircon/55">
              Manage email notification templates for your workspace
            </p>
          </div>
          <div className="flex flex-shrink-0 items-center gap-3 pt-2">
            <button className="inline-flex items-center gap-2 rounded-full border border-[rgba(23,26,32,0.10)] dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-4 py-2 font-inter text-[12.5px] font-semibold text-ph-azure11 dark:text-ph-zircon hover:border-ph-accent/60">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              History
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-ph-azure11 dark:bg-ph-accent px-4 py-2 font-inter text-[12.5px] font-semibold text-white dark:text-ph-azure11 hover:bg-black dark:hover:bg-ph-yellow-mid">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Create template
            </button>
          </div>
        </div>
      </div>

      {/* Summary chips */}
      <div className="mt-6 flex flex-wrap items-center gap-2 font-inter text-[12px]">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] px-3 py-1 text-ph-azure11/70 dark:text-ph-zircon/70">
          <span className="font-semibold text-ph-azure11 dark:text-ph-zircon">{templates.length}</span> templates
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-600 dark:text-emerald-400">
          <span className="block h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="font-semibold">{templates.filter((t) => t.active).length}</span> active
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-sky-600 dark:text-sky-400">
          <span className="font-semibold">{templates.filter((t) => t.scope === "Global").length}</span> global
        </span>
      </div>

      {/* Grid */}
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((t) => (
          <TemplateCard key={t.id} t={t} />
        ))}
      </div>
    </div>
  );
}
