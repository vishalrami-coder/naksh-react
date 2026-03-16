import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Industries from "../pages/Industries";
import ContactUs from "../pages/ContactUs";
import Products from "../pages/Product";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/products" element={<Products />} />


    </Routes>
  );
}

export default AppRoutes;