'use client'
import WhoIsRuchiraSection from '../../components/aboutus/WhoIsRuchiraSection'
import AboutHeroSection from '../../components/aboutus/AboutHeroSection'
import RuchiraWorkSection from '../../components/aboutus/RuchiraWorkSection'
import RuchiraAchievementsSection from '../../components/aboutus/AchievementSection'
import CoachingSection from '../../components/aboutus/CoachingSection'
import RecognitionsSection from '../../components/aboutus/RecognitionSection'
import TimelineCarousel from '../../components/aboutus/TimelineCarousel'
import BrandsCarousel from '../../components/aboutus/BrandsCarousel'
import PhotoGallery from '../../components/aboutus/PhotosGallery'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <>
      <Navbar />
      <AboutHeroSection />
      <WhoIsRuchiraSection />
      <RuchiraWorkSection />
      <RuchiraAchievementsSection />
      <CoachingSection />
      <RecognitionsSection />
      <TimelineCarousel />
      <BrandsCarousel />
      <PhotoGallery />
      <Footer />
    </>
  )
}

export default Page
