import { Group, Title, Avatar, Progress, Button, Stack, Container, Text } from '@mantine/core';
import { useState } from 'react';
import { useInterval } from '@mantine/hooks';

import { useStyles } from './index.styles';
import { RecipeProps } from '../../data/recipes';

export const Timer = ({ label, img, duration }: RecipeProps) => {
  const { classes } = useStyles();
  const [timeLeft, setTimeLeft] = useState(duration.cooked);
  const [inProgress, setInProgress] = useState(false);

  const countdown = useInterval(() => {
    setTimeLeft((t) => t - 1);
  }, 1000);

  const startTimer = () => {
    countdown.start();
    setInProgress(true);
  };

  const resetTimer = () => {
    setTimeLeft(duration.cooked);
    setInProgress(false);
  };

  return (
    <Container>
      <Stack>
        <Group position="apart">
          <Title>{label}</Title>
          <Group>
            <Button onClick={startTimer} className={classes.button}>
              Start
            </Button>
            <Button
              onClick={countdown.active ? countdown.stop : inProgress ? resetTimer : countdown.stop}
              className={classes.button}
            >
              {countdown.active ? 'Stop' : inProgress ? 'Reset' : 'Stop'}
            </Button>
          </Group>
        </Group>
        <Group position="apart" noWrap>
          <Avatar src={img} size="xl" radius={'4rem'} />
          <Stack align="flex-end" className={classes.progressBarContainer}>
            <Text>
              {timeLeft} / {duration.cooked}
            </Text>
            <Progress
              size="md"
              radius="xl"
              value={(timeLeft / duration.cooked) * 100}
              className={classes.progressBar}
            />
          </Stack>
        </Group>
      </Stack>
    </Container>
  );
};
