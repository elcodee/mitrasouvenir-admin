import { Route, Routes, Navigate, useNavigationType } from "react-router-dom";
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
import Category from "./pages/category";
import AddCategory from "./pages/category/Add";
import EditCategory from "./pages/category/Edit";
import Login from "./pages/auth";
import { API } from "./server/endpoint";
import { useEffect, useState } from "react";

function App() {
  const [isLog, setIsLog] = useState<boolean>(false);
  const checkUser = async () => {
    const { user } = await API.auth.user();

    if(user){
      setIsLog(true);
    } else {
      setIsLog(false);
    }
  };


  useEffect(() => {
    checkUser();
  }, []);

    return (
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={isLog ? <Dashboard /> : <Login />} />
  
        {/* Call To Action */}
        <Route path="/call-to-action" element={isLog ? <CallToAction />  : <Login />} />
        <Route path="/call-to-action/edit/:name" element={isLog ? <EditCta />  : <Login />} />
  
        {/* Slide Show Carousel */}
        <Route path="/slide-show" element={isLog ? <SlideShow />  : <Login />} />
        <Route path="/slide-show/add" element={isLog ? <AddSlides />  : <Login />} />
        <Route path="/slide-show/edit" element={isLog ? <EditSlides />  : <Login />} />
  
        {/* Category */}
        <Route path="/category" element={isLog ? <Category />  : <Login />} />
        <Route path="/category/add" element={isLog ? <AddCategory />  : <Login />} />
        <Route path="/category/edit/:name" element={isLog ? <EditCategory />  : <Login />} />
  
        {/* Products */}
        <Route path="/product" element={isLog ? <Product />  : <Login />} />
        <Route path="/products" element={isLog ? <AllProduct />  : <Login />} />
        <Route path="/products/add" element={isLog ? <AddProduct />  : <Login />} />
        <Route path="/products/edit/:code" element={isLog ? <EditProduct />  : <Login />} />
  
        <Route path="/products/featured" element={isLog ? <FeaturedProduct />  : <Login />} />
      </Routes>
    )
  
}

export default App;
