import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login"
}

import Login from "@/components/login/login";

export default function LoginPage() {
  return (
    <div>
      <Login />
    </div>
  )
}