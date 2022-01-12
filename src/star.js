import React, {Component} from 'react';

class Star extends Component {
  constructor(props){
    super(props);
    this.state = {star: '⭐whats my star?⭐'};
    this.handleChange = this.handleChange.bind(this);
    this.tbdfunction = this.tbdfunction.bind(this);    
  }

  handleChange(mass) {
    this.setState({
      [mass.target.name]: mass.target.value
    });
  }

  tbdfunction(mass){
    // and we dont want tpage t refresh automatically, so ...
    mass.preventDefault();
    if( mass <= 3){
      this.setState({star: "Protostar"})

    }
    
  }

  render(){
    return (
      <div className='Star'>
        <h1> Check my Universe | {this.state.star}</h1>
        <button onClick={this.tbdfunction}> Calculate</button>
        <h2> {this.state.star} </h2>

        <form onSubmit={this.tbdfunction}>
          <label for="mass">Mass: </label>
          <input type="text" id="mass" name="mass"  onChange={this.handleChange}></input>
          <input type="submit" value="Submit"></input>
        </form>


      </div>
    )
  }
}
export default Star;