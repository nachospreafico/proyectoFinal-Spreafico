import CartLogo from "/src/assets/cart-logo.png";
import "./styles/CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-div">
      <img src={CartLogo} className="cart"></img>
      <div id="items-qty">0</div>
    </div>
  );
};

export default CartWidget;
