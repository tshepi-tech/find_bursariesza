import { useFilter } from "state/FilterContext";

export default function Search() {
	const { setSearchField } = useFilter;
	const handleChange = (event) => {
		setSearchField(event.target.value);
	};

	return (
		<div>
			<input
				className="search__box"
				type="search"
				placeholder="Search company"
				onChange={handleChange}
			/>
		</div>
	);
}
