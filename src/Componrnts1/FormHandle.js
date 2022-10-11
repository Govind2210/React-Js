import React, { useState } from 'react'


export default function FormHandle() {
    const [name , setName] = useState("")
    const [tnc , setTnc] = useState(false)
    const [interest , setInterest] = useState("")

    const getdatafrom = (e)=>{ // e is the parameter here
        console.warn(name , tnc ,interest)
        e.preventDefault()
    }

  return (
    <div className='App'>
        <h1>React handle Form</h1>

        <form onSubmit={getdatafrom}>

           <input type="text" placeholder='enter name' onChange={(e)=>{setName(e.target.value)}}/>

               <br/>   <br/>

            <select onChange={(e)=>{setInterest(e.target.value)}}>
                <option >Select Option</option>
                <option>Marvel</option>
                <option>DC</option>   
            </select> 
            
               <br/>   <br/>
               
            <input type="checkbox" onChange={(e)=>{setTnc(e.target.checked)}}/><span>Accept Term  And Condition</span>
            <br/> <br/>
            <button type='submit'>Submit</button>
        
        </form>
    </div>
  )
}
