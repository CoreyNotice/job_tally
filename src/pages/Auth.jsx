import React, { useState } from 'react' 
import axios from 'axios'
import { useCookies } from 'react-cookie';
import {useNavigate} from 'react-router-dom'
export function Auth() {
  return (
    <div>
        <Login/>
        <Register/>
    </div>
  );
};
const Login=()=>{
    const [userName,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const [_, setCookies]=useCookies(["access_token"])

    const navigate=useNavigate()
    const onSubmit=async (event)=>{
     event.preventDefault();
     try{
      const response =await axios.post('http://localhost:1020/auth/login',{
        userName,
        password,
      });
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID",response.data.userID);
      navigate("/")
     }catch(err){
        console.log(err);
     }


    }
    return (
        <Form userName={userName} 
        password={password} 
        setUsername={setUsername} 
        setPassword={setPassword}
        label='Login'
        onSubmit={onSubmit}
        />
)
}
const Register=()=>{
    const [userName,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post('http://localhost:1020/auth/register', {
            userName,
            password,
          });
          alert("Registration Completed! Now login.");
        } catch (err) {
          console.log(err);
        }
      };
    return (
        <Form  
        username={userName} 
        password={password} 
        setUsername={setUsername} 
        setPassword={setPassword}
        label='Register'
        onSubmit={onSubmit}
        />
)
}
const Form=({userName,
    setUsername,
    password,
    setPassword,
    label,
    onSubmit,
})=>{
    return(
        <div>
        <form onSubmit={onSubmit}>
           <h2>{label}</h2>
           <div>
               <label htmlFor='username'>Username:</label>
               <input 
               type="text"
                id="username"
                value={userName}
                onChange={(event)=>setUsername(event.target.value)}/>
           </div>
           <div>
               <label htmlFor='password'>Password:</label>
               <input 
               type='password' 
               id='password' 
               value={password}
               onChange={(event)=>setPassword(event.target.value)}/>
           </div>
           <button type="submit">{label}</button>
           
        </form>
           </div>
    )
}
