import React, { useState } from 'react';
import "../styles/Menu.css";

const Card = (props) => {
  const [selectedSize, setSelectedSize] = useState('S');

  return (
    <div className='card-container'>
      <img
        src={props.photo}
        alt="A picture of the food"
        height="250"
        width="250"
      />
      <h3 className="food-title">{props.title}</h3>
      {/* <h6 className="food-description">{props.description}</h6> */}
      <div className="radios">
        {['S', 'M', 'L'].map((size) => (
          <React.Fragment key={size}>
            <label htmlFor={`size-${props.title}-${size}`} className='food-description'>{size}</label>
            <input
              type="radio"
              name={`size-${props.title}`}
              id={`size-${props.title}-${size}`}
              value={size}
              checked={selectedSize === `size-${props.title}-${size}`}
              onChange={() => setSelectedSize(`size-${props.title}-${size}`)}
            />
          </React.Fragment>
        ))}
      </div>
      <h4 className='food-description'>
        {props.pricing[
          selectedSize === `size-${props.title}-S` ? 0
          : selectedSize === `size-${props.title}-M` ? 1
          : 2
        ]+" dh"}
      </h4>
      <button className='animatedBtn order'>Order Now</button>
    </div>
  );
}

export default Card;
