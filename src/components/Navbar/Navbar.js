import React from 'react';
import { Link } from 'react-router-dom';

import '../Navbar/Navbar.css';

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <div  className='navbar-title'>
          <Link to='/'>Todo List</Link>
        </div>
        <div className='navbar-menu'>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </div>
    </nav>
  )
}
