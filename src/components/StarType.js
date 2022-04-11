import React, {Component} from 'react';
// import theSun from "./the-sun.jpg";
import milkyWay from "./milky-way.jpg"

// import './App.css';




class StarType extends Component {
  static defaultProps = {
    starImage:  milkyWay,
    name: "What's my Star?",
    data: "Cosmic ipsum wavelength terminator celestial coordinates Deneb falling star umbra inferior planets outer planets Van Allen belt Doppler shift solar system pole star north star local group helium radiation Hubble's law red giant star comet gravitational lens vernal equinox inner planets"
  }
  // constructor(props){
  //   super(props);

    // this.state = {starPropTest: this.state.currentStar}
  // }

  
  

  render(){
    return (
      <div className='starType'>
        <div className='starTypeData'>
          <p class="display-3 text-success">{this.props.name}</p>
          <p>{this.props.data}</p>
        </div>
        <div className="starTypePic">
          <img src={this.props.starImage} alt={"star-pictures"} ></img>
        </div>
      </div>
    )
  }
}


export default StarType;