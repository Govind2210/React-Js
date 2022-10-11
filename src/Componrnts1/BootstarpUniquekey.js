import React from 'react'
import Table from 'react-bootstrap/Table';
import Reuse from './Reuse';

export default function BootstarpUniquekey() {
  const employess = [
    {name : "Govind" , salary : 800000 , company : "credit susis"},
    {name : "sakshi" , salary : 70000 , company : "Tcs "},
    {name : "yash" , salary : 800000 , company : "med"},
    {name : "Purvi" , salary : 400000 , company : "infosis"},
    {name : "montu" , salary : 360000 , company : "sony"}
]
  return (
    <div className='App'>
      <h1> Bootstar  Unique key </h1>
      <Table striped bordered hover size="sm" variant="dark" style={{marginRight:100}}>
        <tbody>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>salary</td>
            <td>Company</td>

          </tr>
          {
            employess.map((item , i)=>
            <tr key={i}>
              <td>{i}</td>
              <td>{item.name}</td>
              <td>{item.salary}</td>
              <td>{item.company}</td>
            </tr>
            )
          }
        </tbody>
      </Table>
      <div>
        {
          employess.map((item) =>
          <Reuse data={item}/>
          )
        }
      </div>
      
    </div>
  )
}
