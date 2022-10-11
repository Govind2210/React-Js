import React, { useState } from 'react'

export default function HideAndShow() {

  const [status , setStatus] = useState(false)
  return (
    <>
    <div>
      
      {/* <button onClick={()=>{setStatus(false)}}>Hide</button>
      <button onClick={()=>{setStatus(true)}}>Show</button> */}
      <button onClick={()=>{setStatus(!status)}}>Toggle</button>

      {
        status ? <h1>hey bro</h1> : null
      }
    </div>

    </>
  )
}
