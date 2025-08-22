"use client"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <div className="bg-white px-5 py-10 md:px-10 md:py-15 min-h-[70vh] w-full flex flex-col md:flex-row items-center justify-between">
      {/* Left Section - Text */}
      <div className="flex-1 w-2/3 h-full">
        <h2 className="font-bold text-xl md:text-4xl text-[#383086] mb-4 uppercase tracking-wide poppins">
          MAKE PARENTING STRESS
        </h2>

        <h1 className="font-[700] text-4xl md:text-[96px] leading-tight text-[#D6B56D] mb-6 uppercase poppins">
          FREE & FUN FREE 
        </h1>

        <h3 className="font-medium text-base md:text-lg text-[#d6b56d] mb-3 poppins">Why Ruchira For Parenting?</h3>

        <p className="text-[20px] font-medium text-black  leading-relaxed  mb-8 poppins max-w-[550px]">
          Ruchira brings a heart-centered approach to parenting, combining mindfulness with real-world experience. She
          helps parents connect deeply.
        </p>

        <button className="bg-[#383086] text-white rounded-full  px-7 py-3 text-[1rem] font-[400] flex items-center gap-2 shadow-lg hover:bg-[#2a2366] hover:shadow-xl transition-all duration-200 poppins">
          Know more
          <ArrowRight size={20} className="rotate-320 bg-[#ffffff] text-black rounded-full " />
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 flex justify-end relative  left-10 px-0 max-w-2/5 relative md:bottom-12">
        <img
          src="/images/ruchira-img-removebg-preview.png"
          alt="Ruchira - Mindfulness Coach"
          className="max-h-[640px] w-[644px] max-w-full h-auto"
        />
      </div>
    </div>
  )
}

export default HeroSection
