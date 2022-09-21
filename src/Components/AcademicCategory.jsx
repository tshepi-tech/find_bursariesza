//Project Files
import BursaryItem from "./BursaryItem.jsx";

export default function AcademicCategory({academic_category,bursaries}) {

      //Properties
      const selected_category = bursaries.filter((item) => item.category === `${academic_category}`);
      const category = selected_category.map((item) => (
        <BursaryItem key={item.id} item={item} />
      ));

      return (
        <div >
          <div>{category}</div>
        </div>
      );
    
}
