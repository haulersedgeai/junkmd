/**
 * Wordmark — Geist 700 "JunkMD" + custom medical-cross "+" glyph.
 *
 * Sizes:
 *  - lg: header (~32px tall)
 *  - sm: footer (~22px)
 *  - mark: just the "+" inside a 1px ink-bordered circle
 */

import { cn } from "@/lib/utils";

interface Props {
  size?: "lg" | "sm" | "mark";
  variant?: "ink" | "paper"; // paper = white text for dark backgrounds
  className?: string;
}

function Cross({ size = 16, color = "var(--brand)" }: { size?: number; color?: string }) {
  // Two equal-weight rounded strokes in green — refined medical cross.
  const s = size;
  const t = Math.max(2, Math.round(s * 0.22)); // stroke thickness
  return (
    <svg
      viewBox={`0 0 ${s} ${s}`}
      width={s}
      height={s}
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <line
        x1={s / 2}
        y1={s * 0.1}
        x2={s / 2}
        y2={s * 0.9}
        stroke={color}
        strokeWidth={t}
        strokeLinecap="round"
      />
      <line
        x1={s * 0.1}
        y1={s / 2}
        x2={s * 0.9}
        y2={s / 2}
        stroke={color}
        strokeWidth={t}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark({ size = "lg", variant = "ink", className }: Props) {
  const color = variant === "paper" ? "#FFFFFF" : "var(--ink)";

  if (size === "mark") {
    return (
      <span
        aria-label="JunkMD+"
        className={cn("inline-flex items-center justify-center", className)}
      >
        <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
          <circle cx="20" cy="20" r="19" fill="none" stroke={color} strokeWidth="1" />
          <line x1="20" y1="11" x2="20" y2="29" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" />
          <line x1="11" y1="20" x2="29" y2="20" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  const isLg = size === "lg";
  const fontSize = isLg ? "26px" : "18px";
  const crossPx = isLg ? 13 : 9;
  const marginLeft = isLg ? "3px" : "2px";
  const marginTop = isLg ? "1px" : "0";

  return (
    <span
      aria-label="JunkMD+"
      className={cn("inline-flex items-start gap-0 leading-none", className)}
      style={{
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        fontWeight: 700,
        fontSize,
        color,
        letterSpacing: "-0.03em",
      }}
    >
      <span>JunkMD</span>
      <span
        style={{
          display: "inline-flex",
          marginLeft,
          marginTop,
          lineHeight: 0,
        }}
        aria-hidden="true"
      >
        <Cross size={crossPx} />
      </span>
    </span>
  );
}
