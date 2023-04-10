import "./styles/ItemCount.css";
import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext";

const ItemCount = ({ id, name, price, stock, imgSrc }) => {
  const { addItem } = useCartContext();

  const [count, setCount] = useState(1);

  const [notEnoughStock, setNotEnoughStock] = useState(false);
  const [chooseAtLeastOneItem, setChooseAtLeastOneItem] = useState(false);

  useEffect(() => {
    if (count === 0) {
      setChooseAtLeastOneItem(true);
    } else {
      setChooseAtLeastOneItem(false);
    }
  }, [count]);

  useEffect(() => {
    if (count > stock) {
      setNotEnoughStock(true);
    } else {
      setNotEnoughStock(false);
    }
  }, [count]);

  const handleCountIncrease = () => {
    setCount(count + 1);
  };

  const handleCountDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count <= stock && count > 0) {
      const item = {
        id,
        name,
        price,
        quantity: count,
        imgSrc,
        stock,
      };

      addItem(item);
    } else if (count > stock) {
      return false;
    } else if (count === 0) {
      return false;
    }
  };

  return (
    <div className="controls">
      <div className="count-divs">
        <button className="decrease-button" onClick={handleCountDecrease}>
          -
        </button>
      </div>
      <div className="count-divs">
        <p className="item-count">{count}</p>
      </div>
      <div className="count-divs">
        <button className="increase-button" onClick={handleCountIncrease}>
          +
        </button>
      </div>
      <div className="count-divs">
        <button className="add-button" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
      <div className="stock-error-wrapper" style={{ gridColumn: "1 / span 4" }}>
        {notEnoughStock ? (
          <p className="stock-error">Not enough stock!</p>
        ) : null}
        {chooseAtLeastOneItem ? (
          <p className="stock-error">Choose at least 1 item!</p>
        ) : null}
      </div>
    </div>
  );
};

export default ItemCount;
