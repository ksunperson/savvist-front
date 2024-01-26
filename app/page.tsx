import type { Metadata } from "next";
import ShopNowButton from "@/components/shop-now-button";
import HeaderTitle from "@/components/header/header-title";

export const metadata: Metadata = {
  title: "Home"
}

export default function HomePage() {
  return (
    <div>
      <HeaderTitle />
      <ShopNowButton />
    </div>
  )
}