import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "../styles/Menu.css";

const CartCard = (props) => {
  const { cartItems } = useContext(CartContext);
  const item = cartItems.find((item) => item.title === props.title);
  const size = item.size;
  const selectedSizePrice =
    item.pricing[size === "S" ? 0 : size === "M" ? 1 : 2];

  return (
    <div className="container menu my-3 parent">
      <div className="card-container">
        <img
          src={props.photo}
          alt="A picture of the food"
          height="250"
          width="250"
        />
        <h3 className="food-title">{props.title}</h3>
        <h4 className="food-description">{selectedSizePrice} dh</h4>{" "}
        {/* Display the selected size price */}
      </div>
    </div>
  );
};

export default CartCard;
