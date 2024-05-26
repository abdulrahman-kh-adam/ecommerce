import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";

const Cart = () => {
  return (
    <Container style={{ minHeight: "676px" }}>
      <Row>
        <div className="cart-title mt-4 mb-3">Shopping Cart</div>
        <Row className="d-flex justify-content-center">
          <Col xs="12" md="9">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </Col>
          <Col xs="6" md="3">
            <CartCheckout />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Cart;
