// import './components/App.css';
// import Star from './components/star';
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const APOD_API = "https://api.nasa.gov/planetary/apod?api_key=6l3gpeSno0tShfNMamoyXhRLDU3pFCac6QE8fkuN"

function App() {
  return (
      <BrowserRouter>
        <div>
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasaphoto" />
        </div>
      </BrowserRouter>
    
  );
}

export default App;


// {/* <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      //   <div  id="navbarNav">
      //     <ul class="nav ">
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">APOD</a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">H-R Classification</a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">Life-Cycle</a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">Who's In Space?</a>
      //       </li>
      //     </ul>
      //   </div>
      // </nav> */}