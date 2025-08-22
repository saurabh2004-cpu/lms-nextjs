import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const JourneySection = () => {
  const bulletPoints = [
    "Learn how to raise emotionally aware and respectful children.",
    "Discover the power of treating others with kindness and empathy.",
    "Transform your parenting with simple, mindful communication techniques.",
    "Build stronger family bonds through mindful communication practices.",
  ];

  return (
    <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white">
      {/* Header Section */}
      <div 
        className="bg-gradient-to-br from-[#383086] to-[#4a3d99] text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #383086 0%, #4a3d99 100%)'
        }}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white/20"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border-2 border-white/20"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/10"></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-[36px] md:font-[700] poppins  font-bold poppins mb-4 leading-tight">
            Start your{' '}
            <span 
              className="text-[#f1cf87] md:font-[700] md:text-[36px] poppins"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
            >
              journey
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-[16px] md:font-[500]  text-white  font-medium max-w-2xl mx-auto leading-relaxed">
            Start your journey with ruchira and make your life easy and happy
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className="bg-[#f1cf87] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative -mt-8 rounded-t-3xl"
        style={{
          background: 'linear-gradient(135deg, #f1cf87 0%, #f5d799 100%)'
        }}
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Content */}
          <div className="flex-1 lg:max-w-3xl">
            <div className="mb-6">
              <span className="inline-block text-[#383086]  py-2 rounded-full text-xs sm:text-sm md:text-[16px] font-bold letter-spacing-wide poppins uppercase tracking-wider">
                JOIN OUR MASTERCLASS
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-[20px]  md:font-[500] poppins font-medium text-black mb-6 sm:mb-8 leading-relaxed poppins max-w-4xl">
              Discover the art of mindful and compassionate parenting in our empowering masterclass led by an inspiring
              woman on a mission to create more empathetic homes and communities.
            </h2>

            {/* Bullet Points */}
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {bulletPoints.map((point, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 relative md:right-7 text-[#5D4037] group hover:translate-x-1 transition-transform duration-200"
                >
                  <div className="flex-shrink-0 mt-1 ">
                    <ChevronRight 
                      className="w-5 h-5 text-[#7B1FA2] font-bold group-hover:text-[#8E24AA] transition-colors duration-200" 
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-sm  text-black sm:text-base md:text-[16px] md:font-[500] leading-relaxed font-medium poppins">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button 
              className="group bg-[#383086] hover:bg-[#4a3d99] flex justify-between  text-white md:text-[16px] md:font-[400] px-6 sm:px-8 py-3 sm:py-3 rounded-full font-semibold text-sm sm:text-base lg:text-lg poppins shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center gap-2"
              style={{
                boxShadow: '0 8px 25px rgba(56, 48, 134, 0.3)'
              }}
            >
              <span>Work with us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 md:ml-4 transition-transform duration-200" />
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-80 xl:w-96 lg:flex-shrink-0">
            <div className="relative ">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="/images/image-198.png"
                    alt="Ruchira - Mindful Parenting Expert"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target ;
                      target.src = "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=400";
                    }}
                  />
                </div>
                <div className="absolute  "></div>
              </div>
              
              {/* Decorative elements around the image */}
              <div className="absolute -z-10 top-4 right-4 w-full h-full bg-[#383086]/20 rounded-3xl"></div>
              <div className="absolute -z-20 top-8 right-8 w-full h-full bg-[#7B1FA2]/10 rounded-3xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom decorative wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative block w-full h-8" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              fill="rgba(255,255,255,0.1)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default JourneySection