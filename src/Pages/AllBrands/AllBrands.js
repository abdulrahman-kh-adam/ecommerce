import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BrandsContainer from "../../Components/Brands/BrandsContainer";
import SectionTitle from "../../Components/Utils/SectionTitle";
import Pagination from "../../Components/Utils/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getBrandsPage } from "../../Redux/Brands Slice/brandsSlice";

const AllBrands = () => {
  const brandsList = useSelector((state) => state.brands.brands);
  const loading = useSelector((state) => state.brands.loading);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getBrandsPage(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <SectionTitle title="All Brands" path="/allbrands" />
      <BrandsContainer brandsList={brandsList} loading={loading} />
      <Pagination
        pagination={
          brandsList.meta
            ? brandsList.meta.pagination
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

export default AllBrands;
