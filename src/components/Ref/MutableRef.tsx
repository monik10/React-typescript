import { useState,useRef,useEffect } from "react"


const MutableRef = () => {
    const [timer,setTimer]=useState(0)
    const InterValRef=useRef<number|null>(null)
    const stopTimer=()=>
    {if(InterValRef.current)
        {
            window.clearInterval(InterValRef.current)
        }
        
    }

    useEffect(()=>
    {
        InterValRef.current=window.setInterval(()=>{
            setTimer((timer)=>timer+1)
        },1000)
        return ()=>
        {
            stopTimer()
        }
    },[])
  return (
    <div>
      HookTimer --{timer}--
      <button onClick={()=>stopTimer()}>Stop Timer</button>
    </div>
  )
}

export default MutableRef
