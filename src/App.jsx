import "./App.css";
import "./font/Ringbearer.ttf";
import "./font/Aniron.ttf";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import ItemListcontainer from "./components/ItemListContainer.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <ItemListcontainer
        greeting="Not all those who wander are lost"
        author="J.R.R. Tolkien"
      />
    </div>
  );
};

export default App;
