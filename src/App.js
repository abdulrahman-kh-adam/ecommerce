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
import Cart from "./Pages/Cart/Cart";
import PaymentMethod from "./Pages/Checkout/PaymentMethod";
import AdminAllProducts from "./Pages/Admin/AdminAllProducts";
import AdminAllOrders from "./Pages/Admin/AdminAllOrders";
import AdminOrderDetails from "./Pages/Admin/AdminOrderDetails";
import AdminAddBrand from "./Pages/Admin/AdminAddBrand";
import AdminAddCategory from "./Pages/Admin/AdminAddCategory";
import AdminAddSubcategory from "./Pages/Admin/AdminAddSubcategory";
import AdminAddProduct from "./Pages/Admin/AdminAddProduct";
import UserAllOrders from "./Pages/User/UserAllOrders";
import UserFavProducts from "./Pages/User/UserFavProducts";
import UserAllAdresses from "./Pages/User/UserAllAddresses";
import UserAddAdress from "./Pages/User/UserAddAddress";
import UserAddAddress from "./Pages/User/UserAddAddress";
import UserEditAddress from "./Pages/User/UserEditAddress";
import UserProfile from "./Pages/User/UserProfile";

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
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/paymentmethod" element={<PaymentMethod />} />
          <Route path="/admin/allproducts" element={<AdminAllProducts />} />
          <Route path="/admin/allorders" element={<AdminAllOrders />} />
          <Route path="/admin/order/:id" element={<AdminOrderDetails />} />
          <Route path="/admin/addbrand" element={<AdminAddBrand />} />
          <Route path="/admin/addcategory" element={<AdminAddCategory />} />
          <Route
            path="/admin/addsubcategory"
            element={<AdminAddSubcategory />}
          />
          <Route path="/admin/addproduct" element={<AdminAddProduct />} />
          <Route path="/user/allorders" element={<UserAllOrders />} />
          <Route path="/user/favoriteproducts" element={<UserFavProducts />} />
          <Route path="/user/addresses" element={<UserAllAdresses />} />
          <Route path="/user/addresses/add" element={<UserAddAddress />} />
          <Route path="/user/addresses/edit" element={<UserEditAddress />} />
          <Route path="/user/profile/:id" element={<UserProfile />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
