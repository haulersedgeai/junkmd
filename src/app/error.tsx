"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="container-x section">
      <div className="max-w-xl">
        <span className="label">Something went wrong</span>
        <h1 className="display mt-3 mb-4">Sorry — that didn&apos;t load</h1>
        <p className="text-lg text-ink-soft mb-7">
          We hit an unexpected error on our end. Try again, or head back home.
        </p>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={reset} className="btn btn-accent btn-lg">
            Try again
          </button>
          <Link href="/" className="btn btn-outline btn-lg">
            Back to Home
          </Link>
        </div>
        {error.digest && (
          <p className="text-sm text-muted mt-6 font-mono">
            Reference: {error.digest}
          </p>
        )}
      </div>
    </section>
  );
}
