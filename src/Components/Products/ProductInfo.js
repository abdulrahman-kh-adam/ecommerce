import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductDescription from "./ProductDescription";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../Redux/Products Slice/productsSlice";

const ProductInfo = ({ id }) => {
  const productInfo = useSelector((state) => state.products.currentProduct);
  const loading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Row className="py-3">
        <Col lg="4">
          <ProductGallery
            images={
              productInfo ? productInfo.data.attributes.images.data : null
            }
            thumg={
              productInfo
                ? productInfo.data.attributes.thumb.data.attributes.url
                : null
            }
          />
        </Col>
        <Col lg="8">
          <ProductDescription
            product={productInfo ? productInfo.data.attributes : null}
            loading={loading}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProductInfo;
