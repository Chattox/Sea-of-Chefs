import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders timer', () => {
  render(<App />);
  const linkElement = screen.getByText(/Test Timer/i);
  expect(linkElement).toBeInTheDocument();
});
