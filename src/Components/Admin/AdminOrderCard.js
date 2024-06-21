import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminOrderCard = () => {
  return (
    <Col sm="12">
      <div className="w-100 cart-item-body">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <Link
              to="/admin/order/23"
              className="my-2 px-1 d-flex"
              style={{ textDecoration: "none" }}
            >
              <div className="d-inline pt-2 barnd-text">Order #12345</div>
            </Link>
            <div className="d-inline pt-2 cat-text">Delete</div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">No of items: 5</div>
          </Col>
        </Row>

        <Row className="justify-content-between mt-5">
          <Col sm="12" className=" d-flex flex-row justify-content-end">
            <div className="cat-title pt-1 d-inline me-2">Total:</div>
            <div className="d-inline pt-1 barnd-text">9999 USD</div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default AdminOrderCard;
