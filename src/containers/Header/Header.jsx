import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import IconHome from '../../components/Icons/IconHome'

const { Brand, Toggle, Collapse } = Navbar
const { Link } = Nav

// main component
const Header = () => {
  return (
    <>
      {renderNavBar()}
    </>
  )
}

const renderNavBar = () => {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        {renderHome()}
        <Toggle aria-controls='basic-navbar-nav' />
        <Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Link href='#home'>Home</Link>
            <Link href='#link'>Link</Link>
          </Nav>
        </Collapse>
      </Navbar>
      {/*
      {renderToggleButton()}
      {renderLink()} */}
    </>
  )
}

const renderHome = () => {
  return (<Brand href='#home'>Home</Brand>)
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

export default Header
