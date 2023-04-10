import { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "./ItemList.jsx";
import "./styles/ItemListContainer.css";

const ItemListContainer = ({ categoryId, isCategoryRoute }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Items");

    if (isCategoryRoute) {
      const queryResult = query(
        itemsCollection,
        where("category", "==", categoryId)
      );
      getDocs(queryResult)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setProducts(
            docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        })
        .catch((error) => console.log(error));
    } else {
      getDocs(itemsCollection)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setProducts(
            docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        })
        .catch((error) => console.log(error));
    }
  }, [categoryId]);

  return (
    <div className="div-products">
      <ul>
        <ItemList products={products} />
      </ul>
    </div>
  );
};

export default ItemListContainer;
