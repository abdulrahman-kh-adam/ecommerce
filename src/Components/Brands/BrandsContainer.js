import React from "react";
import { Alert, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";

const BrandsContainer = ({ brandsList, loading }) => {
  return (
    <Row className="my-2 d-flex justify-content-start">
      {loading ? (
        <Spinner animation="border" role="status"></Spinner>
      ) : brandsList.data[0] ? (
        brandsList.data.map((brand, idx) => {
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
  );
};

export default BrandsContainer;
