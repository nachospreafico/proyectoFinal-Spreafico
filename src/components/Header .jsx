import Imagen from "./assets/Logo.png";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="titulo">FRODO 'S BARGAINS</h1>
      <img src={Imagen} id="logo"></img>
    </div>
  );
};

export default Header;
