import React from 'react';
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import CartActionButton from '../CartActionButton';

describe('CartActionButton component', () => {
  it('displays quantity provided as prop if less than 9', () => {
    render(<CartActionButton quantity={5} />);
    const quantity = screen.getByTestId('cart-quantity');
    expect(quantity).toHaveTextContent('5');
  });

  it('displays 9+ for quantity if greater than 9', () => {
    render(<CartActionButton quantity={1000} />);
    const quantity = screen.getByTestId('cart-quantity');
    expect(quantity).toHaveTextContent('9+');
  });

  it('sends handleClick on click', () => {
    const mockClick = jest.fn();
    render(<CartActionButton handleClick={mockClick} />);

    const cartActionButton = screen.getByRole('button', {name: /open cart/i});
    userEvent.click(cartActionButton);

    expect(mockClick).toHaveBeenCalled();
  });
});