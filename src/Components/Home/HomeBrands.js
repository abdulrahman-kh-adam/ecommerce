import React from "react";
import { Container, Row } from "react-bootstrap";
import SectionTitle from "../Utils/SectionTitle";
import BrandCard from "../Brands/BrandCard";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";

const HomeCategory = () => {
  return (
    <Container>
      <SectionTitle
        title="Featured Brands"
        buttonText="More"
        path="/allbrands"
      />
      <Row className="my-2 d-flex justify-content-between">
        <BrandCard img={brand1} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand3} />
      </Row>
    </Container>
  );
};

export default HomeCategory;
