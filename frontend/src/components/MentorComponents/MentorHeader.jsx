import React from "react";
import "./style.css";

const MentorHeader = () => {

  return (
    <div>
      <div className="menu">
        <div className="logo">
          <h2>Mentor Dashboard</h2>
        </div>
        <div className="menu-list">
          <a href="/mentordash" className="item active">
            Dashboard
          </a>
          <a href="/reference" className="item">
            Reference Materials
          </a>
          </div>
        </div>

    </div>
  );
};

export default MentorHeader;
