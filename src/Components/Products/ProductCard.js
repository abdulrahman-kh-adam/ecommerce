import React from "react";
import { Card, Col } from "react-bootstrap";
import favoff from "../../images/fav-off.png";
import rateimg from "../../images/rate.png";
import { NavLink } from "react-router-dom";

const ProductCard = ({ id, img, name, price, rate }) => {
  return (
    <Col xs="12" sm="12" md="6" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        <NavLink to={`/product/${id}`} style={{ textDecoration: "none" }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={img} />
        </NavLink>
        <div className="d-flex justify-content-end mx-2">
          <img
            src={favoff}
            alt=""
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
            }}
          />
        </div>
        <Card.Body>
          <NavLink
            to={`/product/${id}`}
            style={{ textDecoration: "none", color: "#272727" }}
          >
            <Card.Title>
              <div className="card-title">{name}</div>
            </Card.Title>
          </NavLink>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <div className="card-price">{price}</div>
                <div className="card-currency mx-1">USD</div>
              </div>
              <div className="d-flex">
                <img
                  className=""
                  src={rateimg}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">{rate}</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
