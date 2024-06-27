import React from "react";
import AdminProductCard from "./AdminProductCard";
import { Row, Spinner } from "react-bootstrap";

const AdminAllProductsComp = ({ products, loading }) => {
  return (
    <div>
      <div className="admin-content-text">Manage All Products</div>
      <Row className="justify-content-start">
        {loading ? (
          <Spinner animation="border" role="status"></Spinner>
        ) : (
          products.map((product, idx) => {
            return (
              <AdminProductCard
                thumb={`${process.env.REACT_APP_GENERAL_URL}${product.attributes.thumb.url}`}
                name={product.attributes.name}
                rate={product.attributes.rate}
                price={product.attributes.price}
                id={product.id}
              />
            );
          })
        )}
      </Row>
    </div>
  );
};

export default AdminAllProductsComp;
