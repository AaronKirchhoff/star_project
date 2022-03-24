import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
// really, 2 dots means go up a folder to look for import, like terminal commands... hmm.



export default function Home(){
  return (
    <div>
      <div className='HomedivLinks'>
        <Link to="/nasaphoto">See into the stars!!</Link>
        <Link to="/startype">Star Type</Link>
      </div>
    </div>
  )
}