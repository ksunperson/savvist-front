import type { Metadata } from "next";
import ProductPageHeader from "./components/ProductPageHeader/ProductPageHeader";
import ProductList from "./components/ProductList/ProductList";

export const metadata: Metadata = {
  title: "Product"
}

export default function ProductPage() {
  return (
    <div>
      <ProductPageHeader />
      <ProductList />
    </div>
  )
}