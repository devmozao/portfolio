import React from 'react'

import Container from 'react-bootstrap/Container'

import Header from '../containers/header/Header'
import Footer from '../containers/footer/Footer'

const PageHome = () => {
  return (
    <>
      <Container>
        <Header />
        <p>Home page</p>
        <Footer />
      </Container>
    </>
  )
}

export default PageHome
