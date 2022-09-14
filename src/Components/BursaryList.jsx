//NPM packages

//Profile files
import bursaries from "../Data/bursaries.json";
import BursaryItem from "./BursaryItem"

export default function BursaryList() {

    const bursaryList = bursaries.map((item)=>(<BursaryItem key={item.id} item={item}/> ))

  return (
    <div>{bursaryList}</div>
  )
}
