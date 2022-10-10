import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CheckoutProductRow from '../CheckoutProductRow';

describe('CheckoutProductRow component', () => {
  it('renders product details', () => {
    const product = {
      name: 'Test',
      quantity: 5,
      price: 1,
    }

    const { container } = render(<CheckoutProductRow product={product} />)

    expect(container).toMatchSnapshot();
  });
});