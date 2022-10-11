import React from 'react'
// import { withRouter } from 'react-router-dom'; // it ahigh order function

function User(props) {
    console.log(props)
  return (
    <div className='App'>
        <h1>User Component</h1>
    </div>
  )
}

export default User