import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import CartPreview from "./CartPreview";
import CartLogo from "/src/assets/cart-logo.png";
import "./styles/CartWidget.css";

const CartWidget = () => {
  const { cartTotal } = useCartContext();

  const totalQuantity = cartTotal.reduce((acc, item) => acc + item.quantity, 0);

  //Este estado y las 2 funciones por debajo controlan la funcionalidad del CartPreview.
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="cart-div"
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={CartLogo} className="cart"></img>
      <div id="items-qty">
        <p>{totalQuantity}</p>
      </div>
      <i className="fas fa-shopping-cart"></i>
      {cartTotal.length > 0 && showTooltip && (
        <CartPreview cartTotal={cartTotal} showTooltip={showTooltip} />
      )}
    </div>
  );
};

export default CartWidget;
