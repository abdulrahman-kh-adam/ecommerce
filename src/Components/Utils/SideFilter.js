import React from "react";
import { Alert, Row, Spinner } from "react-bootstrap";

const SideFilter = ({
  categoriesList,
  brandsList,
  categoriesLoading,
  brandsLoading,
}) => {
  return (
    <div className="mt-3">
      <Row>
        <div className="filter-title">Category</div>
        <div className="d-flex flex-column mt-2">
          <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="filter-sub ms-2 ">All</div>
          </div>
          {categoriesLoading ? (
            <Spinner animation="border" role="status"></Spinner>
          ) : categoriesList.data[0] ? (
            categoriesList.data.map((category, idx) => {
              return (
                <div className="d-flex mt-2">
                  <input type="checkbox" value={category.id} />
                  <div className="filter-sub ms-2" key={idx}>
                    {category.attributes.name}
                  </div>
                </div>
              );
            })
          ) : (
            <Alert variant="danger" style={{ textAlign: "center" }}>
              No categories found!
            </Alert>
          )}
        </div>

        <div className="filter-title mt-3">Brand</div>
        <div className="d-flex flex-column mt-2">
          <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="filter-sub ms-2 ">All</div>
          </div>
          {brandsLoading ? (
            <Spinner animation="border" role="status"></Spinner>
          ) : brandsList.data[0] ? (
            brandsList.data.map((brand, idx) => {
              return (
                <div className="d-flex mt-2">
                  <input type="checkbox" value={brand.id} />
                  <div className="filter-sub ms-2" key={idx}>
                    {brand.attributes.name}
                  </div>
                </div>
              );
            })
          ) : (
            <Alert variant="danger" style={{ textAlign: "center" }}>
              No categories found!
            </Alert>
          )}
        </div>

        <div className="filter-title my-3">Price</div>
        <div className="d-flex">
          <p className="filter-sub my-2">From:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">To:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
