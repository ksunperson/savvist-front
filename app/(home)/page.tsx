import HomePage from "@/components/homepage/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home"
}

export default function Page() {
  return (
    <div>
      <HomePage />
    </div>
  )
}