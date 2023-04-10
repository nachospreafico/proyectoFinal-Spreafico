import { ItemWithDetail } from "./Item.jsx";
import ItemCount from "./ItemCount.jsx";

const ItemDetails = ({ product }) => {
  return (
    <div className="detail-container">
      <ItemWithDetail
        id={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        stock={product.stock}
        imgSrc={product.imgSrc}
      />
      <ItemCount
        id={product.id}
        name={product.name}
        price={product.price}
        stock={product.stock}
        imgSrc={product.imgSrc}
      />
    </div>
  );
};

export default ItemDetails;
