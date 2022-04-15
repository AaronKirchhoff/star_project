import React, { Component } from 'react'


class PhotoBox extends Component {
  render() {
    return (
      <div style={{background: this.props.background}} className='PhotoBox'>
        <span>{this.props.name}</span>
        {/* leave note, why can't i pass an image as a prop??? */}
        {/* <img src={this.props.pic} alt=""></img> */}
        <span>MORE</span>
      </div>
    )
  }
}
export default PhotoBox;