import BursaryItem from "./BursaryItem";
import bursaries from "../Data/bursaries.json";
import { useFilter } from "state/FilterContext";
import toBursaryItem from "./toBursaryItem";

export default function Bursaries() {
	//Local state
	const { academic_category, month } = useFilter();

	const byMonth = bursaries.filter((item) => item.dueDate === `${month}`);
	const byCategory = bursaries.filter(
		(item) => item.category === `${academic_category}`,
	);

	if (month === "All" && academic_category === "All") {
		return bursaries.map(toBursaryItem);
	} else if (month === "All" && academic_category !== "All") {
		const filteredList = byCategory;
		return filteredList.map(toBursaryItem);
	} else if (month !== "All" && academic_category === "All") {
		const filteredList = byMonth;
		return filteredList.map(toBursaryItem);
	} else {
		const filteredList = byMonth.filter(
			(item) => item.category === `${academic_category}`,
		);
		return filteredList.map(toBursaryItem);
	}
}
