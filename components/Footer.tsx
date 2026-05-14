import Link from "next/link";
import { HiveMark } from "@/components/Icon";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[rgba(23,26,32,0.08)] bg-ph-azure9">
      <div className="mx-auto flex max-w-[1380px] gap-[32px] px-6 pb-[41.6px] pt-[32px]">
        <div className="flex w-[923px] flex-col gap-[14.39px]">
          <Link href="/" className="flex items-center gap-[12.8px]">
            <span className="text-ph-accent">
              <HiveMark size={22} strokeWidth={1.75} />
            </span>
            <span className="font-manrope text-[16.8px] font-bold leading-[25.2px] tracking-[-0.336px] text-white">PixelHive</span>
          </Link>
          <p className="max-w-[335px] font-inter text-[14px] leading-[23.1px] text-white/[0.62]">
            Upload, enhance, proof, and deliver property photos in one workflow built for high-volume teams.
          </p>
        </div>

        <div className="flex w-[400px] flex-wrap items-center justify-end gap-x-[20px]">
          {["Home", "Features", "FAQ", "Privacy", "Terms"].map((label) => (
            <a key={label} href="#" className="font-inter text-[14px] font-semibold leading-[21px] text-white">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
