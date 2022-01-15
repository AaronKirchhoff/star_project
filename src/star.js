import React, {Component} from 'react';

class Star extends Component {
  constructor(props){
    super(props);
    // state is how much mass the star is, we will set it at 0 for now, update state with an input field, and based on that, we call a function that will decide what star to display.
    this.state = {star: 0};
    this.handleChange = this.handleChange.bind(this);
    this.tbdfunction = this.tbdfunction.bind(this);    
  }

  // this function is what captures input from out text box to change the state. target is the value passed along from when we fill out the field on the UX side.
  handleChange(mass) {
    this.setState({ star: mass.target.value });
  }

  tbdfunction(){
    // and we dont want tpage t refresh automatically, so ...
    // mass.preventDefault();
    var starType;
    if( this.state.star <= 3){
      starType = 'Protostar';
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
    return starType;
    
  }
// leave note, my button doesnt work. when i fill in the field input it changes immediately instead of wating for a button click.
  render(){    
    const newStar = this.tbdfunction();
    return (
      <div className='Star'>
        <h1> Check my Universe | {this.state.star}</h1>

        <form onSubmit={this.tbdfunction}>
          <label for="mass">Mass: </label>
          <input type="text" id="mass" value={this.state.star} onChange={this.handleChange}></input>
          <button>click me</button>
        </form >
        <h1> {newStar}</h1>

      </div>
    )
  }
}
export default Star;