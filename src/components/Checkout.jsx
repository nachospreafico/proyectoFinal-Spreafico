import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./styles/Checkout.css";

const Checkout = () => {
  //Estado para mantener deshabilitado el boton de confirmar compra hasta que se den las condiciones.
  const [enableConfirm, setEnableConfirm] = useState(true);
  //Estado para desplegar el mensaje de "Venta confirmada" cuando se den las condiciones.
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

  const { clearCart, cartTotal, sendOrder, total, orderId } = useCartContext();

  //Variables de cada input.
  const name = document.querySelector("#name");
  const lastName = document.querySelector("#last-name");
  const phone = document.querySelector("#phone");
  const email = document.querySelector("#email");

  //Validacion muy basica del email.
  function validateEmail() {
    let email1 = document.querySelector("#email").value;
    let email2 = document.querySelector("#confirm-email").value;
    if (email1 == email2 && cartTotal.length > 0) {
      setEnableConfirm(false);
    } else {
      setEnableConfirm(true);
    }
  }

  //Al darle click al boton de confirmacion se ejecuta sendOrder, clearCart y se setea a
  //true el estado de purchaseConfirmed para que se renderize el mensaje de confirmacion.
  function handlePurchaseConfirmation() {
    sendOrder(name.value, lastName.value, phone.value, email.value);
    clearCart();
    setPurchaseConfirmed(true);
    setEnableConfirm(true);
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-header">Your Cart</h1>
      <ul className="checkout-list-container">
        {cartTotal.map((item) => {
          return (
            <li className="checkout-item-container" key={item.id}>
              <img src={item.imgSrc} className="item-image"></img>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${item.quantity * item.price}</p>
            </li>
          );
        })}
      </ul>
      <h3 className="checkout-total">Total: ${total}</h3>
      <form className="user-data">
        <h3 className="form-header">Please enter you information</h3>
        <input id="name" type="text" placeholder="Name" required></input>
        <input
          id="last-name"
          type="text"
          placeholder="Last Name"
          required
        ></input>
        <input
          id="phone"
          type="text"
          placeholder="Phone Number"
          required
        ></input>
        <input id="email" type="email" placeholder="Email" required></input>
        <input
          id="confirm-email"
          type="email"
          placeholder="Confirm Email"
          onChange={validateEmail}
          required
        ></input>
        {!enableConfirm ? null : (
          <p
            style={{
              fontSize: "0.75rem",
              color: "red",
              fontStyle: "italic",
              fontFamily: "Aniron",
            }}
          >
            Emails don't match
          </p>
        )}
        <button
          type="button"
          className="confirm-button"
          onClick={handlePurchaseConfirmation}
          disabled={enableConfirm}
        >
          Confirm Purchase
        </button>
      </form>
      {purchaseConfirmed ? (
        <div className="confirmation-message-container">
          <h1 className="confirmation-title">
            Thank you {name.value} for shopping with us!
          </h1>
          <p className="confirmation-message">
            Your confirmation and tracking number is {orderId}
          </p>
          <Link to="/">
            <button>Go back to keep Shopping</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Checkout;
