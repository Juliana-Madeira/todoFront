import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiTodos from '../../utils/api.utils';

export const FormSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const user = await apiTodos.signup({username, email, password})
        console.log('account created')
        navigate('/login')
      } catch (error) {
        console.error(error)
      }
      setEmail('')
      setPassword('')
      setUsername('')
    }

  return (
    <form className='form-login' onSubmit={handleSubmit} >
      <input 
            type="text" 
            name='text' 
            placeholder='Username' 
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input 
            type="email" 
            name='email' 
            placeholder='E-mail' 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input 
            type="password" 
            name='password' 
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn-login' type='submit'>Signup</button>
        <p>Already have an account?<Link to='/login'><span>Login</span></Link></p>
    </form>
  )
}
