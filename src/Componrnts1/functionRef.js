import React, { useState } from 'react'
// just learning hook 
export default function FunctionRef() { 
  
  const [data , setData] = useState("Gogo")
  
  return (
    <>
        <div className='App'>
          {
            data ? <h1>Gogo</h1> : <h1>Govind</h1>
          }
           <h1>{data}</h1>
           <button onClick={()=>{setData(!data)}}>update</button>
        </div>
    </>
  )
}
