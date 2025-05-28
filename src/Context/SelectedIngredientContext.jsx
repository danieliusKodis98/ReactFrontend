import React, { createContext, useState } from "react";

export const SelectedIngredientContext = createContext();

export const SelectedIngredientProvider = ({ children }) => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <SelectedIngredientContext.Provider value={{ selectedIngredient, setSelectedIngredient,selectedCategory, setSelectedCategory }}>
      {children}
    </SelectedIngredientContext.Provider>
  );
}; export default SelectedIngredientProvider;