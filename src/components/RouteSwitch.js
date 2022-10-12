import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Shop from './shop/Shop';

function RouteSwitch({ products }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop products={products} />} />
    </Routes>
  );
}

export default RouteSwitch;
