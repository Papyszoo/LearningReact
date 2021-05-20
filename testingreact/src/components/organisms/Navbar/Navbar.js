import React from 'react';
import { Link } from 'react-router-dom';
import {
    Menu
  } from 'semantic-ui-react'

function Navbar() {
    return (
      <nav width="250px">
        <Menu compact vertical borderless>
          <Menu.Item>
            <Menu.Header>Main Links</Menu.Header>
            <Menu.Menu>
              <Menu.Item as="a">
                <Link to="/">Home</Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Mini Apps</Menu.Header>
            <Menu.Menu>
              <Menu.Item as="a">
                <Link to="/FilteredUsersList">Filtered Users List</Link>
              </Menu.Item>
              <Menu.Item as="a">
                <Link to="/ContactsList">Contacts List</Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </nav>
    )
}
export default Navbar;