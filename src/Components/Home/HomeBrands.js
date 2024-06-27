import React, { useEffect } from "react";
import { Alert, Container, Row, Spinner } from "react-bootstrap";
import SectionTitle from "../Utils/SectionTitle";
import BrandCard from "../Brands/BrandCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../Redux/Brands Slice/brandsSlice";

const HomeBrands = () => {
  const brandsList = useSelector((state) => state.brands.brands);
  const loading = useSelector((state) => state.brands.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrands());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <SectionTitle
        title="Featured Brands"
        buttonText="More"
        path="/allbrands"
      />
      <Row className="my-2 d-flex justify-content-start">
        {loading ? (
          <Spinner animation="border" role="status" />
        ) : brandsList.data[0] ? (
          brandsList.data.slice(0, 6).map((brand, idx) => {
            return (
              <BrandCard
                img={`${process.env.REACT_APP_GENERAL_URL}${brand.attributes.image.data.attributes.url}`}
                key={idx}
              />
            );
          })
        ) : (
          <Alert variant="danger" style={{ textAlign: "center" }}>
            No brands found!
          </Alert>
        )}
      </Row>
    </Container>
  );
};

export default HomeBrands;
