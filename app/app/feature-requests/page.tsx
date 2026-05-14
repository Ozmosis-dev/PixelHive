"use client";

import { useState } from "react";

const statuses = ["All", "Open", "Under Review", "Planned", "In Progress", "Completed", "Spam"];

export default function FeatureRequestsPage() {
  const [status, setStatus] = useState("Open");
  const [myOnly, setMyOnly] = useState(false);

  return (
    <div className="mx-auto max-w-[1200px] px-8 pt-10">
      {/* Hero card */}
      <div
        className="rounded-[20px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-8 py-10 shadow-[0_2px_8px_rgba(23,26,32,0.04)]"
        style={{
          backgroundImage:
            "radial-gradient(800px 200px at 0 0, rgba(255,194,71,0.10) 0%, rgba(255,194,71,0) 60%)",
        }}
      >
        <p className="font-inter text-[12px] font-bold uppercase tracking-[2px] text-ph-accent">Feature Requests</p>
        <h1 className="mt-2 font-manrope text-[44px] font-bold leading-[48px] tracking-[-1.4px] text-ph-azure11 dark:text-ph-zircon">Feature Requests</h1>
        <p className="mt-2 font-inter text-[15px] text-ph-azure11/55 dark:text-ph-zircon/55">Suggest, discuss, and vote on ideas to improve the platform</p>
      </div>

      {/* Body grid */}
      <div className="mt-10 grid grid-cols-[1fr_320px] gap-6">
        {/* Left column: form + list */}
        <div className="flex flex-col gap-6">
          <div className="rounded-[16px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-6 shadow-[0_2px_8px_rgba(23,26,32,0.04)]">
            <h3 className="mb-4 font-inter text-[15px] font-bold text-ph-azure11 dark:text-ph-zircon">Suggest a New Feature</h3>
            <input
              type="text"
              placeholder="What would you like us to build?"
              className="h-11 w-full rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.12] bg-transparent px-4 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon placeholder:text-ph-azure11/40 dark:placeholder:text-ph-zircon/40 focus:border-[rgba(23,26,32,0.20)] dark:focus:border-white/[0.25] focus:outline-none"
            />
            <textarea
              placeholder="Describe the problem it solves and how it would improve your workflow…"
              className="mt-3 h-28 w-full resize-none rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.12] bg-transparent px-4 py-3 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon placeholder:text-ph-azure11/40 dark:placeholder:text-ph-zircon/40 focus:border-[rgba(23,26,32,0.20)] dark:focus:border-white/[0.25] focus:outline-none"
            />
            <button className="mt-4 flex items-center gap-2 rounded-full bg-ph-azure11 dark:bg-ph-accent px-5 py-2.5 font-inter text-[13.5px] font-semibold text-white dark:text-ph-azure11 hover:bg-black dark:hover:bg-ph-yellow-mid transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Submit Feature Request
            </button>
          </div>

          <div className="flex h-[220px] items-center justify-center rounded-[16px] border-2 border-dashed border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white/40 dark:bg-white/[0.03]">
            <p className="font-inter text-[14px] text-ph-azure11/50 dark:text-ph-zircon/50">No feature requests yet</p>
          </div>
        </div>

        {/* Right column: filter */}
        <div className="rounded-[16px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-6 shadow-[0_2px_8px_rgba(23,26,32,0.04)]">
          <h3 className="mb-4 font-inter text-[15px] font-bold text-ph-azure11 dark:text-ph-zircon">Feature Requests</h3>
          <div className="flex flex-col gap-1">
            {statuses.map((s) => (
              <label key={s} className="flex items-center gap-3 cursor-pointer rounded-[10px] px-2 py-2 transition hover:bg-black/[0.03] dark:hover:bg-white/[0.05]">
                <span
                  className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    status === s
                      ? "border-ph-accent"
                      : "border-[rgba(23,26,32,0.25)] dark:border-white/[0.30]"
                  }`}
                  style={{ width: 18, height: 18 }}
                >
                  {status === s && <span className="h-2 w-2 rounded-full bg-ph-accent" />}
                </span>
                <input
                  type="radio"
                  className="sr-only"
                  checked={status === s}
                  onChange={() => setStatus(s)}
                />
                <span className={`font-inter text-[13.5px] ${status === s ? "font-semibold text-ph-azure11 dark:text-ph-zircon" : "text-ph-azure11/70 dark:text-ph-zircon/70"}`}>
                  {s}
                </span>
              </label>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-3 border-t border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] pt-5">
            <button
              onClick={() => setMyOnly(!myOnly)}
              className={`relative h-6 w-11 rounded-full transition-colors ${myOnly ? "bg-ph-accent" : "bg-[rgba(23,26,32,0.12)] dark:bg-white/[0.12]"}`}
              aria-label="Toggle My Requests"
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  myOnly ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
            <span className="font-inter text-[13.5px] text-ph-azure11/70 dark:text-ph-zircon/70">My Requests</span>
          </div>
        </div>
      </div>
    </div>
  );
}
