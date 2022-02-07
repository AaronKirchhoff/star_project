import React, {Component} from 'react';
import StarType from './StarType';

import whiteDwarf from "./white-dwarf.jpg";
import superGiant from "./super-giant.jpg";
import giantStar from "./giant-star.jpg";


// star component is the container for StarType, this is where im going to do all the heavy lifting and run my methods. I will pass along some state info as props to StarType and call that.
class Star extends Component {

  constructor(props){
    super(props);
    // state is how much mass the star is, we will set it at 0 for now, update state with an input field, and based on that, we call a function that will decide what star to display.
    this.state = {temp: ''};
    this.state = {lumin: ''};

    this.state = {currentStar: ''};
    this.state = {defaultImageState: ''};
    this.state = {starBio: "Cosmic ipsum wavelength terminator celestial coordinates Deneb falling star umbra inferior planets outer planets Van Allen belt Doppler shift solar system pole star north star local group helium radiation Hubble's law red giant star comet gravitational lens vernal equinox inner planets"};
    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this); 
  }

  // this function is what captures input from out text box to change the state. target is the value passed along from when we fill out the field on the UX side.
  handleChange(evt) {
    // runs on every keystroke, it's called a controlled component because react is following along with every entry the user makes in real time. beacuse of the onChange() method below. and to take in multiple inputs, take the name of the label/ and change that state to be equal to the input in THAT spot/value
    this.setState({ [evt.target.name]: evt.target.value });
  }

  formSubmit(evt){
    var luminState = this.state.lumin;
    var tempState = this.state.temp;
    
    var starType;
    var starPic;
    var starInformation;
    if ( tempState > 6000 && tempState < 30000 && luminState > .00001 && luminState < .000316) {
      starType = 'White Dwarf';
      starPic = whiteDwarf;
      starInformation = "A white dwarf, also called a degenerate dwarf, is a stellar core remnant composed mostly of electron-degenerate matter. A white dwarf is very dense: its mass is comparable to that of the Sun, while its volume is comparable to that of Earth. A white dwarf's faint luminosity comes from the emission of residual thermal energy; no fusion takes place in a white dwarf.";
    } else if (tempState > 3000 && tempState < 12000 && luminState > 1000 && luminState < 1000000){
      starType = 'Super Giant';
      starPic = superGiant;
      starInformation = "Supergiants are among the most massive and most luminous stars. Supergiant stars occupy the top region of the Hertzsprung–Russell diagram with absolute visual magnitudes between about −3 and −8. The temperature range of supergiant stars spans from about 3,400 K to over 20,000 K.";
    } else if (tempState > 3000 && tempState < 6000 && luminState > 10 && luminState < 1000){
      starType = 'Giant';
      starPic = giantStar;
      starInformation = "A giant star is a star with substantially larger radius and luminosity than a main-sequence (or dwarf) star of the same surface temperature.[1] They lie above the main sequence (luminosity class V in the Yerkes spectral classification) on the Hertzsprung–Russell diagram and correspond to luminosity classes II and III.";
    // } else if (){
      
    // something wrong with error code below...
    } else if (tempState === '' || luminState === ''){
      starType = 'Error: need more info';
      starInformation = '';
    } else {
      starType = "Error: This star is unusual and falls outside of the H-R diagram's naming conventions, try altering your temperature and luminosity to get your star classification.";
      starInformation = '';
    }
    this.setState({currentStar: starType})
    this.setState({defaultImageState: starPic})
    this.setState({starBio: starInformation})
    evt.preventDefault();
    // alert(`you typed: ${starType}`);
    this.setState({temp: ''});
    this.setState({lumin: ''})
    return starType
  }
  
  render(){    
    return (
      <div className='Star'>
        <h1 class="display-2"> What's my Star? | {this.state.temp} {this.state.lumin}</h1>

        <form onSubmit={this.formSubmit}>
          <label class="h2">temperature: 
            <input type="text" name="temp" id="temperature" value={this.state.temp} onChange={this.handleChange}></input>
          </label>
          <label class="h2">luminosity:
            <input type="text" name="lumin" id="luminosity" value={this.state.lumin} onChange={this.handleChange}></input>
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