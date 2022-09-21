//NPM packages
import { useEffect, useState } from "react";
//Project files
import bursaries from "../Data/bursaries.json";
import BursaryList from "./BursaryList.jsx";
import AcademicCategory from "./AcademicCategory.jsx";
import MonthDue from "./MonthDue.jsx"

import SearchList from "./SearchList";

export default function Dashboard() {

   //Local State
   const [searchField, setSearchField] = useState("");
   const [academic_category, setCategory] = useState("Engineering");
   const [month,setMonth]=useState("All")

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
function onSelectCategory(event) {
setCategory(event.target.value);
}
function onSelectMonth(event) {
  setMonth(event.target.value);
  }

const selectField = <div>
   <label htmlFor="Academic category">Academic category: </label>
    <select name="bursaries" id="bursaries" academic_category={academic_category} onChange={onSelectCategory}>
     <option value="All">All</option>
     <option value="Engineering">Engineering</option>
     <option value="Accounting">Accounting</option>
     <option value="Computer Science & IT">Computer Science & IT</option>
     <option value="Medical">Medical</option>
     <option value="Education">Education</option>
     </select>
     </div>

const selectMonth= <div> <label htmlFor="Closing month">Closing month: </label>
     <select name="dueMonth" id="dueMonth" month={month} onChange={onSelectMonth}>
     <option value="All">All</option>
     <option value="July 2022">July 2022</option>
     <option value="August 2022">August 2022</option>
     <option value="September 2022">September 2022</option>
     <option value="All year">All year</option>
     </select> 
</div>

  return (
    <div>
      {selectField}
      {selectMonth}
      {searchbox}
       {month === "All" ? searchbox === "" ? (<BursaryList/>):
   (<SearchList bursaries={bursaries} searchField={searchField} />):(<MonthDue bursaries={bursaries} month={month}/>)}   
   </div>
  )}

