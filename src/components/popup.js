import React, { Component } from 'react'

import './popup.css';


// need this component to supersede everything on the page when open. z index no effect.
// attach the popup to the gallery not the individual photobox?
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