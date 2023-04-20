import { Group, Title, Avatar, Progress, Button, Stack, Container, Text } from '@mantine/core';
import { useStyles } from './index.styles';
import { useState } from 'react';
import { useInterval } from '@mantine/hooks';

export interface TimerProps {
  label: string;
  img: string;
  duration: number;
}

export const Timer = ({ label, img, duration }: TimerProps) => {
  const { classes } = useStyles();
  const [timeLeft, setTimeLeft] = useState(duration);
  const countdown = useInterval(() => {
    setTimeLeft((t) => t - 1);
  }, 1000);

  return (
    <Container>
      <Stack>
        <Group position="apart">
          <Title>{label}</Title>
          <Group>
            <Button onClick={countdown.start} className={classes.button}>
              Start
            </Button>
            <Button onClick={countdown.stop} className={classes.button}>
              Stop
            </Button>
          </Group>
        </Group>
        <Group position="apart" noWrap>
          <Avatar src={img} size="xl" radius={'4rem'} />
          <Stack align="flex-end" className={classes.progressBarContainer}>
            <Text>
              {timeLeft} / {duration}
            </Text>
            <Progress
              size="md"
              radius="xl"
              value={(timeLeft / duration) * 100}
              className={classes.progressBar}
            />
          </Stack>
        </Group>
      </Stack>
    </Container>
  );
};
