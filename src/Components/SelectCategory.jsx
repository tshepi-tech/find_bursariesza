//NPM packages

//Project files
import { useFilter } from "state/FilterContext";

export default function SelectCategory() {
  const { setCategory } = useFilter();

  function onSelectCategory(event) {
    setCategory(event.target.value);
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
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <div>
      {" "}
      <label htmlFor="Academic category">Academic category: </label>
      <select name="bursaries" id="bursaries" onChange={onSelectCategory}>
        {categoryOptions}
      </select>
    </div>
  );
}
