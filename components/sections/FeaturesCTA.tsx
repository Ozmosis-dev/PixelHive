export default function FeaturesCTA() {
  return (
    <section className="bg-ph-black py-28">
      <div className="max-w-[1200px] mx-auto px-8">
        <div
          className="rounded-panel border border-white/[0.08] px-12 py-20 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(180deg, #10151D 0%, #0E1014 100%)" }}
        >
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-25"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #F4B400, transparent 70%)" }}
          />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-[6.72px] h-[6.72px] rounded-[3.36px] bg-ph-yellow-mid flex-shrink-0" />
              <span className="font-inter text-[16.8px] font-bold uppercase tracking-[0.18em] text-ph-muted">
                Ready to start?
              </span>
            </div>
            <h2 className="font-manrope font-bold text-[60.8px] leading-[62px] tracking-[-1.824px] text-ph-white max-w-[640px] mx-auto mb-6">
              The complete video production platform
            </h2>
            <p className="font-inter text-[18.5px] leading-[30.45px] text-ph-muted max-w-[480px] mx-auto mb-10">
              Start your free trial today. No credit card required. Your first
              project is on us.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="#"
                className="font-inter text-[14px] font-semibold leading-6 tracking-[-0.14px] px-8 py-3.5 bg-ph-accent text-ph-black rounded-full border border-ph-accent-border hover:bg-ph-yellow-mid transition-colors"
              >
                Start free trial
              </a>
              <a
                href="#"
                className="font-inter text-[14px] font-semibold leading-6 tracking-[-0.14px] px-8 py-3.5 bg-white/[0.06] text-ph-white rounded-full border border-white/[0.10] hover:bg-white/[0.10] transition-colors"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
