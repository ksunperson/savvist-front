import NavTabs from "./NavTabs"
import ProductFilters from "./ProductFilters"

export default function ProductPageHeader() {
  return (
    <div className="flex justify-between custom-font pt-20">
      <NavTabs />
      <ProductFilters />
    </div>
  )
}