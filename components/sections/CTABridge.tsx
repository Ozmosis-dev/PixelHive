import { HiveMark } from "@/components/Icon";

export default function CTABridge() {
  return (
    <section className="relative z-10 w-full bg-white pb-[120px]">
      <div className="mx-auto -mt-[80px] max-w-[1380px] px-6">
        <div
          className="relative grid grid-cols-[1fr_252px] gap-x-[32px] rounded-[32px] border border-white/[0.08] pl-[84px] pr-[29.8px] py-[39.4px]"
          style={{
            background:
              "radial-gradient(1100px 400px at 16% 64%, #0E1014 0%, #151D27 100%), linear-gradient(180deg, #151B24 0%, #0E1014 100%)",
          }}
        >
          <div className="self-center">
            <div className="flex items-center gap-[10px] text-ph-pale-sky">
              <HiveMark size={22} strokeWidth={1.75} />
              <p className="font-inter text-[16.8px] font-bold uppercase leading-[28.22px] tracking-[3.024px]">
                Top-Level Navigation
              </p>
            </div>
            <h2 className="mt-[16px] font-manrope text-[67.2px] font-bold leading-[68.54px] tracking-[-2.016px] text-ph-zircon">
              Explore the full<br />product story.
            </h2>
            <p className="mt-[8px] font-inter text-[18.5px] leading-[30.45px] text-ph-zircon/75">
              Jump deeper into the workflow surfaces on the features page,<br />
              then head to the FAQ for the operating questions teams ask<br />
              before switching their production process.
            </p>
          </div>

          <div className="flex flex-col gap-3 self-center">
            <a
              href="/features"
              className="inline-flex items-center justify-center rounded-full px-[20px] py-[10px] font-inter text-[14px] font-semibold leading-[24px] tracking-[-0.14px] text-ph-azure7 shadow-[0_12px_14px_rgba(16,22,31,0.1)]"
              style={{ background: "linear-gradient(151.93deg, #F4B400 0%, #FFC247 100%)" }}
            >
              View Features
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white/[0.82] px-[17.6px] py-[10px] font-inter text-[14px] font-semibold leading-[24px] tracking-[-0.14px] text-ph-azure11"
            >
              Open FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
