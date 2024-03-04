

import { useState } from "react"


const LoggedIn = () => {
const [loggedIn,setLoggedIn]=useState(false)

const handleLogIn=()=>{setLoggedIn(true)}
const handleLogOut=()=>{setLoggedIn(false)}
  return (
    <div>
        <button onClick={handleLogIn}>Log in</button>
        <button onClick={handleLogOut}>Log out</button>
        {
            loggedIn ? "User Logged In":"User Logout"
        }
    </div>
  )
}

export default LoggedIn