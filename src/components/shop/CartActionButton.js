import React from 'react';
import cartIcon from './images/cart.svg';

function CartActionButton({ quantity, handleClick }) {
  if (quantity > 9) {
    quantity = '9+';
  }

  return (
    <button className='Shop-cart-action-button' onClick={handleClick} aria-label="Open cart">
      <img src={cartIcon} alt='' />
      <div className='Shop-cart-count'>
        {quantity}
      </div>
    </button>
  );
}

export default CartActionButton;
