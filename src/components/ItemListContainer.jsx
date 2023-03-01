import "./styles/ItemListContainer.css";

const ItemListContainer = ({ greeting, author }) => {
  return (
    <div className="mensaje">
      <p>{greeting} -</p>
      <p className="author">{author}</p>
    </div>
  );
};

export default ItemListContainer;
