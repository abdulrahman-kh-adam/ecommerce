import React from "react";
import CategoryCard from "./CategoryCard";
import { Row, Spinner } from "react-bootstrap";

const CategoryContainer = ({ categoriesList, loading }) => {
  return (
    <Row className="my-2 d-flex justify-content-between">
      {loading ? (
        <Spinner animation="border" role="status"></Spinner>
      ) : categoriesList.data ? (
        categoriesList.data.map((category, idx) => {
          return (
            <CategoryCard
              title={category.attributes.name}
              img={`${process.env.REACT_APP_GENERAL_URL}${category.attributes.image.data.attributes.url}`}
              background={category.attributes.color}
              key={idx}
            />
          );
        })
      ) : (
        "No categories found!"
      )}
    </Row>
  );
};

export default CategoryContainer;
