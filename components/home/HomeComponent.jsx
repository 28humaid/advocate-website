import React from 'react'
import HeroComponent from './hero/HeroComponent'
import StatCards from './below-hero/StatCards'
import ServicesComponent from './services/ServicesComponent'

const HomeComponent = () => {
  return (
    <>
      <HeroComponent/>
      <StatCards/>
      <ServicesComponent/>
    </>
  )
}

export default HomeComponent