import React from 'react';
import { Link } from 'react-router-dom';

import '../Navbar/Navbar.css';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Todo List</Link>
    </nav>
  )
}
