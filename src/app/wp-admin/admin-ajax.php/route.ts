// WordPress AJAX endpoint left over from the pre-migration site. Nothing on
// the new site serves it and nothing ever will — 410 Gone tells Google to drop
// it permanently instead of re-crawling it. Same pattern as the cdn-cgi
// email-protection handler.
//
// Note: Vercel's platform-level blocking of common WordPress paths may answer
// this request with a 403 before it ever reaches this function. That is also a
// fine outcome for crawlers; this handler is the belt-and-braces half.
export async function GET() {
  return new Response("Gone", {
    status: 410,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
