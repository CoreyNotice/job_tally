
import React, { useEffect, useState } from 'react'

function Jobs_Applied() {
  const jobs_applied=JSON.parse(localStorage.getItem('count'))
  const [jobs,setJobs]=useState([])
 const[count,setCount]=useState(jobs_applied)
  
    useEffect(()=>{
      localStorage.setItem('count',JSON.stringify(count))
     const fetchData=async()=>{
      const response=await fetch (`${process.env.REACT_APP_SERVER_URL}`)
      const resData=await response.json();
      setJobs(resData)
     }
     fetchData();
    },[count])  
  const currentDate= new Date();
  const startDate= new Date("2023-06-01")
  
  const handleClick=()=>{
    setCount(count+1);
  };
  const update=async ()=>{
    const data={
      count:count,
      data:currentDate.toISOString().slice(0, 10)
    };
    await fetch(`${process.env.REACT_APP_SERVER_URL}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data)
    })
  }
  // const updateBackendAtMidnight = () => {
  //   const now = new Date();
  //   const timeUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0) - now;
  //   setTimeout(() => {
  //     update();
  //     updateBackendAtMidnight();
  //   }, timeUntilMidnight);
  // };

  // useEffect(() => {
  //   updateBackendAtMidnight();
  // }, []);

  
  // if (currentDate>startDate)  
  // return (
  //     <div>
  //      {jobs.map((job)=>(
  //       <div key={job.id}>
  //         <div>
  //         <p>Jobs Applied:{job.Job_Applied}</p>
  //         <p>Date: {job.Date.slice(0, 10)}</p>
  //         </div>
  //         </div> 
  //      ))}
  //       <div  onClick={handleClick}>
  //            <p>Jobs Applied:{count}</p>
  //            <p>Date:{currentDate.toISOString().slice(0, 10)}</p>
  //          </div>

  //    </div>
             
  //   );
  }

export default Jobs_Applied



