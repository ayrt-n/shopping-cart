import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Checkout from '../Checkout';

// Setup mocks
jest.mock('../CheckoutTable', () => () => (
  <div data-testid="checkout-table" />
));

describe('Checkout component', () => {
  describe('checkout table', () => {
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

  describe('checkout buttons', () => {
    it('renders checkout button when cart is not empty', () => {
      const cart = ['fake product'];

      render(<Checkout cart={cart} />);
      const checkoutButton = screen.queryByRole('button', {name: /checkout/i});

      expect(checkoutButton).not.toBeNull();
    });

    it('does not render checkout button when cart is empty', () => {
      const cart = [];

      render(<Checkout cart={cart} />);
      const checkoutButton = screen.queryByRole('button', {name: /checkout/i});

      expect(checkoutButton).toBeNull();
    });

    it('sends closeMenu on cancel button click', () => {
      const cart = [];
      const closeMenuMock = jest.fn();

      render(<Checkout cart={cart} closeMenu={closeMenuMock} />);
      const cancelButton = screen.getByRole('button', {name: /cancel/i});
      userEvent.click(cancelButton);

      expect(closeMenuMock).toHaveBeenCalled();
    });
  });

  describe('menu active', () => {
    it('has class hidden when menuActive is false', () => {
      const cart = [];

      render(<Checkout cart={cart} menuActive={false} />);
      const checkout = screen.getByTestId('checkout');

      expect(checkout).toHaveClass('hidden');
    });

    it('does not have class hidden when menuActive is true', () => {
      const cart = [];

      render(<Checkout cart={cart} menuActive={true} />);
      const checkout = screen.getByTestId('checkout');

      expect(checkout).not.toHaveClass('hidden');
    });
  });
});