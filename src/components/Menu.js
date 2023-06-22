// Menu.js
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Card from './Card';
import Data from './Data';
import '../styles/Menu.css';
import { CartContext } from './CartContext';

export default function Menu() {
  const { setCartCount } = useContext(CartContext); // Access setCartCount from context

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <Container>
      <h3>Menu</h3>
      <div className="container menu my-3 parent">
        {Data.map((elem, index) => (
          <Card
            key={index}
            title={elem.title}
            photo={elem.photo}
            description={elem.description}
            pricing={elem.pricing}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </Container>
  );
}
