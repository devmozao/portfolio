import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const { Brand, Toggle, Collapse } = Navbar
const { Link } = Nav

// main component
const CustomNavbar = ({ brand = {}, links = [], toggleOnCollapse }) => {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        {renderBrand({ brand })}
        {renderToggleButton({ toggleOnCollapse })}
        <Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            {links.map(link => renderLink({ link }))}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

const renderBrand = ({ brand = {} }) => {
  const { label, icon } = brand
  return (
    <>
      {brand && (
        <Brand href={'#' + label}>
          {renderIcon({ icon })}
          <span>{label}</span>
        </Brand>
      )}
    </>
  )
}

const renderIcon = ({ icon = {} }) => {
  const { file, width, height } = icon
  const IconFile = file
  return (
    <>
      {icon && IconFile && (
        <IconFile
          width={width}
          height={height}
        />
      )}
    </>
  )
}

const renderToggleButton = ({ toggleOnCollapse }) => {
  return (
    <>
      {toggleOnCollapse && (
        <Toggle aria-controls='basic-navbar-nav' />
      )}
    </>
  )
}

const renderLink = ({ link = {} }) => {
  const { label, icon } = link
  return (
    <>
      {link && (
        <Link href={'#' + label}>
          {renderIcon({ icon })}
          <span>{label}</span>
        </Link>
      )}
    </>
  )
}

export default CustomNavbar
