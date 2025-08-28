'use client'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import WorkshopHeroSection from '../../components/workshop-components/Hero'
import FeaturedWorkshop from '../../components/workshop-components/FeaturedWorkshop'
import AllWorkshops from '../../components/workshop-components/AllWorkshops'
import ReviewsCarousel from '../../components/workshop-components/Reviews'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <WorkshopHeroSection />
      <FeaturedWorkshop />
      <AllWorkshops />
      <ReviewsCarousel />
      <Footer />
    </>
  )
}

export default page
