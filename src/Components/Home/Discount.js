import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import laptops from "../../images/laptops.png";

const Discount = () => {
  return (
    <Container>
      <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
        <Col sm="6">
          <div className="discount-title">Save Up To 70% On Laptops!</div>
        </Col>
        <Col sm="6">
          <img className="dicount-img" src={laptops} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Discount;
