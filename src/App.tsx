import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Product from "./pages/product";
import AddProduct from "./pages/product/all_product/Add";
import AllProduct from "./pages/product/all_product";
import EditProduct from "./pages/product/all_product/Edit";
import FeaturedProduct from "./pages/product/featured";
import SlideShow from "./pages/slide_show";
import AddSlides from "./pages/slide_show/Add";
import EditSlides from "./pages/slide_show/Edit";
import CallToAction from "./pages/call_action";
import EditCta from "./pages/call_action/Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      {/* Call To Action */}
      <Route path="/call-to-action" element={<CallToAction />} />
      <Route path="/call-to-action/edit" element={<EditCta />} />

      {/* Slide Show Carousel */}
      <Route path="/slide-show" element={<SlideShow />} />
      <Route path="/slide-show/add" element={<AddSlides />} />
      <Route path="/slide-show/edit" element={<EditSlides />} />

      {/* Products */}
      <Route path="/product" element={<Product />} />
      <Route path="/products" element={<AllProduct />} />
      <Route path="/products/add" element={<AddProduct />} />
      <Route path="/products/edit" element={<EditProduct />} />

      <Route path="/products/featured" element={<FeaturedProduct />} />

    </Routes>
  );
}

export default App;
