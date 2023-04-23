import { Accordion } from '@mantine/core';
import './App.css';
import { Timer } from './components/Timer';
import { recipes } from './data/recipes';

function App() {
  return (
    <div className="App">
      <Accordion multiple defaultValue={['land', 'sea']}>
        <Accordion.Item value="land">
          <Accordion.Control>Land</Accordion.Control>
          <Accordion.Panel>
            {recipes.land.map((recipe) => (
              <Timer label={recipe.label} img={recipe.img} duration={recipe.duration.cooked} />
            ))}
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="sea">
          <Accordion.Control>Sea</Accordion.Control>
          <Accordion.Panel>
            {recipes.sea.map((recipe) => (
              <Timer label={recipe.label} img={recipe.img} duration={recipe.duration.cooked} />
            ))}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
