import React from 'react'

// resuing the components with array 
export default function Reuse(props) {
  return (
   <>
           {/* <h1>Reuse Component with List</h1> */}

        <div className='hello'>
        <span>{props.data.name}</span>
        <span>{props.data.salary}</span>
        <span>{props.data.company}</span>
   </div>
   </>

  )
}
