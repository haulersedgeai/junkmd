/**
 * JunkMD+ Wordmark — v2 inline SVG/text hybrid.
 *
 * "JunkMD" rendered in Fraunces (CSS-controlled for crisp font rendering)
 * with a refined medical-cross "+" glyph as inline SVG positioned at the
 * upper-right of the "D" — reads as a clinical mark, not punctuation.
 *
 * Sizes:
 *  - lg: header use
 *  - sm: footer / compact contexts
 *  - mono: just the "+" inside a green-outlined ink circle (favicon, og:image, dense)
 */

import { cn } from "@/lib/utils";

interface Props {
  size?: "lg" | "sm" | "mono";
  variant?: "ink" | "paper"; // paper variant = light text for dark backgrounds
  className?: string;
}

const STROKE = "currentColor";

function CrossGlyph({ size = 16 }: { size?: number }) {
  // Vertical and horizontal equal-stroke cross in brand green.
  // Drawn as two thin rectangles, centered, designed to read as medical.
  const s = size;
  const t = Math.max(2, Math.round(s * 0.18)); // stroke thickness
  return (
    <svg
      viewBox={`0 0 ${s} ${s}`}
      width={s}
      height={s}
      aria-hidden="true"
      style={{ display: "inline-block" }}
    >
      {/* vertical bar */}
      <rect
        x={(s - t) / 2}
        y={s * 0.08}
        width={t}
        height={s * 0.84}
        rx={t * 0.2}
        fill="var(--brand)"
      />
      {/* horizontal bar */}
      <rect
        x={s * 0.08}
        y={(s - t) / 2}
        width={s * 0.84}
        height={t}
        rx={t * 0.2}
        fill="var(--brand)"
      />
    </svg>
  );
}

export function Wordmark({ size = "lg", variant = "ink", className }: Props) {
  const color = variant === "paper" ? "var(--paper)" : "var(--ink)";

  if (size === "mono") {
    return (
      <span
        aria-label="JunkMD+ mark"
        className={cn("inline-flex items-center justify-center", className)}
      >
        <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
          <circle cx="24" cy="24" r="22" fill={color} />
          <circle cx="24" cy="24" r="22" fill="none" stroke="var(--brand)" strokeWidth="2" />
          <rect x="21" y="11" width="6" height="26" rx="1.5" fill="var(--brand)" />
          <rect x="11" y="21" width="26" height="6" rx="1.5" fill="var(--brand)" />
        </svg>
      </span>
    );
  }

  const fontSize = size === "lg" ? "1.875rem" : "1.25rem";
  const crossPx = size === "lg" ? 14 : 10;
  const lineHeight = "1";

  return (
    <span
      aria-label="JunkMD+"
      className={cn("inline-flex items-baseline gap-0", className)}
      style={{
        fontFamily: "var(--font-fraunces), Georgia, serif",
        fontWeight: 700,
        fontSize,
        lineHeight,
        color,
        letterSpacing: "-0.025em",
        fontVariationSettings: "'opsz' 96, 'SOFT' 50",
      }}
    >
      <span>JunkMD</span>
      <span
        style={{
          display: "inline-flex",
          alignSelf: "flex-start",
          marginLeft: size === "lg" ? "2px" : "1px",
          marginTop: size === "lg" ? "1px" : "0px",
          lineHeight: 0,
        }}
        aria-hidden="true"
      >
        <CrossGlyph size={crossPx} />
      </span>
    </span>
  );
}
