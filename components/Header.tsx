import Link from "next/link";
import { HiveMark } from "@/components/Icon";

export default function Header({ activeNav = "Home" }: { activeNav?: "Home" | "Features" | "FAQ" }) {
  const nav = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "FAQ", href: "/faq" },
  ] as const;

  return (
    <header className="w-full bg-ph-black">
      <div className="mx-auto flex max-w-[1380px] items-center px-6 py-[13.6px]">
        <Link href="/" className="flex items-center gap-[12.8px]">
          <span className="text-ph-accent">
            <HiveMark size={22} strokeWidth={1.75} />
          </span>
          <span className="font-manrope text-[16.8px] font-bold leading-[25.2px] tracking-[-0.336px] text-white">PixelHive</span>
        </Link>

        <nav className="ml-auto flex items-center gap-[28px]">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative flex flex-col items-start pb-[6.4px]"
            >
              <span
                className={`font-inter text-[14px] font-semibold leading-[21px] ${
                  activeNav === item.label ? "text-white" : "text-white/[0.72]"
                }`}
              >
                {item.label}
              </span>
              {activeNav === item.label && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-white" />
              )}
            </Link>
          ))}
        </nav>

        <Link
          href="/app"
          className="ml-[28px] inline-flex items-center justify-center rounded-full border border-ph-accent-border bg-ph-accent px-[18.6px] py-[11px] font-inter text-[14px] font-semibold leading-[24px] tracking-[-0.14px] text-[#0E1014] shadow-[0_12px_14px_rgba(16,22,31,0.1)] transition-colors hover:bg-ph-yellow-mid"
        >
          Open PixelHive
        </Link>
      </div>
    </header>
  );
}
