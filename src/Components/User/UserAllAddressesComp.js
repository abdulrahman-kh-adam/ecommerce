import React from "react";
import UserAdressCard from "./UserAddressCard";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserAllAddressesComp = () => {
  return (
    <div>
      <div className="admin-content-text pb-2">All addresses</div>
      <UserAdressCard />
      <UserAdressCard />
      <UserAdressCard />
      <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/addresses/add" style={{ textDecoration: "none" }}>
            <button className="btn-add-address px-3">Add new address</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllAddressesComp;
