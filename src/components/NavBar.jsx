import { useContext } from "react";
import { UserContext } from "../contexts/User.context";
import { CartContext } from "../contexts/Cart.context";
import { signOutUser } from "../utils/firebase.utils";
// Link is a react component that works like an anchor tag but links to the routes.
import { Link } from "react-router-dom";
// ReactComponent lets you import images and use them as components.
import { ReactComponent as CrownLogo } from "../assets/crown.svg";

import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const handleSignOut = async () => {
    await signOutUser();
  };
  return (
    <header className="navigation">
      <Link className="logo-container" to={"/"}>
        <CrownLogo />
      </Link>

      <div className="nav-links">
        <Link className="nav-link" to={"/shop"}>
          Shop
        </Link>
        {currentUser ? (
          <span className="nav-link" onClick={handleSignOut}>
            Sign Out
          </span>
        ) : (
          <Link className="nav-link" to={"/auth"}>
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </header>
  );
};

export default NavBar;
