import { useContext, createContext, useState } from "react";
import {
  getFirestore,
  doc,
  addDoc,
  updateDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  //Estado que contiene los items del carrito, en forma de Array.
  const [cartItems, setCartItems] = useState([]);

  //Estado que contiene la id de la orden, una vez llamada la funcion sendOrder().
  const [orderId, setOrderId] = useState(null);

  const addItem = (item) => {
    setCartItems([...cartItems, item]);
  };

  //Esta funcion remueve el especifico del carrito, usando .filter().
  const removeItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  //Esta funcion remueve todos los items del carrito, dejando un Array vacio.
  const clearCart = () => setCartItems([]);

  //Usando .reduce() esta toma los items repetidos para ponerlos todos en un mismo grupo, devolviendo un Array con las keys.
  const cartTotal = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += parseInt(item.quantity);
      existingItem.price += parseInt(item.price);
    } else {
      acc.push({
        id: item.id,
        name: item.name,
        quantity: parseInt(item.quantity),
        imgSrc: item.imgSrc,
        price: parseInt(item.price),
        stock: parseInt(item.stock),
        totalPrice: parseInt(item.quantity) * parseInt(item.price),
      });
    }
    return acc;
  }, []);

  const db = getFirestore();

  const total = cartTotal.reduce((acc, item) => acc + item.totalPrice, 0);

  const updateOrder = (itemId, newStock) => {
    const itemRef = doc(db, "Items", itemId);
    updateDoc(itemRef, { stock: newStock });
  };

  const sendOrder = (name, lastName, phone, email) => {
    const date = serverTimestamp();
    const order = {
      buyer: { name: name, lastName: lastName, phone: phone, email: email },
      items: cartTotal,
      total,
      date: date,
    };

    const collectionRef = collection(db, "orders");

    addDoc(collectionRef, order)
      .then((docRef) => {
        const orderId = docRef.id;
        setOrderId(orderId);

        cartTotal.map((product) => {
          const finalStock = product.stock - product.quantity;
          updateOrder(product.id, finalStock);
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        cartItems,
        cartTotal,
        removeItem,
        clearCart,
        sendOrder,
        total,
        orderId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartContextProvider, useCartContext };
