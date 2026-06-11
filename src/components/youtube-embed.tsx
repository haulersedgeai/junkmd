"use client";

import { useState } from "react";

type Props = {
  videoId: string;
  title: string;
};

export function YoutubeEmbed({ videoId, title }: Props) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embed = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;

  return (
    <div
      className="relative aspect-video w-full overflow-hidden bg-ink border border-border"
      style={{ borderRadius: 14, boxShadow: "var(--shadow-md)" }}
    >
      {playing ? (
        <iframe
          src={embed}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 w-full h-full p-0 border-0 cursor-pointer"
        >
          <img
            src={thumb}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%)" }}
          >
            <span
              className="flex items-center justify-center transition-transform group-hover:scale-110"
              style={{
                width: 84,
                height: 84,
                borderRadius: "9999px",
                background: "var(--brand-green)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
              }}
            >
              <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5L8 5.5z" fill="white" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
