import React, { useRef } from 'react'

function UseRef() {
    let inputRef = useRef(null)

    const HandelRefButton = ()=>{
        console.log("HandelRefButton")
        // inputRef.current.value = '1000'
        // inputRef.current.focus()
        inputRef.current.style.color = 'red'
        // inputRef.current.style.none = 'none'
    }

  return (
    <>
        <div className='App'>
            <h1>using UseRef in React</h1>
            <input text='type' ref={inputRef} /><br/><br/>
            <button onClick={HandelRefButton} >Handle Ref</button>
        </div>
    </>
  )
}

export default UseRef