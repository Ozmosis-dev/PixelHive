import { FeatureCopy, WindowDots, darkPanelBg } from "./feature-helpers";
import { SparkleIcon } from "@/components/Icon";

export default function AIEditingFeature() {
  return (
    <section className="w-full bg-ph-black">
      <div className="mx-auto grid max-w-[1380px] grid-cols-[1.30fr_0.70fr] gap-x-[48px] rounded-[32px] px-6 pt-[69.92px] pb-[140px]">
        <div
          className="flex h-[540px] flex-col overflow-hidden self-center rounded-[28px] border border-white/10 shadow-[0_38px_90px_rgba(3,8,18,0.35)]"
          style={{ background: darkPanelBg }}
        >
          <WindowDots theme="dark" />
          <div className="flex flex-1 gap-4 p-4">
            <div className="flex w-[486px] flex-col gap-[4.6px] rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-[17px]">
              <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-white/[0.55]">
                AI-assisted Editing
              </p>
              <h3 className="font-manrope text-[24px] font-bold leading-[26.4px] tracking-[-0.48px] text-ph-zircon">
                Review the change before it ships
              </h3>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div
                  className="relative h-[208px] rounded-[18px] p-4"
                  style={{ background: "linear-gradient(180deg, rgba(148,161,175,0.58) 0%, rgba(189,198,210,0.34) 42%, rgba(51,51,60,0.72) 100%)" }}
                >
                  <span className="inline-flex rounded-full bg-[rgba(14,16,20,0.52)] px-[11.2px] py-[6.72px] font-inter text-[11.2px] leading-[16.8px] text-white">Original</span>
                </div>
                <div
                  className="relative h-[208px] rounded-[18px] p-4"
                  style={{ background: "linear-gradient(180deg, rgba(107,212,255,0.6) 0%, rgba(255,214,128,0.28) 44%, rgba(31,27,23,0.78) 100%)" }}
                >
                  <span className="inline-flex rounded-full bg-[rgba(14,16,20,0.52)] px-[11.2px] py-[6.72px] font-inter text-[11.2px] leading-[16.8px] text-white">Edited</span>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-inter text-[13.1px] leading-[19.68px] text-white/[0.68]">3 of 12 photos</span>
                <span className="font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-zircon">Current image only</span>
              </div>
            </div>
            <div className="flex w-[298px] flex-col rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-[17px]">
              <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-white/[0.55]">
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
                  className={`flex min-h-[54.4px] items-center justify-between py-[8px] ${i > 0 ? "border-t border-white/[0.08]" : ""}`}
                >
                  <div>
                    <p className="font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-zircon">{row.title}</p>
                    <p className="font-inter text-[11.8px] leading-[17.76px] text-white/[0.55]">{row.sub}</p>
                  </div>
                  <div className={`relative h-[24px] w-[41.59px] rounded-full ${row.on ? "bg-[rgba(244,180,0,0.42)]" : "bg-white/[0.16]"}`}>
                    <span className={`absolute top-[3.19px] h-[17.59px] w-[17.59px] rounded-[8.8px] ${row.on ? "right-[4.82px] bg-ph-yellow-pale" : "left-[3.18px] bg-ph-zircon"}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <FeatureCopy
          Icon={SparkleIcon}
          eyebrow="AI-Assisted Editing"
          headline={<>Real estate<br />corrections<br />with human<br />control.</>}
          subhead="Enhancement presets stay visible, so teams can move faster without losing confidence in what is being changed."
          items={[
            "Virtual twilight, grass cleanup, sky enhancement, and fixture fixes",
            "Side-by-side confidence checks before preferences are applied",
            "Room-specific review that keeps context attached to each frame",
          ]}
          theme="dark"
        />
      </div>
    </section>
  );
}
