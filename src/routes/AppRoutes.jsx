import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Industries from "../pages/Industries";
import ContactUs from "../pages/ContactUs";
import Brand from "../pages/Brand";
import BrandDetails from "../pages/BrandDetails";
import BlogPage from "../pages/BlogPage";
import BlogDetails from "../pages/BlogDetails";
import CategoryPage from "../pages/CategoryPage";
import ThankyouPage from "../pages/Thankyou";
import Categories from "../pages/Categories";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/products" element={<Brand />} />
      <Route path="/products/*" element={<Categories />} />
      <Route path="/productsdetails/*" element={<BrandDetails />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/category" element={<BlogPage />} />
      <Route path="/thank-you" element={<ThankyouPage />} />
      <Route path="/thank-you-catalogue" element={<ThankyouPage />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
    </Routes>
  );
}

export default AppRoutes;