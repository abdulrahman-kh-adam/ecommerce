import React from "react";
import AdminProductCard from "./AdminProductCard";
import { Row } from "react-bootstrap";

const AdminAllProductsComp = () => {
  return (
    <div>
      <div className="admin-content-text">Manage All Products</div>
      <Row className="justify-content-start">
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
      </Row>
    </div>
  );
};

export default AdminAllProductsComp;
