import { Accordion, Container, Stack } from '@mantine/core';

import { useStyles } from './index.styles';
import { Timer } from '../Timer';
import { recipes } from '../../data/recipes';

export const TimerContainer = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      <Accordion multiple defaultValue={['land', 'sea']}>
        <Accordion.Item value="land">
          <Accordion.Control>Land</Accordion.Control>
          <Accordion.Panel>
            <Stack align="stretch" className={classes.timerList}>
              {recipes.land.map((recipe) => (
                <Timer label={recipe.label} img={recipe.img} duration={recipe.duration} />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="sea">
          <Accordion.Control>Sea</Accordion.Control>
          <Accordion.Panel>
            {recipes.sea.map((recipe) => (
              <Timer label={recipe.label} img={recipe.img} duration={recipe.duration} />
            ))}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};
