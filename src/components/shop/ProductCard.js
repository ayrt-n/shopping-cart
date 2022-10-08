import React from 'react';
import AddToCartForm from './AddToCartForm';

function ProductCard({ name, image, price, handleSubmit }) {
  const imageSrc = require(`./images/${image}`);

  const addToCart = (quantity) => {
    handleSubmit(
      {
        name,
        image,
        price,
        quantity,
      }
    )
  }

  return (
    <li className='Shop-grid-item'>
      <img src={imageSrc} alt={image} />
      <h2>{name}</h2>
      <p className='Shop-price'>${price}</p>
      <AddToCartForm handleSubmit={addToCart} />
    </li>
  );
}

export default ProductCard;
