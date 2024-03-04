// import Button from "./components/Button";
// import Greet from "./components/Greet"
// import Greeting from "./components/Greeting";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import Person from "./components/Person"
// import PersonList from "./components/PersonList"
// import Status from './components/Status';
// import Input from './components/Input';
// import Container from "./components/Container";
// import LoggedIn from "./components/State/LoggedIn";
// import UserLogin from "./components/State/UserLogin";
// import UserTypeAssertion from "./components/State/UserTypeAssertion";
// import Counter from "./components/Reducer/Counter";
// import { ThemeContextProvider } from "./components/Context/ThemeContext";
// import Box from "./components/Context/Box";
// import UserContextProvider from "./components/Context/UserContext";
// import User from "./components/Context/User";
// import MutableRef from "./components/Ref/MutableRef";

// import Private from "./components/Auth/Private"
// import Profile from "./components/Auth/Profile"
import List from './components/Generics/List';
import CustomButton from './components/Html/Button';
import Text from './components/Polymorphic/Text';
import { RandomNumber } from './components/Restriction/RandomNumber';
import Toast from './components/TemplateLiterals/Toast';

// const personName={
//   first:"Monika",
//   last:"Krish",
// }
// const personList=[{
//   first:"Monika",
//   last:"Krish",
// },
// {
//   first:"Gayathri",
//   last:"Ragu",
// }]
const App = () => {
  return (
    <div>
      {/* <Greet name="Monika"  messageCount={100} isLoggedIn ={false} />
      <Person name={personName}/>
      <PersonList names={personList}/>
      <Status status="success"/>
      <Heading>Heading Text</Heading>
      <Oscar>
        <Heading>Oscar Text</Heading>
      </Oscar>
      <Greeting name="Lavanya" isLoggedIn={true}/>
      <Button handleClick={(event,id)=>{console.log("Button clicked",event,id)}}/>
      <Input value="" handleChange={(event)=>console.log(event)}/>
      <Container styles={{border:"1px solid black",color:"crimson",padding:"1rem"}}/>
      <LoggedIn/>
      <hr/>
      <UserLogin/>
      <hr/>
      <UserTypeAssertion/>
      <hr/>
      <Counter/>
      <hr/>
      <hr/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <hr/>
      <hr/>
      <UserContextProvider>
        <User/>
      </UserContextProvider>
      <MutableRef/> */}
      {/* //==============================component props=========== */}
      {/* <Private isLoggedIn={true} component={Profile}/> */}
      {/* ==================================Generic props======================================== */}
      {/* <List items={["Banana","Apple","Orange","Grapes"]} onClick={(item)=>console.log(item)}/>
      <List items={[1,2,3]} onClick={(item)=>console.log(item)}/> */}
      <List items={[
        {
          id:1,
       first:"Monika",
       last:"Krish",
      },
       {
        id:2,
       first:"Gayathri",
       last:"Ragu",
       },]} onClick={(item)=>console.log(item)}/>
        {/* ==================================Restricting props======================================== */}
        <RandomNumber value={-10} isNegative />
         {/* ==================================Template Literals and Exclude======================================== */}
         <Toast position="center"/>
         <CustomButton variant='primary' onClick={()=> console.log("Clicked")}>Primary Button</CustomButton>
          {/* ==================================Polymorphic Component======================================== */}
          <Text as="h1"size="md">Heading</Text>
          <Text  as="p" size="sm">Paragraph</Text>
          <Text as="label"size="lg" htmlFor="some id" color="primary">Label</Text>
    </div>
  )
}

export default App