import React from "react";
import { Col, Row } from "react-bootstrap";
import UserOrderCard from "./UserOrderCard";

const UserOrderItem = () => {
  return (
    <div className="user-order mt-2">
      <Row>
        <div className="py-2 order-title">Order #1234</div>
      </Row>
      <UserOrderCard />
      <UserOrderCard />
      <Row className="d-flex justify-content-between">
        <Col xs="6" className="">
          <div>
            <div className="d-inline">Status</div>
            <div className="d-inline mx-2 stat">Order Processing</div>
          </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">4000 USD</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserOrderItem;
