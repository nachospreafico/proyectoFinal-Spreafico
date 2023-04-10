const Item = ({ itemId, name, imgSrc, quantity, totalPrice, removeItem }) => {
  return (
    <div className="card" key={itemId}>
      <li className="card-body">
        <h3 className="card-title">{name}</h3>
        <img className="item-image" src={imgSrc}></img>
        {quantity && <p>Quantity: {quantity}</p>}
        {totalPrice && (
          <p style={{ fontWeight: "1000" }}>Total Price: ${totalPrice} </p>
        )}

        {removeItem && (
          <button
            style={{
              width: "fit-content",
              padding: "5px",
              marginLeft: "auto",
              marginRigth: "auto",
            }}
            onClick={removeItem}
          >
            Remove Item
          </button>
        )}
      </li>
    </div>
  );
};

const ItemWithDetail = ({ id, name, description, price, stock, imgSrc }) => {
  return (
    <div className="card-detail" key={id}>
      <li className="card-body-detail">
        <h3 className="card-title-detail">{name}</h3>
        <img className="item-image-detail" src={imgSrc}></img>
        <p className="description">{description}</p>
        <p className="price">
          Price: <span className="price">${price}</span>
        </p>
      </li>
      <p className="stock">Stock: {stock}</p>
    </div>
  );
};

export { Item };
export { ItemWithDetail };
