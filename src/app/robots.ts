export const dynamic = "force-static";
export const revalidate = false;

export function GET() {
  const host = "https://www.trillema.com";

  const body = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${host}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}