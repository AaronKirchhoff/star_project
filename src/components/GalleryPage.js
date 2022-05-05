import React, { Component } from 'react'
import Gallery from './Gallery';
import SeedGallery from './seedGallery';



class GalleryPage extends Component {
  render() {
    return (
      <div>
        <Gallery {...SeedGallery[0]}/>

      </div>
    )
  }
}
export default GalleryPage;