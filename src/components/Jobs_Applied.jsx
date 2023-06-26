import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import '../style.css';
import Jobs_Calc from './Jobs_Calc';
function Jobs_Applied() {
  const jobs_applied = JSON.parse(localStorage.getItem('count'));
  const Screens = JSON.parse(localStorage.getItem('phone_Video_Screens'));
  const Interviews = JSON.parse(localStorage.getItem('job_Interviews'));
  const Offers = JSON.parse(localStorage.getItem('job_Offers'));
  const [jobs, setJobs] = useState([]);
  const [count, setCount] = useState(jobs_applied);
  const [phone_Video_Screens, setPhone_Video_Screens] = useState(Screens);
  const [job_Interviews, setJob_Interviews] = useState(Interviews);
  const [job_Offers, setJob_Offers] = useState(Offers);
  const userOwnerId = parseInt(localStorage.getItem('userID'));


  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('phone_Video_Screens', JSON.stringify(phone_Video_Screens));
    localStorage.setItem('job_Interviews', JSON.stringify(job_Interviews));
    localStorage.setItem('job_Offers', JSON.stringify(job_Offers));
    const fetchData = async () => {
      const response = await fetch(`http://localhost:1020/job_tally/${userOwnerId}`);
      const resData = await response.json();
      setJobs(resData);
      
    };
    fetchData();
  }, [count, phone_Video_Screens, job_Interviews, job_Offers, userOwnerId]);

  useEffect(() => {
    console.log(jobs);
  }, [jobs]);
  
  const currentDate = new Date().toString().slice(0,10);

  const handleClickjobs_applied = () => {
    setCount(count + 1);
  };
  const handleClickScreens = () => {
    setPhone_Video_Screens(phone_Video_Screens + 1);
  };
  const handleClickInterviews = () => {
    setJob_Interviews(job_Interviews + 1);
  };

  const handleClickOffers = () => {
    setJob_Offers(job_Offers + 1);
  };

  const handleClicknegjobs_applied = () => {
    setCount(count - 1);
  };
  
  const handleClicknegScreens = () => {
    setPhone_Video_Screens(phone_Video_Screens- 1);
  };
  const handleClicknegInterviews = () => {
    setJob_Interviews(job_Interviews - 1);
  };
  const handleClicknegOffers = () => {
    setJob_Offers(job_Offers - 1);
  };
  const update = async (e) => {
    e.preventDefault()
    const updatedData = {
      Job_Applied: count,
      Phone_Video_Screens: phone_Video_Screens,
      Job_Interviews: job_Interviews,
      Job_Offers: job_Offers,
    };
    await fetch(`http://localhost:1020/job_tally/${userOwnerId}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedData),
});

 
  };
  


  return (
    <div>
      
<div className="d-flex justify-content-between ">
  {(jobs && jobs.length > 0) ? (
    jobs.map((job, index) => (
      <Card style={{width:'18rem',backgroundColor:'rgb(255, 132, 0)' }}>
      <Card.Body>
      <div key={index}>
        <Card.Title>Date: {job.createdAt.slice(0, 10)}</Card.Title>
        <Card.Text>
        Jobs Applied: {job.Job_Applied}<br></br>
        Phone/Video Screens: {job.Phone_Video_Screens}<br></br>
        Job Interviews: {job.Job_Interviews}<br></br>
        Job Offers: {job.Job_Offers}<br></br>
        </Card.Text>
      </div>
      </Card.Body>
      </Card>
    ))
  ) : (
    <div></div>
  )}
</div> 
         <div className="position-relative ">  
         <div className='top-0 end-0 mt-3 me-3 d-flex justify-content-center'>
         <div className='col-md-4'>
           <Card style={{width:'18rem',backgroundColor:'rgb(255, 217, 61)'}}>
            <Card.Body>
              
           <Card.Title><h3>{currentDate}</h3></Card.Title>
          <form  onSubmit={update}>
          <Card.Text>
          <p onClick={handleClickjobs_applied}>Jobs Applied: {count}</p><Button style={{backgroundColor:'rgb(79, 32, 13)'}} onClick={handleClicknegjobs_applied}>-</Button>    
          <p onClick={ handleClickScreens}>Phone/Video Screens: {phone_Video_Screens} </p>    <Button style={{backgroundColor:'rgb(79, 32, 13)'}} onClick={handleClicknegScreens}>-</Button>
          <p onClick={ handleClickInterviews}>Job Interviews: {job_Interviews} </p>    <Button style={{backgroundColor:'rgb(79, 32, 13)'}} onClick={handleClicknegInterviews}>-</Button>    
          <p onClick={ handleClickOffers}>Job Offers: {job_Offers}</p><Button style={{backgroundColor:'rgb(79, 32, 13)'}} onClick={handleClicknegOffers}>-</Button>         
           <p style={{ display: 'none' }} >userOwnerId:{userOwnerId}</p>
           </Card.Text>
           <br></br>
            <input className="btn btn-primary" type="submit" value="Save" />
          </form>
          </Card.Body>
          </Card>
          </div>
          </div>
          </div>
          </div>
          
  );
  
    
   
      }

export default Jobs_Applied;
// {/* <div>
// {jobs.map((job, index) => {
// console.log(job.userOwnerId);

// if (jobs) {
// return (
//  <div key={index}>
//    <div>
//      <p>Jobs Applied: {job.Job_Applied}</p>
//      <p>Date: {job.createdAt.slice(0, 10)}</p>
//      <p>Phone or Video Screening: {job.Phone_Video_Screens}</p>
//      <p>Job Interviews: {job.Job_Interviews}</p>
//      <p>Jobs Offers: {job.Job_Offers}</p>
//    </div>
//  </div>
// );
// } else {
// return null;
// }
// })}
// <div onClick={handleClick}>
// <p>Jobs Applied: {count}</p>
// <p>Date: {currentDate.toISOString().slice(0, 10)}</p>
// </div>
// <button onClick={handleClickneg}>-</button>
// <button onClick={update}>update</button>
// </div>  */}