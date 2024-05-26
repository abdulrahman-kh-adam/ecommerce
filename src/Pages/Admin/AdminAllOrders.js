import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllOrdersComp from "../../Components/Admin/AdminAllOrdersComp";
import Pagination from "../../Components/Utils/Pagination";

const AdminAllOrders = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col xs="4" md="2">
          <AdminSideBar />
        </Col>
        <Col xs="8" md="10">
          <AdminAllOrdersComp />
        </Col>
      </Row>
      <Pagination />
    </Container>
  );
};

export default AdminAllOrders;
