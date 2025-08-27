'use client'
import HeroSection from '../../components/books-components/BooksHeroSection'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
     <Navbar />
    <HeroSection />
     <Footer /> 
    </>
  )
}

export default page