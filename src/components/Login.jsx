import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const login = ()=>{
    localStorage.setItem('shaan1',true)
    navigate('/')
  }
  const navigate = useNavigate();
  useEffect(()=>{
    let login = localStorage.getItem('shaan1')
    if(login){
      navigate('/')
    }
  })
  return (
    <div>
        <input type="text" placeholder='userId' /><br /><br />
        <input type="text" placeholder='Password' /><br /><br />
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login;