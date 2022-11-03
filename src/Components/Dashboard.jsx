import { useState } from "react";

import Bursaries from "./Bursaries";
import SelectCategory from "./SelectCategory";
import Search from "./Search";
import SelectMonth from "./SelectMonth";

export default function Dashboard() {
	return (
		<div>
			<SelectCategory />
			<SelectMonth />
			<Search />
			<Bursaries />
		</div>
	);
}
