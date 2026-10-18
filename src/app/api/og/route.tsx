//  app/api/og/route.tsx


import { ImageResponse } from "next/og";

export const runtime = "edge";

function uint8ToBase64(bytes: Uint8Array) {
  let binary = "";
  const len = bytes.length;
  for (let i = 0; i < len; i++) 
    binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

async function fetchAsDataUrl(url: string) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (OG)" },
  });

  if (!res.ok) throw new Error(`Image fetch failed: ${res.status} ${url}`);

  const contentType = res.headers.get("content-type") || "image/png";
  const arrayBuffer = await res.arrayBuffer();
  const base64 = uint8ToBase64(new Uint8Array(arrayBuffer));
  return `data:${contentType};base64,${base64}`;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") ?? "My Site";
    const imageUrl = searchParams.get("image"); 

    let bgDataUrl: string | null = null;
    if (imageUrl) {
      try {
        bgDataUrl = await fetchAsDataUrl(imageUrl);
      } catch (e) {
        bgDataUrl = null;
      }
    }

    return new ImageResponse(
      (
        <div
          style={{
            width: 1200,
            height: 630,
            display: "flex",
            position: "relative",
            backgroundColor: "#ffffff",
            fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
          }}
        >
          {bgDataUrl ? (
            <img
              alt=""
              src={bgDataUrl}
              width={1200}
              height={630}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "1200px",
                height: "630px",
                objectFit: "cover",
              }}
            />
          ) : null}

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "1200px",
              height: "630px",
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 100%)",
            }}
          />

          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: 64,
              width: "100%",
              height: "100%",
              color: "white",
            }}
          >
            <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
              {title}
            </div>
            <div style={{ marginTop: 18, fontSize: 28, opacity: 0.9 }}>
              darsman.com
            </div>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  } catch (err: any) {
    return new Response(`OG ERROR: ${err?.message ?? String(err)}`, {
      status: 500,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }
}
