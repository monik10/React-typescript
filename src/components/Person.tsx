//!object props

// type PersonNameProps={
//     name:{
//         first:string,
//         last:string,
//     }
// }
import {PersonNameProps} from  "./Person.types"

const Person = (props:PersonNameProps) => {
  return (
    <div>
        <h1>{props.name.first}{props.name.last}</h1>
    </div>
  )
}

export default Person