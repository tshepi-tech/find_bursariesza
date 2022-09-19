//NPM packages
import { useEffect, useState } from "react";
//Project files
import bursaries from "../Data/bursaries.json";
import BursaryList from "./BursaryList.jsx";
import Filters from "./Filters.jsx";

import SearchList from "./SearchList";

export default function Dashboard() {

   //Local State
   const [searchField, setSearchField] = useState("");

   //Methods
   const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  //Properties
  const searchbox = <input
  className="search__box"
  type="search"
  placeholder="Search company"
  onChange={handleChange}
/>

  return (
    <div>
      <Filters bursaries={bursaries}/>
      {searchbox}
       {searchbox === "" ? (<BursaryList/>):
  (<SearchList bursaries={bursaries} searchField={searchField} />)}
   </div>
  )
}
