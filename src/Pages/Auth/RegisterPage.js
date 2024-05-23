import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">Create a New Account</label>
          <input
            placeholder="Username..."
            type="text"
            className="user-input mt-3 px-2 mx-auto"
          />
          <input
            placeholder="Email..."
            type="text"
            className="user-input my-3 px-2 mx-auto"
          />
          <input
            placeholder="Password..."
            type="password"
            className="user-input px-2 mx-auto"
          />
          <button className="btn-login mx-auto mt-4">Create</button>
          <label className="mx-auto my-4">
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span
                style={{ cursor: "pointer" }}
                className="text-danger custom login-click-here"
              >
                Click Here!
              </span>
            </Link>
          </label>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
