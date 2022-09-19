//project Files
import AcademicCategory from "./AcademicCategory";

//NPM packages
import { useState } from "react";

export default function Filters({bursaries}) {

//Local state
    const [value, setValue] = useState("All");

     //Methods
  function onSelect(event) {
    setValue(event?.target?.value);
  }
  return (
    <section>
    <div >
        <label htmlFor="Academic category">Academic category: </label>
         <select name="" id="" value={value} onChange={onSelect}>
          <option value="All">All</option>
          <option value="Engineering">Engineering</option>
          <option value="Accounting">Accounting</option>
          <option value="Computer Science & IT">Computer Science & IT</option>
          <option value="Medical">Medical</option>
          <option value="Education">Education</option>
        </select>
        <label htmlFor="Closing month">Closing month: </label>
        <select >
         {/* <select name="" id="" value={value} onChange={onSelect}></select> */}
          <option v="All">All</option>
          <option v="July">July</option>
          <option v="August">August</option>
          <option v="September">September</option>
          <option v="All year">All year</option>
        </select>
      </div>
      <AcademicCategory value={value} bursaries={bursaries}/>
      </section>
  )
}

