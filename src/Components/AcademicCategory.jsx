//Project Files
import BursaryItem from "./BursaryItem.jsx";

export default function AcademicCategory({value,bursaries}) {

      //Properties
      const selected_category = bursaries.filter((item) => item.category === `${value}`);
      const category = selected_category.map((item) => (
        <BursaryItem key={item.id} item={item} />
      ));

      return (
        <div >
          <div>{category}</div>
        </div>
      );
    
}
