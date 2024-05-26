import React from "react";
import AdminOrderCard from "./AdminOrderCard";

const AdminAllOrdersComp = () => {
  return (
    <div>
      <div className="admin-content-text mb-2">Manage All Orders</div>
      <AdminOrderCard />
      <AdminOrderCard />
      <AdminOrderCard />
      <AdminOrderCard />
      <AdminOrderCard />
    </div>
  );
};

export default AdminAllOrdersComp;
