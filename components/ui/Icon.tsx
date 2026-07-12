import type { CSSProperties } from "react";

/**
 * One consistent outline icon set (Lucide-style, 1.6 stroke), reproduced as
 * inline SVG to match the approved design exactly. No emoji, single style
 * (brief §06 / §22).
 */
const PATHS: Record<string, string> = {
  sprout:
    '<path d="M12 22V11"/><path d="M12 12C11 8 8 5.5 4 5.5c0 4 3 6.5 8 6.5Z"/><path d="M12 10c1-3 4-5.5 8-5.5 0 3.5-3.5 5.5-8 5.5Z"/>',
  medical: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
  barn: '<path d="M3 10l9-6 9 6"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/>',
  greenhouse: '<path d="M4 20V9l8-5 8 5v11"/><path d="M12 4v16M4 9h16"/>',
  snowflake:
    '<path d="M12 2v20M3 7l18 10M21 7L3 17"/><path d="M9 4l3 2 3-2M9 20l3-2 3 2"/>',
  truck:
    '<path d="M3 6h11v10H3z"/><path d="M14 9h4l3 3v4h-7z"/><circle cx="7" cy="18.5" r="1.8"/><circle cx="17" cy="18.5" r="1.8"/>',
  shield: '<path d="M12 3l7 3v5c0 4-3 7.5-7 8.5C8 18.5 5 15 5 11V6z"/><path d="M9 12l2 2 4-4"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-5"/>',
  gear:
    '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',
  trending: '<path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  boxes: '<path d="M3 8l9-4 9 4v8l-9 4-9-4z"/><path d="M3 8l9 4 9-4M12 12v8"/>',
  handshake: '<path d="M5 13l4 4 2-2 2 2 4-4"/><path d="M2 9h4l3 3M22 9h-4l-3 3"/>',
  pin: '<path d="M12 21s-6-5.5-6-10a6 6 0 1 1 12 0c0 4.5-6 10-6 10Z"/><circle cx="12" cy="11" r="2.4"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  phone:
    '<path d="M4 4h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 2 6a2 2 0 0 1 2-2Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  mapPin: '<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
};

interface IconProps {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
}

export function Icon({
  name,
  size = 26,
  strokeWidth = 1.6,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: PATHS[name] ?? "" }}
    />
  );
}

/** Small right-arrow used across CTAs. */
export function Arrow({ size = 16, strokeWidth = 1.9 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
