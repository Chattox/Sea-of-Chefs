import './App.css';
import { Timer } from './Components/Timer';

function App() {
  return (
    <div className="App">
      <Timer label="Test Timer" img={require('./Components/Timer/fish.png')} duration={40} />
    </div>
  );
}

export default App;
