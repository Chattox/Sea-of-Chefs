import { render, screen } from '@testing-library/react';
import App from './App';
import { recipes } from './data/recipes';

describe('main page', () => {
  it('renders timer', () => {
    render(<App />);
    const timerStartButton = screen.getByText(/Bait/i);
    expect(timerStartButton).toBeInTheDocument();
  });
  it('renders all timers', () => {
    render(<App />);
    const timerLabels = recipes.land
      .map((recipe) => recipe.label)
      .concat(recipes.sea.map((recipe) => recipe.label));
    timerLabels.forEach((label) => {
      const labelElem = screen.getByText(label);
      expect(labelElem).toBeInTheDocument();
    });
  });
});
