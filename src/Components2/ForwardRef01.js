import React, { useRef } from 'react'
import ForwardRef02 from './ForwardRef02'

function ForwardRef01() {

    let inputRef = useRef(null);

    const updateInfo = ()=>{
        inputRef.current.value  = '1000'
        inputRef.current.style.color = 'red'
        inputRef.current.focus()
    }

  return (
    <>
        <div className='App'>
            <h1>Forward Ref in React</h1>
            <ForwardRef02 ref={inputRef}/><br/>
            <button onClick={updateInfo} >Forward-Ref</button>

        </div>
    </>
  )
}

export default ForwardRef01