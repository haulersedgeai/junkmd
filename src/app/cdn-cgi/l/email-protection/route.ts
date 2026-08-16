// Cloudflare email-obfuscation artifact left over from the WordPress site.
// The new site is not behind Cloudflare, so this path has no destination and
// never will — 410 Gone tells Google to drop it permanently instead of
// re-crawling it as a soft 404.
export async function GET() {
  return new Response("Gone", {
    status: 410,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
