import React from 'react'
import Title_Goal from '../components/Title_Goal'
import Jobs_Applied from '../components/Jobs_Applied'
import '../style.css';
export function Home() {
  return (
    <div className='Home'> 
      <Title_Goal />
      <div >
      <Jobs_Applied />   
      </div>
    </div>
  )
}

