import React from "react";
import "./Slide.css";

const Slide = ({ userName, address, comment, profile }) => {
  return (
    <div className="slide">
      <div className="user-info">
        <img src={profile} alt="" />
        <dir>
          <h3>{userName}</h3>
          <span>{address}</span>
        </dir>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default Slide;
