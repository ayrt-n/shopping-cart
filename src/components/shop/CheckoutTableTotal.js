import React from 'react';

function CheckoutTableTotal({ cart }) {
  const total = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  return (
    <table>
      <tbody>
        <tr>
          <th colSpan="2">Total</th>
          <td data-testid="checkout-total">${total}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CheckoutTableTotal;
