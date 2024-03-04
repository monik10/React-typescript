type ContainerProps={
    styles:React.CSSProperties
}

const Container = (props:ContainerProps) => {
  return (
    <div style={props.styles}>
        <h1> I am the text here</h1>
    </div>
  )
}

export default Container