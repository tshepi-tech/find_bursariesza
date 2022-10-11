import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export function FilterProvider({ children }) {
  const [searchField, setSearchField] = useState("");
  const [academic_category, setCategory] = useState("All");
  const [month, setMonth] = useState("All");

  const value = {
    academic_category,
    month,
    setCategory,
    setMonth,
    searchField,
    setSearchField,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useFilter() {
  const context = useContext(Context);
  const errorText =
    "To use useFilter(), you need to wrap the parent component with <FilterProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
