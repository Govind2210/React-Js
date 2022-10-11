import React from 'react'

export default function PassFuncAsProps(props) {
  return (
    <div className='App'>
        <h1>hello..</h1>
        <button onClick={props.data}>Click ME</button>
    </div>
  )
}

