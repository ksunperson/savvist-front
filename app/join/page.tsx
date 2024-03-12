import Join from "@/components/join/join";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회원가입"
}

export default function JoinPage() {
  return (
    <div>
      <Join />
    </div>
  )
}