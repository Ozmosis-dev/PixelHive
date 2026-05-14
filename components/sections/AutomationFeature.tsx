import Image from "next/image";
import { FeatureCopy, WindowDots, lightPanelBg } from "./feature-helpers";
import { AutomationIcon } from "@/components/Icon";

export default function AutomationFeature() {
  const tiles = [
    { label: "Ingest", strong: "Auto-synced from Dropbox" },
    { label: "Enhance", strong: "Preset bundle applied" },
    { label: "QC", strong: "Flags surfaced for review" },
    { label: "Delivery", strong: "Client link prepared" },
  ];
  const buzzing = ["Rush job uploaded", "Editor assigned", "Client proof opened", "Revision approved"];

  return (
    <section className="w-full border-t border-[rgba(23,26,32,0.08)] bg-white">
      <div className="relative mx-auto max-w-[1380px] px-6 pt-[140px]">
        <div className="grid grid-cols-[0.70fr_1.30fr] gap-x-[48px]">
          <div className="relative">
            <FeatureCopy
              Icon={AutomationIcon}
              eyebrow="Automation"
              headline={<>Busywork,<br />handled.</>}
              subhead="The operational glue around every shoot becomes visible and trackable, so teams spend less time nudging status and more time shipping work."
              items={[
                "Queue states, processing visibility, and stage progression in one place",
                "Notification touchpoints built for “What’s Buzzing” moments",
                "Workflow scaffolding that adapts to solo operators and high-volume teams",
              ]}
              theme="light"
            />
          </div>

          <div
            className="flex h-[500px] flex-col overflow-hidden self-center rounded-[28px] border border-[rgba(23,26,32,0.08)] shadow-[0_32px_80px_rgba(23,26,32,0.1)]"
            style={{ background: lightPanelBg }}
          >
            <WindowDots theme="light" />
            <div className="flex flex-1 gap-4 overflow-hidden p-4">
              <div className="flex flex-1 flex-col gap-[4.6px] self-start rounded-[22px] border border-[rgba(23,26,32,0.08)] bg-white/[0.84] p-[17px]">
                <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-[rgba(23,26,32,0.45)]">
                  Automation
                </p>
                <h3 className="font-manrope text-[24px] font-bold leading-[26.4px] tracking-[-0.48px] text-ph-azure11">
                  Busywork, handled.
                </h3>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  {tiles.map((t) => (
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
                {buzzing.map((item) => (
                  <div key={item} className="flex min-h-[41.6px] items-center rounded-[16px] bg-[rgba(23,26,32,0.04)] px-[14.4px] py-[12px]">
                    <span className="font-inter text-[13.1px] leading-[19.68px] text-[rgba(23,26,32,0.82)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bee trail */}
        <div className="pointer-events-none relative mt-[60px] flex h-[260px] items-center justify-center">
          <div className="origin-center -rotate-[7.21deg]">
            <Image src="/assets/icon-bee.svg" alt="" width={1078} height={299} className="opacity-90" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
