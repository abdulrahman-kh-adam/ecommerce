import React, { useEffect, useState } from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Utils/SearchCountResult";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../../Components/Utils/SideFilter";
import AllProductsContainer from "../../Components/Products/AllProductsContainer";
import Pagination from "../../Components/Utils/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getProductsPage } from "../../Redux/Products Slice/productsSlice";
import { getAllCategories } from "../../Redux/Categories Slice/CategoriesSlice";
import { getAllBrands } from "../../Redux/Brands Slice/brandsSlice";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsList = useSelector((state) => state.products.products);
  const categoriesList = useSelector((state) => state.categories.categories);
  const brandsList = useSelector((state) => state.brands.brands);
  const productsLoading = useSelector((state) => state.products.loading);
  const categoriesLoading = useSelector((state) => state.categories.loading);
  const brandsLoading = useSelector((state) => state.brands.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsPage(currentPage));
    dispatch(getAllCategories());
    dispatch(getAllBrands());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ minHeight: "700px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult
          title={`Showing ${
            productsList.data ? productsList.data.length : 0
          } Products...`}
        />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter
              categoriesList={categoriesList}
              brandsList={brandsList}
              categoriesLoading={categoriesLoading}
              brandsLoading={brandsLoading}
            />
          </Col>
          <Col sm="1" xs="1" md="1"></Col>
          <Col sm="9" xs="9" md="10" className="d-flex">
            <AllProductsContainer
              productsList={productsList}
              loading={productsLoading}
            />
          </Col>
        </Row>
        <Pagination
          pagination={
            productsList.meta
              ? productsList.meta.pagination
              : {
                  page: 1,
                  pageSize: 24,
                  pageCount: 1,
                  total: 0,
                }
          }
          changePage={changePage}
        />
      </Container>
    </div>
  );
};

export default Products;
