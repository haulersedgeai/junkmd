"use client";

// Catches errors thrown by the root layout itself, so it replaces that layout
// entirely and must supply its own <html>/<body>. Styles are inline on purpose:
// nothing here may depend on globals.css or the font variables the root layout
// sets up, since those are exactly what may have failed.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          background: "#FFFFFF",
          color: "#0A0A0A",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
          lineHeight: 1.6,
        }}
      >
        <main style={{ maxWidth: 480 }}>
          <h1 style={{ fontSize: 32, lineHeight: 1.15, margin: "0 0 12px" }}>
            Sorry — something went wrong
          </h1>
          <p style={{ margin: "0 0 24px", color: "#404040" }}>
            JunkMD+ hit an unexpected error. Try again, or head back home.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <button
              type="button"
              onClick={reset}
              style={{
                font: "inherit",
                fontWeight: 500,
                fontSize: 15,
                padding: "12px 22px",
                borderRadius: 6,
                border: "1px solid transparent",
                background: "#6BE01C",
                color: "#0A0A0A",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            {/* Plain anchor on purpose: the root layout has crashed, so a hard
                navigation gives a clean document instead of client-side routing
                back into the same broken tree. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              style={{
                font: "inherit",
                fontWeight: 500,
                fontSize: 15,
                padding: "12px 22px",
                borderRadius: 6,
                border: "1px solid #E5E5E2",
                color: "#0A0A0A",
                textDecoration: "none",
              }}
            >
              Back to Home
            </a>
          </div>
          {error.digest && (
            <p style={{ marginTop: 24, fontSize: 14, color: "#737373" }}>
              Reference: {error.digest}
            </p>
          )}
        </main>
      </body>
    </html>
  );
}
