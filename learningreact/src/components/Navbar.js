import React from 'react';
import NavbarElements from './NavbarElements';

function Navbar() {
    return (
      <div className="">
        <div className="h-screen w-72 text-white p-3 backdrop-blur-lg backdrop-saturate-150 bg-indigo-800 bg-opacity-75">
            <i className='text-2xl bx bx-menu p-3 ml-1'></i>
          <NavbarElements />
        </div>
      </div>
    )
}
export default Navbar;