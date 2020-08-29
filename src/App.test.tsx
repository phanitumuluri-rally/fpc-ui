import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app with header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Rally Health India/i);

  expect(headerElement).toBeInTheDocument();
});
