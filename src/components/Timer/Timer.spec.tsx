import { render, screen } from '@testing-library/react';

import { Timer } from '.';
import { RecipeProps } from '../../data/recipes';

describe('Timer', () => {
  it('creates timer with label and duration from given data', () => {
    const timerData: RecipeProps = {
      label: 'Test Label',
      img: require('../../data/images/testfish.png'),
      duration: {
        undercooked: 30,
        cooked: 50,
        burnt: 70,
        fire: 370,
      },
    };

    render(<Timer label={timerData.label} img={timerData.img} duration={timerData.duration} />);
    const timerLabel = screen.getByText(timerData.label);
    const timerDuration = screen.getByText(
      `${timerData.duration.cooked} / ${timerData.duration.cooked}`
    );

    expect(timerLabel).toBeInTheDocument();
    expect(timerDuration).toBeInTheDocument();
  });
});
