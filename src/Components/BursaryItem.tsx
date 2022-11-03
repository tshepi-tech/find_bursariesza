import iBursaries from "interfaces/iBursaries";

interface BursaryProps {
	item: iBursaries;
}

export default function BursaryItem({ item }: BursaryProps) {
	const { company, category, dueDate, detail, link } = item;

	return (
		<div>
			<h1>{company}</h1>
			<p>{category}</p>
			<p>{dueDate}</p>
			<p>{detail}</p>
			<a href={link}>More Info</a>
		</div>
	);
}
