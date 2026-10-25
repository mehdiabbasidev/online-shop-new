import type { Metadata } from "next";
import "./globals.css";
import { iranSans , inter } from "@/configs/fonts";
import { Footer } from "./_components/sections/footer";
import { Header } from "./_components/sections/header";





const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "فروشگاه1111 درسمن",
    template: "%s",
  },
  description: "Darsman Shop description",
  openGraph: {
    type: "website",
    siteName: "Darsman Shop",
    title: "Darsman Shop",
    description: "Darsman Shop description",
    images: [
      {

        url: "/xxxxxx/og?title=Darsman%20Shop",
        width: 1200,
        height: 630,
        alt: "Darsman Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?title=Darsman%20Shop"],
  },
};





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${iranSans.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
