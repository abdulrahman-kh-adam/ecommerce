import React from "react";
import { Row } from "react-bootstrap";
import UserOrderItem from "./UserOrderItem";

const UserAllOrdersComp = () => {
  return (
    <div>
      <div className="admin-content-text pb-2">Welcome Mohammed</div>
      <Row className="justify-content-between">
        <UserOrderItem />
        <UserOrderItem />
        <UserOrderItem />
      </Row>
    </div>
  );
};

export default UserAllOrdersComp;
