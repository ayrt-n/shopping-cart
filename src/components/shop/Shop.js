import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CartActionButton from './CartActionButton';
import uniqid from 'uniqid';

function Shop() {
  const products = [
    {
      name: 'Hat',
      image: 'hat.png',
      price: '24.99',
      id: uniqid(),
    },
    {
      name: 'Bat',
      image: 'hat.png',
      price: '24.99',
      id: uniqid(),
    },
  ];

  const [cart, setCart] = useState([]);

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

  return (
    <div>
      <ul>
        { products.map((product) => (
          <ProductCard
            name = {product.name}
            image={product.image}
            price={product.price}
            handleSubmit={addToCart}
            key={product.id}
          />
        ))}
      </ul>
      <CartActionButton cart={cart} />
    </div>
  );
}

export default Shop;
