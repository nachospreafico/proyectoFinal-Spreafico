import "/src/App.css";
import "/src/font/Ringbearer.ttf";
import "/src/font/Aniron.ttf";
import Header from "/src/components/Header.jsx";
import NavBar from "/src/components/NavBar.jsx";
import Checkout from "/src/components/Checkout";
import Footer from "../components/Footer";

const CheckoutRoot = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Checkout />
      <Footer />
    </div>
  );
};

export default CheckoutRoot;
