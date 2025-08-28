import React from "react";

const OurCoursesHeroSection = () => {
  return (
    <div className="relative md:min-h-[342px] overflow-hidden flex items-center mb-8">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[#dddddd]"></div>
      
      <div className="relative z-10 w-full mx-auto">
        <div className="items-center h-full">
          {/* Left side - Profile Image */}
          <div className="flex items-center">
            <div className="relative w-full">
              <img
                src="/images/our-courses-1.png"
                alt="About Me"
                className="w-full h-64 md:h-auto object-cover"
              />

              {/* Black overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
              
              {/* Text overlay positioned similar to the reference image */}
              <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-32">
                {/* Heading - responsive font sizes */}
                <h1 className="text-xl sm:text-2xl md:text-[32px] font-semibold md:font-[600] poppins text-white mb-2 md:mb-4 max-w-md tracking-wide">
                  Learn from an Experienced Instructor
                </h1>
                
                {/* Description - responsive font sizes and spacing */}
                <p className="text-sm sm:text-base md:text-[20px] font-medium md:font-[600] mb-4 md:mb-6 max-w-md text-[#f1cf87] poppins">
                  Gain real-world skills and take the next step in your personal and professional journey.
                </p>
                
                {/* Button - responsive sizing */}
                <div className="flex flex-col md:flex-row gap-4">
                  <button className="bg-[#283086] text-white text-sm sm:text-base md:text-[20px] font-medium md:font-[600] poppins px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-full">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional decorative elements to match the organic feel */}
    </div>
  );
};

export default OurCoursesHeroSection;