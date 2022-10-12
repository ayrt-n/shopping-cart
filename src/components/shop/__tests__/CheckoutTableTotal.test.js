import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CheckoutTableTotal from '../CheckoutTableTotal';

describe('CheckoutTableTotal component', () => {
  it('renders table row correctly', () => {
    const tbody = document.createElement('tbody');

    const { container } = render(<CheckoutTableTotal cart={[]} />, {
      container: document.body.appendChild(tbody)
    });
    
    expect(container).toMatchSnapshot();
  });

  it('calculates the total and displays in table row', () => {
    const cart = [
      {
        quantity: 2,
        price: 2,
      },
      {
        quantity: 5,
        price: 5,
      },
    ]

    const tbody = document.createElement('tbody');

    render(<CheckoutTableTotal cart={cart} />, {
      container: document.body.appendChild(tbody)
    });
    
    const tableTotal = screen.getByTestId('checkout-total');

    expect(tableTotal).toHaveTextContent('$29');
  });
});