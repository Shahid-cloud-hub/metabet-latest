import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState({
    betMessage: false,
    airDropBetMessage: false,
  });

  return (
    <Context.Provider value={{ items, setItems }}>{children}</Context.Provider>
  );
};
