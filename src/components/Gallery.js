import React, { Component } from 'react'
import PhotoBox from './photoBox';
// import IMAGES from "./images";
import "./gallery.css"




class Gallery extends Component {




  render() {
    // this function calls all the photos in our object.
    const photoBoxes = this.props.photos.map(mypic => (
      // below when we call photobox component, mypic is the variable carrying the object info, to be more specific, put name or pic in from the object we built. this arrow function is shorthand for a for loop.
      <PhotoBox background={mypic.pic} name={mypic.name}/>
      
      
    ));

    return (
      <div className='gallery'>
        <h1>{this.props.galleryName}</h1>
        <h2>{this.props.id}</h2>
        <h2>{this.props.emoji}</h2>
        

        <div className='photo-boxes'  >
          {/* bunch of boxes go here */}
          {photoBoxes}

        </div>
        {/* footer eventually */}
      </div>
    )
  }
}
export default Gallery;