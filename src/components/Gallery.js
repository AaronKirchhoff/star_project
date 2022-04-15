import React, { Component } from 'react'
import PhotoBox from './photoBox';
// import Milky_Way_Galaxy2048 from '../pictures/SpaceGalleryPhotos/Galaxies/2048px-Milky_Way_Galaxy.jpg';
import IMAGES from "./images";



class Gallery extends Component {
  render() {
    // this function calls all the photos in our object.
    const photoBoxes = this.props.photos.map(mypic => (
      // below when we call photobox component, pic is the variable carrying the object info, to be more specific, put name or pic in from the object we built.
      <PhotoBox background={mypic.pic} name={mypic.name}/>
    ));
    return (
      <div className='gallery'>
        <div className='photo-boxes'>
          {/* bunch of boxes go here */}
          {photoBoxes}
          <h2>my h2 tag</h2>
          {this.props.emoji}
          {this.props.id}
          <h2>{this.props.galleryName}</h2>
          <img src={IMAGES.Milky_Way_Galaxy2048} alt="galaxy" ></img>

        </div>
        {/* footer eventually */}
      </div>
    )
  }
}
export default Gallery;