import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";

const UserFavProductsComp = () => {
  return (
    <div>
      <div className="admin-content-text pb-4">Favorite Products</div>
      <Row className="justify-content-start">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </div>
  );
};

export default UserFavProductsComp;
