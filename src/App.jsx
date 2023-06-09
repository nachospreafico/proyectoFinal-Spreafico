import "/src/App.css";
import "/src/font/Ringbearer.ttf";
import "/src/font/Aniron.ttf";
import Header from "/src/components/Header.jsx";
import NavBar from "/src/components/NavBar.jsx";
import ItemListContainer from "/src/components/ItemListContainer.jsx";
import Footer from "./components/Footer";
import { useParams } from "react-router-dom";

const App = () => {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);

  return (
    <div>
      <Header />
      <NavBar />
      <ItemListContainer
        isCategoryRoute={isCategoryRoute}
        categoryId={params.id}
      />
      <Footer />
    </div>
  );
};

export default App;
