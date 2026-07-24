import React, { createContext, useContext, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("");

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CardContext.Provider
      value={{ cart, addToCart, removeFromCart, address, setAddress }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCart must be used within a CardProvider");
  }
  return context;
};
