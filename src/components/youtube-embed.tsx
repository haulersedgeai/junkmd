export function YoutubeEmbed({ id, title }: { id: string; title?: string }) {
  return (
    <div
      className="relative aspect-video w-full overflow-hidden bg-ink border border-border"
      style={{ borderRadius: 14, boxShadow: "var(--shadow-md)" }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title ?? "JunkMD+ video"}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
