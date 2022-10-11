import { useState } from "react";

import FilterBursaries from "./FilterBursaries";
import SelectCategory from "./SelectCategory";
import SelectMonth from "./SelectMonth";

export default function Dashboard() {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const searchbox = (
    <input
      className="search__box"
      type="search"
      placeholder="Search company"
      onChange={handleChange}
    />
  );

  return (
    <div>
      <SelectCategory />
      <SelectMonth />
      {searchbox}
      <FilterBursaries />
    </div>
  );
}
