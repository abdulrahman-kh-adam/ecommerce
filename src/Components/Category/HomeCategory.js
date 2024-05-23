import React from "react";
import { Container, Row } from "react-bootstrap";
import SectionTitle from "../Utils/SectionTitle";
import CategoryCard from "./CategoryCard";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";

const HomeCategory = () => {
  return (
    <Container>
      <SectionTitle
        title="Categories"
        buttonText="More"
        path="/allcategories"
      />
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard title="Electronics" img={clothe} background="#f4dbd5" />
        <CategoryCard title="Electronics" img={cat2} background="#f4dbd5" />
        <CategoryCard title="Electronics" img={labtop} background="#f4dbd5" />
        <CategoryCard title="Electronics" img={sale} background="#f4dbd5" />
        <CategoryCard title="Electronics" img={pic} background="#f4dbd5" />
      </Row>
    </Container>
  );
};

export default HomeCategory;
