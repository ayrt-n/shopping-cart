import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';

describe('Home component', () => {
  it('render homepage with images', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
