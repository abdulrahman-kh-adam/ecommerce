import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CategoryHeader = () => {
  return (
    <div class="cat-header mb-3">
      <Container>
        <Row>
          <Col
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              padding: "0",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div class="cat-text-header">All</div>
            <div class="cat-text-header">Electronics</div>
            <div class="cat-text-header">Clothes</div>
            <div class="cat-text-header">Games</div>
            <div class="cat-text-header">Phones</div>
            <div class="cat-text-header">Children</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
