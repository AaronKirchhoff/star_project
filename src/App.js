import './components/App.css';
import Star from './components/star';
import {BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// const APOD_API = "https://api.nasa.gov/planetary/apod?api_key=6l3gpeSno0tShfNMamoyXhRLDU3pFCac6QE8fkuN"

function App() {
  return (
    <div className="App">

      <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <div  id="navbarNav">
          <ul class="nav ">
            <li class="nav-item">
              <a class="nav-link" href="#">APOD</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">H-R Classification</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Life-Cycle</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Who's In Space?</a>
            </li>
          </ul>
        </div>
      </nav>

      
      <Star />
      <div className='To-do'>
        <h4 class="display-4 text-info" >To Do list | Minimal Viable Product</h4>
        <ul>
          <li>space api, astronomy picture of the day</li>
          <li>input temperature and luminosity to calculate actual star class</li>
          <li>quis nostrud exercitation ullamco laboris</li>
          <li>nisi ut aliquip ex ea commodo consequat.</li>
          <li>strikethrough to do list would be cool refer to hmwk</li>
        </ul> 
      </div>
      <div>
        <button type="button" class="btn btn-primary">Hey here is bootstrap button</button>
        <button type="button" class="btn btn-danger">delete star</button>
      </div>
      
      
      

    </div>
  );
}

export default App;
