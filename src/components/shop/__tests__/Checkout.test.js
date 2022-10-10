import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkout from '../Checkout';

// Setup mocks
jest.mock('../CheckoutTable', () => () => (
  <div data-testid="checkout-table" />
));

describe('Checkout component', () => {
  it('renders CheckoutTable when cart is not empty', () => {
    const cart = ['fake product'];

    render(<Checkout cart={cart} />);
    const checkoutTable = screen.queryByTestId('checkout-table');

    expect(checkoutTable).not.toBeNull();
  });

  it('renders Cart is empty! when cart is empty', () => {
    const cart = [];

    render(<Checkout cart={cart} />);
    const emptyCartMessage = screen.getByTestId('empty-cart');

    expect(emptyCartMessage).toHaveTextContent('Cart is empty!');
  });
});