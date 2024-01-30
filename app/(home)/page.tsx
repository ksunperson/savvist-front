import type { Metadata } from "next";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Home"
}

export default function HomePage() {
  return (
    <div>
      <Header />
    </div>
  )
}