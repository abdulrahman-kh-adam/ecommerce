import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../Components/User/UserSideBar";
import Pagination from "../../Components/Utils/Pagination";
import UserFavProductsComp from "../../Components/User/UserFavProductsComp";

const UserFavProducts = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col xs="4" md="2">
          <UserSideBar />
        </Col>
        <Col xs="8" md="10">
          <UserFavProductsComp />
        </Col>
      </Row>
      <Pagination />
    </Container>
  );
};

export default UserFavProducts;
