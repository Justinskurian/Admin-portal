import React from "react";
import "./styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="menu">
      <div className="logo">
      <h2 >Admin Dashboard</h2>
      </div>
<div className="menu-list">
<a href="/admindash" className="item active">
Dashboard</a>
<a href="/addproject" className="item">
Add Project</a>
<a href="/addmentor" className="item">
Add Mentor</a>
<a href="/assignproject" className="item">
Assign Project</a>

</div>



    </div>
  );
};

export default Sidebar;
