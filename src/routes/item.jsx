import "/src/App.css";
import "/src/font/Ringbearer.ttf";
import "/src/font/Aniron.ttf";
import Header from "/src/components/Header.jsx";
import NavBar from "/src/components/NavBar.jsx";
import ItemDetailContainer from "/src/components/ItemDetailContainer.jsx";
import { useParams } from "react-router-dom";

const ItemRoot = () => {
  const params = useParams();
  const isItemId = Boolean(params.id);

  return (
    <div>
      <Header />
      <NavBar />
      <ItemDetailContainer isItemId={isItemId} itemId={params.id} />
    </div>
  );
};

export default ItemRoot;
