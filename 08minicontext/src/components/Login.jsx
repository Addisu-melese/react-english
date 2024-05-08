import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})

    }
  return (
    <>
    <div>
        <h1>Login</h1>
        <input
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'
        />
        <input
        value={password}
        type='password'
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'
        />
        <button
        onClick={handleSubmit}
        >submit</button>
    </div>
    </>
  )
}

export default Login