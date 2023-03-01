import "./styles/NavBar.css";
import Cart from "./CartWidget.jsx";

const NavBar = () => {
  return (
    <div>
      <ul className="container">
        <li className="item-1">
          <a href="#">Rings</a>
        </li>
        <li className="item-2">
          <a href="#">Hobbit Pipes</a>
        </li>
        <li className="item-3">
          <a href="#">Lembas Bread</a>
        </li>
        <li className="item-4">
          <a href="#">Maps</a>
        </li>
        <li>
          <Cart />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
