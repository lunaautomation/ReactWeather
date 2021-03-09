import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a beg to enter a location', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/enter a location/i);
  expect(linkElement).toBeInTheDocument();
});
