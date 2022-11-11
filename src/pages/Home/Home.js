import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../Home/Home.css';

export const Home = () => {
   
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }

    const handleSignup = () => {
        navigate('signup')
    }

  return (
    <div className='home'>
        <button className='btn-home' onClick={handleLogin}>Login</button>
        <button className='btn-home' onClick={handleSignup}>Signup</button>
    </div>
  )
}
