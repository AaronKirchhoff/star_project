import './App.css';
import Star from './star';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='square'> ⭐</div>
      <div className='square'> 🌟</div>
      <div className='square'> ☀</div>
      </header>
      <Star />
      <div className='To-do'>
        <h4 class="display-4 text-info" >To Do list | Minimal Viable Product</h4>
        <ul>
          <li>space api, astronomy picture of the day</li>
          <li>input mass and luminosity to calculate actual star class</li>
          <li>quis nostrud exercitation ullamco laboris</li>
          <li>nisi ut aliquip ex ea commodo consequat.</li>
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
