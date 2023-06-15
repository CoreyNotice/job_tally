import React, { useState } from 'react' 
import axios from 'axios'

export function Auth() {
  return (
    <div>
        <Login/>
        <Register/>
    </div>
  );
};
const Login=()=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const onSubmit=async (event)=>{
     event.preventDefault();
     try{
      await axios.post("")
     }catch(err){

     }


    }
    return (
        <Form username={username} 
        password={password} 
        setUsername={setUsername} 
        setPassword={setPassword}
        label='Login'
        onSubmit={onSubmit}
        />
)
}
const Register=()=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const onSubmit=async (event)=>{
        event.preventDefault();
        try{
         await axios.post("")
        }catch(err){
   
        }
    }
    return (
        <Form  
        username={username} 
        password={password} 
        setUsername={setUsername} 
        setPassword={setPassword}
        label='Register'
        onSubmit={onSubmit}
        />
)
}
const Form=({username,
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
                value={username}
                onChange={(event)=>setUsername(event.target.value)}/>
           </div>
           <div>
               <label htmlFor='password'>Password:</label>
               <input 
               type='text' 
               id='password' 
               value={password}
               onChange={(event)=>setPassword(event.target.value)}/>
           </div>
           <button type="submit">{label}</button>
           
        </form>
           </div>
    )
}
