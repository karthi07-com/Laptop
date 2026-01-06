import { createContext, useContext, useState } from "react";

const CompareContext = createContext(null);

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([]);

  const toggleCompare = (laptop) => {
    setCompareList((prev) => {
      const exists = prev.find((item) => item._id === laptop._id);
      if (exists) {
        return prev.filter((item) => item._id !== laptop._id);
      }
      return [...prev, laptop];
    });
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  return (
    <CompareContext.Provider
      value={{ compareList, toggleCompare, clearCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);
