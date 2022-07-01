import "./card-item.styles.jsx";

import { CartItemContainer, CartItemImg, ItemDetails, Name, Price } from "./card-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
        <CartItemImg src={imageUrl} alt={name}/>
      <ItemDetails>
        <Name>{name}</Name>
        <Price>{quantity} x ${price}</Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
