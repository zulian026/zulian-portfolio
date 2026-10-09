const baseUrl = "https://www.zyandev.my.id";

const urls = [
  baseUrl,
  `${baseUrl}/about`,
  `${baseUrl}/work`,
  `${baseUrl}/playground`,
  `${baseUrl}/contact`,
  `${baseUrl}/work/color-pallett`,
  `${baseUrl}/work/resume-builder`,
  `${baseUrl}/work/isle-shell`,
];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
