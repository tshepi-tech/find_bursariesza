import BursaryItem from "./BursaryItem";

export default function SearchList({ bursaries, searchField }) {
  const searchedCompany = bursaries.filter((item) => {
    return item.company.toLowerCase().includes(searchField.toLowerCase());
  });

  const filteredCompany = searchedCompany.map((item) => (
    <BursaryItem key={item.id} item={item} />
  ));
  return (
    <div>
      <div>{filteredCompany}</div>
    </div>
  );
}
