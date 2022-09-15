//NPM packages
import { useEffect, useState } from "react";
//Project files
import bursaries from "../Data/bursaries.json";
import BursaryList from "./BursaryList.jsx"

import SearchList from "./SearchList";

export default function Dashboard() {

   //Methods
   const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  const searchbox = <input
  className="search__box"
  type="search"
  placeholder="Search try"
  onChange={handleChange}
/>

  //Local State
  const [searchField, setSearchField] = useState("");


  return (
    <div>
      {searchbox}
       {searchbox === "" ? (<BursaryList/>):
  (<SearchList bursaries={bursaries} searchField={searchField} />)}
   </div>
  )
}
