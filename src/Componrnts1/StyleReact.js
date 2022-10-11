import React from 'react'
import  style from './StyleReact.module.css'

export default function StyleReact () {
  return (
    <div className='App'>
        <h1  className='primary'>First Line of CSS style 1 using Stylesheet</h1>
        <h1 style={{color : "red"  , backgroundColor : "black"}}>Seconf Line of Css style 1 using inline</h1>
        <h1 className={style.sucess}>Third Line of Css style 1 using inline</h1>
    </div>
  )
}
