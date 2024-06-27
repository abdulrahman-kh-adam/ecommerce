import React, { useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryById } from "../../Redux/Categories Slice/CategoriesSlice";
import { getBrandById } from "../../Redux/Brands Slice/brandsSlice";

const ProductDescription = ({ product, loading }) => {
  const currentCategory = useSelector(
    (state) => state.categories.currentCategory
  );
  const currentBrand = useSelector((state) => state.brands.currentBrand);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      dispatch(getCategoryById(product.main_category));
      dispatch(getBrandById(product.brand));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">
          {currentCategory.data
            ? currentCategory.data.attributes.name
            : "loading..."}
        </div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {loading ? (
              <Spinner animation="border" role="status"></Spinner>
            ) : (
              product.name
            )}
            <div className="cat-rate d-inline mx-3">
              {loading ? (
                <Spinner animation="border" role="status"></Spinner>
              ) : (
                product.rate
              )}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">Brand :</div>
          <div className="barnd-text d-inline mx-1">
            {currentBrand.data
              ? currentBrand.data.attributes.name
              : "loading..."}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {loading ? (
            <Spinner animation="border" role="status"></Spinner>
          ) : (
            product.colors.split(" ").map((color, idx) => {
              return (
                <div
                  className="color ms-2 border"
                  style={{ backgroundColor: `${color}` }}
                  key={idx}
                ></div>
              );
            })
          )}
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">Description :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {loading ? (
              <Spinner animation="border" role="status"></Spinner>
            ) : (
              product.description
            )}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">
            {loading ? (
              <Spinner animation="border" role="status"></Spinner>
            ) : (
              product.price
            )}
          </div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">
            Add To Cart
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDescription;
