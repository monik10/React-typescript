import { useState } from "react"

type AuthUser={
    email:string,
    password:string,
}

const UserLogin = () => {
const [user,setUser]=useState<AuthUser| null>(null);
const handleLogin=()=>{setUser({email:"demo@gmail.com",password:"demo@123"})}
const handleLogout=()=>{setUser(null)}
  return (
    <div>
      <button onClick={handleLogin}>Log in</button>
      <h1>The login user is {user?.email}</h1>
      <button onClick={handleLogout}>Log Out</button>
      <h1>The logout user is {user?.email}</h1>
    </div>
  )
}

export default UserLogin
