import React, { createContext, useContext, useReducer } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ reducer, initialState, children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useStateValue = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useStateValue must be used within a ThemeProvider");
  }
  return context;
};
