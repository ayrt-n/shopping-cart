import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import CartActionButton from './CartActionButton';
import Checkout from './Checkout';
import '../../styles/Shop.css';
import uniqid from 'uniqid';

function Shop() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [menuActive, setMenuActive] = useState(false);
  const products = [
    {
      name: 'STUSSY BASIC BLACK SWEATER',
      image: 'stussy-black-sweater.webp',
      price: '220.00',
      id: uniqid(),
    },
    {
      name: 'STUSSY BASIC BLACK T-SHIRT',
      image: 'stussy-black-shirt.webp',
      price: '24.99',
      id: uniqid(),
    },
    {
      name: 'STUSSY BLACK LION T-SHIRT',
      image: 'stussy-lion-shirt.webp',
      price: '24.99',
      id: uniqid(),
    },
    {
      name: 'STUSSY BLUE SQUARED T-SHIRT',
      image: 'stussy-blue-s-shirt.webp',
      price: '24.99',
      id: uniqid(),
    },
    {
      name: 'STUSSY BUCKET HAT',
      image: 'stussy-bucket-hat.webp',
      price: '24.99',
      id: uniqid(),
    },
  ];

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
    setMenuActive(menuActive ? false : true)
  };

  // On cart update, calculate how many items in cart and set quantity equal
  useEffect(() => {
    setQuantity(
      cart.reduce((sum, item) => (sum + item.quantity), 0)
    );
  }, [cart]);

  return (
    <div className='Shop'>
      <ul className='Shop-grid'>
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
      <CartActionButton quantity={quantity} handleClick={toggleMenu} />
      <Checkout cart={cart} menuActive={menuActive} closeMenu={toggleMenu} />
    </div>
  );
}

export default Shop;
