import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Category/HomeCategory";
import ProductsContainer from "../../Components/Products/ProductsContainer";
import Discount from "../../Components/Home/Discount";
import HomeBrands from "../../Components/Home/HomeBrands";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <HomeCategory />
      <ProductsContainer
        title="Best Seller"
        buttonText="More"
        path="/products"
      />
      <Discount />
      <ProductsContainer title="Top Rated" buttonText="More" path="/products" />
      <HomeBrands />
    </div>
  );
};

export default HomePage;
