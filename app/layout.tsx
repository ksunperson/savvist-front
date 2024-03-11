
import type { Metadata } from "next";
import "./globals.css";
import HeaderNavigation from "@/components/header/HeaderNav";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    template: "%s || savvist",
    default: "Loading..."
  }
}
declare global {
  interface Window {
    daum: any;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <HeaderNavigation />
        {children}
      </body>
      <Script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" />
    </html>
  )
}