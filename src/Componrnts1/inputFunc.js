import React, { useState } from 'react'

export default function InputFunc() {

  const [data , setData] = useState("text here");
  const [ print, setPrint] = useState()

  const getData = (val)=> {
    console.log(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }

  return (
    <>
    {
      print ? <h1>{data}</h1> : null
    }
    <input onChange={getData} type='text'/>
    <button onClick={()=>{setPrint(true)}}>click here</button>

    </>
  )
}
