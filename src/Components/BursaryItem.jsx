//NPM packages

//Project files

export default function BursaryItem({item}) {

const {company,category,dueDate,detail,link,schoolLevel}= item;


console.log(schoolLevel.highschool)

  return (
    <div> <h1>{company}</h1>
    <p>{category}</p>
    <p>{dueDate}</p>
  <p>{detail}</p>
  <a href={link}>More Info</a>

</div>

  )
}
