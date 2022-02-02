import React, {Component} from 'react';
import StarType from './StarType';
import theSun from "./the-sun.jpg";
import milkyWay from "./milky-way.jpg"


// star component is the container for StarType, this is where im going to do all the heavy lifting and run my methods. I will pass along some state info as props to StarType and call that.
class Star extends Component {

  constructor(props){
    super(props);
    // state is how much mass the star is, we will set it at 0 for now, update state with an input field, and based on that, we call a function that will decide what star to display.
    this.state = {star: ''};
    // currentStar is the name of the star
    this.state = {currentStar: ''};
    this.state = {defaultImageState: milkyWay};
    // leave note: the starBio is causing an error and my default props wont show???? hmmm...
    // this.state = {starBio: ''};
    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this); 
  }

  // this function is what captures input from out text box to change the state. target is the value passed along from when we fill out the field on the UX side.
  handleChange(mass) {
    // runs on every keystroke, it's called a controlled component because react is following along with every entry the user makes in real time. beacuse of the onChange() method below
    this.setState({ star: mass.target.value });
  }

  formSubmit(evt){
    var starType;
    var starPic;
    // var starInformation;
    if( this.state.star === ''){
      starType = '';
    } else if (this.state.star <= 3) {
      starType = 'Protostar';
      starPic = theSun;
      // starInformation = "A protostar is a very young star that is still gathering mass from its parent molecular cloud. The protostellar phase is the earliest one in the process of stellar evolution.[1] For a low-mass star (i.e. that of the Sun or lower), it lasts about 500,000 years.[2] The phase begins when a molecular cloud fragment first collapses under the force of self-gravity and an opaque, pressure supported core forms inside the collapsing fragment. It ends when the infalling gas is depleted, leaving a pre-main-sequence star, which contracts to later become a main-sequence star at the onset of hydrogen fusion producing helium.";
    } else if (this.state.star <= 6) {
      starType = 'T Tauri';
    } else if (this.state.star <= 10) {
      starType = 'Red Dwarf';
    } else if (this.state.star <= 11) {
      starType = 'White Dwarf';
    } else if (this.state.star <= 20) {
      starType = 'Red Giant';
    } else if (this.state.star <= 35) {
      starType = 'Neutron Star';
    } else if (this.state.star <= 100) {
      starType = 'Super Giant';
    } else {
      starType = 'error: Mass input incorrect'
    }
    this.setState({currentStar: starType})
    this.setState({defaultImageState: starPic})
    // this.setState({starBio: starInformation})
    evt.preventDefault();
    // alert(`you typed: ${starType}`);
    this.setState({star: ''})
    return starType
  }
  
  render(){    
    return (
      <div className='Star'>
        <h1 class="display-2"> What's my Star? | {this.state.currentStar}</h1>

        <form onSubmit={this.formSubmit}>
          <label class="h2">Mass: 
            <input type="text" id="mass" value={this.state.star} onChange={this.handleChange}></input>
          </label>
          <button class="btn btn-success">Calculate</button>
        </form >
        {/* passing a prop to StarType compenent. super simple. i even passed the currentStar state as a prop. can't figure out how to set an image as adeault prop in StarType... so for now, always put in the prop for starImage as the current state of defaultIMageState from here.*/}
        <StarType starImage={this.state.defaultImageState} name={this.state.currentStar} data={this.state.starBio}/>

      </div>
      
    )
  }
}

// Star.defaultProps = {
//   starImage: theSun,
//   Name: "What;s my Star?",
//   data: "???"
// }

export default Star;

// solved my problem!!! i needed the starType to be its own state to save that information.