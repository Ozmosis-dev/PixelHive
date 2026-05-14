import { FeatureCopy, WindowDots, darkPanelBg } from "./feature-helpers";
import { ReviewIcon } from "@/components/Icon";

export default function ReviewFeature() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto grid max-w-[1566px] grid-cols-[1.30fr_0.70fr] gap-x-[48px] border-t border-[rgba(23,26,32,0.08)] rounded-[32px] pl-[115px] pr-[119px] pt-[87px] pb-[70.92px]"
        style={{
          background:
            "radial-gradient(800px 400px at 100% 0%, rgba(107,212,255,0.12) 0%, rgba(107,212,255,0) 24%), linear-gradient(180deg, #151B24 0%, #0E1014 100%)",
        }}
      >
        <div
          className="overflow-hidden self-center rounded-[28px] border border-white/10 shadow-[0_38px_90px_rgba(3,8,18,0.35)]"
          style={{ background: darkPanelBg }}
        >
          <WindowDots theme="dark" />
          <div className="flex gap-4 p-4">
            <div className="relative flex w-[486px] flex-col gap-[4.6px] rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-[17px]">
              <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-white/[0.55]">
                Revision Requests
              </p>
              <h3 className="font-manrope text-[24px] font-bold leading-[26.4px] tracking-[-0.48px] text-ph-zircon">
                Keep proofing attached to the job
              </h3>
              <div className="mt-2 grid grid-cols-4 gap-3">
                {["Kitchen_01", "Living_01", "Bedroom_01", "Exterior_01"].map((f) => (
                  <div
                    key={f}
                    className="flex h-[86px] items-center justify-center rounded-[16px] text-center font-inter text-[12.2px] leading-[18.24px] text-ph-zircon/75"
                    style={{ background: "linear-gradient(180deg, rgba(89,101,121,0.4), rgba(63,74,92,0.72))" }}
                  >
                    {f}
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-[20px] border border-dashed border-white/[0.18] bg-white/[0.03] px-[17px] pb-[17px] pt-[14px]">
                <p className="font-inter text-[11.8px] leading-[17.76px] text-white/[0.55]">Detailed feedback</p>
                <p className="mt-2 font-inter text-[14.1px] leading-[21.12px] text-ph-zircon">
                  Kitchen_01.jpg: warm the windows less. Living_01.jpg: brighten the shadows near the sofa.
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-inter text-[13.1px] leading-[19.68px] text-white/[0.68]">Selected: Kitchen_01.jpg, Living_01.jpg</span>
                <span className="font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-zircon">Revision request pending</span>
              </div>
            </div>
            <div className="flex w-[298px] flex-col rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-[17px]">
              <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-white/[0.55]">
                Job Information
              </p>
              {[
                { label: "Job ID", value: "PF-2026-0847" },
                { label: "Photographer", value: "Sarah Johnson" },
                { label: "Editor", value: "Mike Wilson" },
                { label: "Delivered", value: "Today · 9:14 AM" },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className={`flex min-h-[54.4px] items-center justify-between py-[8px] ${i > 0 ? "border-t border-white/[0.08]" : ""}`}
                >
                  <p className="font-inter text-[11.8px] leading-[17.76px] text-white/[0.55]">{row.label}</p>
                  <p className="font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-zircon">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <FeatureCopy
          Icon={ReviewIcon}
          eyebrow="Review & Revisions"
          headline={<>Feedback loops<br />stay crisp.</>}
          subhead="Internal QA, client proofing, and revision requests all happen in the same thread so nothing gets lost between delivery and approval."
          items={[
            "Feedback history attached to the delivered set",
            "Revision targeting down to individual frames",
            "Client-friendly proofing views without forcing a full account",
          ]}
          theme="dark"
        />
      </div>
    </section>
  );
}
