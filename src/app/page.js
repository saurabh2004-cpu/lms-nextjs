'use client'

import Footer from "@/components/Footer";
import AboutSection from "@/components/home/aboutSection";
import FeaturedIn from "@/components/home/FeaturesInSection";
import HeroSection from "@/components/home/Hero"
import JourneySection from "@/components/home/JourneySection";
import ParentingSection from "@/components/home/ParentingSection";
import LatestReelsSection from "@/components/home/ReelsSection";
import OurServices from "@/components/home/ServicesSection";
import TestimonialsCarousel from "@/components/home/TestimonialsSection";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedIn />
      <OurServices />
      <JourneySection />
      <AboutSection />
      <TestimonialsCarousel />
      <LatestReelsSection />
      <ParentingSection />
      <Footer />
      
    </>
  );
}
