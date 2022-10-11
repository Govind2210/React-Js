import React from 'react'


// send props from child to parent --> UserParent
export default function UserChild2(props) {
    const data = "Govind Lowanshi"
  return (
    <>
        <h1>User name </h1>
        <button onClick={()=>props.alert(data)} >Click Me</button>
    </>
  )
}
