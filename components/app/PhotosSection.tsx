"use client";

import { useState } from "react";
import PhotoEditModal, { type Photo } from "./PhotoEditModal";

const photos: Photo[] = [
  {
    name: "LivingRoom_01",
    tag: "Living Room",
    rating: "Good",
    ratingColor: "bg-ph-azure11 text-white",
    size: "2.18 MB",
    date: "5/11/2026",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&q=80",
    intelligence: {
      category: "Interior",
      shotType: "Wide room shot",
      rating: "Good",
      description: "Comfortable living room with natural light and neutral palette.",
      lighting: "natural",
      colorTemp: "warm",
      exposure: "ISO 100 • f/5.6 • 1/125",
      sharpness: "sharp",
      contrast: "balanced",
      alignment: "aligned",
      qualityIssues: "No quality issues detected",
      technicalNotes: "Good composition and lighting.",
    },
    tags: ["living room", "interior", "wide shot", "natural light", "neutral tones"],
  },
  {
    name: "Exterior_01",
    tag: "Exterior",
    rating: "Excellent",
    ratingColor: "bg-[#1B8A3A]/10 text-[#1B8A3A]",
    size: "2.67 MB",
    date: "5/11/2026",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&h=800&fit=crop&q=80",
    intelligence: {
      category: "Exterior",
      shotType: "Wide landscape shot",
      rating: "Excellent",
      description: "Stunning exterior view of a lakeside home with mountain backdrop.",
      lighting: "balanced",
      colorTemp: "neutral",
      exposure: "ISO 200 • f/8 • 1/250",
      sharpness: "sharp",
      contrast: "good",
      alignment: "aligned",
      qualityIssues: "No quality issues detected",
      technicalNotes: "Excellent use of natural light and scenery.",
    },
    tags: ["exterior", "lake", "mountains", "wide landscape shot", "balanced lighting", "neutral tones"],
  },
];

export default function PhotosSection({ headerAction }: { headerAction?: React.ReactNode } = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="rounded-[16px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-6 shadow-[0_2px_8px_rgba(23,26,32,0.04)]">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-inter text-[14px] font-bold text-ph-azure11 dark:text-ph-zircon">Attachments</h3>
          <div className="flex items-center gap-3">
            {headerAction}
            <div className="inline-flex items-center rounded-full border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-0.5">
              <button className="rounded-full bg-ph-azure11 px-3 py-1 font-inter text-[12px] font-semibold text-white">Recent</button>
              <button className="rounded-full px-3 py-1 font-inter text-[12px] font-semibold text-ph-azure11/55 dark:text-ph-zircon/55">By group</button>
            </div>
          </div>
        </div>

        <label className="mb-3 flex items-center gap-2 rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] px-4 py-2.5 font-inter text-[13px] text-ph-azure11/70 dark:text-ph-zircon/70">
          <input type="checkbox" className="h-4 w-4" />
          Select All
        </label>

        <div className="grid grid-cols-3 gap-3">
          {photos.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setOpenIndex(i)}
              className="rounded-[14px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-2 text-left transition-all hover:shadow-[0_4px_12px_rgba(23,26,32,0.08)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-[rgba(23,26,32,0.06)] dark:bg-white/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                <input
                  type="checkbox"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute left-2 top-2 h-4 w-4 rounded bg-white/80"
                />
              </div>
              <div className="px-2 pt-2">
                <div className="flex items-center justify-between">
                  <p className="font-inter text-[12px] font-semibold text-ph-azure11 dark:text-ph-zircon">{p.name}</p>
                  <div className="flex gap-1 text-ph-azure11/40 dark:text-ph-zircon/40">
                    <span aria-label="Comment">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </span>
                    <span aria-label="Download">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </span>
                    <span aria-label="Delete">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 font-inter text-[11px] text-ph-azure11/55 dark:text-ph-zircon/55">{p.size} · {p.date}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="rounded-full bg-[rgba(23,26,32,0.06)] dark:bg-white/[0.06] px-2 py-0.5 font-inter text-[10.5px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">{p.tag}</span>
                  <span className={`rounded-full px-2 py-0.5 font-inter text-[10.5px] font-semibold ${p.ratingColor}`}>{p.rating}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <PhotoEditModal photos={photos} openIndex={openIndex} onClose={() => setOpenIndex(null)} />
    </>
  );
}
