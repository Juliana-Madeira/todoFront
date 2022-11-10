import React from 'react'
import { FormLogin } from '../../components/FormLogin/FormLogin'

import '../Login/Login.css'

export const Login = () => {
  return (
    <div className='login'>
        <h2>Faça seu Login</h2>
        <FormLogin/>
    </div>
  )
}
