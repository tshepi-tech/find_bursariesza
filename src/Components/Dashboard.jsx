//NPM packages
import { useState } from "react";
//Project files
import bursaries from "Data/bursaries.json";
import FilterBursaries from "./FilterBursaries";
import { useFilter } from "state/FilterContext";
import SelectCategory from "./SelectCategory";
import SelectMonth from "./SelectMonth";

export default function Dashboard() {
  //Local State
  const [searchField, setSearchField] = useState("");
  const { academic_category, month } = useFilter();

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  //Properties
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
