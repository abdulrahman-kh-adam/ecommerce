import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Utils/SearchCountResult";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../../Components/Utils/SideFilter";
import ProductsContainer from "../../Components/Products/ProductsContainer";
import Pagination from "../../Components/Utils/Pagination";

const Products = () => {
  return (
    <div style={{ minHeight: "700px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title="Showing 400 Products..." />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="1" xs="1" md="1"></Col>
          <Col sm="9" xs="9" md="10" className="d-flex">
            <ProductsContainer />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default Products;
