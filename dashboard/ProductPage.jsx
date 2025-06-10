import Breadcrumb from "./Breadcrumb";
import FilterSidebar from "./FilterSidebar";
import ProductHeader from "./ProductHeader";
import SideBarrs from "./SideBarrs";
import ProductsGrids from "./ProductGrids";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 max-w-screen">
      <ProductHeader />
      <Breadcrumb />
      
      <div className="flex max-w-full mx-auto">
        <SideBarrs />
        <ProductsGrids />
        <FilterSidebar />
      </div>
      
      {/* <Footer /> */}
    </div>
  );
};

export default ProductPage;