//NPM packages
import { useEffect, useState } from "react";
//Project files
import bursaries from "../Data/bursaries.json";
import BursaryItem from "./BursaryItem";

export default function Dashboard() {

   //Local State
   const [searchField, setSearchField] = useState("");
   const [academic_category, setCategory] = useState("All");
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

function UserClickedFilter () {
  const filterMonth = bursaries.filter((item) => item.dueDate === `${month}`)
  if (filterMonth.length === 0){
    const FilteredList = bursaries.filter((item) => item.category === `${academic_category}`).filter((item) => item.category === `${academic_category}`)
    return FilteredList
  }else{
    const FilteredList = filterMonth.filter((item) => item.category === `${academic_category}`)
    return FilteredList
  }
}

function FilterResults (){
  const bursaryArray=UserClickedFilter()
  if (bursaryArray.length === 0){
    return bursaries.map((item) => (
      <BursaryItem key={item.id} item={item} />
      ));
  }else{
    return bursaryArray.map((item) => (
          <BursaryItem key={item.id} item={item} />
          ));
  }
}

const bursary_list= FilterResults()

  return (
    <div>
      {selectField}
      {selectMonth}
      {searchbox}
    {bursary_list}
   </div>
  )}

