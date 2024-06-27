import React from "react";
import { Alert, Container, Row, Spinner } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ productsList, loading }) => {
  return (
    <Container className="mt-4">
      <Row className="my-2 d-flex justify-content-start ">
        {loading ? (
          <Spinner animation="border" role="status"></Spinner>
        ) : productsList.data[0] ? (
          productsList.data.map((product, idx) => {
            return (
              <ProductCard
                id={product.id}
                name={product.attributes.name}
                img={`${process.env.REACT_APP_GENERAL_URL}${product.attributes.thumb.data.attributes.url}`}
                price={product.attributes.price}
                rate={product.attributes.rate}
                key={idx}
              />
            );
          })
        ) : (
          <Alert variant="danger">No products found!</Alert>
        )}
      </Row>
    </Container>
  );
};

export default ProductsContainer;
