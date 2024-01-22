import type { Metadata } from "next";
import "./globals.css";
import HeaderNavigation from "@/components/header/header-nav";

export const metadata: Metadata = {
  title: {
    template: "%s || savvist",
    default: "savvist"
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
    </html>
  )
}