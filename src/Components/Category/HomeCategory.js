import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SectionTitle from "../Utils/SectionTitle";
import CategoryCard from "./CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/actions/categoriesAction";
import Loading from "../Utils/Loading";

const HomeCategory = () => {
  const dispatch = useDispatch();

  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const categories = useSelector((state) => state.allCategories.categories);
  const loading = useSelector((state) => state.allCategories.loading);
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF"];

  return (
    <Container>
      <SectionTitle
        title="Categories"
        buttonText="More"
        path="/allcategories"
      />
      <Row className="my-2 d-flex justify-content-between">
        {!loading ? (
          categories.data ? (
            categories.data.slice(0, 5).map((item, idx) => {
              return (
                <CategoryCard
                  background={colors[idx]}
                  title={item.name}
                  img={item.image}
                  key={idx}
                />
              );
            })
          ) : (
            <h4>There are no categories exist</h4>
          )
        ) : (
          <Loading />
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
