import { WindowDots, darkPanelBg, BulletList } from "./feature-helpers";
import { DeliveryIcon } from "@/components/Icon";

export default function DeliveryFeature() {
  return (
    <section className="w-full bg-white pb-[120px]">
      <div
        className="mx-auto grid max-w-[1380px] grid-cols-[1.30fr_0.70fr] gap-x-[48px] rounded-[32px] border border-[rgba(23,26,32,0.08)] pl-[48px] pr-[82px] py-[70.92px]"
        style={{
          background:
            "radial-gradient(800px 400px at 100% 0%, rgba(107,212,255,0.12) 0%, rgba(107,212,255,0) 24%), linear-gradient(180deg, #151B24 0%, #0E1014 100%)",
        }}
      >
        {/* Mockup (left on this flipped layout) */}
        <div
          className="flex h-[500px] flex-col overflow-hidden justify-self-start self-center w-[737px] rounded-[28px] border border-white/10 shadow-[0_38px_90px_rgba(3,8,18,0.35)]"
          style={{ background: darkPanelBg }}
        >
          <WindowDots theme="dark" />
          <div className="flex flex-1 gap-4 overflow-hidden p-4">
            <div className="flex w-[390px] flex-col gap-[4.6px] self-start rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-[17px]">
              <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-white/[0.55]">
                Delivery
              </p>
              <h3 className="font-manrope text-[24px] font-bold leading-[26.4px] tracking-[-0.48px] text-ph-zircon">
                Hand off a listing-ready package
              </h3>
              <div className="mt-2 grid grid-cols-2 gap-3">
                {[
                  { label: "Gallery", strong: "24 polished images" },
                  { label: "Revision history", strong: "Visible to the team" },
                  { label: "Client proofing", strong: "One shareable link" },
                  { label: "Export set", strong: "MLS + marketing ready" },
                ].map((t) => (
                  <div key={t.label} className="rounded-[18px] border border-white/[0.08] bg-white/[0.03] px-[17px] py-[16px]">
                    <p className="font-inter text-[11.8px] leading-[17.76px] text-white/[0.55]">{t.label}</p>
                    <p className="font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-zircon">{t.strong}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-inter text-[13.1px] leading-[19.68px] text-white/[0.68]">Delivery queue synced</span>
                <span className="font-inter text-[13.8px] font-bold leading-[18.58px] text-ph-zircon">Ready to send</span>
              </div>
            </div>
            <div className="flex w-[298px] flex-col gap-[5.6px] self-start rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-[17px]">
              <p className="font-inter text-[10.9px] uppercase leading-[16.32px] tracking-[1.741px] text-white/[0.55]">
                Quick Actions
              </p>
              {["Download all photos", "Share with client", "Open edit history", "Request revisions"].map((label) => (
                <div key={label} className="flex min-h-[41.6px] items-center rounded-[16px] bg-white/[0.04] px-[14.4px] py-[12px]">
                  <span className="font-inter text-[13.1px] leading-[19.68px] text-ph-zircon/85">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copy (right on this flipped layout) */}
        <div className="flex flex-col self-center">
          <div className="flex items-center gap-[10px] text-ph-pale-sky">
            <DeliveryIcon size={22} strokeWidth={1.75} />
            <p className="font-inter text-[16.8px] font-bold uppercase leading-[28.22px] tracking-[3.024px]">
              Delivery
            </p>
          </div>
          <h2 className="mt-[15px] font-manrope text-[60.8px] font-bold leading-[62px] tracking-[-1.824px] text-ph-zircon">
            A better<br />handoff for<br />agents and<br />clients.
          </h2>
          <p className="mt-[24px] max-w-[441px] font-inter text-[16.8px] leading-[28.22px] text-ph-zircon/70">
            Delivery feels premium when the final review, feedback, and send-off live inside one polished workflow instead of scattered links.
          </p>
          <BulletList
            items={[
              "Final-ready galleries and export views in a single flow",
              "Quick actions for downloads, revisions, and follow-up requests",
              "A calmer experience for the client and the team behind the scenes",
            ]}
            theme="dark"
          />
        </div>
      </div>
    </section>
  );
}
