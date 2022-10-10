import React from 'react';

function CheckoutProductRow({ product }) {
  const total = (Math.round(product.price * product.quantity * 100) / 100).toFixed(2);

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>${total}</td>
    </tr>
  );
}

export default CheckoutProductRow;
