"use client";

import { useState } from "react";

type Workspace = {
  id: string;
  name: string;
  owner?: boolean;
  description?: string;
  industry?: string;
  size?: string;
  date?: string;
};

const workspaces: Workspace[] = [
  {
    id: "ashley",
    name: "ashley.pixel.hive.demo's Workspace",
  },
  {
    id: "demo-3",
    name: "3 PixelHive Demo's Workspace",
    owner: true,
    description: "Default workspace",
    industry: "Technology",
    size: "1–10",
    date: "2/1/2026",
  },
  {
    id: "pixel-hive",
    name: "Pixel Hive",
    description: "The Pixel Hive Team",
    industry: "Technology",
    size: "1–10",
    date: "2/1/2026",
  },
  {
    id: "abundant-minds",
    name: "Abundant Minds",
  },
  {
    id: "main-demo",
    name: "MAIN DEMO ACCOUNT",
    owner: true,
    description: "Default workspace",
    industry: "Technology",
    size: "1–10",
    date: "1/21/2026",
  },
];

function IconBuilding() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="9" y1="22" x2="9" y2="18" />
      <line x1="15" y1="22" x2="15" y2="18" />
      <line x1="8" y1="6" x2="8" y2="6" />
      <line x1="12" y1="6" x2="12" y2="6" />
      <line x1="16" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="8" y2="10" />
      <line x1="12" y1="10" x2="12" y2="10" />
      <line x1="16" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="8" y2="14" />
      <line x1="12" y1="14" x2="12" y2="14" />
      <line x1="16" y1="14" x2="16" y2="14" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MetaRow({ icon, value, muted }: { icon: React.ReactNode; value: string; muted?: boolean }) {
  return (
    <div className={`flex items-center gap-4 font-inter text-[13px] ${muted ? "text-ph-azure11/45 dark:text-ph-zircon/40" : "text-ph-azure11/75 dark:text-ph-zircon/75"}`}>
      <span className="text-ph-azure11/40 dark:text-ph-zircon/35">{icon}</span>
      <span>{value}</span>
    </div>
  );
}

