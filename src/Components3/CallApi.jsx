import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function CallApi() {

    const [data , setData] = useState([])

    function DeleteData(id){
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}` , {
            method : "DELETE"
        }).then((result)=>{
            result.json().then((res) =>{
                console.log(res)
                getList()
            })
        })
    }


    useEffect(()=>{
        getList()
    }, [])

    function getList(){
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
            result.json().then((res)=>{
                console.log(res)
                setData(res)
            })
        })
    }

    return (
    <div className='App'>
        <h1>Call Api</h1>
        <table border='1'>
            <tbody>
                <tr>
                    <td>id</td>
                    <td>title</td>
                    <td>body</td>
                </tr>
                {
                    data.map((item)=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        <td><button onClick={()=> DeleteData(item.id)}>Delete</button></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default CallApi