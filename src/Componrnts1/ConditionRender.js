import React, { useState } from 'react'

export default function ConditionRender() {
    const [login ,setLogin] = useState(false)
    const [singIn , setSignIn] = useState(2)

  return (
    <div className='App'>
        {/* this is for if -- else part */}

       { login ? <h1>Welcome Gogo</h1> : <h1>Welcome Guest!! </h1>} 
       <button onClick={()=>{setLogin(!login)}}>Click here</button>

    {/* this is for If -- else if -- else */}
    
    {/* singIn==1 ? <h1>Hello User 1</h1> 
    : singIn==2 ? <h1>User 2</h1> 
    : singIn == 3 ? <h1>user 3</h1> */}

   </div>
  )
}
