import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../images/sort.png";
import { Row } from "react-bootstrap";

const SearchCountResult = ({ title }) => {
  const handler = () => {};

  return (
    <Row>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <div className="sub-tile">{title}</div>
        <div className="search-count-text d-flex">
          <UnopDropdown
            onAppear={handler}
            onDisappearStart={handler}
            trigger={
              <p className="mx-1">
                <img
                  width="20px"
                  height="20px"
                  className="ms-1"
                  src={sort}
                  alt=""
                />
                Sort By
              </p>
            }
            delay={0}
            align="CENTER"
            hover
          >
            <div className="card-filter">
              <div className="border-bottom card-filter-item">Best Seller</div>
              <div className="border-bottom card-filter-item">Top Rated</div>
              <div className="border-bottom card-filter-item">
                Price: Low to High
              </div>
              <div className="border-bottom card-filter-item">
                Price: High to Low
              </div>
            </div>
          </UnopDropdown>
        </div>
      </div>
    </Row>
  );
};

export default SearchCountResult;
