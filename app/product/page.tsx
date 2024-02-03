import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product"
}

import ProductPageHeader from "@/components/product/components/ProductPageHeader";

export default function ProductPage() {
  return (
    <div>
      <ProductPageHeader />
    </div>
  )
}