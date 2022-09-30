//NPM packages
import { useState } from "react";
//Project files
import bursaries from "Data/bursaries.json";
import BursaryItem from "./BursaryItem";
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

  function userClickedFilter(a, b) {
    const byMonth = bursaries.filter((item) => item.dueDate === `${month}`);
    const byCategory = bursaries.filter(
      (item) => item.category === `${academic_category}`
    );
    if (a === "All" && b === "All") {
      return bursaries.map((item) => <BursaryItem key={item.id} item={item} />);
    } else if (a === "All" && b !== "All") {
      const filteredList = byCategory;
      return filteredList.map((item) => (
        <BursaryItem key={item.id} item={item} />
      ));
    } else if (a !== "All" && b === "All") {
      const filteredList = byMonth;
      return filteredList.map((item) => (
        <BursaryItem key={item.id} item={item} />
      ));
    } else {
      const filteredList = byMonth.filter(
        (item) => item.category === `${academic_category}`
      );
      return filteredList.map((item) => (
        <BursaryItem key={item.id} item={item} />
      ));
    }
  }

  const bursary_list = userClickedFilter(month, academic_category);

  return (
    <div>
      <SelectCategory />
      <SelectMonth />
      {searchbox}
      {bursary_list}
    </div>
  );
}
