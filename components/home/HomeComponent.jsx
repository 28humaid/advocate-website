"use client"
import React, { useState, useEffect } from 'react'
import HeroComponent from './hero/HeroComponent'
import StatCards from './below-hero/StatCards'
import ServicesComponent from './services/ServicesComponent'
import FullScreenLoader from './loader/Fullscreenloader'

const HomeComponent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const LOADER_DURATION = 10000 // ms — single source of truth

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      // setTimeout(() => setShowContent(true), 300)
      setShowContent(true)
    }, LOADER_DURATION)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div
        style={{
          opacity: isLoading ? 1 : 0,
          visibility: isLoading ? 'visible' : 'hidden',
          transition: 'opacity 0.5s ease, visibility 0.5s ease',
        }}
      >
        <FullScreenLoader
          duration={LOADER_DURATION}
          firmName="Alamgir & Associates"
          tagline="Defending Rights Since 1994"
        />
      </div>

      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      >
        <HeroComponent />
        <StatCards />
        <ServicesComponent />
      </div>
    </>
  )
}

export default HomeComponent