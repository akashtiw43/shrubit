import React from 'react'

const Login = () => {
    const [email,setEmail]=React.useState('')
    const [password,setPassword]=React.useState('')
    const [user,setUser]=React.useState('')
  return (
    <div className='login-body'>
      <div className='login-cont'>
            <h2> Login</h2>
            <label for='email'>Email</label>
            <input type='text'value={email}/>
            <label for='password'>Password</label>
            <input type='text'value={password}/>    
        </div>
    </div>  
    
  )
}

export default Login