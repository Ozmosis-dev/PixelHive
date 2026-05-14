import { UploadIcon, SparkleIcon, SequenceIcon, DeliveryIcon, HiveMark, type IconComponent } from "@/components/Icon";

type Card = {
  key: string;
  Icon: IconComponent;
  eyebrow: string;
  title: string;
  description: string;
  inner: "upload" | "aiedit" | "sequence" | "delivery";
};

const cards: Card[] = [
  {
    key: "upload",
    Icon: UploadIcon,
    eyebrow: "Upload",
    title: "Bring every shoot into one queue",
    description:
      "Sync RAW sets, batch metadata, deadlines, and editor notes without bouncing between folders, email, and chat.",
    inner: "upload",
  },
  {
    key: "aiedit",
    Icon: SparkleIcon,
    eyebrow: "AI-Assisted Editing",
    title: "Dial in repeatable edits with guardrails",
    description:
      "Set enhancement preferences once and review before-and-after states across every room type.",
    inner: "aiedit",
  },
  {
    key: "sequence",
    Icon: SequenceIcon,
    eyebrow: "Sequence",
    title: "Let PixelHive arrange the story of the property",
    description:
      "Room detection, MLS-aware ordering, and reusable location intelligence help every gallery ship in a cleaner sequence.",
    inner: "sequence",
  },
  {
    key: "delivery",
    Icon: DeliveryIcon,
    eyebrow: "Delivery",
    title: "Proof, revise, and hand off from the same surface",
    description:
      "Share polished galleries, catch issues before delivery, and route client feedback back into the workflow with context intact.",
    inner: "delivery",
  },
];

function WindowChromeLight() {
  return (
    <div className="flex items-center gap-[7.2px] px-4 pt-4">
      {[0, 1, 2].map((i) => (
        <span key={i} className="block h-[9.91px] w-[9.91px] rounded-full bg-[rgba(23,26,32,0.15)]" />
      ))}
    </div>
  );
}

