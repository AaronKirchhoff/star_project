import React from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';
import space_logo from "../pictures/space-logo.png";

export default function LandingPage(){
  return (
    <div className='landingPage'>
      <Link to='/landingpage'/>
      <div className="logo-div">
        {/* must be self closing tag */}
        <img className="logo" src={space_logo} alt="space-logo"/>
      </div>
      <div className='museumHeader'>
      <h1>National Museum of Awesome Space Stuff</h1>
      </div>
    </div>
  )
}