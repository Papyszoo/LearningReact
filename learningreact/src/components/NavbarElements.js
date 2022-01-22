import React from 'react';
import NavbarElement from './NavbarElement';

export default function NavbarElements() {
  return (
    <ul className="mt-4">
      <NavbarElement icon="bxl-react" text="Home Page" url="/" />
      <NavbarElement icon="bx-filter-alt" text="Filter List" url="/FilteredUsersList" />
      <NavbarElement icon="bxs-contact" text="Contact List" url="/ContactsList" />
    </ul>
  )
}