import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/FilteredUsersList">Filtered Users List</Link>
                </li>
                <li>
                    <Link to="/ContactsList">Contacts List</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;