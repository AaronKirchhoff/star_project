import React, { Component } from 'react'
import "./photoBox.css"

// finally fixed this bug of setting an image for background not just a color. if you want an image as background you have to use the backgroundImage property, i was just using background.
class PhotoBox extends Component {
  render() {
    return (
      // <div style={{backgroundImage: `url(${this.props.background})`,}} className='PhotoBox'>
        <div className='PhotoBox' style={{ 
          backgroundImage: `url(${this.props.background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        <span>{this.props.name}</span>
        <span>MORE</span>
      </div>
    )
  }
}
export default PhotoBox;