import { useState } from "react";

import FilterBursaries from "./FilterBursaries";
import Search from "./Search";
import SelectCategory from "./SelectCategory";
import SelectMonth from "./SelectMonth";

export default function Dashboard() {
  return (
    <div>
      <SelectCategory />
      <SelectMonth />
      <Search />
      <FilterBursaries />
    </div>
  );
}
