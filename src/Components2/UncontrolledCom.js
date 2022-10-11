import React , {useRef} from 'react'


// uncontrolled components in react to understand the react very well
function UncontrolledCom() {

    let inputRef1 = useRef(null)
    let inputRef2 = useRef(null)


    const UncontrollInput = (e) =>{
        e.preventDefault()
        console.log('inputRef1' , inputRef1.current.value)
        console.log('inputRef2' , inputRef2.current.value)
        let input3 = document.getElementById('inputhai').value
        console.log('input3' , input3)

    }

  return (
    <div className='App'>
        <h1>Uncontrolled Components</h1>
        <form onSubmit={UncontrollInput} >
            <input ref={inputRef1} type='text'  /> <br/> <br/>
            <input ref={inputRef2} type='text'  /> <br/> <br/>
            <input id='inputhai' type='text'  /> <br/> <br/>
            <button>Uncontrolled Button</button>
        </form>
    </div>
  )
}

export default UncontrolledCom