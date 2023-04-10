import Imagen from "/src/assets/Logo.png";
import "./styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <img src={Imagen} id="logo"></img>
      </Link>
      <h1 className="titulo">FRODO'S BARGAINS</h1>
    </div>
  );
};

export default Header;
