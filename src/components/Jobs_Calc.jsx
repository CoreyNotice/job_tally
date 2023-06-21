import { useEffect, useState } from "react";

function Jobs_Calc() {
  const userOwnerId = parseInt(localStorage.getItem('userID'));
  const [jobs, setJobs] = useState([]);
  const [sumJobApplied, setSumJobApplied] = useState(0);
  const [divisionResult, setDivisionResult] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:1020/calc/${userOwnerId}`);
      const resData = await response.json();
      setJobs(resData);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (jobs.length > 0) {
      const calculatedSum = jobs.reduce((total, job) => total + job.Job_Applied, 0);
      const calculatedResult = (calculatedSum / 250) * 100;
      setSumJobApplied(calculatedSum);
      setDivisionResult(calculatedResult);
    }
  }, [jobs]);

  return (
    <div>
    {jobs && jobs.length > 0 ? (
      <p>Percent to Goal: {divisionResult}%</p>
    ) : (
      <div>Start Applying</div>
    )}
  </div>
);
}

export default Jobs_Calc;

