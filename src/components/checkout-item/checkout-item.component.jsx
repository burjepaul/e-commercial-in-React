import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";


const CheckOutItem = ({ product }) => {
  const { imageUrl, name, quantity, price } = product;

  const { addItemToCart, removeItemFromCart, removeProductFromCart} = useContext(CartContext)

  const clearItemHandler = () => removeProductFromCart(product);
  const addItemHandler = () => addItemToCart(product);
  const removeHandler = () => removeItemFromCart(product)

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>

      <div className="quantity">
        <div className="arrow" onClick={removeHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
        &#10095;
        </div>
      </div>

      <span className="price">{price}</span>

      <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
    </div>
  );
};

export default CheckOutItem;
