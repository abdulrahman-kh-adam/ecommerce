import React from "react";
import { Col, Row } from "react-bootstrap";

const ProductDescription = () => {
  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">Electronics :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            iPhone XR 128GB 4G LTE with FaceTime
            <div className="cat-rate d-inline mx-3">4.5</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">Brand :</div>
          <div className="barnd-text d-inline mx-1">Apple</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "#E52C2C" }}
          ></div>
          <div
            className="color ms-2 border "
            style={{ backgroundColor: "white" }}
          ></div>
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "black" }}
          ></div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">Description :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            The Apple iPhone XR is a result of intelligent engineering. It
            sports a huge 6.1inch HD screen that offers a cinematic viewing
            experience. Thanks to the high-performance Image Signal Processor,
            you are bound to witness unbelievable visual effects while watching
            a movie or playing a video game. Furthermore, the high-end A12
            bionic chip makes this smartphone perfect for your everyday tasks.
            It also features the robust Neural engine, which facilitates the
            simultaneous running of applications without a drop in the
            processing speed. An enormous storage capacity of 64GB makes every
            file appear small. This smartphone also boasts of a powerful rear
            camera that helps you to bring out the best of your photography
            skills. For selfies sessions, this iPhone is also integrated with
            the advanced TrueDepth camera that extends support to the highly
            accurate Face ID feature of this smartphone. This iPhone also
            features 4G LTE connectivity and Dual-SIM support to provide
            multiple channels of communication. With an in-built, Fast-charge
            compatible battery, this smartphone offers an incredible Talk time
            of up to 25 hours. Lastly, this iPhone sports an excellent white
            finish, which goes perfectly well with its sleek and stylish build.
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">
            1000 USD
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
