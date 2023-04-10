import { useState, useEffect } from "react";
import Quotes from "/src/assets/quotes.jsx";
import "./styles/Footer.css";

const Footer = () => {
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    setRandomQuote(Quotes[randomIndex]);
  }, []);
  return (
    <div className="footer" style={{ marginBottom: "20px" }}>
      <p className="quote">{randomQuote}</p>
      <p className="credits">Developed by Ignacio Spreafico</p>
    </div>
  );
};

export default Footer;
