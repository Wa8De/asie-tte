// // Card.js
// import React, { useState } from 'react';
// import '../styles/Menu.css';

// const Card = ({ title, photo, description, pricing, handleAddToCart }) => {
//   const [selectedSize, setSelectedSize] = useState('S');

//   const handleOrderNow = () => {
//     handleAddToCart();
//   };

//   return (
//     <div className="card-container">
//       <img src={photo} alt="A picture of the food" height="250" width="250" />
//       <h3 className="food-title">{title}</h3>
//       <div className="radios">
//         {['S', 'M', 'L'].map((size) => (
//           <React.Fragment key={size}>
//             <label
//               htmlFor={`size-${title}-${size}`}
//               className="food-description"
//             >
//               {size}
//             </label>
//             <input
//               type="radio"
//               name={`size-${title}`}
//               id={`size-${title}-${size}`}
//               value={size}
//               checked={selectedSize === `size-${title}-${size}`}
//               onChange={() => setSelectedSize(`size-${title}-${size}`)}
//             />
//           </React.Fragment>
//         ))}
//       </div>
//       <h4 className="food-description">
//         {pricing[
//           selectedSize === `size-${title}-S`
//             ? 0
//             : selectedSize === `size-${title}-M`
//             ? 1
//             : 2
//         ] + ' dh'}
//       </h4>
//       <button className="animatedBtn order" onClick={handleOrderNow}>
//         Order Now
//       </button>
//     </div>
//   );
// };

// export default Card;
 // Card.js
import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import '../styles/Menu.css';

const Card = (props) => {
  const { setCartCount, cartItems, setCartItems } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState('S');

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);

    const existingItem = cartItems.find((item) => item.title === props.title);
    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.title === props.title ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      const newItem = {
        title: props.title,
        photo: props.photo,
        description: props.description,
        pricing: props.pricing,
        quantity: 1,
        size: selectedSize,
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  return (
    <div className="card-container">
      <img src={props.photo} alt="A picture of the food" height="250" width="250" />
      <h3 className="food-title">{props.title}</h3>
      <div className="radios">
        {['S', 'M', 'L'].map((size) => (
          <React.Fragment key={size}>
            <label htmlFor={`size-${props.title}-${size}`} className="food-description">
              {size}
            </label>
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
      <h4 className="food-description">
        {props.pricing[
          selectedSize === `size-${props.title}-S`
            ? 0
            : selectedSize === `size-${props.title}-M`
            ? 1
            : 2
        ] + ' dh'}
      </h4>
      <button className="animatedBtn order" onClick={handleAddToCart}>
        Commander
      </button>
    </div>
  );
};

export default Card;
