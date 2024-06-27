import React, { useEffect } from "react";
import { Alert, Container, Row, Spinner } from "react-bootstrap";
import SectionTitle from "../Utils/SectionTitle";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Products Slice/productsSlice";

const ProductsContainer = ({ title, buttonText, path }) => {
  const productsList = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="mt-4">
      <SectionTitle title={title} buttonText={buttonText} path={path} />
      <Row className="my-2 d-flex justify-content-between ">
        {loading ? (
          <Spinner animation="border" role="status"></Spinner>
        ) : productsList.data ? (
          productsList.data.slice(0, 4).map((product, idx) => {
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
