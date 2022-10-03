import { render, screen } from '@testing-library/react';
import { Component1 } from 'react';
import { Component2 } from 'react';
import { Component3 } from 'react';
import { Component4 } from 'react';
import { Component5 } from 'react';
import { Component6 } from 'react';
// import Component1 from './Component1';

test('renders learn react link', () => {
  render(<Component1 /> );
  render(<Component2 /> );
  render(<Component3 /> );
  render(<Component4 /> );
  render(<Component5 /> );
  render(<Component6 /> );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
