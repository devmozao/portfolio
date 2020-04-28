import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './styles.css'

const { Brand, Toggle, Collapse } = Navbar
const { Link } = Nav

// main component
const CustomNavbar = ({ brand = {}, links = [], toggleOnCollapse }) => {
  return (
    <>
      <Navbar className='customNavbar' bg='light' expand='lg'>
        {renderBrand({ brand })}
        {renderToggleButton({ toggleOnCollapse })}
        <Collapse id='basic-navbar-nav'>
          <Nav key='nav9999' className='mr-auto'>
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
        <Brand href={`#${label}`}>
          <div className='customNavbar__items'>
            {renderIcon({ icon })}
            <span>{label}</span>
          </div>
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
  const { label, icon, id } = link
  return (
    <>
      {link && (
        <Link key={`nav${id}`} href={`#${label}`}>
          <div className='customNavbar__items'>
            {renderIcon({ icon })}
            <span className='customNavbar__text-position'>{label}</span>
          </div>
        </Link>
      )}
    </>
  )
}

export default CustomNavbar
