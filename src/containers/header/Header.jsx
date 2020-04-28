import React from 'react'

import CustomNavbar from '../../components/customNavbar/CustomNavbar'

import { brand, links } from '../../__mockData__/getHeaderData'

// main component
const Header = () => {
  return (
    <>
      <CustomNavbar
        brand={brand}
        links={links}
        toggleOnCollapse
      />
    </>
  )
}

export default Header
