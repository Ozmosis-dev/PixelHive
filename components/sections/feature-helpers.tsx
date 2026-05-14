import type { ComponentType, ReactNode, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export function BulletList({
  items,
  theme,
}: {
  items: string[];
  theme: "dark" | "light";
}) {
  const textColor = theme === "dark" ? "text-ph-zircon/70" : "text-[rgba(23,26,32,0.72)]";
  return (
    <ul className="mt-[24px] flex flex-col gap-[13.6px]">
      {items.map((item) => (
        <li key={item} className="relative pl-[17.6px]">
          <span className="absolute left-0 top-[11.52px] h-[6.72px] w-[6.72px] rounded-[3.36px] bg-ph-yellow-mid" />
          <p className={`font-inter text-[16.8px] leading-[28.22px] ${textColor}`}>{item}</p>
        </li>
      ))}
    </ul>
  );
}

export function FeatureCopy({
  Icon,
  eyebrow,
  headline,
  subhead,
  items,
  theme,
}: {
  Icon: IconComponent;
  eyebrow: string;
  headline: ReactNode;
  subhead: string;
  items: string[];
  theme: "dark" | "light";
}) {
  const headlineColor = theme === "dark" ? "text-ph-zircon" : "text-ph-azure11";
  const subheadColor = theme === "dark" ? "text-ph-zircon/70" : "text-[rgba(23,26,32,0.72)]";

  return (
    <div className="flex flex-col self-center">
      <div className="flex items-center gap-[10px] text-ph-pale-sky">
        <Icon size={22} strokeWidth={1.75} />
        <p className="font-inter text-[16.8px] font-bold uppercase leading-[28.22px] tracking-[3.024px]">
          {eyebrow}
        </p>
      </div>
      <h2 className={`mt-[15px] font-manrope text-[60.8px] font-bold leading-[62px] tracking-[-1.824px] ${headlineColor}`}>
        {headline}
      </h2>
      <p className={`mt-[24px] max-w-[449.4px] font-inter text-[16.8px] leading-[28.22px] ${subheadColor}`}>
        {subhead}
      </p>
      <BulletList items={items} theme={theme} />
    </div>
  );
}

export function WindowDots({ theme }: { theme: "dark" | "light" }) {
  const dotColor = theme === "dark" ? "bg-white/[0.18]" : "bg-[rgba(23,26,32,0.15)]";
  return (
    <div className="flex items-center gap-[7.2px] px-4 pt-4">
      {[0, 1, 2].map((i) => (
        <span key={i} className={`block h-[9.91px] w-[9.91px] rounded-full ${dotColor}`} />
      ))}
    </div>
  );
}

export const darkPanelBg =
  "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%), #10151D";

export const lightPanelBg =
  "radial-gradient(900px 900px at 0 0, rgba(244,180,0,0.14) 0%, rgba(244,180,0,0) 34%), linear-gradient(180deg, rgba(255,255,255,0.98), rgba(246,244,238,0.95))";

export const darkSectionBg =
  "radial-gradient(560px 470px at 100% 0%, rgba(107,212,255,0.12) 0%, rgba(14,16,20,1) 100%), linear-gradient(180deg, #151B24 0%, #0E1014 100%)";
