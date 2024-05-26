import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../Components/User/UserSideBar";
import UserAllOrdersComp from "../../Components/User/UserAllOrdersComp";
import Pagination from "../../Components/Utils/Pagination";

const UserAllOrders = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col xs="4" md="2">
          <UserSideBar />
        </Col>
        <Col xs="8" md="10">
          <UserAllOrdersComp />
        </Col>
      </Row>
      <Pagination />
    </Container>
  );
};

export default UserAllOrders;
