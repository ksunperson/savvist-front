
import type { Metadata } from "next";
import "./globals.css";
import HeaderNavigation from "@/components/header/header-nav";
import Banner from "@/components/banner";

export const metadata: Metadata = {
  title: {
    template: "%s || savvist",
    default: "Loading..."
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
        <Banner />
        <HeaderNavigation />
        {children}
      </body>
    </html>
  )
}