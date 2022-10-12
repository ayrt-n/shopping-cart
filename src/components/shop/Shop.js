import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CartActionButton from './CartActionButton';
import Checkout from './Checkout';
import '../../styles/Shop.css';


function Shop({ products }) {
  const [cart, setCart] = useState([]);
  const [menuActive, setMenuActive] = useState(false);

  // On addToCart take product object and add to cart array or add quantity if item exists
  const addToCart = (cartObject) => {
    let newItem = true;
    const updatedCart = [];

    cart.forEach((item) => {
      if (item.name === cartObject.name) {
        newItem = false;
        updatedCart.push(
          {
            ...item,
            quantity: item.quantity + cartObject.quantity,
          }
        );
      } else {
        updatedCart.push(item);
      }
    });

    if (newItem) { updatedCart.push(cartObject); }

    setCart(updatedCart);
  }

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  };

  return (
    <div className='Shop'>
      <ul className='Shop-grid' aria-label='products'>
        { products.map((product) => (
          <ProductCard
            name={product.name}
            image={product.image}
            price={product.price}
            handleSubmit={addToCart}
            key={product.id}
          />
        ))}
      </ul>

      <CartActionButton
        quantity={cart.reduce((sum, item) => (sum + item.quantity), 0)}
        handleClick={toggleMenu}
      />

      <Checkout cart={cart} menuActive={menuActive} closeMenu={toggleMenu} />
    </div>
  );
}

export default Shop;
