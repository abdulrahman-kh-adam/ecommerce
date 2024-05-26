import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProductsComp from "../../Components/Admin/AdminAllProductsComp";
import Pagination from "../../Components/Utils/Pagination";

const AdminAllProducts = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col xs="4" md="2">
          <AdminSideBar />
        </Col>
        <Col xs="8" md="10">
          <AdminAllProductsComp />
        </Col>
      </Row>
      <Pagination />
    </Container>
  );
};

export default AdminAllProducts;
