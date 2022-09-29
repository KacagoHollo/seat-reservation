import './App.css';
import Seats from './pages/Seats';
import BestAvailable from './components/BestAvailable';

function App() {
  return (
    <div className="App">
      <div className='room'>
              <Seats/>
              <BestAvailable/>
      </div>
    </div>
  );
}

export default App;
