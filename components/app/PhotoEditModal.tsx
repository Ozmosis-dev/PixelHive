"use client";

import { useEffect, useState } from "react";

export type Photo = {
  name: string;
  tag: string;
  rating: "Good" | "Excellent";
  ratingColor: string;
  size: string;
  date: string;
  image: string;
  intelligence: {
    category: string;
    shotType: string;
    rating: string;
    description: string;
    lighting: string;
    colorTemp: string;
    exposure: string;
    sharpness: string;
    contrast: string;
    alignment: string;
    qualityIssues: string;
    technicalNotes: string;
  };
  tags: string[];
};

type TabKey = "actions" | "intelligence" | "notes";

const TAB_ICONS: Record<TabKey, React.ReactNode> = {
  actions: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  intelligence: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a5 5 0 0 0-5 5c0 1.5.5 2.5 1.5 3.5L9 12v3h6v-3l.5-1.5C16.5 9.5 17 8.5 17 7a5 5 0 0 0-5-5z" />
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="21" x2="14" y2="21" />
    </svg>
  ),
  notes: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

function FieldBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[10px] bg-[rgba(23,26,32,0.04)] dark:bg-white/[0.04] px-3 py-2">
      <p className="font-inter text-[10px] uppercase tracking-[0.6px] text-ph-azure11/55 dark:text-ph-zircon/55">{label}</p>
      <p className="mt-0.5 font-inter text-[13px] font-semibold text-ph-azure11 dark:text-ph-zircon">{value}</p>
    </div>
  );
}

