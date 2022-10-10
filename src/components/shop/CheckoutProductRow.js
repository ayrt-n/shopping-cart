import React from 'react';

function CheckoutProductRow({ product }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>${product.price * product.quantity}</td>
    </tr>
  );
}

export default CheckoutProductRow;
