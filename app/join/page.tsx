import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join"
}

import Join from "@/components/join/join";

export default function JoinPage() {
  return (
    <div>
      <Join />
    </div>
  )
}