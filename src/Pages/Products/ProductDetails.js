import React, { useEffect, useState } from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductInfo from "../../Components/Products/ProductInfo";
import RatesContainer from "../../Components/Rates/RatesContainer";
import RatePost from "../../Components/Rates/RatePost";
import ProductsContainer from "../../Components/Products/ProductsContainer";
import Pagination from "../../Components/Utils/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../Redux/Products Slice/productsSlice";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const path = useLocation().pathname;
  const pathParts = path.split("/");
  const currentId = pathParts[pathParts.length - 1];

  return (
    <div>
      <CategoryHeader />
      <Container>
        <ProductInfo id={currentId} />
        <RatePost id={currentId} />
        <RatesContainer id={currentId} />
        <Pagination id={currentId} />
        <ProductsContainer title="Products you might like" />
      </Container>
    </div>
  );
};

export default ProductDetails;
