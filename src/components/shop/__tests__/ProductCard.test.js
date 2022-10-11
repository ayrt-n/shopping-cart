import React, { useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ProductCard from '../ProductCard';

// Setup mocks
jest.mock('../AddToCartForm', () => ({ handleSubmit }) => (
  <button onClick={() => handleSubmit(1)}>Mock Form</button>
));

// ProductCard Tests
describe('ProductCard component', () => {
  it('correctly renders product card', () => {
    const product = { name: 'Test', image: 'test.jpg', price: 1 };

    const { container } = render(
      <ProductCard
        name={product.name}
        image={product.image}
        price={product.price}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('calls handleSubmit with correct arguments when called from AddToCartForm', () => {
    const addToCartMock = jest.fn();
    const product = { name: 'Test', image: 'test.jpg', price: 1 };

    render(
      <ProductCard
        name={product.name}
        image={product.image}
        price={product.price}
        handleSubmit={addToCartMock}
      />
    );

    const addToCartButton = screen.getByRole('button', {name: /mock form/i});
    userEvent.click(addToCartButton);

    expect(addToCartMock).toHaveBeenCalledTimes(1)
    expect(addToCartMock).toHaveBeenCalledWith({
      ...product,
      quantity: 1
    })
  });
});
