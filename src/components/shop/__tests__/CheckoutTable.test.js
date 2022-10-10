import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CheckoutTable from '../CheckoutTable';

// Setup mocks
jest.mock('../CheckoutProductRow', () => ({ product }) => (
  <tr>
    <td>{product.name}</td>
    <td>{product.quantity}</td>
    <td>{product.quantity * product.price}</td>
  </tr>
));

jest.mock('../CheckoutTableTotal', () => ({ cart }) => (
  <tr>
    <th colSpan="2">Total</th>
    <td>$TOTAL</td>
  </tr>
));

// Setup props
const cart = [
  {id: 'test1', name: 'Test1', quantity: 1, price: 1},
  {id: 'test1', name: 'Test2', quantity: 1, price: 1},
  {id: 'test1', name: 'Test3', quantity: 1, price: 1},
];

describe('CheckoutTable component', () => {
  it('correctly renders checkout table given array of products', () => {
    const { container } = render(<CheckoutTable cart={cart} />);

    expect(container).toMatchSnapshot();
  });
});

