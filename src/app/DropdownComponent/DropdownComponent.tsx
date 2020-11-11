import * as React from "react";
import "./DropdownComponent.css";

const DropdownComponent = () => {
  return (
    <div className="dropdown">
      <a className="dropdown-button">CAR LOANS</a>
      <div className="dropdown-content">
        <a className="dropdown-button" href="#">
          Link 1
        </a>
        <a className="dropdown-button" href="#">
          Link 2
        </a>
        <a className="dropdown-button" href="#">
          Link 3
        </a>
      </div>
    </div>
  );
};

export default DropdownComponent;
