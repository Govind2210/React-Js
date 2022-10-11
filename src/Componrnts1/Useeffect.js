import React, { useEffect, useState } from 'react'

export default function Useeffect() {

    const [count , setCount] = useState(0)

    useEffect(()=>{
        console.log("use effect")
    } , [count])
    
  return (
    <div className='App'>
          <h1 >use-Effect hook {count}</h1>
    <button onClick={(()=>{setCount(count+1)})}>update</button>
    </div>
  )
}
