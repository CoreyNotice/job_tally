import React from 'react'
import Badge from 'react-bootstrap/Badge'

function Title_Goal() {
    return (
    <>
    <h1 className='text-center'>Job Tally</h1>
    <h3>Goal: <Badge bg='danger' text='dark'>250</Badge></h3>
    </>
  )
}

export default Title_Goal