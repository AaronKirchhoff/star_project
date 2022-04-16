import React from "react";
import './popup.css';

const Popup = props => {
  return (
    <div className="popup-box-container">
      <div className="popup-box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;