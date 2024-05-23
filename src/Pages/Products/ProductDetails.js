import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductInfo from "../../Components/Products/ProductInfo";
import RatesContainer from "../../Components/Rates/RatesContainer";
import RatePost from "../../Components/Rates/RatePost";
import ProductsContainer from "../../Components/Products/ProductsContainer";
import Pagination from "../../Components/Utils/Pagination";

const ProductDetails = () => {
  return (
    <div>
      <CategoryHeader />
      <Container>
        <ProductInfo />
        <RatePost />
        <RatesContainer />
        <Pagination />
        <ProductsContainer title="Products you might like" />
      </Container>
    </div>
  );
};

export default ProductDetails;
