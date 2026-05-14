export default function FAQHero() {
  return (
    <section className="relative w-full bg-ph-black">
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
      <div className="relative mx-auto grid max-w-[1380px] grid-cols-[0.88fr_1.12fr] items-center gap-x-[61.52px] px-6 pt-[80px] pb-[220px]">
        <div className="flex flex-col">
          <p className="font-inter text-[16.8px] font-bold uppercase leading-[28.22px] tracking-[3.024px] text-ph-pale-sky">
            FAQ
          </p>
          <h1 className="mt-[18px] max-w-[600px] font-manrope text-[80px] font-bold leading-[84px] tracking-[-2.4px] text-ph-zircon">
            The questions teams ask before they move their workflow into the hive.
          </h1>
          <p className="mt-[32px] max-w-[480px] font-inter text-[16.8px] leading-[28.22px] text-ph-zircon/70">
            The FAQ structure follows the sections embedded in the website copy file, then answers them in the same calm, product-first voice as the rest of the marketing site.
          </p>
        </div>

        <div className="self-center">
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
            <div className="grid grid-cols-[1.4fr_1fr] gap-4 p-4">
              <div className="flex flex-col rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-[20px] min-h-[420px]">
                <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-white/[0.55]">
                  Delivery
                </p>
                <h3 className="mt-[6px] font-manrope text-[22px] font-bold leading-[26.4px] tracking-[-0.48px] text-ph-zircon">
                  Hand off a listing-ready package
                </h3>
                <div className="mt-[18px] grid grid-cols-2 gap-3">
                  {[
                    { label: "Gallery", value: "24 polished images" },
                    { label: "Revision history", value: "Visible to the team" },
                    { label: "Client proofing", value: "One shareable link" },
                    { label: "Export set", value: "MLS + marketing ready" },
                  ].map((c) => (
                    <div key={c.label} className="rounded-[14px] border border-white/[0.06] bg-white/[0.03] px-[12px] py-[10px]">
                      <p className="font-inter text-[10.5px] uppercase leading-[14px] tracking-[1.2px] text-white/[0.5]">
                        {c.label}
                      </p>
                      <p className="mt-[4px] font-inter text-[12.5px] font-semibold leading-[17px] text-ph-zircon">
                        {c.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-[14px]">
                  <p className="font-inter text-[11.5px] leading-[16px] text-white/[0.55]">Delivery queue synced</p>
                  <span className="font-inter text-[11.5px] font-semibold leading-[16px] text-ph-zircon">Ready to send</span>
                </div>
              </div>

              <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-[20px] min-h-[420px]">
                <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-white/[0.55]">
                  Quick actions
                </p>
                <div className="mt-[14px] flex flex-col gap-[8px]">
                  {["Download all photos", "Share with client", "Open edit history", "Request revisions"].map((a) => (
                    <div
                      key={a}
                      className="rounded-[12px] border border-white/[0.06] bg-white/[0.04] px-[14px] py-[11px] font-inter text-[12.5px] leading-[18px] text-ph-zircon/85"
                    >
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
