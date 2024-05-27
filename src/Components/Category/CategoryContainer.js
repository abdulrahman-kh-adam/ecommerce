import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/actions/categoriesAction";
import Loading from "../Utils/Loading";

const CategoryContainer = () => {
  const dispatch = useDispatch();

  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const categories = useSelector((state) => state.allCategories.categories);
  const loading = useSelector((state) => state.allCategories.loading);
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FF6262",
  ];
  return (
    <Row className="my-2 d-flex justify-content-between">
      {!loading ? (
        categories.data ? (
          categories.data.map((item, idx) => {
            return (
              <CategoryCard
                background={colors[Math.floor(Math.random() * 5) + 1]}
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
  );
};

export default CategoryContainer;
