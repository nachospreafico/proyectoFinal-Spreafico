import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails.jsx";
import Footer from "./Footer.jsx";
import "./styles/ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "Items", params.id);
    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => console.log(error));
  }, []);

  if (!product) {
    return <div></div>;
  }

  return (
    <div>
      <ItemDetails product={product} />
      <Footer />
    </div>
  );
};

export default ItemDetailContainer;
