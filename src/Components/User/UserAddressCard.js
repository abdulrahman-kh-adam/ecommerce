import React from "react";
import { Col, Row } from "react-bootstrap";
import deleteicon from "../../images/delete.png";
import { Link } from "react-router-dom";

const UserAddressCard = () => {
  return (
    <div className="user-address-card my-3 px-2">
      <Row className="d-flex justify-content-between  ">
        <Col xs="1">
          <div className="mt-3">Home</div>
        </Col>
        <Col xs="4" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <div className="d-flex mx-2">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <Link
                to="/user/addresses/edit"
                style={{ textDecoration: "none" }}
              >
                <p className="item-delete-edit">Edit</p>
              </Link>
            </div>
            <div className="d-flex ">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit">Delete</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontSize: "14px",
            }}
          >
            123 Street St. Area 51
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontSize: "16px",
            }}
          >
            Phone Number :
          </div>

          <div
            style={{
              color: "#979797",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            0021313432423
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddressCard;
