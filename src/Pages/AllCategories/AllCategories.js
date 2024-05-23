import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import SectionTitle from "../../Components/Utils/SectionTitle";
import { Container } from "react-bootstrap";
import Pagination from "../../Components/Utils/Pagination";

const AllCategories = () => {
  return (
    <Container>
      <SectionTitle title="All Categories" path="/allcategories" />
      <CategoryContainer />
      <Pagination />
    </Container>
  );
};

export default AllCategories;
