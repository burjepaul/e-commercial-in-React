import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utiles/firebase/firebase.utiles";

import CardIcon from "../../components/card-icon/card-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./navigation.styles.jsx";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles.jsx";

const Navigoation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)

  const signOutHandler = async () =>{
    await signOutUser();
    setCurrentUser(null)
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutHandler}> Sing Out</NavLink>
          ) : (
            <NavLink to="/auth">
              Sing In
            </NavLink>
          )}
          <CardIcon/>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigoation;
