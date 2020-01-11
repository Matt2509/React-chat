import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Aff from '../src/components/chat';
test('renders learn react link', () => {
  const { getByText } = render(<Aff />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
