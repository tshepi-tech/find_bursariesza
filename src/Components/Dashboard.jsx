//NPM packages
import { useEffect, useState } from "react";
//Project files
import bursaries from "../Data/bursaries.json";
import BursaryList from "./BursaryList.jsx";
import AcademicCategory from "./AcademicCategory.jsx";

import SearchList from "./SearchList";

export default function Dashboard() {

   //Local State
   const [searchField, setSearchField] = useState("");
   const [value, setValue] = useState("All");

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

//Methods
function onSelect(event) {
setValue(event?.target?.value);
}

const selectField = <div>
   <label htmlFor="Academic category">Academic category: </label>
    <select name="" id="" value={value} onChange={onSelect}>
     <option value="All">All</option>
     <option value="Engineering">Engineering</option>
     <option value="Accounting">Accounting</option>
     <option value="Computer Science & IT">Computer Science & IT</option>
     <option value="Medical">Medical</option>
     <option value="Education">Education</option>
     </select>
     </div>


  return (
    <div>
      {selectField}
      {searchbox}
       {setSearchField === "All" ? searchbox === "" ? (<BursaryList/>):
   (<AcademicCategory value={value} bursaries={bursaries}/>):(<SearchList bursaries={bursaries} searchField={searchField} />)}
   </div>
  )
}

