import React, { Component } from 'react'
import NavBar from './NavBar';
import Gallery from './Gallery';
import SeedGallery from './seedGallery';



class GalleryPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Gallery {...SeedGallery[0]}/>

      </div>
    )
  }
}
export default GalleryPage;