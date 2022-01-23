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
      <button type="button" class="btn btn-primary">Hey here is bootstrap button</button>
      
      

    </div>
  );
}

export default App;
