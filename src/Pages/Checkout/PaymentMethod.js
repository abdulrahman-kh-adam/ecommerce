import React from "react";
import { Container } from "react-bootstrap";
import ChoosePayMethod from "../../Components/Checkout/ChoosePayMethod";

const PaymentMethod = () => {
  return (
    <Container style={{ minHeight: "676px" }}>
      <ChoosePayMethod />
    </Container>
  );
};

export default PaymentMethod;
