import './App.css';
import { Timer } from './components/Timer';

function App() {
  return (
    <div className="App">
      <Timer label="Test Timer" img={require('./data/images/fish.png')} duration={40} />
    </div>
  );
}

export default App;
