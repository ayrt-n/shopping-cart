import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Shop from './shop/Shop';

function RouteSwitch() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default RouteSwitch;
