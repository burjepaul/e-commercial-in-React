import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import "./card-icon.styles.scss";

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleDropdown = () => setIsCartOpen(!isCartOpen);


  return (
    <div className="cart-icon-container" onClick={toggleDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CardIcon;
