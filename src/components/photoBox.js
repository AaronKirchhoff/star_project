import React, { Component } from 'react'
import "./photoBox.css"
import Popup from './popup.js';

// finally fixed this bug of setting an image for background not just a color. if you want an image as background you have to use the backgroundImage property, i was just using background.
class PhotoBox extends Component {
  constructor(props){
    super(props);
  
    this.state = {isOpen: false};
    // this.state = {currentNameofBox: undefined};

    this.togglePopup = this.togglePopup.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  // const [isOpen, setIsOpen] = useState(false);

  handleChange(evt){
    this.setState({ currentNameofBox: evt.target.value });
  }


  togglePopup(evt) {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
    this.setState({ currentNameofBox: this.props.name})

    // this.handleChange();
    // this.setState({isOpen: !isOpen});
    // setIsOpen(!isOpen);
  // }
  // togglePopup(evt){
  //   this.setState({isOpen: true})
  }

  render() {
    return (
      // <div style={{backgroundImage: `url(${this.props.background})`,}} className='PhotoBox'>
        <div className='PhotoBox' onClick={this.state.isOpen === true ? undefined : this.togglePopup} style={{ 
          backgroundImage: `url(${this.props.background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          
        }}>
          
        <span>{this.props.name}</span>
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

// 1. i can have multiple popupboxes open at once
// 2. the popup will render, but every photobox component after it will display over the popup component.
// for every photobox component there is a different isOPen state, i need a parent state that contrills all others.
// conditional statement is working sort of, photocbox compnents below it are off, but still can click components above the popupbox....