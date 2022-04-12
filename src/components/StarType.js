import React, {Component} from 'react';
// import theSun from "./the-sun.jpg";
import milkyWay from "../pictures/milky-way.jpg"

// import './App.css';




class StarType extends Component {
  static defaultProps = {
    starImage:  milkyWay,
    name: "What's my Star?",
    data: ""
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