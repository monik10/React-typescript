
//conditional props
type StatusProps={
  //  status:string, //!if we mention string means props accept any string
  status:"loading"|"success"|"error"
   
}

const Status = (props:StatusProps) => {

    let message;
    if(props.status ==="loading")
    {
        message="This is loading .."
    }
    else if(props.status ==="success")
    {
        message="Succesfully completed"
    }
    else if(props.status ==="error")
    {
        message="Error caughted"
    }
  return (
    <div>Status-{message}</div>
  )
}

export default Status