import { useState } from "react"

type AuthUser={
    email:string,
    password:string,
}

const UserTypeAssertion = () => {
const [user,setUser]=useState<AuthUser>({} as AuthUser);
const handleLogin=()=>{setUser({email:"demo@gmail.com",password:"demo@123"})}

  return (
    <div>
      <button onClick={handleLogin}>Log in</button>
      <h1>The login user is {user.email}</h1>
    </div>
  )
}

export default UserTypeAssertion