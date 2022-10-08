import React from 'react';
import image1 from './images/stussy-home-1.webp';
import image2 from './images/stussy-home-2.webp';
import image3 from './images/stussy-home-3.webp';
import image4 from './images/stussy-home-4.webp';
import image5 from './images/stussy-home-5.webp';
import '../../styles/Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="Home-showcase-container">
        <img src={image1} alt="Man wearing black stussy shirt"/>
        <img src={image2} alt="Man wearing black stussy hoodie"/>
        <img src={image3} alt="Stussy denim jacket"/>
        <img src={image4} alt="Man wearing white stussy shirt and brown pants"/>
        <img src={image5} alt="Miniature eight ball sitting on countertop"/>
      </div>
    </div>
  );
}

export default Home;
