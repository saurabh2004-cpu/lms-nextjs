import OurCoursesHeroSection from '../../components/our-courses-components/Hero'
import CourseCards from '../../components/our-courses-components/Courses'
import TrustedSection from '../../components/our-courses-components/TrustedSection'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <OurCoursesHeroSection />
      <CourseCards />
      <TrustedSection />
      <Footer />
    </>
  )
}

export default page
