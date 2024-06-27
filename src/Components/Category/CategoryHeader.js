import React, { useEffect } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/Categories Slice/CategoriesSlice";

const CategoryHeader = () => {
  const categoriesList = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.categories.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cat-header mb-3">
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
            <div className="cat-text-header">All</div>
            {loading ? (
              <Spinner animation="border" role="status"></Spinner>
            ) : categoriesList.data ? (
              categoriesList.data.map((category, idx) => {
                return (
                  <div className="cat-text-header">
                    {category.attributes.name}
                  </div>
                );
              })
            ) : (
              <Alert variant="danger" style={{ textAlign: "center" }}>
                No categories found!
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
