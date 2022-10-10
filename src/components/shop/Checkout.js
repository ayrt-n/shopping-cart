import React from 'react';
import CheckoutTable from './CheckoutTable';

function Checkout({ cart, menuActive, closeMenu }) {
  return (
    <div className={menuActive ? "Shop-checkout" : "Shop-checkout hidden"} data-testid="checkout">
      <h1>Shopping Cart</h1>
      {cart.length === 0
        ? <div className="Checkout-message" data-testid="empty-cart">Cart is empty!</div>
        : <CheckoutTable cart={cart} />
      }
      <div className="Checkout-buttons">
        {cart.length !== 0 &&
          <button className="Shop-checkout-button">Checkout</button>
        }
        <button className="Shop-checkout-button cancel" onClick={closeMenu}>Cancel</button>
      </div>
    </div>
  );
}

export default Checkout
