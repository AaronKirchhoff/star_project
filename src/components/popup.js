import React, { Component } from 'react'

import './popup.css';



class Popup extends Component {
  render(){
  return (
    <div className="popup-box-container">
      <div className="popup-box" onClick={this.props.handleClose}>
        <span className='pictureGradient'>{this.props.picture}</span>
        {this.props.handleClose}      
        <div className='popupDataStyling'>
          <span className='galleryNameColor'>{this.props.galleryname}</span>
          {this.props.photoInfo}
        </div>        
      </div>
    </div>
  );
  }
};

export default Popup;