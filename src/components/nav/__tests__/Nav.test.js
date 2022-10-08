import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Nav from '../Nav';

describe('Nav component', () => {
  it('renders nav with links', () => {
    const { container } = render(<Nav />, {wrapper: MemoryRouter});
    expect(container).toMatchSnapshot();
  });
});
