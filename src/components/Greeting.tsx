//optional props


type GreetingProps={name:string,messageCount?:number,isLoggedIn:boolean}
const Greeting = (props:GreetingProps) => {
   const {messageCount=0}=props;
  return (
    <div>
        {
         props.isLoggedIn?<h2>Welcome {props.name}! You have {messageCount} unread Messages</h2> :<h2>Welcome guest</h2>
        }
       
        
    </div>
  )
}

export default Greeting