import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProductsComp from "../../Components/Admin/AdminAllProductsComp";
import Pagination from "../../Components/Utils/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getProductsPage } from "../../Redux/Products Slice/productsSlice";

const AdminAllProducts = () => {
  const productsList = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProductsPage(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Row className="py-3">
        <Col xs="4" md="2">
          <AdminSideBar />
        </Col>
        <Col xs="8" md="10">
          <AdminAllProductsComp
            products={productsList.data}
            loading={loading}
          />
        </Col>
      </Row>
      <Pagination
        pagination={productsList.meta.pagination}
        changePage={changePage}
      />
    </Container>
  );
};

export default AdminAllProducts;
