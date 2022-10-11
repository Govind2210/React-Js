import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count , setCount] = useState(0)
    const [item , setItem] = useState(2.5)



    const Counting = () =>{
        setCount(count+1)
    }

    const Multiply = ()=>{
        setItem(item * 10)
    }

   const MultiMemo = useMemo( function useMultiCount (){
        console.log(useMultiCount)
        return count * 5
    }, [count])

  return (
    <>
        <div className='App'>
        <h1>Using useMemo Hook</h1>

        <h2>Count : {count}</h2>
        <button onClick={Counting}>Click Me</button>

        <h2>{MultiMemo}</h2>

        <h2>item : {item}</h2>
        <button onClick= {Multiply} >Click Me</button>

        </div>

    </>
  )
}

export default UseMemo