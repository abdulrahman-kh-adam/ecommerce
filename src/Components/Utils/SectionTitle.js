import React from "react";
import { NavLink } from "react-router-dom";

const SectionTitle = ({ title, buttonText, path }) => {
  return (
    <div className="d-flex justify-content-between pt-4 w-100">
      <div className="sub-tile">{title}</div>
      {buttonText ? (
        <NavLink to={path} style={{ textDecoration: "none" }}>
          <div className="shopping-now">{buttonText}</div>
        </NavLink>
      ) : null}
    </div>
  );
};

export default SectionTitle;
