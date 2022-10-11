import React from 'react'
import {BrowserRouter as Router , Link , Route } from 'react-router-dom'
import User from './User'


function DynamicRouting() {
    let users = [
        {id : 1 , name : "gogo" , email : "govind@gmail.com"},
        {id : 2 , name : "sameer" , email : "govind@gmail.com"},
        {id : 3 , name : "anil" , email : "govind@gmail.com"},
        {id : 4 , name : "kajal" , email : "govind@gmail.com"},
        {id : 5 , name : "sahil" , email : "govind@gmail.com"}
    ]
  return (
    <div className='App'>
        <Router>
            <h1>Dynamic-Routing</h1>
            {
            users.map((item , key)=>
            <div><Link to={'/user/'+item.id}><h3>{item.name}</h3></Link></div>)
            }
            {/* <Route path='/User/:id'><User/></Route> */}
        </Router>

    </div>
  )
}

export default DynamicRouting