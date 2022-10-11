import React from 'react'
import { useState } from 'react'

function PostApi() {

  const [userId ,setuserId] = useState('')
  const [id ,setId] = useState('')
  const [title ,setTitle] = useState('')
  const [body ,setBody] = useState('')

  function saveData(){
    // console.log({userId , id ,title ,body})
    const data = {userId , id ,title ,body}
    fetch("https://jsonplaceholder.typicode.com/posts" ,{
      method : "POST",
      headers :{
        "Accept" : "application/json",
        "content-type" : "application/json"
      },
      body : JSON.stringify(data)
    }).then((result) =>{
      // console.log(result)
      result.json().then((res)=>{
        console.log(res)
      })
    })
  }
    
  return (
    <div className='App'>
        <h1>Post-Api</h1>
        <br/><br/><br/>
        <input type='text' value={userId} name='userid' onChange={(e)=>{setuserId(e.target.value)}} placeholder='userId'/><br/><br/>
        <input type='text' value={id} name='id' onChange={(e)=>{setId(e.target.value)}} placeholder='id'/> <br/><br/>
        <input type='text' value={title} name='title' onChange={(e)=>{setTitle(e.target.value)}} placeholder='title'/><br/><br/>
        <input type='text' value={body} name='body' onChange={(e)=>{setBody(e.target.value)}} placeholder='body'/><br/><br/>
        <button onClick={saveData}>Submit Here</button>
    </div>
  )
}

export default PostApi