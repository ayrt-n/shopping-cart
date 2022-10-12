import React from 'react';
import './styles/App.css';
import Nav from './components/nav/Nav';
import RouteSwitch from './components/RouteSwitch';
import uniqid from 'uniqid';

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

function App() {
  return (
    <div className="App">
      <Nav />
      <RouteSwitch products={products} />
    </div>
  );
}

export default App;
