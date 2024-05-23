import React from "react";
import { Container } from "react-bootstrap";
import BrandsContainer from "../../Components/Brands/BrandsContainer";
import SectionTitle from "../../Components/Utils/SectionTitle";
import Pagination from "../../Components/Utils/Pagination";

const AllBrands = () => {
  return (
    <Container>
      <SectionTitle title="All Brands" />
      <BrandsContainer />
      <Pagination />
    </Container>
  );
};

export default AllBrands;
