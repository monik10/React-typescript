import { useReducer } from "react"


type CounterState={
count:number
}

type UpdateAction={
    type:"INCREMENT"|"DECREMENT",
    payload:number
}
type ResetAction={
    type:"RESET"
}
type CounterAction=UpdateAction|ResetAction
const initialState={count:0}
const reducer=(state:CounterState,action:CounterAction)=>
{
    switch(action.type)
    {
        case "INCREMENT":
            return {count:state.count+action.payload};
        case "DECREMENT":
            return {count:state.count-action.payload};
        case "RESET":
            return initialState;
    }
}


const Counter = () => {
const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <h1>Count {state?.count}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT",payload:5})}>+</button>
      <button onClick={()=>dispatch({type:"DECREMENT",payload:5})}>-</button>
      <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}

export default Counter
