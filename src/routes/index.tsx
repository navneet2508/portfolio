import { Container } from '@mui/material'
import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import AppHeader from '../layout/app-header'
import AppFooter from '../layout/app-footer'
import Homepage from '../pages/homepage'
import AboutMe from '../pages/about-me'

const Index = () => {
  return (
    <Fragment>
      <Container>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Container>
      <div style={{ borderTop: '1px solid #464646', marginTop: '5rem' }}></div>
      <Container>
        <AppFooter />
      </Container>
    </Fragment>
  )
}

export default Index
