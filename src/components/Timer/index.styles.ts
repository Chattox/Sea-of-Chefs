import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    border: '0.1rem solid',
    borderColor: theme.colors.gray[5],
    borderRadius: '0.2rem',
    maxWidth: '90%',
    padding: '1rem',
    margin: '0rem',
  },
  button: {
    width: '5rem',
  },
  progressBarContainer: {
    width: '100%',
    height: '100%',
  },
  progressBar: {
    width: '100%',
    height: '1rem',
  },
}));
