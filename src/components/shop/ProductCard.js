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
    <li>
      <img src={imageSrc} alt={image} />
      <p>Timberland</p>
      <h2>{name}</h2>
      <p>${price}</p>
      <AddToCartForm handleSubmit={addToCart} />
    </li>
  );
}

export default ProductCard;
