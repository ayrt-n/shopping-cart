import React from 'react';

function CheckoutTableTotal({ cart }) {
  const total = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  return (
    <tr>
      <th colSpan="2">Total</th>
      <td data-testid="checkout-total">${total}</td>
    </tr>
  );
}

export default CheckoutTableTotal;
