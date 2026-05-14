import { HiveMark } from "@/components/Icon";

export default function FeaturesHero() {
  return (
    <section className="relative w-full bg-ph-black">
      {/* Top-to-bottom navy gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,15,24,0.4) 0%, rgba(8,11,18,0.2) 40%, rgba(8,11,18,0) 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1316px 1361px at 338px 289px, rgba(107,212,255,0.1) 0%, rgba(107,212,255,0) 22%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1380px] grid-cols-[0.88fr_1.12fr] gap-x-[61.52px] px-6 pt-[39px] pb-[71.94px]">
        {/* Left */}
        <div className="flex flex-col self-center">
          <p className="font-inter text-[16.8px] font-bold uppercase leading-[28.22px] tracking-[3.024px] text-ph-pale-sky">
            Features
          </p>
          <h1 className="mt-[15px] w-[509px] whitespace-pre-wrap font-manrope text-[83.2px] font-bold leading-[82px] tracking-[-2.496px] text-ph-zircon">
            Every stage of the listing-photo workflow, designed as one product.
          </h1>
          <p className="mt-[30px] w-[482px] font-inter text-[16.8px] leading-[28.22px] text-ph-zircon/70">
            PixelHive borrows the product-first discipline of DJI-style launches, then translates it into a warmer system for production teams moving property photos from upload to delivery.
          </p>
        </div>

        {/* Right - identical app window mockup */}
        <div className="self-center pt-[16px]">
          <div
            className="overflow-hidden rounded-[28px] border border-white/10 shadow-[0_38px_90px_rgba(3,8,18,0.35)]"
            style={{
              background:
                "radial-gradient(652px 653px at 356px 0px, rgba(107,212,255,0.12) 0%, rgba(107,212,255,0) 36%), linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%), #10151D",
            }}
          >
            <div className="flex items-center gap-[7.2px] px-4 pt-4">
              {[0, 1, 2].map((i) => (
                <span key={i} className="block h-[9.91px] w-[9.91px] rounded-full bg-white/[0.18]" />
              ))}
            </div>
            <div className="grid grid-cols-[192px_1fr] gap-4 p-4">
              <aside className="flex flex-col gap-[8.8px] rounded-[22px] border border-white/[0.08] bg-white/[0.03] px-[17px] pt-[17px] pb-[300px]">
                <div className="flex items-center gap-[10.38px] pb-[10px]">
                  <span className="text-ph-accent">
                    <HiveMark size={20} strokeWidth={1.75} />
                  </span>
                  <span className="font-inter text-[14.1px] font-bold leading-[21.12px] text-ph-zircon">PixelHive</span>
                </div>
                {["Uploads", "Sequence", "Edit", "QC", "Delivery"].map((item) => (
                  <div key={item} className="flex min-h-[41.6px] items-center rounded-[16px] bg-white/[0.04] px-[14.4px] py-[12px]">
                    <span className="font-inter text-[13.1px] leading-[19.68px] text-ph-zircon/85">{item}</span>
                  </div>
                ))}
              </aside>

              <div
                className="flex flex-col gap-4 rounded-[22px] border border-white/[0.08] p-[17px]"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)" }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-white/[0.55]">Live Workspace</p>
                    <h3 className="font-manrope text-[24px] font-bold leading-[26.4px] tracking-[-0.48px] text-ph-zircon">AI photo workflow</h3>
                  </div>
                  <span className="rounded-full bg-[rgba(255,194,71,0.65)] px-[12.8px] py-[8.8px] font-inter text-[12px] font-semibold leading-[18px] text-[rgba(23,26,32,0.72)]">
                    What&apos;s Buzzing
                  </span>
                </div>
                <div className="relative h-[575px]">
                  <article className="absolute left-0 right-[240px] top-0 flex flex-col gap-[12.8px] rounded-[20px] border border-white/[0.08] bg-white/[0.03] px-[17px] pt-[16px] pb-[210px]">
                    <p className="font-inter text-[11.8px] leading-[17.76px] text-white/[0.55]">Living_Room_01.jpg</p>
                    <div
                      className="relative h-[264px] w-full overflow-hidden rounded-[18px]"
                      style={{ background: "linear-gradient(180deg, rgba(143,207,255,0.52) 0%, rgba(248,203,145,0.18) 48%, rgba(29,23,19,0.72) 100%)" }}
                    >
                      <div className="absolute" style={{ top: 18, left: "42%", right: "20%", bottom: 80, borderRadius: 16, background: "linear-gradient(180deg, rgba(214,239,255,0.92), rgba(137,201,255,0.28))" }} />
                      <div className="absolute bottom-0 left-0 right-0 h-[76.8px]" style={{ background: "linear-gradient(180deg, rgba(73,46,29,0), rgba(73,46,29,0.92))" }} />
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-[2px]">
                      <p className="font-inter text-[13.1px] leading-[19.68px] text-white/[0.68]">Exposure<br />balanced</p>
                      <p className="font-inter text-[13.1px] leading-[19.68px] text-white/[0.68]">Sky<br />preserved</p>
                    </div>
                  </article>
                  <article className="absolute right-0 top-0 w-[228px] rounded-[20px] border border-white/[0.08] bg-white/[0.03] px-[17px] pt-[16px] pb-[17px]">
                    <p className="font-inter text-[11.8px] leading-[17.76px] text-white/[0.55]">Processing queue</p>
                    {[
                      { addr: "2143 Maple Ave", sub: "36 files · rush", status: "Processing" },
                      { addr: "456 Oak Street", sub: "24 files · standard", status: "Ready" },
                      { addr: "789 Pine Road", sub: "18 files · proofing", status: "Review" },
                    ].map((row, i) => (
                      <div key={row.addr} className={`flex items-center justify-between py-[12.8px] ${i > 0 ? "border-t border-white/[0.08]" : ""}`}>
                        <div>
                          <p className="font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-zircon">{row.addr}</p>
                          <p className="font-inter text-[11.8px] leading-[17.76px] text-white/[0.55]">{row.sub}</p>
                        </div>
                        <span className="font-inter text-[12.2px] leading-[18.24px] text-ph-yellow-light">{row.status}</span>
                      </div>
                    ))}
                  </article>
                  <article className="absolute right-0 top-[256px] w-[228px] rounded-[20px] border border-white/[0.08] bg-white/[0.03] px-[17px] pt-[16px] pb-[17px]">
                    <p className="font-inter text-[11.8px] leading-[17.76px] text-white/[0.55]">Enhancement stack</p>
                    {[
                      { title: "Virtual Twilight", sub: "Exterior only", on: true },
                      { title: "Sky Enhancement", sub: "Blue-sky recovery", on: true },
                      { title: "Window Pull", sub: "Maintain interior balance", on: true },
                      { title: "Green Grass", sub: "Exterior cleanup", on: false },
                    ].map((row, i) => (
                      <div key={row.title} className={`flex items-center justify-between py-[12.8px] ${i > 0 ? "border-t border-white/[0.08]" : ""}`}>
                        <div className="flex-1 pr-2">
                          <p className="font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-zircon">{row.title}</p>
                          <p className="font-inter text-[11.8px] leading-[17.76px] text-white/[0.55]">{row.sub}</p>
                        </div>
                        <div className={`relative h-[24px] w-[41.59px] rounded-full ${row.on ? "bg-[rgba(244,180,0,0.42)]" : "bg-white/[0.16]"}`}>
                          <span className={`absolute top-[3.19px] h-[17.59px] w-[17.59px] rounded-[8.8px] ${row.on ? "right-[4.82px] bg-ph-yellow-pale" : "left-[3.18px] bg-ph-zircon"}`} />
                        </div>
                      </div>
                    ))}
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
