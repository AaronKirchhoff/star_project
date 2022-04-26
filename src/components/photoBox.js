import React, { Component } from 'react'
import "./photoBox.css"
import Popup from './popup.js';
import './gallery.css'

// finally fixed this bug of setting an image for background not just a color. if you want an image as background you have to use the backgroundImage property, i was just using background.
class PhotoBox extends Component {
  constructor(props){
    super(props);
  
    this.state = {isOpen: false};

    this.togglePopup = this.togglePopup.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(evt){
    this.setState({ currentNameofBox: evt.target.value });
  }


  togglePopup(evt) {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
    this.setState({ currentNameofBox: this.props.name})
  }

  render() {
    return (
        <div className='PhotoBox' onClick={this.state.isOpen === true ? undefined : this.togglePopup} style={{
      
          backgroundImage: `url(${this.props.background})`,
          
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          
        }}>
        <div className='popupStyle'>
          <span className='photo-box-title'>{this.props.name}</span>
          {this.state.isOpen === true && <Popup 
          picture={<img src={this.props.background} alt='space'></img>}
          galleryname={<h4>Photo Name | {this.props.name}</h4>}
          photoInfo={ <p>picture data goes here, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ligula felis, gravida ut risus nec, dapibus cursus lectus. Quisque eu porttitor velit. Aenean dapibus justo ut libero facilisis mattis. Sed convallis libero et massa vehicula convallis. Aenean eu elementum velit. Vestibulum ullamcorper nibh at orci interdum porta. Praesent consectetur, justo a luctus eleifend, ipsum nisi finibus nibh, eu auctor orci ex accumsan dui. Cras vulputate porttitor vestibulum. </p>}
          handleClose={this.togglePopup}
          />} 
        </div>
      </div>
    )
  }
}
export default PhotoBox;

