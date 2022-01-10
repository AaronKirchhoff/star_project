import React, {Component} from 'react';

class Star extends Component {
  constructor(props){
    super(props);
    this.state = {star: '⭐whats my star?⭐'}
    
  }



  render(){
    return (
      <div className='Star'>
        <h1> Check my Universe | {this.state.star}</h1>

      </div>
    )
  }
}
export default Star;