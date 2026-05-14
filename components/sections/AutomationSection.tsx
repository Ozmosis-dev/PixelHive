import Image from "next/image";
import { AutomationIcon } from "@/components/Icon";

const automationTiles = [
  { label: "Ingest", strong: "Auto-synced from Dropbox" },
  { label: "Enhance", strong: "Preset bundle applied" },
  { label: "QC", strong: "Flags surfaced for review" },
  { label: "Delivery", strong: "Client link prepared" },
];

const buzzingItems = [
  "Rush job uploaded",
  "Editor assigned",
  "Client proof opened",
  "Revision approved",
];

const pills = ["The Hive", "What's Buzzing", "Busywork, handled", "Listing-ready delivery"];

export default function AutomationSection() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-[1380px] px-6 pt-[80px] pb-[92.28px]">
        <div className="relative grid grid-cols-[1fr_1.05fr] gap-x-[48px]">
          {/* Left column */}
          <div className="relative flex flex-col self-center">
            <div className="flex items-center gap-[10px] text-[rgba(23,26,32,0.55)]">
              <AutomationIcon size={22} strokeWidth={1.75} />
              <p className="font-inter text-[16.8px] font-bold uppercase leading-[28.22px] tracking-[3.024px]">
                Busywork, Handled
              </p>
            </div>
            <h2 className="mt-[20px] max-w-[531px] font-manrope text-[67.2px] font-bold leading-[68.54px] tracking-[-2.016px] text-ph-azure11">
              Warm brand<br />language.<br />Serious operating system
            </h2>
            <p className="mt-[20px] max-w-[576px] font-inter text-[18.5px] leading-[30.45px] text-[rgba(23,26,32,0.72)]">
              Bee language shows up where it helps orientation and delight: The Hive for teamwork, What&apos;s Buzzing for activity, and small honeycomb cues that frame the experience without overwhelming it.
            </p>
            <div className="mt-[28px] flex flex-nowrap gap-[6px]">
              {pills.map((p) => (
                <span
                  key={p}
                  className="whitespace-nowrap rounded-full bg-[rgba(23,26,32,0.06)] px-[11px] py-[6px] font-inter text-[12px] font-semibold leading-[18px] text-ph-azure11"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Right column - light window mockup */}
          <div
            className="flex h-[500px] flex-col overflow-hidden self-center rounded-[28px] border border-[rgba(23,26,32,0.08)] shadow-[0_32px_80px_rgba(23,26,32,0.1)]"
            style={{
              background:
                "radial-gradient(900px 900px at 0 0, rgba(244,180,0,0.14) 0%, rgba(244,180,0,0) 34%), linear-gradient(180deg, rgba(255,255,255,0.98), rgba(246,244,238,0.95))",
            }}
          >
            <div className="flex items-center gap-[7.2px] px-4 pt-4">
              {[0, 1, 2].map((i) => (
                <span key={i} className="block h-[9.91px] w-[9.91px] rounded-full bg-[rgba(23,26,32,0.15)]" />
              ))}
            </div>
            <div className="flex flex-1 gap-4 overflow-hidden p-4">
              <div className="flex flex-1 flex-col gap-[4.6px] self-start rounded-[22px] border border-[rgba(23,26,32,0.08)] bg-white/[0.84] p-[17px]">
                <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-[rgba(23,26,32,0.45)]">
                  Automation
                </p>
                <h3 className="font-manrope text-[24px] font-bold leading-[26.4px] tracking-[-0.48px] text-ph-azure11">
                  Busywork, handled.
                </h3>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  {automationTiles.map((t) => (
                    <div
                      key={t.label}
                      className="rounded-[18px] border border-[rgba(23,26,32,0.08)] bg-[rgba(23,26,32,0.03)] px-[17px] py-[16px]"
                    >
                      <p className="font-inter text-[11.8px] leading-[17.76px] text-[rgba(23,26,32,0.48)]">{t.label}</p>
                      <p className="font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-azure11">{t.strong}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex w-[240px] flex-col gap-[8px] self-start rounded-[22px] border border-[rgba(23,26,32,0.08)] bg-white/[0.84] p-[17px]">
                <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-[rgba(23,26,32,0.45)]">
                  What&apos;s Buzzing
                </p>
                {buzzingItems.map((item) => (
                  <div key={item} className="flex min-h-[41.6px] items-center rounded-[16px] bg-[rgba(23,26,32,0.04)] px-[14.4px] py-[12px]">
                    <span className="font-inter text-[13.1px] leading-[19.68px] text-[rgba(23,26,32,0.82)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bee trail */}
        <div className="pointer-events-none relative mt-[40px] flex h-[260px] items-center justify-center">
          <div className="origin-center -rotate-[7.21deg]">
            <Image src="/assets/icon-bee.svg" alt="" width={1078} height={299} className="opacity-90" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
