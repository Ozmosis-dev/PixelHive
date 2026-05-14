"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    price: 0,
    blurb: "Perfect for getting started",
    features: [
      { label: "500 Monthly photo uploads", on: true },
      { label: "Auto-tagging", on: true },
      { label: "Advanced AI features", on: false },
      { label: "QC automation", on: false },
      { label: "Team collaboration", on: false },
      { label: "API access", on: false },
      { label: "Custom branding", on: false },
      { label: "Multi-location support", on: false },
      { label: "Email Support", on: true },
    ],
  },
  {
    name: "Pro",
    price: 79,
    blurb: "Best for growing teams",
    popular: true,
    features: [
      { label: "2,000 Monthly photo uploads", on: true },
      { label: "Auto-tagging", on: true },
      { label: "Advanced AI features", on: true },
      { label: "QC automation", on: true },
      { label: "Team collaboration", on: true },
      { label: "API access", on: true },
      { label: "Custom branding", on: true },
      { label: "Multi-location support", on: false },
      { label: "Priority Support", on: true },
    ],
  },
  {
    name: "Enterprise",
    price: 199,
    blurb: "For large organizations",
    features: [
      { label: "Unlimited Monthly photo uploads", on: true },
      { label: "Auto-tagging", on: true },
      { label: "Advanced AI features", on: true },
      { label: "QC automation", on: true },
      { label: "Team collaboration", on: true },
      { label: "API access", on: true },
      { label: "Custom branding", on: true },
      { label: "Multi-location support", on: true },
      { label: "24/7 Phone Support", on: true },
    ],
  },
];

const comparison = [
  { name: "Monthly photo uploads", starter: "500", pro: "2,000", agency: "Unlimited" },
  { name: "Auto-tagging", starter: "check", pro: "check", agency: "check" },
  { name: "Advanced AI features", starter: "x", pro: "check", agency: "check" },
  { name: "QC automation", starter: "x", pro: "check", agency: "check" },
  { name: "Team collaboration", starter: "x", pro: "check", agency: "check" },
  { name: "API access", starter: "x", pro: "check", agency: "check" },
  { name: "Custom branding", starter: "x", pro: "check", agency: "check" },
  { name: "Multi-location support", starter: "x", pro: "x", agency: "check" },
  { name: "Support level", starter: "Email", pro: "Priority", agency: "24/7 Phone" },
];

const faqs = [
  { q: "Can I change my plan anytime?", a: "Yes — you can upgrade or downgrade at any time. Changes take effect at the next billing cycle." },
  { q: "What happens to my data if I cancel?", a: "Your data is retained for 30 days after cancellation. You can export or restore it during that window." },
  { q: "Do you offer refunds?", a: "We offer prorated refunds within 14 days of purchase for annual plans." },
  { q: "Can I get a custom plan?", a: "Yes — contact our sales team for tailored Enterprise plans with custom limits and SLAs." },
];

function Check({ on }: { on: boolean | "x" | "check" }) {
  if (on === true || on === "check") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B8A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(23,26,32,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 font-inter text-[13px] text-ph-azure11/55 dark:text-ph-zircon/55">
      <Link href="/app/clients" className="flex items-center gap-1.5 hover:text-ph-azure11 dark:hover:text-ph-zircon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12l9-9 9 9" />
          <path d="M5 10v10h14V10" />
        </svg>
        Clients
      </Link>
      <span className="text-ph-azure11/30 dark:text-ph-zircon/30">›</span>
      <span className="text-ph-azure11 dark:text-ph-zircon">Billing & Plans</span>
    </nav>
  );
}

