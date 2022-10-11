import React from 'react'

export default function PropsFunc(props) {
  console.log(props)
  return (
    <div>    
    <h1>This is a {props.name} </h1>
    <h2>this is email {props.email}</h2>
    <p>this is address {props.others.address}</p>
    <p>this is mobile Number {props.others.mobile}</p>
</div>
  )
}
