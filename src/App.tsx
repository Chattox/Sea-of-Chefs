import './App.css';
import { Timer } from './components/Timer';
import { recipes } from './data/recipes';

function App() {
  return (
    <div className="App">
      {recipes.map((recipe) => (
        <Timer label={recipe.label} img={recipe.img} duration={recipe.duration.cooked} />
      ))}
      <Timer label="Test Timer" img={require('./data/images/fish.png')} duration={40} />
    </div>
  );
}

export default App;
