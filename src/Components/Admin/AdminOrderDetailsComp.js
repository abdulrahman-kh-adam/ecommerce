import React from "react";
import CartItem from "../Cart/CartItem";
import { Col, Row } from "react-bootstrap";

const AdminOrderDetailsComp = () => {
  return (
    <div>
      <div className="admin-content-text">Order #1234 Details</div>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className=" d-flex">
          <div className="admin-content-text py-2">Client Details</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Name :
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            Abdulrahman Adam
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Phone Number :
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            0021125733974
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Email :
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            ahmed@gmail.com
          </div>
        </Col>
        <div className=" d-inline px-4 border text-center pt-2">
          Total: 999 USD
        </div>
        <div className="d-flex mt-2 justify-content-center">
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-1 px-2 w-50"
          >
            <option value="val">Order Status</option>
            <option value="val2">Order Confirmed</option>
            <option value="val2">Order Processing</option>
            <option value="val2">Out for Delivery</option>
            <option value="val2">Delivered</option>
            <option value="val2">Canceled</option>
          </select>
          <button className="btn-a px-3 d-inline mx-2 ">Save </button>
        </div>
      </Row>
    </div>
  );
};

export default AdminOrderDetailsComp;
