"use client"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <div className="bg-white px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-15 min-h-[70vh] w-full flex flex-col-reverse lg:flex-row items-center justify-between">
      {/* Left Section - Text */}
      <div className="flex-1 w-full lg:w-2/3 h-full mb-8 lg:mb-0">
        <h2 
          className="font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl text-[#383086] mb-3 sm:mb-4 uppercase tracking-wide"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          MAKE PARENTING STRESS
        </h2>
        
        <h1 
          className="font-[700] text-2xl sm:text-3xl md:text-5xl lg:text-[96px] leading-tight text-[#D6B56D] mb-4 sm:mb-6 uppercase"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          FREE & FUN FREE
        </h1>
        
        <h3 
          className="font-medium text-sm sm:text-base lg:text-lg text-[#d6b56d] mb-2 sm:mb-3"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Why Ruchira For Parenting?
        </h3>
        
        <p 
          className="text-base sm:text-lg lg:text-[20px] font-medium text-black leading-relaxed mb-6 sm:mb-8 max-w-full lg:max-w-[550px]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Ruchira brings a heart-centered approach to parenting, combining mindfulness with real-world experience. She
          helps parents connect deeply.
        </p>
        
        <button 
          className="bg-[#383086] text-white rounded-full px-6 sm:px-7 py-3 text-sm sm:text-[1rem] font-[400] flex items-center gap-2 shadow-lg hover:bg-[#2a2366] hover:shadow-xl transition-all duration-200 w-fit"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Know more
          <ArrowRight size={18} className="sm:w-5 sm:h-5 bg-[#ffffff] text-black rounded-full p-1" />
        </button>
      </div>
      
      {/* Right Section - Image */}
      <div className="flex-1 flex justify-end md:justify-center lg:justify-end relative lg:left-10 px-0 w-full lg:max-w-2/5 lg:relative bottom-12">
        <img
          src="/images/ruchira-img-removebg-preview.png"
          alt="Ruchira - Mindfulness Coach"
          className="max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[640px] w-auto max-w-full h-auto object-contain"
        />
      </div>
    </div>
  )
}

export default HeroSection