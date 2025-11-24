import type { Metadata } from "next";
import "./globals.css";
import { iranSans , inter } from "@/configs/fonts";
import { Footer } from "./_components/sections/footer";
import { Header } from "./_components/sections/header";

export const metadata: Metadata = {
  title: "فروشگاه درسمن",
  description: "بهترین فروشگاه آنلاین ایران",
  keywords:"",
  icons:"/images/logo/favicon.ico",
  robots:"noindex, nofollow"
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
