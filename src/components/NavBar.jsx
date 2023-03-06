import "./styles/NavBar.css";
import CartWidget from "./CartWidget.jsx";

const NavBar = () => {
  return (
    <div>
      <ul className="container">
        <li className="item-1">
          <a href="#">Rings of Power</a>
        </li>
        <li className="item-2">
          <a href="#">Hobbit Pipes</a>
        </li>
        <li className="item-3">
          <a href="#">Lembas Bread</a>
        </li>
        <li className="item-4">
          <a href="#">Maps & Lore</a>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
