import React from 'react';
import { Link } from 'react-router-dom';



export default function Home(){
  return (
    <div>
      {/* this is a big button that links to the /nasaphoto url */}
      <Link to="/nasaphoto">See into the stars!!</Link>
      <Link to="/startype">Star Type</Link>
    </div>
  )
}