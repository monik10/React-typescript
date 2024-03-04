//array of object
import { Name } from "./Person.types"
type PersonProps={
    names:Name[]
}
const PersonList = (props:PersonProps) => {
  return (
    <div>
        {
         props.names.map(name=>
            {
                return <>
                <li>{name.first} {name.last}</li>
                </>
            })
        }
    </div>
  )
}

export default PersonList