import React from 'react';
import CheckoutProductRow from './CheckoutProductRow';
import CheckoutTableTotal from './CheckoutTableTotal';

function CheckoutTable({ cart }) {
  return (
    <table className="Checkout-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Qty.</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) => {
          return (
            <CheckoutProductRow product={product} key={product.id} />
          );
        })}
        <CheckoutTableTotal cart={cart} />
      </tbody>
    </table>
  );
}

export default CheckoutTable;
