import "./styles/NavBar.css";
import CartWidget from "./CartWidget.jsx";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="container">
        <NavLink to={"/"} className="link">
          Home
        </NavLink>
        <NavLink to={"/category/rings/"} className="link">
          Rings of Power
        </NavLink>
        <NavLink to={"/category/pipes/"} className="link">
          Pipes
        </NavLink>
        <NavLink to={"/category/edibles/"} className="link">
          Edibles
        </NavLink>
        <NavLink to={"/category/maps/"} className="link">
          Maps & Lore
        </NavLink>
        <NavLink to={"/category/weapons/"} className="link">
          Weapons
        </NavLink>
        <NavLink to={"/cart"} className="cartWidget link">
          <CartWidget />
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
