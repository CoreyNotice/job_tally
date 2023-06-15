import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate=useNavigate();
    return (
    <div className='navbar'>
        <Link to="/">Home</Link>
    </div>
  )
}

