import React, {Component} from 'react';
import StarType from './StarType';
import NavBar from './NavBar'

import whiteDwarf from "../pictures/white-dwarf.jpg";
import superGiant from "../pictures/super-giant.jpg";
import giantStar from "../pictures/giant-star.png";
import classOStar from "../pictures/class-O-star.jpg";
import classBStar from "../pictures/class-B-star.png";
import classAStar from "../pictures/class-A-star.jpeg";
import classFStar from "../pictures/class-F-star.jpg";
import theSun from "../pictures/the-sun.jpg";
import classKStar from "../pictures/class-K-star.jpg";
import classMStar from "../pictures/class-M-star.png";



// star component is the container for StarType, this is where im going to do all the heavy lifting and run my methods. I will pass along some state info as props to StarType and call that.
class Star extends Component {

  constructor(props){
    super(props);
    
    this.state = {temp: ''};
    this.state = {lumin: ''};

    this.state = {currentStar: ''};
    this.state = {defaultImageState: ''};
    this.state = {starBio: ""};
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
    
    const whiteDwarfDescription = "A white dwarf, also called a degenerate dwarf, is a stellar core remnant composed mostly of electron-degenerate matter. A white dwarf is very dense: its mass is comparable to that of the Sun, while its volume is comparable to that of Earth. A white dwarf's faint luminosity comes from the emission of residual thermal energy; no fusion takes place in a white dwarf.";
    const superGiantDescription = "Supergiants are among the most massive and most luminous stars. Supergiant stars occupy the top region of the Hertzsprung–Russell diagram with absolute visual magnitudes between about −3 and −8. The temperature range of supergiant stars spans from about 3,400 K to over 20,000 K.";
    const giantStarDescription = "A giant star is a star with substantially larger radius and luminosity than a main-sequence (or dwarf) star of the same surface temperature.[1] They lie above the main sequence (luminosity class V in the Yerkes spectral classification) on the Hertzsprung–Russell diagram and correspond to luminosity classes II and III.";
    const classODescription = "An O-type star is a hot, blue-white star of spectral type O in the Yerkes classification system employed by astronomers. They have temperatures in excess of 30,000 kelvin (K). Stars of this type have strong absorption lines of ionised helium, strong lines of other ionised elements, and hydrogen and neutral helium lines weaker than spectral type B.";
    const classBDescription = "A B-type main-sequence star (B V) is a main-sequence (hydrogen-burning) star of spectral type B and luminosity class V. These stars have from 2 to 16 times the mass of the Sun and surface temperatures between 10,000 and 30,000 K.[3] B-type stars are extremely luminous and blue. Their spectra have neutral helium, which are most prominent at the B2 subclass, and moderate hydrogen lines.";
    const classADescription = "An A-type main-sequence star (A V) or A dwarf star is a main-sequence (hydrogen-burning) star of spectral type A and luminosity class V (five). These stars have spectra which are defined by strong hydrogen Balmer absorption lines.[1][2] They measure between 1.4 and 2.1 solar masses (M☉) and have surface temperatures between 7600 and 10,000 K.";
    const classFDescription = "An F-type main-sequence star (F V) is a main-sequence, hydrogen-fusing star of spectral type F and luminosity class V. These stars have from 1.0 to 1.4 times the mass of the Sun and surface temperatures between 6,000 and 7,600 K.";
    const classGDescription = "The Sun is a class G star; these are yellow, with surface temperatures of 5,000–6,000 K. Class K stars are yellow to orange, at about 4,500–6,000 K, and M stars are red, at about 3,000 K, with titanium oxide prominent in their spectra.";
    const classKDescription = "A K-type main-sequence star, also referred to as a K dwarf or orange dwarf, is a main-sequence (hydrogen-burning) star of spectral type K and luminosity class V. These stars are intermediate in size between red M-type main-sequence stars (red dwarfs) and yellow G-type main-sequence stars.";
    const classMDescription = "Class M stars are by far the most common. About 76% of the main-sequence stars in the solar neighborhood are class M stars.[e][f][8] However, class M main-sequence stars (red dwarfs) have such low luminosities that none are bright enough to be seen with the unaided eye, unless under exceptional conditions.";

    var starType;
    var starPic;
    var starInformation;
    if ( tempState >= 6000 && tempState <= 30000 && luminState >= .00001 && luminState <= .000316) {
      starType = 'White Dwarf';
      starPic = whiteDwarf;
      starInformation = whiteDwarfDescription;
    } else if (tempState >= 3000 && tempState <= 12000 && luminState >= 1000 && luminState <= 1000000){
      starType = 'Super Giant';
      starPic = superGiant;
      starInformation = superGiantDescription;
    } else if (tempState >= 3000 && tempState <= 6000 && luminState >= 10 && luminState <= 1000){
      starType = 'Giant';
      starPic = giantStar;
      starInformation = giantStarDescription;
    } else if (tempState >= 25000 && tempState <= 40000 && luminState >= 10000 && luminState <= 1000000){
      starType = 'Class O Star';
      starPic = classOStar;
      starInformation = classODescription;
    } else if (tempState >= 15000 && tempState <= 25000 && luminState >= 316 && luminState <= 10000){
      starType = 'Class B Star';
      starPic = classBStar;
      starInformation = classBDescription;
    } else if (tempState >= 9000 && tempState <= 15000 && luminState >= 50 && luminState <= 1000){
      starType = 'Class A Star';
      starPic = classAStar;
      starInformation = classADescription;
    } else if (tempState >= 6050 && tempState <= 9000 && luminState >= 5 && luminState <= 80){
      starType = 'Class F Star';
      starPic = classFStar;
      starInformation = classFDescription;
    } else if (tempState >= 4500 && tempState <= 6050 && luminState >= .1 && luminState <= 8){
      starType = 'Class G Star';
      starPic = theSun;
      starInformation = classGDescription;
    } else if (tempState >= 3000 && tempState <= 4500 && luminState >= .01 && luminState <= .5){
      starType = 'Class K Star';
      starPic = classKStar;
      starInformation = classKDescription;
    } else if (tempState >= 1000 && tempState <= 3000 && luminState >= .0001 && luminState <= .01){
      starType = 'Class M Star';
      starPic = classMStar;
      starInformation = classMDescription;
      
    } else if (tempState === '' || luminState === ''){
      starType = 'Error: need more info';
      starInformation = '';
    } else {
      starType = "Error: This star is unusual and falls outside of the H-R diagram's naming conventions, try altering your temperature and luminosity.";
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
        <div className='StarPageHead'>
          <NavBar className="home-link" />
          <h1 className="StarHeader"> Star Class</h1>
        </div>
        <div className='StarInputs'>
          <p className='nasaExplanation'>Here you can Input your star's Temp and luminosity to get your star-type. If your two data points fall outside of the Hertzsprung–Russell diagram, try altering your inputs.</p>
          <form onSubmit={this.formSubmit}>
            <label class="h2">temperature: 
              <input className="formInputBox" type="text" name="temp" id="temperature" value={this.state.temp} onChange={this.handleChange}></input>
            </label>
            <label class="h2">luminosity:
              <input className="formInputBox" type="text" name="lumin" id="luminosity" value={this.state.lumin} onChange={this.handleChange}></input>
            </label>
            <button class="btn btn-success">Calculate</button>
          </form >
          <p>luminosity range | .00001 - 1,000,000 times the brigtness of the Sun.</p>
          <p>Temperature range | 3,000 - 30,000 Kelvin.</p>
        </div>
        {/* passing a prop to StarType compenent. super simple. i even passed the currentStar state as a prop. can't figure out how to set an image as adeault prop in StarType... so for now, always put in the prop for starImage as the current state of defaultIMageState from here.*/}
        <StarType className="starTypeComponent" starImage={this.state.defaultImageState} name={this.state.currentStar} data={this.state.starBio}/>

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