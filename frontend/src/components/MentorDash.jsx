import React from "react";
import MentorHeader from "./MentorComponents/MentorHeader";
import "./MentorComponents/style.css";
import MentorTitle from "./MentorComponents/MentorTitle";

const MentorDash = ({ child }) => {
  return (
    <div className="dashboard">
      <MentorHeader />
      <div className="dashboard-content">
        <MentorTitle />
        {child}
      </div>
    </div>
  );
};

export default MentorDash;
