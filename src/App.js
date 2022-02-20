import './App.css';
import Star from './components/star';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import 'bootstrap/dist/css/bootstrap.min.css';

// const APOD_API = "https://api.nasa.gov/planetary/apod?api_key=6l3gpeSno0tShfNMamoyXhRLDU3pFCac6QE8fkuN"

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/nasaphoto">NasaPhoto</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/startype">StarType</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/nasaphoto" element={<NasaPhoto />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/startype" element={<Star />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}


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