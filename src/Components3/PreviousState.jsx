import React from 'react'
import { useState } from 'react'

function PreviousState() {
  
  const [count , setCount] = useState(1)

const updateCount = ()=>{
    let random = Math.floor(Math.random()*10)
    setCount((pre)=>{
        console.log(pre)
        if(pre < 5){
           alert("low value")
        }
        else{
            return   random
        }
        
    })
}
    return (
    <div className='App'>
        <h1>PreviousState {count}</h1><br/><br/>
        <button onClick={updateCount}>Update Me</button>

    </div>
  )
}

export default PreviousState