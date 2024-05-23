import React from "react";
import { Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container className="mt-3 text-center" style={{ minHeight: "700px" }}>
      <Alert variant="danger" className="text-center">
        Error 404: Page Not Found!
      </Alert>
      <Link to="/">
        <button className="btn-login mx-auto">Return to home</button>
      </Link>
    </Container>
  );
};

export default ErrorPage;
