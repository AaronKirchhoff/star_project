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
    this.setState({
      [mass.target.star]: mass.target.value
    });
  }

  tbdfunction(){
    // and we dont want tpage t refresh automatically, so ...
    // mass.preventDefault();
    var starType;
    if( this.state.star <= 3){
      starType = 'Protostar';

    }
    
  }
// leave note, function above should be in render to read the starType variable?
  render(){
    return (
      <div className='Star'>
        <h1> Check my Universe | {this.state.star}</h1>
        {/* <button onClick={this.tbdfunction}> Calculate</button>
        <h2> {this.state.star} </h2> */}

        <form onSubmit={this}>
          <label for="mass"></label>
          <input type="text" id="mass" value={this.state.star} onChange={this.handleChange}></input>
          <button>click me</button>
        </form >
        <h1> "{ starType }"</h1>

        {/* <form onSubmit={this.tbdfunction}>
          <label for="mass">Mass: </label>
          <input type="text" id="mass" name="mass"  onChange={this.handleChange}></input>
          <input type="submit" value="Submit"></input>
        </form> */}


      </div>
    )
  }
}
export default Star;