function WorkspaceCard({ w }: { w: Workspace }) {
  const populated = Boolean(w.industry || w.size || w.date);
  return (
    <div className="group relative flex h-full min-h-[240px] flex-col rounded-[18px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-6 shadow-[0_2px_8px_rgba(23,26,32,0.04)] transition hover:shadow-[0_8px_28px_rgba(23,26,32,0.08)] dark:hover:shadow-[0_8px_28px_rgba(0,0,0,0.45)] hover:border-[rgba(23,26,32,0.10)] dark:hover:border-white/[0.12]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-manrope text-[16px] font-bold leading-tight tracking-[-0.2px] text-ph-azure11 dark:text-ph-zircon">
          {w.name}
        </h3>
        {w.owner && (
          <span className="inline-flex flex-shrink-0 items-center rounded-full bg-ph-azure11 dark:bg-white/[0.10] px-2.5 py-0.5 font-inter text-[10.5px] font-bold uppercase tracking-[0.8px] text-white dark:text-ph-zircon">
            Owner
          </span>
        )}
      </div>

      {w.description && (
        <p className="mt-1 font-inter text-[13px] text-ph-azure11/55 dark:text-ph-zircon/55">{w.description}</p>
      )}

      <div className="mt-4 mb-5 flex flex-col gap-1.5">
        <MetaRow icon={<IconBuilding />} value={w.industry ?? "No industry specified"} muted={!w.industry} />
        <MetaRow icon={<IconUsers />} value={w.size ?? "No size specified"} muted={!w.size} />
        <MetaRow icon={<IconClock />} value={w.date ?? "Invalid Date"} muted={!w.date} />
      </div>

      <div className="mt-auto -mx-6 -mb-6 flex items-center justify-end gap-1 border-t border-[rgba(23,26,32,0.05)] dark:border-white/[0.05] px-4 py-2">
        <button
          aria-label="Workspace settings"
          className="flex h-8 w-8 items-center justify-center rounded-full text-ph-azure11/45 dark:text-ph-zircon/45 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-ph-azure11 dark:hover:text-ph-zircon transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
        {!w.owner && populated && (
          <button
            aria-label="Delete workspace"
            className="flex h-8 w-8 items-center justify-center rounded-full text-ph-azure11/45 dark:text-ph-zircon/45 hover:bg-rose-500/10 hover:text-rose-500 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
            </svg>
          </button>
        )}
        {w.owner && (
          <button
            aria-label="Delete workspace"
            className="flex h-8 w-8 items-center justify-center rounded-full text-ph-azure11/45 dark:text-ph-zircon/45 hover:bg-rose-500/10 hover:text-rose-500 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

const INDUSTRIES = ["Technology", "Healthcare", "Finance", "Education", "Retail", "Manufacturing", "Consulting", "Non-profit", "Government", "Other"];
const TEAM_SIZES = ["1–10", "11–50", "51–200", "201–500", "501–1000", "1000+"];

function CreateWorkspaceModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [industry, setIndustry] = useState("Technology");
  const [size, setSize] = useState("1–10");
  const [makeDefault, setMakeDefault] = useState(false);
  const [logo, setLogo] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);

  function handleFile(f: File | null | undefined) {
    if (f && f.type.startsWith("image/")) setLogo(f);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-8"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[88vh] w-full max-w-[520px] flex-col overflow-hidden rounded-[20px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] shadow-[0_24px_64px_rgba(0,0,0,0.35)]"
      >
        <div className="flex items-center justify-between border-b border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] px-6 py-4">
          <div>
            <h2 className="font-manrope text-[18px] font-bold text-ph-azure11 dark:text-ph-zircon">New Workspace</h2>
            <p className="mt-0.5 font-inter text-[12.5px] text-ph-azure11/55 dark:text-ph-zircon/55">
              Set up a calm, isolated workspace for a team or brand.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ph-azure11/55 dark:text-ph-zircon/55 hover:bg-black/[0.05] dark:hover:bg-white/[0.06] hover:text-ph-azure11 dark:hover:text-ph-zircon transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6">
          <label className="flex flex-col gap-1.5">
            <span className="font-inter text-[11.5px] font-semibold uppercase tracking-[0.6px] text-ph-azure11/55 dark:text-ph-zircon/55">Workspace Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Studio West"
              className="h-11 w-full rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.12] bg-transparent px-4 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon placeholder:text-ph-azure11/40 dark:placeholder:text-ph-zircon/40 focus:border-[rgba(23,26,32,0.20)] dark:focus:border-white/[0.25] focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="font-inter text-[11.5px] font-semibold uppercase tracking-[0.6px] text-ph-azure11/55 dark:text-ph-zircon/55">Subtitle</span>
            <input
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Short tagline or description"
              className="h-11 w-full rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.12] bg-transparent px-4 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon placeholder:text-ph-azure11/40 dark:placeholder:text-ph-zircon/40 focus:border-[rgba(23,26,32,0.20)] dark:focus:border-white/[0.25] focus:outline-none"
            />
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="font-inter text-[11.5px] font-semibold uppercase tracking-[0.6px] text-ph-azure11/55 dark:text-ph-zircon/55">Industry</span>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="h-11 w-full rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.12] bg-white dark:bg-[#10151D] px-3 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon focus:outline-none"
              >
                {INDUSTRIES.map((i) => <option key={i}>{i}</option>)}
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-inter text-[11.5px] font-semibold uppercase tracking-[0.6px] text-ph-azure11/55 dark:text-ph-zircon/55">Team Size</span>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="h-11 w-full rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.12] bg-white dark:bg-[#10151D] px-3 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon focus:outline-none"
              >
                {TEAM_SIZES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="font-inter text-[11.5px] font-semibold uppercase tracking-[0.6px] text-ph-azure11/55 dark:text-ph-zircon/55">Workspace Image</span>
            <label
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                handleFile(e.dataTransfer.files?.[0]);
              }}
              className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-[12px] border border-dashed px-4 py-6 text-center transition-colors ${
                dragOver
                  ? "border-ph-accent bg-ph-accent/8"
                  : "border-[rgba(23,26,32,0.16)] dark:border-white/[0.16] hover:border-ph-accent/40"
              }`}
            >
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFile(e.target.files?.[0])}
              />
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(23,26,32,0.05)] dark:bg-white/[0.06] text-ph-azure11/70 dark:text-ph-zircon/70">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </span>
              {logo ? (
                <p className="font-inter text-[13px] font-semibold text-ph-azure11 dark:text-ph-zircon">{logo.name}</p>
              ) : (
                <>
                  <p className="font-inter text-[13px] font-semibold text-ph-azure11 dark:text-ph-zircon">Drag & drop image or <span className="text-ph-accent underline">browse</span></p>
                  <p className="font-inter text-[11.5px] text-ph-azure11/55 dark:text-ph-zircon/55">PNG, JPG, WEBP up to 5MB</p>
                </>
              )}
            </label>
          </div>

          <button
            type="button"
            onClick={() => setMakeDefault((m) => !m)}
            className={`flex items-center gap-3 rounded-[12px] border px-4 py-3 text-left transition-colors ${
              makeDefault
                ? "border-ph-accent/40 bg-ph-accent/8"
                : "border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] hover:border-ph-accent/30"
            }`}
          >
            <span
              className={`flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[5px] border ${
                makeDefault ? "border-ph-accent bg-ph-accent text-ph-azure11" : "border-[rgba(23,26,32,0.20)] dark:border-white/[0.20]"
              }`}
            >
              {makeDefault && (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </span>
            <div className="min-w-0">
              <p className="font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">Set as default workspace</p>
              <p className="font-inter text-[12px] text-ph-azure11/55 dark:text-ph-zircon/55">Opens automatically when you sign in.</p>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-full border border-[rgba(23,26,32,0.10)] dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-5 py-2 font-inter text-[13px] font-semibold text-ph-azure11 dark:text-ph-zircon hover:border-[rgba(23,26,32,0.20)] dark:hover:border-white/[0.20] transition-colors"
          >
            Cancel
          </button>
          <button
            disabled={!name.trim()}
            onClick={onClose}
            className="rounded-full bg-ph-accent px-5 py-2 font-inter text-[13px] font-semibold text-ph-azure11 hover:bg-ph-yellow-mid transition-colors disabled:cursor-not-allowed disabled:opacity-40"
          >
            Create Workspace
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WorkspacesPage() {
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <div className="mx-auto max-w-[1200px] px-8 pt-10 pb-16">
      {/* Hero card */}
      <div
        className="rounded-[20px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-8 py-10 shadow-[0_2px_8px_rgba(23,26,32,0.04)]"
        style={{
          backgroundImage:
            "radial-gradient(800px 200px at 0 0, rgba(255,194,71,0.10) 0%, rgba(255,194,71,0) 60%)",
        }}
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[640px]">
            <p className="font-inter text-[12px] font-bold uppercase tracking-[2px] text-ph-accent">Workspaces</p>
            <h1 className="mt-2 font-manrope text-[44px] font-bold leading-[48px] tracking-[-1.4px] text-ph-azure11 dark:text-ph-zircon">
              Workspaces
            </h1>
            <p className="mt-2 font-inter text-[15px] text-ph-azure11/55 dark:text-ph-zircon/55">
              Manage your workspaces, ownership, and operating environments from one calm control layer.
            </p>
          </div>
          <button
            onClick={() => setCreateOpen(true)}
            className="flex items-center gap-2 rounded-full bg-ph-accent px-5 py-3 font-inter text-[14px] font-semibold text-ph-azure11 hover:bg-ph-yellow-mid transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Create New Workspace
          </button>
        </div>
      </div>

      {/* Workspace grid */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {workspaces.map((w) => (
          <WorkspaceCard key={w.id} w={w} />
        ))}
        {/* Create card */}
        <button
          onClick={() => setCreateOpen(true)}
          className="group flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-[18px] border-2 border-dashed border-[rgba(23,26,32,0.12)] dark:border-white/[0.12] bg-white/40 dark:bg-white/[0.02] p-6 text-center transition-colors hover:border-ph-accent/60 hover:bg-ph-accent/5"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ph-accent/15 text-[#B07A00] dark:text-ph-accent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </span>
          <p className="font-manrope text-[15px] font-bold text-ph-azure11 dark:text-ph-zircon">Create New Workspace</p>
          <p className="font-inter text-[12.5px] text-ph-azure11/55 dark:text-ph-zircon/55">
            Spin up a clean environment for a new team.
          </p>
        </button>
      </div>

      <CreateWorkspaceModal open={createOpen} onClose={() => setCreateOpen(false)} />
    </div>
  );
}
