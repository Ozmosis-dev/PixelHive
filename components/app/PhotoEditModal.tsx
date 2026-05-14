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

function Section({ title, children, action }: { title: string; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="rounded-[16px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-6 shadow-[0_2px_6px_rgba(23,26,32,0.03)]">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-inter text-[15px] font-bold text-ph-azure11 dark:text-ph-zircon">{title}</h3>
        {action}
      </div>
      {children}
    </div>
  );
}

function FieldBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[10px] bg-[rgba(23,26,32,0.04)] dark:bg-white/[0.04] px-3 py-2">
      <p className="font-inter text-[10.5px] uppercase tracking-[0.6px] text-ph-azure11/55 dark:text-ph-zircon/55">{label}</p>
      <p className="mt-0.5 font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">{value}</p>
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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Prev */}
      <button
        onClick={() => setIndex((i) => Math.max(0, i - 1))}
        disabled={index === 0}
        className="absolute left-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white dark:bg-[#10151D] shadow-[0_4px_12px_rgba(0,0,0,0.15)] disabled:opacity-40"
        aria-label="Previous"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={() => setIndex((i) => Math.min(photos.length - 1, i + 1))}
        disabled={index === photos.length - 1}
        className="absolute right-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white dark:bg-[#10151D] shadow-[0_4px_12px_rgba(0,0,0,0.15)] disabled:opacity-40"
        aria-label="Next"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="my-8 flex w-[min(1200px,95vw)] flex-col gap-4">
      {/* Modal */}
      <div className="relative max-h-[78vh] overflow-hidden rounded-[24px] bg-[#FBF8EE] dark:bg-[#10151D] shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-[#FBF8EE] dark:bg-[#10151D]/95 dark:bg-[#0E1014]/95 px-8 py-5 backdrop-blur">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-[8px] bg-[rgba(23,26,32,0.06)] dark:bg-white/[0.06] text-ph-azure11 dark:text-ph-zircon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </span>
            <div>
              <h2 className="font-manrope text-[20px] font-bold text-ph-azure11 dark:text-ph-zircon">Edit Photo - Job #e5c7</h2>
              <p className="font-inter text-[13px] text-ph-azure11/60 dark:text-ph-zircon/60">Rodeo Dr, Beverly Hills, CA, USA • Client: Hasta Manana</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[rgba(23,26,32,0.08)] dark:bg-white/[0.08] px-3 py-1 font-inter text-[12px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">To Do</span>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-[#10151D] text-ph-azure11/60 dark:text-ph-zircon/60 hover:text-ph-azure11 dark:hover:text-ph-zircon"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-h-[calc(78vh-90px)] overflow-y-auto px-8 py-6">
          {/* Title row */}
          <div className="mb-5 flex items-center gap-3">
            <h3 className="font-manrope text-[16px] font-bold text-ph-azure11 dark:text-ph-zircon">{photo.name}</h3>
            <span className="flex items-center gap-2 rounded-full bg-ph-azure11 px-3 py-1.5 font-inter text-[12px] font-semibold text-white">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              Current Version <span className="font-bold">Version 1</span>
            </span>
            <button className="flex items-center gap-2 rounded-full border border-[rgba(23,26,32,0.12)] dark:border-white/[0.12] bg-white dark:bg-[#10151D] px-3 py-1.5 font-inter text-[12px] font-semibold text-ph-azure11/60 dark:text-ph-zircon/60">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Set Location
            </button>
          </div>

          <span className="mb-4 inline-block rounded-full bg-[rgba(23,26,32,0.06)] dark:bg-white/[0.06] px-3 py-1 font-inter text-[11.5px] font-semibold text-ph-azure11/60 dark:text-ph-zircon/60">
            No edits
          </span>

          {/* Two-column grid */}
          <div className="mt-5 grid grid-cols-[1fr_280px] gap-6">
            {/* Left: main column */}
            <div className="flex flex-col gap-5">
              {/* Image preview */}
              <div className="relative overflow-hidden rounded-[16px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-3 shadow-[0_2px_6px_rgba(23,26,32,0.03)]">
                <div className="absolute right-5 top-5 z-10 flex gap-2">
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
                <div className="aspect-[16/10] w-full overflow-hidden rounded-[12px] bg-[rgba(23,26,32,0.06)] dark:bg-white/[0.06]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo.image} alt={photo.name} className="h-full w-full object-cover" />
                </div>
              </div>

              {/* Edit with PixelHive AI */}
              <Section title="Edit with PixelHive AI">
                <p className="mb-3 font-inter text-[12.5px] text-ph-azure11/55 dark:text-ph-zircon/55">
                  Uses the currently selected image as the base (Version 1).
                </p>
                <textarea
                  placeholder="Custom edit instructions"
                  className="h-20 w-full resize-none rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-4 py-3 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon placeholder:text-ph-azure11/40 dark:placeholder:text-ph-zircon/40/40 focus:border-[rgba(23,26,32,0.16)] dark:border-white/[0.16] focus:outline-none"
                />
                <div className="mt-3 flex justify-end">
                  <button className="flex items-center gap-2 rounded-full bg-ph-azure11 px-5 py-2 font-inter text-[13px] font-semibold text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3.5 13.4 8 18 9.4 13.4 10.8 12 15.4 10.6 10.8 6 9.4 10.6 8 12 3.5Z" />
                    </svg>
                    Apply
                  </button>
                </div>
              </Section>

              {/* Quick Actions */}
              <Section
                title="Quick Actions"
                action={<button className="font-inter text-[12.5px] font-semibold text-ph-azure11/55 dark:text-ph-zircon/55">More tools</button>}
              >
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Auto Enhance", icon: "M12 3.5 13.4 8 18 9.4 13.4 10.8 12 15.4 10.6 10.8 6 9.4 10.6 8 12 3.5Z" },
                    { label: "Sky Replace", icon: "M17.5 19a4.5 4.5 0 1 0 0-9c-.07-.5-.2-1-.4-1.4A6 6 0 0 0 6.5 12.5 4 4 0 0 0 7 20h10.5z" },
                    { label: "Color Correct", icon: "M12 22a10 10 0 1 1 0-20 8 8 0 0 1 8 8c0 2.21-1.79 4-4 4h-2a2 2 0 0 0-2 2c0 1.1.45 2.1 1.17 2.83.42.42.65.99.65 1.59A1.58 1.58 0 0 1 12 22z" },
                    { label: "Crop/Rotate", icon: "M6 2v14a2 2 0 0 0 2 2h14M18 22V8a2 2 0 0 0-2-2H2" },
                  ].map((a) => (
                    <button
                      key={a.label}
                      className="flex items-center justify-center gap-2 rounded-full bg-ph-azure11 px-4 py-3 font-inter text-[13px] font-semibold text-white hover:bg-black"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d={a.icon} />
                      </svg>
                      {a.label}
                    </button>
                  ))}
                </div>
              </Section>

              {/* Image Intelligence */}
              <Section title="Image Intelligence">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 rounded-full bg-[rgba(23,26,32,0.06)] dark:bg-white/[0.06] px-3 py-1 font-inter text-[12px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="11" width="18" height="10" /><polygon points="12 2 22 11 2 11" /></svg>
                    {photo.intelligence.category}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-[rgba(23,26,32,0.06)] dark:bg-white/[0.06] px-3 py-1 font-inter text-[12px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="14" rx="2" /><circle cx="12" cy="13" r="4" /></svg>
                    {photo.intelligence.shotType}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-[#1B8A3A]/10 px-3 py-1 font-inter text-[12px] font-semibold text-[#1B8A3A]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 8.5 22 9.5 17 14.5 18.5 21.5 12 18 5.5 21.5 7 14.5 2 9.5 9 8.5" /></svg>
                    {photo.intelligence.rating}
                  </span>
                </div>
                <div className="mb-4 rounded-[10px] bg-[rgba(23,26,32,0.04)] dark:bg-white/[0.04] px-4 py-3 font-inter text-[13.5px] text-ph-azure11/75 dark:text-ph-zircon/75">
                  {photo.intelligence.description}
                </div>
                <div className="mb-4 grid grid-cols-3 gap-3">
                  <FieldBox label="Lighting" value={photo.intelligence.lighting} />
                  <FieldBox label="Color Temperature" value={photo.intelligence.colorTemp} />
                  <FieldBox label="Exposure" value={photo.intelligence.exposure} />
                  <FieldBox label="Sharpness" value={photo.intelligence.sharpness} />
                  <FieldBox label="Contrast" value={photo.intelligence.contrast} />
                  <FieldBox label="Alignment" value={photo.intelligence.alignment} />
                </div>
                <div className="mb-3">
                  <p className="font-inter text-[10.5px] font-bold uppercase tracking-[0.6px] text-ph-azure11/55 dark:text-ph-zircon/55">Quality Issues</p>
                  <p className="mt-1 font-inter text-[13px] text-ph-azure11/70 dark:text-ph-zircon/70">{photo.intelligence.qualityIssues}</p>
                </div>
                <div className="mb-3">
                  <p className="font-inter text-[10.5px] font-bold uppercase tracking-[0.6px] text-ph-azure11/55 dark:text-ph-zircon/55">Technical Notes</p>
                  <p className="mt-1 rounded-[10px] bg-[#FFF6D9] dark:bg-ph-accent/15 px-4 py-2.5 font-inter text-[13px] text-ph-azure11/80 dark:text-ph-zircon/80">{photo.intelligence.technicalNotes}</p>
                </div>
                <div>
                  <p className="mb-2 font-inter text-[10.5px] font-bold uppercase tracking-[0.6px] text-ph-azure11/55 dark:text-ph-zircon/55">Suggested Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {photo.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-full bg-[rgba(23,26,32,0.06)] dark:bg-white/[0.06] px-3 py-1 font-inter text-[12px] text-ph-azure11/70 dark:text-ph-zircon/70">{tag}</span>
                    ))}
                  </div>
                </div>
              </Section>

              {/* Tags */}
              <Section title="Tags">
                <p className="mb-3 font-inter text-[12.5px] text-ph-azure11/55 dark:text-ph-zircon/55">Add tags to organize and categorize this image</p>
                <button className="mb-4 flex h-10 w-full items-center justify-between rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-4 font-inter text-[13.5px] text-ph-azure11/55 dark:text-ph-zircon/55">
                  Add a tag
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/40 dark:text-ph-zircon/40">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <p className="mb-2 font-inter text-[12.5px] text-ph-azure11/55 dark:text-ph-zircon/55">Current Tags</p>
                <div className="flex flex-wrap gap-2">
                  {photo.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 rounded-full bg-ph-azure11 px-3 py-1 font-inter text-[12px] text-white">
                      {tag}
                      <button aria-label="Remove">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="15" y1="9" x2="9" y2="15" />
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              </Section>

              {/* Upload new version */}
              <Section title="Upload New Version">
                <p className="mb-3 font-inter text-[12.5px] text-ph-azure11/55 dark:text-ph-zircon/55">Upload a new edited version of this image</p>
                <div className="rounded-[14px] border border-dashed border-[rgba(23,26,32,0.16)] dark:border-white/[0.16] bg-[#FBF8EE] dark:bg-[#10151D] p-10 text-center">
                  <p className="font-inter text-[15px] font-semibold text-ph-azure11 dark:text-ph-zircon">Upload Attachments</p>
                  <p className="mt-1 font-inter text-[13px] text-ph-azure11/55 dark:text-ph-zircon/55">Drag and drop files here</p>
                  <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-ph-azure11 px-5 py-2.5 font-inter text-[13px] font-semibold text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M12 18v-6M9 15l3-3 3 3" />
                    </svg>
                    Select Files
                  </button>
                  <p className="mt-3 font-inter text-[12px] text-ph-azure11/55 dark:text-ph-zircon/55">Max 100MB per file. Up to 1 files</p>
                </div>
                <p className="mt-3 text-center font-inter text-[12px] text-ph-azure11/45 dark:text-ph-zircon/45">Supports JPEG, PNG, WEBP, ICO formats</p>
              </Section>

              {/* Conversation */}
              <Section title="Conversation">
                <textarea
                  placeholder="Add a comment..."
                  className="h-20 w-full resize-none rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-4 py-3 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon placeholder:text-ph-azure11/40 dark:placeholder:text-ph-zircon/40/40 focus:border-[rgba(23,26,32,0.16)] dark:border-white/[0.16] focus:outline-none"
                />
                <button className="mt-3 rounded-full bg-ph-azure11 px-5 py-2 font-inter text-[13px] font-semibold text-white">Add Comment</button>
              </Section>
            </div>

            {/* Right sidebar */}
            <div className="flex flex-col gap-4">
              <Section title="Photo Actions">
                <button className="mb-2 w-full rounded-full bg-ph-azure11 py-2.5 font-inter text-[13.5px] font-semibold text-white hover:bg-black">Mark Complete</button>
                <button className="mb-2 w-full rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] py-2.5 font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">Request QC Review</button>
                <button className="w-full rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] py-2.5 font-inter text-[13.5px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">Save Draft</button>
              </Section>
              <Section title="Job Details">
                <div className="flex flex-col gap-3 font-inter text-[13px]">
                  <div className="flex items-center justify-between">
                    <span className="text-ph-azure11/55 dark:text-ph-zircon/55">Time Logged:</span>
                    <span className="font-semibold text-ph-azure11 dark:text-ph-zircon">0h 0m</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ph-azure11/55 dark:text-ph-zircon/55">Deadline:</span>
                    <span className="font-semibold text-ph-azure11 dark:text-ph-zircon">5/12/2026</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ph-azure11/55 dark:text-ph-zircon/55">Priority:</span>
                    <span className="rounded-full bg-[rgba(23,26,32,0.08)] dark:bg-white/[0.08] px-3 py-0.5 font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">Standard</span>
                  </div>
                </div>
              </Section>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom thumbnails — equal-width strip below modal */}
      <div
        className="grid w-full gap-3 rounded-[20px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
        style={{ gridTemplateColumns: `repeat(${photos.length}, minmax(0, 1fr))` }}
      >
        {photos.map((p, i) => (
          <button
            key={p.name}
            onClick={() => setIndex(i)}
            className={`h-20 overflow-hidden rounded-[12px] border-2 ${i === index ? "border-ph-azure11" : "border-transparent"}`}
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
