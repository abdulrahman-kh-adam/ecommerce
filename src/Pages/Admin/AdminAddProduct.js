import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddProductComp from "../../Components/Admin/AdminAddProductComp";

const AdminAddProduct = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col xs="4" md="2">
          <AdminSideBar />
        </Col>
        <Col xs="8" md="10">
          <AdminAddProductComp />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddProduct;
