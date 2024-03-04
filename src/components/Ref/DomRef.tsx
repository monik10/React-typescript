import { useEffect, useRef } from "react"


const DomRef = () => {
    const inputRef=useRef<HTMLInputElement>(null!); //(!) to avoid optional chaining at current?.focus
    useEffect(()=>
    {
        inputRef.current.focus()
    },[])
  return (
    <div>
      <input type="text" ref={inputRef}/>
    </div>
  )
}

export default DomRef
