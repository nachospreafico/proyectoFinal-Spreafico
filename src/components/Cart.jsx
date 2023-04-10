import { useCartContext } from "../context/CartContext";
import { Item } from "./Item.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import "./styles/Cart.css";

const Cart = () => {
  const { cartTotal, removeItem, clearCart, total } = useCartContext();

  // Si el carrito tiene items, se renderiza el primer bloque de codigo; si no, se renderiza el segundo.
  return (
    <div>
      {cartTotal.length > 0 ? (
        <div className="cart-info">
          <h2 className="cart-total-price">Cart Total Price: ${total}</h2>
          <Link to={"/checkout"}>
            <button className="checkout-button">Proceed to Checkout</button>
          </Link>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      ) : null}
      <div className="cart-container">
        {cartTotal.map((item) => (
          <Item
            key={item.id}
            itemId={item.id}
            name={item.name}
            quantity={item.quantity}
            imgSrc={item.imgSrc}
            totalPrice={item.totalPrice}
            removeItem={() => removeItem(item)}
          />
        ))}
      </div>
      {cartTotal.length == 0 ? (
        <div className="empty-cart-message">
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="go-back-button">
              Your cart is empty. Shop now!
            </button>
          </Link>
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default Cart;
