
import React, { useEffect, useState } from 'react'

function Jobs_Applied() {
  const jobs_applied=JSON.parse(localStorage.getItem('count'))
  const [count,setCount]= useState(jobs_applied); 
    useEffect(()=>{
     localStorage.setItem('count',JSON.stringify(count))
     console.log(jobs_applied)
    })  
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 5, 1);
    const month=currentDate.toLocaleString('default',{month:'long'});
    const day=currentDate.getDate();
    const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    if(currentDate>startDate)
    return (
      <div>
        <div>1-June</div>
        <h6>Jobs Applied: 21</h6>
        <div>{day}-{month}</div>
          <div onClick={() => setCount(count + 1)}>
                    {`Jobs Applied: ${count}`}
                </div>
                <button 
                onClick={() => setCount(count - 1)}
                >
                  decrease
                  </button>
                </div>
             
    );
  }

export default Jobs_Applied



