import React from 'react'
import UserChild2 from './UserChild2'

// here i am taking data from children --> from UserChild2

function UserParent() {
    function parentAlert (data){
        console.log(data)
        alert(data)
    }
  
  return (
   
    <>
     <div className='App'>
        <h1>Lifiting State up</h1>
       <UserChild2 alert={parentAlert} />

    </div>
    </>
  )
}

export default UserParent