
import Login from './Login';
import { ProfileProps } from './Profile';
type PrivateProps={
    isLoggedIn:boolean,
    component:React.ComponentType<ProfileProps>
}
const Private = ({isLoggedIn,component:Component}:PrivateProps) => {
    if(isLoggedIn)
    {
        return <Component name="Divya"/>
    }
    else{
        return <Login/>
    }
  return (
    <div>
  
    </div>
  )
}

export default Private
