import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">Login</label>
          <input
            placeholder="Email..."
            type="text"
            className="user-input my-3 mx-auto px-2"
          />
          <input
            placeholder="Password..."
            type="password"
            className="user-input mx-auto px-2"
          />
          <button className="btn-login mx-auto mt-4">Login</button>
          <label className="mx-auto my-4">
            Don't have an account?{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span
                style={{ cursor: "pointer" }}
                className="text-danger custom login-click-here"
              >
                Click Here
              </span>
            </Link>
          </label>
        </Col>

        <label className="mx-auto my-4">
          For developing puposes only: <br />
          <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger">
              Login As Admin
            </span>
          </Link>
          <Link to="/user/allorders" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger mx-3">
              Login As User
            </span>
          </Link>
        </label>
      </Row>
    </Container>
  );
};

export default LoginPage;
