import type { ReactElement, SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & { size?: number };
export type IconComponent = (props: IconProps) => ReactElement;

function base({ size = 24, strokeWidth, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth ?? 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

/* PixelHive brand mark — honeycomb hexagon */
export function HiveMark(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5Z" />
      <path d="M12 7 16 9.5v5L12 17l-4-2.5v-5L12 7Z" fill="currentColor" fillOpacity="0.18" />
    </svg>
  );
}

/* Upload — cloud + upward arrow */
export function UploadIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6.5 17.5a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.7-1.4A4 4 0 0 1 17 17.5" />
      <path d="M12 21V11.5" />
      <path d="m8.5 14.5 3.5-3.5 3.5 3.5" />
    </svg>
  );
}

/* AI Edit — sparkle (1 large + 2 small) */
export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5 13.4 8 18 9.4 13.4 10.8 12 15.4 10.6 10.8 6 9.4 10.6 8 12 3.5Z" />
      <path d="M18 14.5v3" />
      <path d="M16.5 16h3" />
      <path d="M6 18.5v2" />
      <path d="M5 19.5h2" />
    </svg>
  );
}

/* Sequence — clean offset card stack */
export function SequenceIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="8" width="13" height="13" rx="2.5" />
      <rect x="7.5" y="3" width="13" height="13" rx="2.5" opacity="0.45" />
    </svg>
  );
}

/* Delivery — paper plane */
export function DeliveryIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Z" />
      <path d="m10 13 11-10" />
    </svg>
  );
}

/* Ingest — tray + down arrow */
export function IngestIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 14.5v3a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-3" />
      <path d="M3.5 14.5h4.8l1.4 2h4.6l1.4-2h4.8" />
      <path d="M12 3v8.5" />
      <path d="m8.5 8 3.5 3.5L15.5 8" />
    </svg>
  );
}

/* Review — eye + dot */
export function ReviewIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.75" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Automation — workflow nodes */
export function AutomationIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="5.5" cy="6" r="2" />
      <circle cx="18.5" cy="6" r="2" />
      <circle cx="5.5" cy="18" r="2" />
      <circle cx="18.5" cy="18" r="2" />
      <path d="M7.5 6h9" />
      <path d="M5.5 8v8" />
      <path d="M18.5 8v8" />
      <path d="M7.5 18h9" />
    </svg>
  );
}

/* Bee — small decorative for trails */
export function BeeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <ellipse cx="12" cy="13" rx="5" ry="6.5" />
      <path d="M7 11.5h10" />
      <path d="M7 15.5h10" />
      <path d="M9 7c-1.5-1.5-3.5-2-4.5-1S5 9 6.5 9.5" />
      <path d="M15 7c1.5-1.5 3.5-2 4.5-1S19 9 17.5 9.5" />
      <path d="M12 6.5V4" />
    </svg>
  );
}
