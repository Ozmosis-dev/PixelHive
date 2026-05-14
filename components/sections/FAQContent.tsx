"use client";

import { useState } from "react";

type FAQItem = { q: string; a: string };
type FAQGroup = { kicker: string; heading: string; items: FAQItem[] };

const groups: FAQGroup[] = [
  {
    kicker: "Product",
    heading: "What PixelHive is and who it is built for",
    items: [
      {
        q: "What is PixelHive?",
        a: "PixelHive is a workflow system for real estate photo teams. It brings upload, AI-assisted edit review, sequencing, quality control, client proofing, and delivery into one connected surface.",
      },
      {
        q: "Who is PixelHive for?",
        a: "It is built for high-volume real estate photographers, editing teams, coordinators, and studio operators who need a cleaner handoff from shoot to delivery.",
      },
      {
        q: "Is PixelHive a photo editor?",
        a: "It is better thought of as the operating layer around photo editing. PixelHive helps teams manage edit requests, AI enhancement choices, approvals, sequencing, and delivery without pretending the workflow ends at image adjustments.",
      },
    ],
  },
  {
    kicker: "Workflow",
    heading: "How the production system behaves in practice",
    items: [
      {
        q: "How does PixelHive organize photos?",
        a: "PixelHive groups uploads inside a structured job flow, carries context like notes and deadlines forward, and supports sequencing tools that help arrange rooms and supporting media into a cleaner final set.",
      },
      {
        q: "Can PixelHive catch issues before delivery?",
        a: "Yes. The workflow is designed to keep review states, feedback history, and revision requests visible before the final handoff, which helps teams spot problems earlier.",
      },
      {
        q: "Does PixelHive support AI image editing?",
        a: "Yes. PixelHive is designed to manage AI-assisted enhancement requests such as twilight, sky cleanup, grass fixes, and room-specific adjustments while keeping those decisions reviewable.",
      },
    ],
  },
  {
    kicker: "Collaboration",
    heading: "How photographers, editors, and clients stay aligned",
    items: [
      {
        q: "Can my editor or team collaborate inside PixelHive?",
        a: "That is a core use case. PixelHive is designed so photographers, editors, and coordinators can work from the same job context instead of splitting notes across multiple tools.",
      },
      {
        q: "Can clients review work without a full account?",
        a: "Yes. The product direction includes client-friendly proofing and feedback views so clients can comment on delivered work without needing the full internal workflow experience.",
      },
    ],
  },
  {
    kicker: "Delivery",
    heading: "How the handoff improves for the client and the internal team",
    items: [
      {
        q: "Does PixelHive help with delivery?",
        a: "Yes. Delivery is treated as part of the workflow, not an afterthought. Teams can move from final review to proofing, feedback, and handoff from the same environment.",
      },
      {
        q: "How does PixelHive improve client experience?",
        a: "Clients get a cleaner proofing and revision experience because files, comments, and follow-up requests stay attached to the job instead of being scattered across email threads.",
      },
    ],
  },
  {
    kicker: "Scale",
    heading: "How the platform adapts to different team sizes and operating styles",
    items: [
      {
        q: "Is PixelHive built for high-volume teams?",
        a: "Yes. The product voice and workflow model are aimed at teams handling repeatable production volume, multiple collaborators, and quick turnaround expectations.",
      },
      {
        q: "Can PixelHive work for solo photographers too?",
        a: "Yes. Solo operators still benefit from clearer uploads, repeatable enhancement preferences, sequencing help, and a more polished delivery loop.",
      },
      {
        q: "Does PixelHive support custom workflows?",
        a: "The platform direction leaves room for flexible routing, workflow stages, and team-specific operating patterns, especially for studios that need more than a one-size-fits-all pipeline.",
      },
      {
        q: "What integrations does PixelHive support?",
        a: "The product direction already reflects file-ingest and sync workflows, and the platform is positioned to support the integrations real estate photo teams rely on around upload, storage, and delivery.",
      },
    ],
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#171A20]/35" aria-hidden>
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M6 6.2C6 5.2 6.9 4.5 8 4.5C9.1 4.5 10 5.2 10 6.2C10 7.2 9 7.4 8 8.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="8" cy="11" r="0.7" fill="currentColor" />
    </svg>
  );
}

function FAQGroupBlock({ group, defaultOpen, floating }: { group: FAQGroup; defaultOpen: number; floating?: boolean }) {
  const [openIdx, setOpenIdx] = useState<number>(defaultOpen);

  return (
    <div
      className={`relative z-10 grid grid-cols-[0.42fr_1fr] gap-x-[40px] rounded-[28px] border border-[#C7D6E8]/50 px-[36px] py-[36px] ${
        floating
          ? "-mt-[140px] shadow-[0_24px_60px_rgba(8,11,18,0.18)]"
          : "shadow-[0_2px_8px_rgba(16,22,31,0.03)]"
      }`}
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 78%, #F4F7FB 100%)",
      }}
    >
      <div>
        <p className="font-inter text-[12.5px] font-bold uppercase leading-[18px] tracking-[2.2px] text-ph-accent-border">
          {group.kicker}
        </p>
        <h2 className="mt-[14px] font-manrope text-[28px] font-bold leading-[32px] tracking-[-0.6px] text-[#171A20]">
          {group.heading}
        </h2>
      </div>
      <div className="flex flex-col gap-[14px]">
        {group.items.map((item, i) => {
          const open = openIdx === i;
          return (
            <div
              key={item.q}
              className="rounded-[18px] border border-[#171A20]/8 bg-white"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(open ? -1 : i)}
                className="flex w-full items-center gap-[14px] px-[22px] py-[18px] text-left"
                aria-expanded={open}
              >
                <span className="text-[#171A20]/45">
                  <Chevron open={open} />
                </span>
                <span className="flex-1 font-inter text-[14.5px] font-semibold leading-[22px] text-[#171A20]">
                  {item.q}
                </span>
                <HelpIcon />
              </button>
              {open && (
                <div className="px-[22px] pb-[20px] pl-[50px]">
                  <p className="font-inter text-[13.5px] leading-[22px] text-[#171A20]/72">{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FAQContent() {
  return (
    <section className="relative w-full bg-[#F1EEE6]">
      <div className="relative mx-auto flex max-w-[1380px] flex-col gap-[28px] px-6 pb-[120px]">
        {groups.map((g, i) => (
          <FAQGroupBlock key={g.kicker} group={g} defaultOpen={-1} floating={i === 0} />
        ))}
      </div>
    </section>
  );
}
