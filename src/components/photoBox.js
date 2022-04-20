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
          
        <span className='photo-box-title'>{this.props.name}</span>
        {this.state.isOpen === true && <Popup 
        content={<>
            <img src={this.props.background} alt='space'></img>
            <b>photo name:{this.props.name}</b>
            <p>picture data goes here</p>
            <button>Test button</button>
            
          </>}
          handleClose={this.togglePopup}
        />} 
      </div>
    )
  }
}
export default PhotoBox;

