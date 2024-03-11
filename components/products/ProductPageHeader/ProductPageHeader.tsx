import NavTabs from "./NavTabs"
import ProductFilters from "./ProductFilters"

export default function ProductPageHeader() {
  return (
    <div className="flex justify-between pt-20">
      <NavTabs />
      <ProductFilters />
    </div>
  )
}