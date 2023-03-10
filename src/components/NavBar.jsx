
// Link is a react component that works like an anchor tag but links to the routes.
import {Link} from "react-router-dom";
// ReactComponent lets you import images and use them as components.
import { ReactComponent as CrownLogo} from "../assets/crown.svg"

const NavBar = () => {
    return (
        <header className="navigation">
            <Link className="logo-container" to={"/"}><CrownLogo /></Link>
          
            <div className="nav-links">
            <Link className="nav-link" to={"/shop"}>Shop</Link>
            <Link className="nav-link" to={"/auth"}>Sign In</Link>
            </div>
        </header>
    )
}

export default NavBar;