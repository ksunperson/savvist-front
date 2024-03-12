import Login from "@/components/login/Login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인"
}

export default function LoginPage() {
  return (
    <div>
      <Login />
    </div>
  )
}