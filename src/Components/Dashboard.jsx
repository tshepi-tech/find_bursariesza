import { useState } from "react";

import Bursaries from "./Bursaries";
import SelectCategory from "./SelectCategory";
import SelectMonth from "./SelectMonth";

export default function Dashboard() {
	//Local State
	const [searchField, setSearchField] = useState("");

	const handleChange = (event) => {
		setSearchField(event.target.value);
	};
	//Properties
	const searchbox = (
		<input
			className="search__box"
			type="search"
			placeholder="Search company"
			onChange={handleChange}
		/>
	);

	return (
		<div>
			<SelectCategory />
			<SelectMonth />
			{searchbox}
			<Bursaries />
		</div>
	);
}
