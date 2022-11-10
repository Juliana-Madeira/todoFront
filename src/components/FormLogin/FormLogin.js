import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiTodos from '../../utils/api.utils';

import '../FormLogin/FormLogin.css';

export const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const resetForm = () => {
        setEmail('')
        setPassword('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await apiTodos.login({email, password})
            resetForm()
            navigate('/')
        } catch (error) {
            console.log(error.status)
        }
    }


  return (
    <form className='form-login'>
        <input 
            type="email" 
            name='email' 
            id='email' 
            placeholder='E-mail' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input 
            type="password" 
            name='password' 
            id='password' 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <p className='forgot-password'>Esqueceu sua senha?</p>
        <button className='btn-login' type='submit'>Login</button>
        <p>Don´t have an account?<Link to='/signup'><span>Signup</span></Link></p>
    </form>
  )
}
