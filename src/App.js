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


// for the record, after being stuck on routing for a week, i pulled info, copied code from the react-router website that created this dependency, they had all the updated info i needed.
export default function App() {
  return (
    <Router>
      <div>
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
          <ul class="nav" className='navBar'>
            <li class="nav-item">
              <Link to="/nasaphoto">Nasa Photo</Link>
            </li>
            <li class="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/startype">Star Type</Link>
            </li>
          </ul>
        </nav> */} 

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