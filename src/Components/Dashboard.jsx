import { useState } from "react";

import Bursaries from "./Bursaries";
import Search from "./Search";
import SelectCategory from "./SelectCategory";
import SelectMonth from "./SelectMonth";

export default function Dashboard() {
  return (
    <div>
      <SelectCategory />
      <SelectMonth />
      <Search />
      <Bursaries />
    </div>
  );
}
