import { FeatureCopy, WindowDots, lightPanelBg } from "./feature-helpers";
import { SequenceIcon } from "@/components/Icon";

const groups = [
  { name: "Exterior (3)", files: ["Front_01", "Front_02", "Back_01"] },
  { name: "Living Room (2)", files: ["Living_01", "Living_02"] },
  { name: "Kitchen (3)", files: ["Kitchen_01", "Kitchen_02", "Kitchen_03"] },
  { name: "Amenities (2)", files: ["Pool_01", "Neighborhood_01"] },
];

export default function SequencingFeature() {
  return (
    <section className="w-full border-t border-[rgba(23,26,32,0.08)] bg-white">
      <div className="mx-auto grid max-w-[1380px] grid-cols-[0.70fr_1.30fr] gap-x-[48px] px-6 pt-[140px] pb-[140px]">
        <FeatureCopy
          Icon={SequenceIcon}
          eyebrow="Sequencing & Reuse"
          headline={<>The property<br />story is<br />assembled for<br />you.</>}
          subhead="PixelHive helps teams standardize image order, detect room types, and reuse nearby reference shots when a listing needs supporting context."
          items={[
            "MLS-aware ordering suggestions",
            "Room detection and seasonal grouping for common exterior sets",
            "Location-aware reuse flows for amenities and neighborhood media",
          ]}
          theme="light"
        />

        <div
          className="overflow-hidden self-center rounded-[28px] border border-[rgba(23,26,32,0.08)] shadow-[0_32px_80px_rgba(23,26,32,0.1)]"
          style={{ background: lightPanelBg }}
        >
          <WindowDots theme="light" />
          <div className="grid grid-cols-[256px_1fr] gap-4 p-4">
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
            <div className="flex flex-col gap-[5.6px] rounded-[22px] border border-[rgba(23,26,32,0.08)] bg-white/[0.74] p-[17px]">
              <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-[rgba(23,26,32,0.45)]">
                Photo Sequence
              </p>
              {groups.map((g) => (
                <div key={g.name} className="pt-[10px]">
                  <p className="font-inter text-[14px] font-bold leading-[21px] text-ph-azure11">{g.name}</p>
                  <div className="mt-[10px] grid grid-cols-3 gap-3">
                    {g.files.map((file) => (
                      <div
                        key={file}
                        className="flex h-[86px] items-center justify-center rounded-[16px] text-center font-inter text-[12.2px] leading-[18.24px] text-ph-zircon/75"
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
        </div>
      </div>
    </section>
  );
}
