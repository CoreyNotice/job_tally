import React from 'react'
import Badge from 'react-bootstrap/Badge'
import '../style.css';
import Jobs_Calc from './Jobs_Calc';
function Title_Goal() {
    return (
    <>
    <h1 className='text-center title'>Job Tally</h1>
    <h3>Goal: <Badge bg='danger' text='dark'>250</Badge></h3>
    <div><Jobs_Calc/></div>
    </>
  )
}

export default Title_Goal