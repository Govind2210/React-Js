import React from 'react'

export default function HandleArray() {
    const students  = ['gogo' , 'montu', 'shaildenra' , 'shivam']
    const employess = [
        {name : "Govind" , salary : 800000 , company : "credit susis"},
        {name : "sakshi" , salary : 70000 , company : "Tcs "},
        {name : "yash" , salary : 800000 , company : "med"},
        {name : "Purvi" , salary : 400000 , company : "infosis"}
    ]
    // map looping
    // students.map((items ) =>{
    //     console.log("my name is ",items)
    // })
  return (
    <div className='App'>
        <h1>Handle Array with Map </h1>
        {
           students.map((names , i)=>
           <h1>id number : {i} , Name is : {names}</h1>
           )
        }
    <h1>------------------------------------------------------------</h1>
    <p>this is used with the object </p>
        {
             employess.map((item)=>
             <h1>this is Name : {employess.name} this is salary :  {employess.salary} this is company name : {employess.company}</h1>
             )
        }
    </div>
  )
}
