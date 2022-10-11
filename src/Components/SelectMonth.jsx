import { useFilter } from "state/FilterContext";

export default function SelectMonth() {
  const { setMonth } = useFilter();

  function onSelectMonth(event) {
    setMonth(event.target.value);
  }

  const months = [
    "All",
    "July 2022",
    "August 2022",
    "September 2022",
    "All year",
  ];
  const monthOptions = months.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <div>
      <label htmlFor="Closing month">Closing month: </label>
      <select name="dueMonth" id="dueMonth" onChange={onSelectMonth}>
        {monthOptions}
      </select>
    </div>
  );
}
