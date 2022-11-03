import BursaryItem from "./BursaryItem";
import bursaries from "../Data/bursaries.json";
import { useFilter } from "state/FilterContext";

export default function FilterBursaries() {
	//Local state
	const { academic_category, month } = useFilter();

	const byMonth = bursaries.filter((item) => item.dueDate === `${month}`);
	const byCategory = bursaries.filter(
		(item) => item.category === `${academic_category}`,
	);

	if (month === "All" && academic_category === "All") {
		return bursaries.map((item) => <BursaryItem key={item.id} item={item} />);
	} else if (month === "All" && academic_category !== "All") {
		const filteredList = byCategory;
		return filteredList.map((item) => (
			<BursaryItem key={item.id} item={item} />
		));
	} else if (month !== "All" && academic_category === "All") {
		const filteredList = byMonth;
		return filteredList.map((item) => (
			<BursaryItem key={item.id} item={item} />
		));
	} else {
		const filteredList = byMonth.filter(
			(item) => item.category === `${academic_category}`,
		);
		return filteredList.map((item) => (
			<BursaryItem key={item.id} item={item} />
		));
	}
}
