import React, { useState } from 'react';

function AddToCartForm({ handleSubmit }) {
  const [count, setCount] = useState(0);

  const changeCount = (e) => {
    setCount(e.target.value)
  };

  const preventMinus = (e) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  }
  
  const incrementCount = (e) => {
    e.preventDefault();
    // Cast prevCount to number using '+' to prevent appending to string
    setCount((prevCount) => +prevCount + 1); 
  };
  
  const decrementCount = (e) => {
    e.preventDefault();
    if (count > 0) {
      // Cast prevCount to number using '+' to prevent appending to string
      setCount((prevCount) => +prevCount - 1);
    }
  };

  const submitQuantity = (e) => {
    e.preventDefault();
    const quantity = +e.target.quantity.value;

    if (quantity > 0) {
      handleSubmit(+e.target.quantity.value);
      setCount(0);
    }
  }

  return (
    <form onSubmit={submitQuantity}>
      <div>
        <button onClick={decrementCount}>-</button>
        <input
          type="number"
          value={count}
          onKeyPress={preventMinus}
          onChange={changeCount}
          min="0"
          name="quantity"
        />
        <button onClick={incrementCount}>+</button>
      </div>
      <button type='submit'>Add to cart</button>
    </form>
  );
}

export default AddToCartForm;
