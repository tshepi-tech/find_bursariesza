//NPM packages
import { useState } from "react";
//Project files
import bursaries from "../Data/bursaries.json";
import BursaryItem from "./BursaryItem";

export default function Dashboard() {
  //Local State
  const [searchField, setSearchField] = useState("");
  const [academic_category, setCategory] = useState("All");
  const [month, setMonth] = useState("All");

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

  //Methods

  function onSelectCategory(event) {
    setCategory(event.target.value);
  }
  function onSelectMonth(event) {
    setMonth(event.target.value);
  }

  const categories = [
    "All",
    "Engineering",
    "Accounting",
    "Computer Science & IT",
    "Medical",
    "Education",
  ];
  const categoryOptions = categories.map((item) => (
    <option key={item.id} value={item}>
      {item}
    </option>
  ));

  const selectField = (
    <div>
      <label htmlFor="Academic category">Academic category: </label>
      <select
        name="bursaries"
        id="bursaries"
        academic_category={academic_category}
        onChange={onSelectCategory}
      >
        {categoryOptions}
      </select>
    </div>
  );

  const months = [
    "All",
    "July 2022",
    "August 2022",
    "September 2022",
    "All year",
  ];
  const monthOptions = months.map((item) => (
    <option key={item.id} value={item}>
      {item}
    </option>
  ));

  const selectMonth = (
    <div>
      <label htmlFor="Closing month">Closing month: </label>
      <select
        name="dueMonth"
        id="dueMonth"
        month={month}
        onChange={onSelectMonth}
      >
        {monthOptions}
      </select>
    </div>
  );

  function UserClickedFilter() {
    const filterMonth = bursaries.filter((item) => item.dueDate === `${month}`);
    if (filterMonth.length === 0) {
      const FilteredList = bursaries
        .filter((item) => item.category === `${academic_category}`)
        .filter((item) => item.category === `${academic_category}`);
      return FilteredList;
    } else {
      const FilteredList = filterMonth.filter(
        (item) => item.category === `${academic_category}`
      );
      return FilteredList;
    }
  }

  function FilterResults() {
    const bursaryArray = UserClickedFilter();
    if (bursaryArray.length === 0) {
      return bursaries.map((item) => <BursaryItem key={item.id} item={item} />);
    } else {
      return bursaryArray.map((item) => (
        <BursaryItem key={item.id} item={item} />
      ));
    }
  }

  const bursary_list = FilterResults();

  return (
    <div>
      {selectField}
      {selectMonth}
      {searchbox}
      {bursary_list}
    </div>
  );
}
