import React, { useEffect, useState } from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import SectionTitle from "../../Components/Utils/SectionTitle";
import { Container } from "react-bootstrap";
import Pagination from "../../Components/Utils/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesPage } from "../../Redux/Categories Slice/CategoriesSlice";

const AllCategories = () => {
  const categoriesList = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.categories.loading);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getCategoriesPage(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <SectionTitle title="All Categories" path="/allcategories" />
      <CategoryContainer categoriesList={categoriesList} loading={loading} />
      <Pagination
        pagination={
          categoriesList.meta
            ? categoriesList.meta.pagination
            : {
                page: 1,
                pageSize: 25,
                pageCount: 1,
                total: 0,
              }
        }
        changePage={changePage}
      />
    </Container>
  );
};

export default AllCategories;
