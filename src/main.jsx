import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemRoot from "./routes/item.jsx";
import CartRoot from "./routes/cart.jsx";
import CheckoutRoot from "./routes/checkout.jsx";
import { CartContextProvider } from "./context/CartContext";
import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbQzfTvgNWEP61dGcq0AQkEvoCa9NQ3MU",
  authDomain: "frodo-bargains.firebaseapp.com",
  projectId: "frodo-bargains",
  storageBucket: "frodo-bargains.appspot.com",
  messagingSenderId: "195838772145",
  appId: "1:195838772145:web:fb46b2262dfcbf08f7b390",
};

const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:id",
    element: <Root />,
  },
  {
    path: "/item/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <CartRoot />,
  },
  {
    path: "/checkout",
    element: <CheckoutRoot />,
  },
]);

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
