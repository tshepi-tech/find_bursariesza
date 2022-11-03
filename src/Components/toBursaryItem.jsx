import BursaryItem from "./BursaryItem";

export default function toBursaryItem(item) {
	return <BursaryItem key={item.id} item={item} />;
}
