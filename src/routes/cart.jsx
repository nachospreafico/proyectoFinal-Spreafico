import "/src/App.css";
import "/src/font/Ringbearer.ttf";
import "/src/font/Aniron.ttf";
import Header from "/src/components/Header.jsx";
import NavBar from "/src/components/NavBar.jsx";
import Cart from "/src/components/Cart.jsx";

const Root = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Cart />
    </div>
  );
};

export default Root;
