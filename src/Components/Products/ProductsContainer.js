import React from "react";
import { Container, Row } from "react-bootstrap";
import SectionTitle from "../Utils/SectionTitle";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ title, buttonText, path }) => {
  return (
    <Container className="mt-4">
      <SectionTitle title={title} buttonText={buttonText} path={path} />
      <Row className="my-2 d-flex justify-content-between ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default ProductsContainer;