export default function BillingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative w-full">
      <div className="relative mx-auto max-w-[1200px] px-8 pt-10 pb-16">
      {/* Hero */}
      <div
        className="rounded-[20px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-8 py-10 shadow-[0_2px_8px_rgba(23,26,32,0.04)]"
        style={{
          backgroundImage:
            "radial-gradient(800px 200px at 0 0, rgba(255,194,71,0.10) 0%, rgba(255,194,71,0) 60%)",
        }}
      >
        <Breadcrumb />
        <h1 className="mt-4 font-manrope text-[40px] font-bold leading-[44px] tracking-[-1.2px] text-ph-azure11 dark:text-ph-zircon">Billing & Plans</h1>
        <p className="mt-1 font-inter text-[14px] text-ph-azure11/55 dark:text-ph-zircon/55">Plan & Billing</p>
      </div>

      {/* Heading */}
      <div className="mt-10">
        <h2 className="font-manrope text-[28px] font-bold tracking-[-0.8px] text-ph-azure11 dark:text-ph-zircon">Choose Your Plan</h2>
        <div className="mt-4 flex items-center gap-4">
          <span className={`font-inter text-[13.5px] font-semibold transition-colors ${annual ? "text-ph-azure11/55 dark:text-ph-zircon/55" : "text-ph-azure11 dark:text-ph-zircon"}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative inline-flex h-7 w-14 items-center rounded-full border transition-colors ${
              annual
                ? "bg-ph-accent border-ph-accent-border"
                : "bg-[rgba(23,26,32,0.10)] dark:bg-white/[0.10] border-[rgba(23,26,32,0.08)] dark:border-white/[0.10]"
            }`}
            aria-label="Toggle billing cycle"
            role="switch"
            aria-checked={annual}
          >
            <span
              className={`block h-5 w-5 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.2)] transition-transform ${
                annual ? "translate-x-8" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`font-inter text-[13.5px] font-semibold transition-colors ${annual ? "text-ph-azure11 dark:text-ph-zircon" : "text-ph-azure11/55 dark:text-ph-zircon/55"}`}>
            Annual
          </span>
          <span className="rounded-full bg-[#FFF1CF] dark:bg-ph-accent/15 px-3 py-0.5 font-inter text-[12px] font-bold text-ph-brown dark:text-ph-accent">Save 20%</span>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="mt-10 grid grid-cols-3 items-stretch gap-5">
        {plans.map((plan) => {
          const price = annual ? Math.round(plan.price * 0.8) : plan.price;
          const popularBg =
            "radial-gradient(560px 320px at 50% 0%, rgba(244,180,0,0.18) 0%, rgba(244,180,0,0) 60%), linear-gradient(180deg, #FFFFFF 0%, #FFFAEB 100%)";
          const popularBgDark =
            "radial-gradient(560px 320px at 50% 0%, rgba(244,180,0,0.18) 0%, rgba(244,180,0,0) 60%), linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%), #10151D";
          return (
            <div key={plan.name} className={`relative ${plan.popular ? "lg:-my-3 lg:scale-[1.03]" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-2 rounded-full bg-ph-accent px-4 py-1.5 font-inter text-[12px] font-bold uppercase tracking-[1.6px] text-ph-azure11 shadow-[0_8px_20px_rgba(244,180,0,0.35)]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.18 21 12 16.5 5.82 21l2.37-7.14L2 9.36h7.61L12 2z" />
                    </svg>
                    Most Popular
                  </span>
                </div>
              )}
              <div
                className={`relative h-full overflow-hidden rounded-[22px] border p-6 transition ${
                  plan.popular
                    ? "popular-card border-ph-accent/60 dark:border-ph-accent/50 shadow-[0_24px_60px_rgba(244,180,0,0.18)] dark:shadow-[0_28px_72px_rgba(3,8,18,0.55)]"
                    : "border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] shadow-[0_2px_10px_rgba(23,26,32,0.04)]"
                }`}
              >
                {plan.popular && (
                  <style>{`.popular-card { background: ${popularBg}; } .dark .popular-card { background: ${popularBgDark}; }`}</style>
                )}
                <h3 className={`text-center font-manrope text-[22px] font-bold ${plan.popular ? "text-ph-azure11 dark:text-ph-zircon" : "text-ph-azure11 dark:text-ph-zircon"}`}>
                  {plan.name}
                </h3>
                <p className="mt-4 text-center font-manrope text-[14px] text-ph-azure11 dark:text-ph-zircon">
                  <span className="text-[18px] font-bold align-top">$</span>
                  <span className={`text-[48px] font-bold leading-none ${plan.popular ? "text-ph-azure11 dark:text-ph-zircon" : ""}`}>{price}</span>
                  <span className="text-[13px] text-ph-azure11/55 dark:text-ph-zircon/55">/month</span>
                </p>
                <p className="mt-2 text-center font-inter text-[12.5px] text-ph-azure11/55 dark:text-ph-zircon/55">{plan.blurb}</p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-2 font-inter text-[13px] text-ph-azure11/80 dark:text-ph-zircon/80">
                      <Check on={f.on} />
                      {f.label}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 w-full rounded-full py-2.5 font-inter text-[13.5px] font-semibold transition-colors ${
                    plan.popular
                      ? "bg-ph-accent text-ph-azure11 hover:bg-ph-yellow-mid shadow-[0_8px_20px_rgba(244,180,0,0.30)]"
                      : "border border-[rgba(23,26,32,0.12)] dark:border-white/[0.12] bg-white dark:bg-white/[0.04] text-ph-azure11 dark:text-ph-zircon hover:bg-[rgba(23,26,32,0.04)] dark:hover:bg-white/[0.06]"
                  }`}
                >
                  Select Plan
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Feature Comparison */}
      <div className="mt-12">
        <h3 className="mb-4 font-inter text-[16px] font-bold text-ph-azure11 dark:text-ph-zircon">Feature Comparison</h3>
        <div className="overflow-hidden rounded-[16px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] shadow-[0_2px_8px_rgba(23,26,32,0.04)]">
          <div className="grid grid-cols-4 gap-4 px-6 py-4 font-inter text-[11px] font-bold uppercase tracking-[1.2px] text-ph-azure11/55 dark:text-ph-zircon/55">
            <span>Features</span>
            <span className="text-center">Starter</span>
            <span className="text-center">Pro</span>
            <span className="text-center">Agency</span>
          </div>
          {comparison.map((row) => (
            <div key={row.name} className="grid grid-cols-4 gap-4 border-t border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] px-6 py-3 font-inter text-[13.5px] text-ph-azure11 dark:text-ph-zircon">
              <span>{row.name}</span>
              <span className="flex items-center justify-center">
                {row.starter === "check" || row.starter === "x" ? <Check on={row.starter as "check" | "x"} /> : row.starter}
              </span>
              <span className="flex items-center justify-center">
                {row.pro === "check" || row.pro === "x" ? <Check on={row.pro as "check" | "x"} /> : row.pro}
              </span>
              <span className="flex items-center justify-center">
                {row.agency === "check" || row.agency === "x" ? <Check on={row.agency as "check" | "x"} /> : row.agency}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-12">
        <h3 className="mb-4 font-inter text-[16px] font-bold text-ph-azure11 dark:text-ph-zircon">Frequently Asked Questions</h3>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-[12px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D]">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 font-inter text-[14px] font-semibold text-ph-azure11 dark:text-ph-zircon"
              >
                {f.q}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-ph-azure11/40 dark:text-ph-zircon/40 transition-transform ${openFaq === i ? "rotate-180" : ""}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openFaq === i && (
                <p className="border-t border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] px-5 py-4 font-inter text-[13.5px] text-ph-azure11/70 dark:text-ph-zircon/70">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