function SidebarBlock({ title, action, children }: { title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-[14px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-4">
      <div className="mb-2.5 flex items-center justify-between">
        <h3 className="font-inter text-[12px] font-bold uppercase tracking-[0.6px] text-ph-azure11/70 dark:text-ph-zircon/70">{title}</h3>
        {action}
      </div>
      {children}
    </div>
  );
}

export default function PhotoEditModal({
  photos,
  openIndex,
  onClose,
}: {
  photos: Photo[];
  openIndex: number | null;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(openIndex ?? 0);
  const [tab, setTab] = useState<TabKey>("actions");

  useEffect(() => {
    if (openIndex !== null) setIndex(openIndex);
  }, [openIndex]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (openIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setIndex((i) => Math.min(photos.length - 1, i + 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, photos.length, onClose]);

  if (openIndex === null) return null;
  const photo = photos[index];

  const quickActions = [
    { label: "Auto Enhance", icon: "M12 3.5 13.4 8 18 9.4 13.4 10.8 12 15.4 10.6 10.8 6 9.4 10.6 8 12 3.5Z" },
    { label: "Sky Replace", icon: "M17.5 19a4.5 4.5 0 1 0 0-9c-.07-.5-.2-1-.4-1.4A6 6 0 0 0 6.5 12.5 4 4 0 0 0 7 20h10.5z" },
    { label: "Color Correct", icon: "M12 22a10 10 0 1 1 0-20 8 8 0 0 1 8 8c0 2.21-1.79 4-4 4h-2a2 2 0 0 0-2 2c0 1.1.45 2.1 1.17 2.83.42.42.65.99.65 1.59A1.58 1.58 0 0 1 12 22z" },
    { label: "Crop/Rotate", icon: "M6 2v14a2 2 0 0 0 2 2h14M18 22V8a2 2 0 0 0-2-2H2" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Prev / Next */}
      <button
        onClick={() => setIndex((i) => Math.max(0, i - 1))}
        disabled={index === 0}
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white dark:bg-[#10151D] shadow-[0_4px_12px_rgba(0,0,0,0.15)] disabled:opacity-40"
        aria-label="Previous"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={() => setIndex((i) => Math.min(photos.length - 1, i + 1))}
        disabled={index === photos.length - 1}
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white dark:bg-[#10151D] shadow-[0_4px_12px_rgba(0,0,0,0.15)] disabled:opacity-40"
        aria-label="Next"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="flex h-full max-h-[94vh] w-[min(1400px,96vw)] flex-col gap-3">
        {/* Modal */}
        <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[20px] bg-[#FBF8EE] dark:bg-[#10151D] shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
          {/* Compact header */}
          <div className="flex items-center justify-between border-b border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-[#FBF8EE] dark:bg-[#10151D] px-5 py-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[rgba(23,26,32,0.06)] dark:bg-white/[0.06] text-ph-azure11 dark:text-ph-zircon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </span>
              <div className="min-w-0">
                <h2 className="truncate font-manrope text-[17px] font-bold text-ph-azure11 dark:text-ph-zircon">
                  {photo.name} <span className="font-normal text-ph-azure11/50 dark:text-ph-zircon/50">— Job #e5c7</span>
                </h2>
                <p className="truncate font-inter text-[12px] text-ph-azure11/60 dark:text-ph-zircon/60">Rodeo Dr, Beverly Hills, CA • Hasta Manana</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full bg-ph-azure11 px-2.5 py-1 font-inter text-[11px] font-semibold text-white">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                Version 1
              </span>
              <button className="hidden sm:flex items-center gap-1.5 rounded-full border border-[rgba(23,26,32,0.12)] dark:border-white/[0.12] bg-white dark:bg-[#10151D] px-2.5 py-1 font-inter text-[11px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Set Location
              </button>
              <span className="rounded-full bg-[rgba(23,26,32,0.08)] dark:bg-white/[0.08] px-2.5 py-1 font-inter text-[11px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">To Do</span>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#10151D] text-ph-azure11/60 dark:text-ph-zircon/60 hover:text-ph-azure11 dark:hover:text-ph-zircon"
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Body: image + sidebar */}
          <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1fr_360px]">
            {/* Left: image + action bar */}
            <div className="flex min-h-0 flex-col gap-3 p-4">
              {/* Image */}
              <div className="relative min-h-0 flex-1 overflow-hidden rounded-[14px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D]">
                <div className="absolute right-3 top-3 z-10 flex gap-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 dark:bg-[#10151D]/90 text-ph-azure11/70 dark:text-ph-zircon/70 shadow-sm" aria-label="Download">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 dark:bg-[#10151D]/90 text-ph-azure11/70 dark:text-ph-zircon/70 shadow-sm" aria-label="Fullscreen">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" />
                    </svg>
                  </button>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.image} alt={photo.name} className="h-full w-full object-cover" />
              </div>

              {/* Action bar: quick actions + AI prompt */}
              <div className="flex flex-col gap-2 rounded-[14px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-3">
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((a) => (
                    <button
                      key={a.label}
                      className="flex items-center gap-1.5 rounded-full bg-[rgba(23,26,32,0.06)] dark:bg-white/[0.06] px-3 py-1.5 font-inter text-[12px] font-semibold text-ph-azure11 dark:text-ph-zircon hover:bg-ph-azure11 hover:text-white dark:hover:bg-white/[0.12]"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d={a.icon} />
                      </svg>
                      {a.label}
                    </button>
                  ))}
                  <button className="ml-auto font-inter text-[11.5px] font-semibold text-ph-azure11/55 dark:text-ph-zircon/55 hover:text-ph-azure11">More tools →</button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex flex-1 items-center gap-2 rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-[#FBF8EE] dark:bg-[#0E1014] px-3 py-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/50 dark:text-ph-zircon/50">
                      <path d="M12 3.5 13.4 8 18 9.4 13.4 10.8 12 15.4 10.6 10.8 6 9.4 10.6 8 12 3.5Z" />
                    </svg>
                    <input
                      placeholder="Edit with PixelHive AI — describe your change…"
                      className="w-full bg-transparent font-inter text-[13px] text-ph-azure11 dark:text-ph-zircon placeholder:text-ph-azure11/40 dark:placeholder:text-ph-zircon/40 focus:outline-none"
                    />
                  </div>
                  <button className="rounded-full bg-ph-azure11 px-4 py-2 font-inter text-[12.5px] font-semibold text-white hover:bg-black">Apply</button>
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="flex min-h-0 flex-col border-t lg:border-l lg:border-t-0 border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-[#FBF8EE] dark:bg-[#0E1014]">
              {/* Tabs */}
              <div className="grid shrink-0 grid-cols-3 gap-1.5 border-b border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-[rgba(23,26,32,0.04)] dark:bg-white/[0.04] p-1.5">
                {([
                  { k: "actions", l: "Actions" },
                  { k: "intelligence", l: "Intelligence" },
                  { k: "notes", l: "Notes" },
                ] as { k: TabKey; l: string }[]).map((t) => (
                  <button
                    key={t.k}
                    onClick={() => setTab(t.k)}
                    className={`flex items-center justify-center gap-1.5 rounded-full px-2 py-2 font-inter text-[12.5px] font-semibold transition-colors ${
                      tab === t.k
                        ? "bg-ph-azure11 text-white shadow-[0_2px_6px_rgba(23,26,32,0.18)]"
                        : "text-ph-azure11/60 dark:text-ph-zircon/60 hover:bg-white dark:hover:bg-[#10151D] hover:text-ph-azure11 dark:hover:text-ph-zircon"
                    }`}
                  >
                    {TAB_ICONS[t.k]}
                    {t.l}
                  </button>
                ))}
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto p-3">
                {tab === "actions" && (
                  <div className="flex flex-col gap-3">
                    <SidebarBlock title="Photo Actions">
                      <button className="mb-2 w-full rounded-full bg-ph-accent py-2 font-inter text-[13px] font-semibold text-ph-azure11 hover:bg-ph-yellow-mid transition-colors">Mark Complete</button>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] py-2 font-inter text-[12px] font-semibold text-ph-azure11 dark:text-ph-zircon">QC Review</button>
                        <button className="rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] py-2 font-inter text-[12px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">Save Draft</button>
                      </div>
                    </SidebarBlock>

                    <SidebarBlock title="Job Details">
                      <div className="flex flex-col gap-2 font-inter text-[12.5px]">
                        <div className="flex items-center justify-between">
                          <span className="text-ph-azure11/55 dark:text-ph-zircon/55">Time Logged</span>
                          <span className="font-semibold text-ph-azure11 dark:text-ph-zircon">0h 0m</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-ph-azure11/55 dark:text-ph-zircon/55">Deadline</span>
                          <span className="font-semibold text-ph-azure11 dark:text-ph-zircon">5/12/2026</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-ph-azure11/55 dark:text-ph-zircon/55">Priority</span>
                          <span className="rounded-full bg-[rgba(23,26,32,0.08)] dark:bg-white/[0.08] px-2.5 py-0.5 font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">Standard</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-ph-azure11/55 dark:text-ph-zircon/55">Size</span>
                          <span className="font-semibold text-ph-azure11 dark:text-ph-zircon">{photo.size}</span>
                        </div>
                      </div>
                    </SidebarBlock>

                    <SidebarBlock title="Tags">
                      <button className="mb-2 flex h-9 w-full items-center justify-between rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-3 font-inter text-[12.5px] text-ph-azure11/55 dark:text-ph-zircon/55">
                        Add a tag
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      <div className="flex flex-wrap gap-1.5">
                        {photo.tags.map((tag) => (
                          <span key={tag} className="flex items-center gap-1 rounded-full bg-ph-azure11 px-2.5 py-0.5 font-inter text-[11.5px] text-white">
                            {tag}
                            <button aria-label="Remove">
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                              </svg>
                            </button>
                          </span>
                        ))}
                      </div>
                    </SidebarBlock>

                    <SidebarBlock title="Upload New Version">
                      <div className="rounded-[12px] border border-dashed border-[rgba(23,26,32,0.16)] dark:border-white/[0.16] bg-[#FBF8EE] dark:bg-[#0E1014] p-4 text-center">
                        <p className="font-inter text-[12.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">Drag & drop files</p>
                        <button className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-ph-azure11 px-3.5 py-1.5 font-inter text-[12px] font-semibold text-white">
                          Select Files
                        </button>
                        <p className="mt-2 font-inter text-[10.5px] text-ph-azure11/55 dark:text-ph-zircon/55">Max 100MB • JPEG, PNG, WEBP, ICO</p>
                      </div>
                    </SidebarBlock>
                  </div>
                )}

                {tab === "intelligence" && (
                  <div className="flex flex-col gap-3">
                    <SidebarBlock title="Image Intelligence">
                      <div className="mb-2.5 flex flex-wrap gap-1.5">
                        <span className="rounded-full bg-[rgba(23,26,32,0.06)] dark:bg-white/[0.06] px-2.5 py-0.5 font-inter text-[11.5px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">{photo.intelligence.category}</span>
                        <span className="rounded-full bg-[rgba(23,26,32,0.06)] dark:bg-white/[0.06] px-2.5 py-0.5 font-inter text-[11.5px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">{photo.intelligence.shotType}</span>
                        <span className="rounded-full bg-[#1B8A3A]/10 px-2.5 py-0.5 font-inter text-[11.5px] font-semibold text-[#1B8A3A]">★ {photo.intelligence.rating}</span>
                      </div>
                      <p className="mb-3 rounded-[10px] bg-[rgba(23,26,32,0.04)] dark:bg-white/[0.04] px-3 py-2 font-inter text-[12.5px] text-ph-azure11/75 dark:text-ph-zircon/75">
                        {photo.intelligence.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <FieldBox label="Lighting" value={photo.intelligence.lighting} />
                        <FieldBox label="Color Temp" value={photo.intelligence.colorTemp} />
                        <FieldBox label="Exposure" value={photo.intelligence.exposure} />
                        <FieldBox label="Sharpness" value={photo.intelligence.sharpness} />
                        <FieldBox label="Contrast" value={photo.intelligence.contrast} />
                        <FieldBox label="Alignment" value={photo.intelligence.alignment} />
                      </div>
                    </SidebarBlock>

                    <SidebarBlock title="Quality">
                      <p className="font-inter text-[10px] font-bold uppercase tracking-[0.6px] text-ph-azure11/55 dark:text-ph-zircon/55">Issues</p>
                      <p className="mt-1 mb-3 font-inter text-[12.5px] text-ph-azure11/70 dark:text-ph-zircon/70">{photo.intelligence.qualityIssues}</p>
                      <p className="font-inter text-[10px] font-bold uppercase tracking-[0.6px] text-ph-azure11/55 dark:text-ph-zircon/55">Technical Notes</p>
                      <p className="mt-1 rounded-[10px] bg-[#FFF6D9] dark:bg-ph-accent/15 px-3 py-2 font-inter text-[12.5px] text-ph-azure11/80 dark:text-ph-zircon/80">{photo.intelligence.technicalNotes}</p>
                    </SidebarBlock>

                    <SidebarBlock title="Suggested Tags">
                      <div className="flex flex-wrap gap-1.5">
                        {photo.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="rounded-full bg-[rgba(23,26,32,0.06)] dark:bg-white/[0.06] px-2.5 py-0.5 font-inter text-[11.5px] text-ph-azure11/70 dark:text-ph-zircon/70">{tag}</span>
                        ))}
                      </div>
                    </SidebarBlock>
                  </div>
                )}

                {tab === "notes" && (
                  <div className="flex flex-col gap-3">
                    <SidebarBlock title="Conversation">
                      <textarea
                        placeholder="Add a comment..."
                        className="h-24 w-full resize-none rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-3 py-2 font-inter text-[13px] text-ph-azure11 dark:text-ph-zircon placeholder:text-ph-azure11/40 dark:placeholder:text-ph-zircon/40 focus:outline-none"
                      />
                      <button className="mt-2 rounded-full bg-ph-azure11 px-4 py-1.5 font-inter text-[12px] font-semibold text-white">Add Comment</button>
                    </SidebarBlock>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div
          className="grid w-full shrink-0 gap-2 rounded-[16px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
          style={{ gridTemplateColumns: `repeat(${photos.length}, minmax(0, 1fr))` }}
        >
          {photos.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setIndex(i)}
              className={`h-14 overflow-hidden rounded-[10px] border-2 ${i === index ? "border-ph-azure11" : "border-transparent"}`}
              aria-label={p.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
