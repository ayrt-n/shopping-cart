import React from 'react';
import cartIcon from './images/cart.svg';

function CartActionButton({ quantity }) {
  if (quantity > 9) {
    quantity = '9+';
  }

  return (
    <div className='Shop-cart-action-button'>
      <img src={cartIcon} alt='' />
      <div className='Shop-cart-count'>
        {quantity}
      </div>
    </div>
  );
}

export default CartActionButton;
