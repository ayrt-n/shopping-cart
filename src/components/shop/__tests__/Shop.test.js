import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Shop from '../Shop';
import userEvent from '@testing-library/user-event';

// Setup mocks
jest.mock('../CartActionButton', () => ({ quantity }) => (
  <div data-testid="cart-action-button">{quantity}</div>
));

jest.mock('../checkout', () => ({ cart }) => (
  <ul aria-label="checkout">
    {cart.map((product, index) => {
      return <li key={index}>{product.name}: {product.quantity}</li>
    })}
  </ul>
));

jest.mock('../ProductCard', () => ({ name, handleSubmit }) => (
  <li>
    {name}
    <button onClick={() => handleSubmit({ name: name, quantity: 1 })}>
      Add {name} to cart
    </button>
  </li>
));

describe('Shop component', () => {
  describe('product card list', () => {
    it('correctly renders out the list of products', () => {
      const products = [
        { name: 'Hat' },
        { name: 'Shirt' },
        { name: 'Pants' },
      ]

      render(<Shop products={products} />);

      const productList = screen.getByRole('list', {name: /products/i})
      const productArray = within(productList).getAllByRole('listitem');

      expect(productArray.length).toBe(3);
    });
  });

  describe('shopping cart', () => {
    it('has quantity zero when no items in cart', () => {
      const products = [
        { name: 'Hat' },
        { name: 'Shirt' },
        { name: 'Pants' },
      ]

      render(<Shop products={products} />);
      const cartQuantity = screen.getByTestId('cart-action-button');

      expect(cartQuantity).toHaveTextContent(0);
    });

    it('updates the quantity in the CartActionButton when product added to cart', () => {
      const products = [
        { name: 'Hat' },
        { name: 'Shirt' },
        { name: 'Pants' },
      ]

      render(<Shop products={products} />);

      const addHatToCart = screen.getByRole('button', {name: /add hat to cart/i});
      const addShirtToCart = screen.getByRole('button', {name: /add shirt to cart/i});
      const addPantsToCart = screen.getByRole('button', {name: /add pants to cart/i});

      userEvent.click(addHatToCart);
      userEvent.click(addPantsToCart);
      userEvent.click(addShirtToCart);

      const cartQuantity = screen.getByTestId('cart-action-button');

      expect(cartQuantity).toHaveTextContent(3);
    });

    it('adds product and quantity to checkout when added to cart', () => {
      const products = [
        { name: 'Hat' },
        { name: 'Shirt' },
        { name: 'Pants' },
      ]

      render(<Shop products={products} />);

      const addHatToCart = screen.getByRole('button', {name: /add hat to cart/i});
      const addPantsToCart = screen.getByRole('button', {name: /add pants to cart/i});

      userEvent.click(addHatToCart);
      userEvent.click(addPantsToCart);
      userEvent.click(addHatToCart);
      userEvent.click(addPantsToCart);
      userEvent.click(addHatToCart);

      const checkoutList = screen.getByRole('list', {name: /checkout/i})
      const checkoutArray = within(checkoutList).getAllByRole('listitem');
      const checkoutItems = checkoutArray.map((item) => item.textContent);

      expect(checkoutItems).toEqual([
        'Hat: 3',
        'Pants: 2',
      ]);
    });
  });
});