import React from 'react'
import Sidebar from "./AdminComponents/Sidebar";
import "./AdminComponents/styles/AdminDash.css";
import AdminHeader from "./AdminComponents/AdminHeader";

const AdminDashboard = ({child}) => {
  return (
    <div>
          <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <AdminHeader/>
        {child}
      </div>
    </div>
    </div>
  )
}

export default AdminDashboard
