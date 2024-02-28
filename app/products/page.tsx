import type { Metadata } from "next";
import ProductPageHeader from "../../components/products/ProductPageHeader/ProductPageHeader";
import ProductList from "../../components/products/ProductList/ProductList";

export const metadata: Metadata = {
  title: "Products"
}

export default function ProductsPage() {
  return (
    <div>
      <ProductPageHeader />
      <ProductList />
    </div>
  )
}