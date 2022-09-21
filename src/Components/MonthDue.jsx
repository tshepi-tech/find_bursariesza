//Project Files
import BursaryItem from "./BursaryItem.jsx";

export default function MonthDue({bursaries,month}) {

      //Properties
      const selected_month = bursaries.filter((item) => item.dueDate === `${month}`);
      const dueDate = selected_month.map((item) => (
        <BursaryItem key={item.id} item={item} />
      ));

      return (
        <div >
          <div>{dueDate}</div>
        </div>
      );
    
}