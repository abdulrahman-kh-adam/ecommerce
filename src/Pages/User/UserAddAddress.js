import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../Components/User/UserSideBar";
import UserAddAddressComp from "../../Components/User/UserAddAddressComp";

const UserAddAddress = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col xs="4" md="2">
          <UserSideBar />
        </Col>
        <Col xs="8" md="10">
          <UserAddAddressComp />
        </Col>
      </Row>
    </Container>
  );
};

export default UserAddAddress;
