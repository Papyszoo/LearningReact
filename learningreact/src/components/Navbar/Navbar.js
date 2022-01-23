import React, { useState } from 'react';
import NavbarElements from '../NavbarElements';
import './Navbar.css'

function Navbar() {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className={`side-navbar ${expanded ? 'navbar-expanded' : ''}`}>
      <button onClick={() => setExpanded(!expanded)}>
        <i className='text-2xl bx bx-menu p-3 ml-1'></i>
      </button> 
      <NavbarElements />
    </div>
  )
}
export default Navbar;