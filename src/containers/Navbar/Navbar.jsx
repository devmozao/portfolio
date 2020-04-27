import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import IconHome from '../../components/Icons/IconHome'

// main component
export default () => {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* {renderNavBar()} */}
    </>
  )
}
// export default CustomNavbar

const renderNavBar = () => {
  return (
    <nav className='navbar navbar-expand-xl navbar-light bg-light'>
      {renderLogo()}
      {renderToggleButton()}
      {renderLink()}
    </nav>
  )
}

const renderLogo = () => {
  return <a className='navbar-brand' href='#'>Brand</a>
}

const renderToggleButton = () => {
  return (
    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon' />
    </button>
  )
}

const renderLink = () => {
  return (
    <div className='collapse navbar-collapse' id='navbarNav'>
      <ul className='navbar-nav'>
        <li className='nav-item active'>
          <a className='nav-link' href='#'><IconHome />Home1</a>
        </li>
        <li className='nav-item active'>
          <a className='nav-link' href='#'><IconHome />Home2</a>
        </li>
        <li className='nav-item active'>
          <a className='nav-link' href='#'><IconHome />Home3</a>
        </li>
        {/* <IconHome /> */}
      </ul>
    </div>
  )
}
