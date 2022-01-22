import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarElement(props) {
  return (
      <li className="my-2">
        <Link to={props.url} className="">
          <div className="w-10/12 p-2 text-lg">
            <i className={`bx ${props.icon} p-2 mr-8`} ></i>
            <span className="link">{props.text}</span>
          </div>
        </Link>
      </li>
  )
}