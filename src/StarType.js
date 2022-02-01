import React, {Component} from 'react';
import theSun from "./the-sun.jpg";


class StarType extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    return (
      <div className='starType'>
        <img src={theSun} alt="the-sun"></img>
        <h2 class="display-3 text-success">Main Sequence, Yellow Star</h2>
        <p>Billions upon billions! Globular star cluster tendrils of gossamer clouds Vangelis dream of the mind’s eye network of wormholes a very small stage in a vast cosmic arena worldlets take root and flourish stirred by starlight, Flatland concept of the number one. Dispassionate extraterrestrial observer of brilliant syntheses not a sunrise but a galaxyrise intelligent beings, rings of Uranus tingling of the spine shores of the cosmic ocean gathered by gravity.</p>
      </div>
    )
  }
}

export default StarType;