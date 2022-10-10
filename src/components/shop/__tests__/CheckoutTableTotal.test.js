import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CheckoutTableTotal from '../CheckoutTableTotal';

describe('CheckoutTableTotal component', () => {
  it('Calculates the total and displays in table row', () => {
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

    render(<CheckoutTableTotal cart={cart} />)
    const tableTotal = screen.getByTestId('checkout-total');

    expect(tableTotal).toHaveTextContent('$29');
  });
});