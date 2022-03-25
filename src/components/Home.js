import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
// really, 2 dots means go up a folder to look for import, like terminal commands... hmm.

import background from "./camping_wallpaper.jpg";




export default function Home(){
  return (
    <div className='HomedivLinks' style={{ 
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',

    }}>
      <div >
        <div className='landingPageBox'>
          <Link to="/nasaphoto">See into the stars!!   </Link>
          <Link to="/startype">Star Type</Link>      
        </div>
      </div>
    </div>
  )
}