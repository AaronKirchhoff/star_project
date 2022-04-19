import React, { Component } from 'react'

import './popup.css';



class Popup extends Component {
  render(){
  return (
    <div className="popup-box-container">
      <div className="popup-box">
        <span className="close-icon" onClick={this.props.handleClose}>x</span>
        {this.props.content}
        
        
      </div>
    </div>
  );
  }
};

export default Popup;