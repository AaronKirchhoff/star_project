import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
// really, 2 dots means go up a folder to look for import, like terminal commands... hmm.

import background from "../pictures/camping_wallpaper.jpg";




export default function Home(){
  return (
    <div className='HomedivLinks' style={{ 
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',

    }}>
      <div className='homeRow' >
        <div className='landingPageBox'>
          <div className="homelink1">
            <Link className="link" to="/nasaphoto">NASA Astronomy Picture{'\n'} of the Day</Link> 
          </div>
          <div className='homelink2'>
            <Link className="link" to="/startype">Star Classification</Link>  
          </div>
          <div className='homelink3'>
            <Link className="link" to="/gallerypage">Space Gallery</Link>  
          </div> 
        </div>
      </div>
    </div>
  )
}