import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SectionTitle from "../Utils/SectionTitle";
import CategoryCard from "./CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/Categories Slice/CategoriesSlice";

const HomeCategory = () => {
  const categoriesList = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.categories.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <SectionTitle
        title="Categories"
        buttonText="More"
        path="/allcategories"
      />
      <Row className="my-2 d-flex justify-content-start">
        {loading ? (
          <Spinner animation="border" role="status"></Spinner>
        ) : categoriesList.data ? (
          categoriesList.data.slice(0, 6).map((category, idx) => {
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
    </Container>
  );
};

export default HomeCategory;
