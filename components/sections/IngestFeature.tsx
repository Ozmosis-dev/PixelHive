import { FeatureCopy, WindowDots, darkPanelBg } from "./feature-helpers";
import { IngestIcon } from "@/components/Icon";

export default function IngestFeature() {
  return (
    <section className="w-full bg-ph-black">
      <div className="mx-auto grid max-w-[1380px] grid-cols-[0.70fr_1.30fr] gap-x-[48px] px-6 pt-[69.92px] pb-[80px]">
        <FeatureCopy
          Icon={IngestIcon}
          eyebrow="Ingest & Routing"
          headline={<>Busy Schedules<br />Land in an<br />Organized Hive.</>}
          subhead="PixelHive gives photographers, coordinators, and editors one intake surface for uploads, sync jobs, notes, and production targets."
          items={[
            "Dropbox imports and manual upload in the same intake flow",
            "Job details, due dates, and priority settings attached at ingest",
            "Upload states designed for field teams and studio coordinators",
          ]}
          theme="dark"
        />

        {/* Mockup */}
        <div
          className="overflow-hidden self-center rounded-[28px] border border-white/10 shadow-[0_32px_80px_rgba(23,26,32,0.1)]"
          style={{ background: darkPanelBg }}
        >
          <WindowDots theme="dark" />
          <div className="flex gap-4 p-4">
            <div className="flex flex-1 flex-col gap-[4.6px] rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-[17px]">
              <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-white/[0.55]">
                Upload / Sync
              </p>
              <h3 className="font-manrope text-[24px] font-bold leading-[26.4px] tracking-[-0.48px] text-ph-zircon">
                Bring the whole job in at once
              </h3>
              <div className="mt-[10px] grid grid-cols-2 gap-3">
                <div className="flex h-[48px] items-center justify-center rounded-[15px] border border-[rgba(23,26,32,0.08)] bg-[rgba(244,180,0,0.16)] font-inter text-[13.8px] leading-[20.64px] text-ph-yellow-pale">
                  Manual upload
                </div>
                <div className="flex h-[48px] items-center justify-center rounded-[15px] border border-[rgba(23,26,32,0.08)] bg-white/[0.04] font-inter text-[13.8px] leading-[20.64px] text-white/[0.55]">
                  Dropbox import
                </div>
              </div>
              <div className="mt-3 rounded-[20px] border border-dashed border-[rgba(23,26,32,0.12)] bg-white/[0.03] py-[16px] text-center">
                <div className="mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-[24px] bg-[rgba(244,180,0,0.12)]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
                    <path d="M7 16a4 4 0 010-8 5 5 0 019.6-1.5A4 4 0 0117 16H7z" stroke="#F4B400" strokeWidth="1.5" />
                    <path d="M12 11v6m0-6l-2 2m2-2l2 2" stroke="#F4B400" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="mt-2 font-inter text-[14px] font-bold leading-[21px] text-ph-zircon">Drop photos here</p>
                <p className="font-inter text-[14px] leading-[21px] text-white/[0.55]">RAW, JPEG, PNG</p>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-3">
                {["IMG_001.RAW", "IMG_002.RAW", "IMG_003.RAW", "IMG_004.RAW"].map((f) => (
                  <div
                    key={f}
                    className="flex h-[86px] items-center justify-center rounded-[16px] text-center font-inter text-[12.2px] leading-[18.24px] text-ph-zircon/75"
                    style={{ background: "linear-gradient(180deg, rgba(89,101,121,0.4), rgba(63,74,92,0.72))" }}
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-[298px] flex-col rounded-[22px] border border-white/[0.03] bg-white/[0.03] p-[17px]">
              <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-white/[0.55]">
                Job Context
              </p>
              {[
                { label: "Property", value: "123 Oak Street, Portland, OR" },
                { label: "Client", value: "Compass Northwest" },
                { label: "Deadline", value: "Tomorrow · 10:00 AM" },
                { label: "Priority", value: "Rush" },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className={`flex min-h-[54.4px] items-center justify-between py-[8px] ${i > 0 ? "border-t border-white/[0.10]" : ""}`}
                >
                  <p className="font-inter text-[11.8px] leading-[17.76px] text-white/[0.55]">{row.label}</p>
                  <p className="font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-zircon">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
