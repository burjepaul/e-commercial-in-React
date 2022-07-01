import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ImageContainer, CheckoutItemContainer } from "./checkout-item.styles.jsx";

const CheckOutItem = ({ product }) => {
  const { imageUrl, name, quantity, price } = product;

  const { addItemToCart, removeItemFromCart, removeProductFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => removeProductFromCart(product);
  const addItemHandler = () => addItemToCart(product);
  const removeHandler = () => removeItemFromCart(product);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>

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

      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;
