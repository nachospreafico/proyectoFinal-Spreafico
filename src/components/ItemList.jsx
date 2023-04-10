import { Item } from "./Item.jsx";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Link
          to={`/item/${product.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
          key={product.id}
        >
          <Item
            itemId={product.id}
            name={product.name}
            stock={product.stock}
            imgSrc={product.imgSrc}
          />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
