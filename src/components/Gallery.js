import React, { Component } from 'react'
import NavBar from './NavBar';
// import SeedGallery from './seedGallery';


class Gallery extends Component {
  render() {
    return (
      <div className='gallery'>
        <NavBar />
        <div className='gallery-boxes'>
          {/* bunch of boxes go here */}

        </div>
        {/* footer eventually */}
      </div>
    )
  }
}
export default Gallery;