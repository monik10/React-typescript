//basic props
type GreetProps={name:string,messageCount:number,isLoggedIn:boolean}
const Greet = (props:GreetProps) => {
   
  return (
    <div>
        {
         props.isLoggedIn?<h2>Welcome {props.name}! You have {props.messageCount} unread Messages</h2> :<h2>Welcome guest</h2>
        }
       
        
    </div>
  )
}

export default Greet