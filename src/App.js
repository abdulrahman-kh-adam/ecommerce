import Footer from "./Components/Utils/Footer";
import NavBarLogin from "./Components/Utils/NavBarLogin";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import ErrorPage from "./Pages/Error/ErrorPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategories from "./Pages/AllCategories/AllCategories";
import AllBrands from "./Pages/AllBrands/AllBrands";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/Products/ProductDetails";

function App() {
  return (
    <div className="font">
      <BrowserRouter>
        <NavBarLogin />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategories" element={<AllCategories />} />
          <Route path="/allbrands" element={<AllBrands />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
