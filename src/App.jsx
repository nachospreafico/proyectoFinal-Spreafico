import "./App.css";
import "./font/Ringbearer.ttf";
import "./font/Aniron.ttf";
import NavBar from "./components/NavBar.jsx";
import Imagen from "./assets/Logo.png";
import ItemListcontainer from "./components/ItemListContainer.jsx";

const App = () => {
  return (
    <div>
      <div className="header">
        <Logo />
        <Titulo />
      </div>
      <NavBar />
      <ItemListcontainer
        greeting="Not all those who wander are lost"
        author="J.R.R. Tolkien"
      />
    </div>
  );
};

const Titulo = () => {
  return <h1 className="titulo">FRODO 'S BARGAINS</h1>;
};

const Logo = () => {
  return <img src={Imagen} id="logo"></img>;
};

export default App;
