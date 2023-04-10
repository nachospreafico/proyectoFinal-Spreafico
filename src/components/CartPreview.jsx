function CartPreview({ cartTotal }) {
  const total = cartTotal.reduce((acc, item) => acc + item.totalPrice, 0);

  //Este componente renderiza una vista previa del carrito cuando el mouse esta sobre el icono del carrito.
  return (
    <div className="cart-tooltip">
      <h3 className="tooltip-title">Your Cart</h3>
      <div className="tooltip-header">
        <p></p>
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Item Subtotal</p>
      </div>
      {cartTotal.map((item) => (
        <div key={item.id} className="tooltip-item-container">
          <img
            src={item.imgSrc}
            style={{ width: "50%", textAlign: "center" }}
          ></img>
          <p className="tooltip-item-name">{item.name}</p>
          <p className="tooltip-item-price">{item.price}</p>
          <p className="tooltip-item-quantity">{item.quantity}</p>
          <p className="tooltip-item-subtotal">${item.price * item.quantity}</p>
        </div>
      ))}
      <div>Total: ${total}</div>
    </div>
  );
}

export default CartPreview;
