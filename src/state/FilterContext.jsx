// NPM packages
import { createContext, useContext, useState } from "react";

// Properties
const Context = createContext(null);

// Methods
// For the parent
export function FilterProvider({ children }) {
	//Local State
	const [searchField, setSearchField] = useState("");
	const [academic_category, setCategory] = useState("All");
	const [month, setMonth] = useState("All");

	// Properties
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

// For the child
export function useFilter() {
	const context = useContext(Context);
	const errorText =
		"To use useFilter(), you need to wrap the parent component with <FilterProvider/>";

	// Safeguards
	if (!context) throw new Error(errorText);

	return context;
}
