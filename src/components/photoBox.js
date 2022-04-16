import React, { Component } from 'react'
import "./photoBox.css"
import Popup from './popup.js';

// finally fixed this bug of setting an image for background not just a color. if you want an image as background you have to use the backgroundImage property, i was just using background.
class PhotoBox extends Component {
  constructor(props){
    super(props);
  
    this.state = {isOpen: false};

    this.togglePopup = this.togglePopup.bind(this);
  }
  // const [isOpen, setIsOpen] = useState(false);


  togglePopup(evt) {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
    // this.setState({isOpen: !isOpen});
    // setIsOpen(!isOpen);
  }

  render() {
    return (
      // <div style={{backgroundImage: `url(${this.props.background})`,}} className='PhotoBox'>
        <div className='PhotoBox' onClick={this.togglePopup} style={{ 
          backgroundImage: `url(${this.props.background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          
        }}>
        <span>{this.props.name}</span>
        {this.state.isOpen && <Popup
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