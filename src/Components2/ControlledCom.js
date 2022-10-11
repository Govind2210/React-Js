import React, { useState } from 'react'

function ControlledCom() {

    const [val , setval] = useState("")
  return (
    <div className='App'>
        <h1> Controlled Components </h1>
        <h3>value : {val}</h3>
        <input type='text' value={val} onChange={(e)=>setval(e.target.value)}/>

    </div>
  )
}

export default ControlledCom