function UploadInner() {
  return (
    <div className="flex flex-1 gap-4 overflow-hidden p-4">
      {/* Left panel */}
      <div className="flex w-[310px] flex-col gap-[4.6px] rounded-[22px] border border-[rgba(23,26,32,0.08)] bg-white/[0.84] p-[17px]">
        <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-[rgba(23,26,32,0.45)]">
          Upload / Sync
        </p>
        <h4 className="font-manrope text-[24px] font-bold leading-[26.4px] tracking-[-0.48px] text-ph-azure11">
          Bring the whole job in at once
        </h4>
        <div className="mt-[10px] grid grid-cols-2 gap-3">
          <div className="flex h-[48px] items-center justify-center rounded-[15px] border border-[rgba(23,26,32,0.08)] bg-[rgba(244,180,0,0.16)] font-inter text-[13.8px] leading-[20.64px] text-ph-brown">
            Manual upload
          </div>
          <div className="flex h-[48px] items-center justify-center rounded-[15px] border border-[rgba(23,26,32,0.08)] bg-white/[0.04] font-inter text-[13.8px] leading-[20.64px] text-[rgba(23,26,32,0.55)]">
            Dropbox import
          </div>
        </div>
        <div className="mt-3 rounded-[20px] border border-dashed border-[rgba(23,26,32,0.12)] bg-[rgba(23,26,32,0.02)] py-[12px] pt-3 text-center">
          <div className="mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-[24px] bg-[rgba(244,180,0,0.12)]">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
              <path d="M7 16a4 4 0 010-8 5 5 0 019.6-1.5A4 4 0 0117 16H7z" stroke="#F4B400" strokeWidth="1.5" />
              <path d="M12 11v6m0-6l-2 2m2-2l2 2" stroke="#F4B400" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <p className="mt-2 font-inter text-[14px] font-bold leading-[21px] text-ph-azure11">Drop photos here</p>
          <p className="font-inter text-[14px] leading-[21px] text-[rgba(23,26,32,0.5)]">RAW, JPEG, PNG</p>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-3">
          {["IMG_001.RAW", "IMG_002.RAW", "IMG_003.RAW", "IMG_004.RAW"].map((f) => (
            <div
              key={f}
              className="flex h-[70px] items-center justify-center rounded-[16px] text-center font-inter text-[10px] leading-[14px] text-ph-zircon/75"
              style={{ background: "linear-gradient(180deg, rgba(89,101,121,0.4), rgba(63,74,92,0.72))" }}
            >
              {f}
            </div>
          ))}
        </div>
      </div>
      {/* Right aside */}
      <div className="flex w-[240px] flex-col rounded-[22px] border border-[rgba(23,26,32,0.08)] bg-white/[0.84] p-[17px]">
        <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-[rgba(23,26,32,0.45)]">
          Job Context
        </p>
        {[
          { label: "Property", value: "123 Oak Street,\nPortland, OR" },
          { label: "Client", value: "Compass Northwest" },
          { label: "Deadline", value: "Tomorrow 10:00 AM" },
          { label: "Priority", value: "Rush" },
        ].map((row, i) => (
          <div
            key={row.label}
            className={`flex min-h-[54.4px] items-center justify-between py-[8px] ${i > 0 ? "border-t border-[rgba(23,26,32,0.08)]" : ""}`}
          >
            <p className="font-inter text-[11.8px] leading-[17.76px] text-[rgba(23,26,32,0.48)]">{row.label}</p>
            <p className="whitespace-pre-line text-right font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-azure11">
              {row.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIEditInner() {
  return (
    <div className="flex flex-1 gap-4 overflow-hidden p-4">
      <div className="flex w-[310px] flex-col gap-[4.6px] rounded-[22px] border border-[rgba(23,26,32,0.08)] bg-white/[0.84] p-[17px]">
        <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-[rgba(23,26,32,0.45)]">
          AI-assisted Editing
        </p>
        <h4 className="font-manrope text-[24px] font-bold leading-[26.4px] tracking-[-0.48px] text-ph-azure11">
          Review the change<br />before it ships
        </h4>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <div
            className="relative h-[208px] rounded-[18px] p-3"
            style={{
              background:
                "linear-gradient(180deg, rgba(148,161,175,0.58) 0%, rgba(189,198,210,0.34) 42%, rgba(51,51,60,0.72) 100%)",
            }}
          >
            <span className="inline-flex rounded-full bg-[rgba(14,16,20,0.52)] px-[11.2px] py-[6.72px] font-inter text-[11.2px] leading-[16.8px] text-white">Original</span>
          </div>
          <div
            className="relative h-[208px] rounded-[18px] p-3"
            style={{
              background:
                "linear-gradient(180deg, rgba(107,212,255,0.6) 0%, rgba(255,214,128,0.28) 44%, rgba(31,27,23,0.78) 100%)",
            }}
          >
            <span className="inline-flex rounded-full bg-[rgba(14,16,20,0.52)] px-[11.2px] py-[6.72px] font-inter text-[11.2px] leading-[16.8px] text-white">Edited</span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-inter text-[13.1px] leading-[19.68px] text-[rgba(23,26,32,0.62)]">3 of 12 photos</span>
          <span className="font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-azure11">Current image only</span>
        </div>
      </div>
      <div className="flex w-[240px] flex-col rounded-[22px] border border-[rgba(23,26,32,0.08)] bg-white/[0.84] p-[17px]">
        <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-[rgba(23,26,32,0.45)]">
          Virtual Edit Options
        </p>
        {[
          { title: "Virtual Twilight", sub: "Exterior only", on: true },
          { title: "Sky Enhancement", sub: "Blue-sky recovery", on: true },
          { title: "Window Pull", sub: "Maintain interior balance", on: true },
          { title: "Green Grass", sub: "Exterior cleanup", on: false },
        ].map((row, i) => (
          <div
            key={row.title}
            className={`flex min-h-[54.4px] items-center justify-between py-[8px] ${i > 0 ? "border-t border-[rgba(23,26,32,0.08)]" : ""}`}
          >
            <div>
              <p className="font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-azure11">{row.title}</p>
              <p className="font-inter text-[11.8px] leading-[17.76px] text-[rgba(23,26,32,0.48)]">{row.sub}</p>
            </div>
            <div className={`relative h-[24px] w-[41.59px] rounded-full ${row.on ? "bg-[rgba(244,180,0,0.42)]" : "bg-[rgba(23,26,32,0.14)]"}`}>
              <span className={`absolute top-[3.19px] h-[17.59px] w-[17.59px] rounded-[8.8px] ${row.on ? "right-[4.82px] bg-ph-accent" : "left-[3.19px] bg-ph-zircon"}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SequenceInner() {
  const groups = [
    { name: "Exterior (3)", files: ["Front_01", "Front_02", "Back_01"] },
    { name: "Living Room (2)", files: ["Living_01", "Living_02"] },
    { name: "Kitchen (3)", files: ["Kitchen_01", "Kitchen_02", "Kitchen_03"] },
    { name: "Amenities (2)", files: ["Pool_01", "Neighborhood_01"] },
  ];
  return (
    <div className="grid flex-1 grid-cols-[256px_1fr] gap-4 overflow-hidden p-4">
      <div className="relative rounded-[22px] border border-[rgba(23,26,32,0.08)] bg-white/[0.84] p-[17px]">
        <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-[rgba(23,26,32,0.45)]">
          Sequence Settings
        </p>
        {[
          { label: "Job ID", value: "JOB-2026-0142" },
          { label: "Property Type", value: "Townhome" },
          { label: "MLS Standard", value: "NAR Standard" },
        ].map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center justify-between py-[16px] ${i > 0 ? "border-t border-[rgba(23,26,32,0.08)]" : ""}`}
          >
            <p className="font-inter text-[11.8px] leading-[17.76px] text-[rgba(23,26,32,0.48)]">{row.label}</p>
            <p className="font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-azure11">{row.value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-[4px] rounded-[22px] border border-[rgba(23,26,32,0.08)] bg-white/[0.74] px-[14px] py-[12px]">
        <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-[rgba(23,26,32,0.45)]">
          Photo Sequence
        </p>
        {groups.map((g) => (
          <div key={g.name} className="pt-[6px]">
            <p className="font-inter text-[13px] font-bold leading-[18px] text-ph-azure11">{g.name}</p>
            <div className="mt-[6px] grid grid-cols-3 gap-[8px]">
              {g.files.map((file) => (
                <div
                  key={file}
                  className="flex h-[56px] items-center justify-center rounded-[12px] text-center font-inter text-[11.5px] leading-[16px] text-ph-zircon/75"
                  style={{ background: "linear-gradient(180deg, rgba(89,101,121,0.4), rgba(63,74,92,0.72))" }}
                >
                  {file}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeliveryInner() {
  return (
    <div className="flex flex-1 gap-4 overflow-hidden p-4">
      <div className="flex w-[310px] flex-col gap-[4.6px] rounded-[22px] border border-[rgba(23,26,32,0.08)] bg-white/[0.84] p-[17px]">
        <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-[rgba(23,26,32,0.45)]">
          Delivery
        </p>
        <h4 className="font-manrope text-[24px] font-bold leading-[26.4px] tracking-[-0.48px] text-ph-azure11">
          Hand off a listing-ready<br />package
        </h4>
        <div className="mt-2 grid grid-cols-2 gap-3">
          {[
            { label: "Gallery", strong: "24 polished\nimages" },
            { label: "Revision history", strong: "Visible to the\nteam" },
            { label: "Client proofing", strong: "One shareable\nlink" },
            { label: "Export set", strong: "MLS +\nmarketing\nready" },
          ].map((t) => (
            <div
              key={t.label}
              className="rounded-[18px] border border-[rgba(23,26,32,0.08)] bg-[rgba(23,26,32,0.03)] p-4"
            >
              <p className="font-inter text-[11.8px] leading-[17.76px] text-[rgba(23,26,32,0.48)]">{t.label}</p>
              <p className="whitespace-pre-line font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-azure11">{t.strong}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-inter text-[13.1px] leading-[19.68px] text-[rgba(23,26,32,0.62)]">Delivery queue synced</span>
          <span className="font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-azure11">Ready to send</span>
        </div>
      </div>
      <div className="flex w-[240px] flex-col gap-[8px] rounded-[22px] border border-[rgba(23,26,32,0.08)] bg-white/[0.84] p-[17px]">
        <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-[rgba(23,26,32,0.45)]">
          Quick Actions
        </p>
        {["Download all photos", "Share with client", "Open edit history", "Request revisions"].map((label) => (
          <div
            key={label}
            className="flex min-h-[41.6px] items-center rounded-[16px] bg-[rgba(23,26,32,0.04)] px-[14.4px] py-[12px]"
          >
            <span className="font-inter text-[13.1px] leading-[19.68px] text-[rgba(23,26,32,0.82)]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WorkflowSteps() {
  return (
    <section className="w-full bg-ph-black">
      <div className="mx-auto max-w-[1380px] rounded-[34px] px-6 py-[92.28px]">
        {/* Heading */}
        <div className="max-w-[576px]">
          <div className="flex items-center gap-[10px] text-ph-pale-sky">
            <HiveMark size={22} strokeWidth={1.75} />
            <p className="font-inter text-[16.8px] font-bold uppercase leading-[28.22px] tracking-[3.024px]">
              Workflow Steps
            </p>
          </div>
          <h2 className="mt-[20px] max-w-[577px] font-manrope text-[67.2px] font-bold leading-[68.54px] tracking-[-2.016px] text-ph-zircon">
            One shoot in.<br />Listing-ready out
          </h2>
          <p className="mt-[20px] font-inter text-[18.5px] leading-[30.45px] text-[rgba(248,250,252,0.82)]">
            PixelHive takes cues from DJI-style product storytelling: one clear promise per section, product surfaces as the hero, and a rhythm between cinematic dark scenes and precise technical moments.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-[40px] grid grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <article
              key={card.key}
              className={`relative overflow-hidden rounded-[30px] border border-[rgba(23,26,32,0.08)] px-[25.6px] py-[39.83px]`}
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.38) 100%), rgba(238,242,245,0.6)",
              }}
            >
              {/* Icon halo */}
              <div className="absolute right-[25.6px] top-[24.8px] flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[rgba(255,194,71,0.65)] text-ph-brown">
                <card.Icon size={32} strokeWidth={1.75} />
              </div>
              {/* Header */}
              <div className="max-w-[440px]">
                <p className="font-inter text-[12.2px] font-bold uppercase leading-[18.24px] tracking-[1.702px] text-[rgba(23,26,32,0.72)]">
                  {card.eyebrow}
                </p>
                <h3 className="mt-2 font-manrope text-[24.8px] font-bold leading-[27.28px] tracking-[-0.496px] text-ph-azure11">
                  {card.title}
                </h3>
                <p className="mt-2 font-inter text-[14px] leading-[21px] text-[rgba(23,26,32,0.72)]">
                  {card.description}
                </p>
              </div>
              {/* Inner window mockup - uniform height across all cards */}
              <div
                className="mt-[24px] flex h-[475px] flex-col overflow-hidden rounded-[28px] border border-[rgba(23,26,32,0.08)] shadow-[0_32px_80px_rgba(23,26,32,0.1)]"
                style={{
                  background:
                    "radial-gradient(450px 460px at 0 0, rgba(244,180,0,0.14) 0%, rgba(244,180,0,0) 34%), linear-gradient(180deg, rgba(255,255,255,0.98), rgba(246,244,238,0.95))",
                }}
              >
                <WindowChromeLight />
                {card.inner === "upload" && <UploadInner />}
                {card.inner === "aiedit" && <AIEditInner />}
                {card.inner === "sequence" && <SequenceInner />}
                {card.inner === "delivery" && <DeliveryInner />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
