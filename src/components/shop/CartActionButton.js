import React from 'react';
import cartIcon from './images/cart.svg';

function CartActionButton({ cart }) {
  return (
    <div className='Shop-cart-action-button'>
      <img src={cartIcon} alt='' />
      <div className='Shop-cart-count'>
        {cart.length}
      </div>
    </div>
  );
}

export default CartActionButton;
