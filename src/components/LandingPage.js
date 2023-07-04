import React from 'react'
import WelcomePage from './Welcome'
import NavBar from './NavBar'
import Delivery from './Delivery'
import ListOfCities from './ListOfCities'
import CountryList from './CountryList'
import Information from './Information'
import CitiesNear from './CitiesNear'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div>
        <NavBar/>
      <WelcomePage/>
      <Delivery/>
      <CitiesNear/>
      <ListOfCities/>
      <CountryList/>
      <Information/>
      <Footer/>
    </div>
  )
}

export default LandingPage
