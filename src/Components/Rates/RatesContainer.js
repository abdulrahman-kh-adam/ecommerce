import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import RateComment from "./RateComment";

const RatesContainer = () => {
  return (
    <Container className="rate-container">
      <Row className="mt-3">
        <Col className="d-flex mt-3">
          <div className="sub-tile d-inline p-1 ">Ratings</div>
          <img className="mt-2" src={rate} alt="" height="15px" width="15px" />
          <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
          <div className="rate-count d-inline p-1 pt-2">(160 Ratings)</div>
        </Col>
      </Row>
      <RateComment />
      <RateComment />
      <RateComment />
      <RateComment />
    </Container>
  );
};

export default RatesContainer;
