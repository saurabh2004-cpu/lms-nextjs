'use client'
import HeroSection from '../../components/books-components/BooksHeroSection'
import PodcastPlayerCard from '../../components/books-components/PlayerCard'
import BookShowcase from '../../components/books-components/BookShowcase'
import RuchirasBooks from '../../components/books-components/RuchirasBooks'
import PodcastInterviews from '../../components/books-components/PodcastInterviews'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PodcastPlayerCard />
      <BookShowcase />
      <RuchirasBooks />
      <PodcastInterviews />
      <Footer />
    </>
  )
}

export default page