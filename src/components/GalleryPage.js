import React, { Component } from 'react'
import NavBar from './NavBar';
import Gallery from './Gallery';
import SeedGallery from './seedGallery';



class GalleryPage extends Component {
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <NavBar />
        <Gallery {...SeedGallery[1]}/>

      </div>
    )
  }
}
export default GalleryPage;