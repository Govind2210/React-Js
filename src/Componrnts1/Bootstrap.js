import React from 'react'
import { Button } from 'react-bootstrap';

export default function Bootstrap() {
  return (
    <div className='App'>
        <h1>InstallBootstrap</h1>
    <Button onClick={()=>alert("this is bootstarp")}>Click me</Button>
    <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
    </div>
  )
}
