import { SparkleIcon } from "@/components/Icon";

function WindowChromeDark() {
  return (
    <div className="flex items-center gap-[7.2px] px-4 pt-4">
      {[0, 1, 2].map((i) => (
        <span key={i} className="block h-[9.91px] w-[9.91px] rounded-full bg-white/[0.18]" />
      ))}
    </div>
  );
}

function ReviewChangePanel() {
  return (
    <div className="flex gap-4 p-4">
      <div className="flex flex-1 flex-col gap-[4.6px] rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-[17px]">
        <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-white/[0.55]">
          AI-assisted Editing
        </p>
        <h3 className="font-manrope text-[24px] font-bold leading-[26.4px] tracking-[-0.48px] text-ph-zircon">
          Review the change before it ships
        </h3>
        <div className="mt-2 grid grid-cols-2 gap-4">
          <div
            className="relative h-[208px] rounded-[18px] p-4"
            style={{
              background:
                "linear-gradient(180deg, rgba(148,161,175,0.58) 0%, rgba(189,198,210,0.34) 42%, rgba(51,51,60,0.72) 100%)",
            }}
          >
            <span className="inline-flex rounded-full bg-[rgba(14,16,20,0.52)] px-[11.2px] py-[6.72px] font-inter text-[11.2px] leading-[16.8px] text-white">
              Original
            </span>
          </div>
          <div
            className="relative h-[208px] rounded-[18px] p-4"
            style={{
              background:
                "linear-gradient(180deg, rgba(107,212,255,0.6) 0%, rgba(255,214,128,0.28) 44%, rgba(31,27,23,0.78) 100%)",
            }}
          >
            <span className="inline-flex rounded-full bg-[rgba(14,16,20,0.52)] px-[11.2px] py-[6.72px] font-inter text-[11.2px] leading-[16.8px] text-white">
              Edited
            </span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-inter text-[13.1px] leading-[19.68px] text-white/[0.68]">3 of 12 photos</span>
          <span className="font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-zircon">Current image only</span>
        </div>
      </div>
      <div className="flex w-[240px] shrink-0 flex-col rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-[17px]">
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
  );
}

function KeepProofingPanel() {
  return (
    <div className="flex gap-4 p-4">
      <div className="relative flex flex-1 flex-col gap-[4.6px] rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-[17px]">
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
      <div className="flex w-[240px] shrink-0 flex-col rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-[17px]">
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
  );
}

export default function AIEditingSection() {
  return (
    <section className="w-full bg-ph-black pb-[80px]">
      <div className="mx-auto max-w-[1380px] px-6">
        <div
          className="relative grid w-full grid-cols-[0.82fr_1.18fr] gap-x-[48px] rounded-[34px] px-[56px] py-[92.28px] shadow-[0_26px_40px_rgba(5,9,16,0.2)]"
          style={{
            background:
              "radial-gradient(560px 470px at 100% 0%, rgba(107,212,255,0.12) 0%, rgba(14,16,20,1) 100%), linear-gradient(180deg, #151B24 0%, #0E1014 100%)",
          }}
        >
        {/* Left column */}
        <div className="flex flex-col self-center">
          <div className="flex items-center gap-[10px] text-ph-pale-sky">
            <SparkleIcon size={22} strokeWidth={1.75} />
            <p className="font-inter text-[16.8px] font-bold uppercase leading-[28.22px] tracking-[3.024px]">
              AI-Assisted Editing
            </p>
          </div>
          <h2 className="mt-[20px] max-w-[531px] font-manrope text-[67.2px] font-bold leading-[68.54px] tracking-[-2.016px] text-ph-zircon">
            Proof, polish,<br />and send<br />without tab<br />chaos
          </h2>
          <p className="mt-[20px] max-w-[576px] font-inter text-[18.5px] leading-[30.45px] text-ph-zircon/75">
            The workflow stays focused on real estate production: edit requests, before-and-after review, revision tracking, and clean client handoff without turning the homepage into a generic SaaS dashboard.
          </p>
          <ul className="mt-[24px] flex flex-col gap-[12.8px]">
            {[
              "Preference controls stay attached to the current image and the broader job.",
              "Revision requests inherit context instead of being rebuilt from email threads.",
              "Delivery feels premium because proofing and approvals live in the same surface.",
            ].map((item) => (
              <li key={item} className="relative pl-[17.6px]">
                <span className="absolute left-0 top-[11.52px] h-[6.72px] w-[6.72px] rounded-[3.36px] bg-ph-yellow-mid" />
                <p className="font-inter text-[14px] leading-[21px] text-ph-pale-sky">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column - two stacked panels */}
        <div className="flex flex-col gap-4 self-center">
          <div
            className="overflow-hidden rounded-[28px] border border-white/10 shadow-[0_38px_90px_rgba(3,8,18,0.35)]"
            style={{
              background:
                "radial-gradient(700px 700px at 50% 0%, rgba(107,212,255,0.12) 0%, rgba(107,212,255,0) 36%), linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%), #10151D",
            }}
          >
            <WindowChromeDark />
            <ReviewChangePanel />
          </div>
          <div
            className="overflow-hidden rounded-[28px] border border-white/10 shadow-[0_38px_90px_rgba(3,8,18,0.35)]"
            style={{
              background:
                "radial-gradient(700px 700px at 50% 0%, rgba(107,212,255,0.12) 0%, rgba(107,212,255,0) 36%), linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%), #10151D",
            }}
          >
            <WindowChromeDark />
            <KeepProofingPanel />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
