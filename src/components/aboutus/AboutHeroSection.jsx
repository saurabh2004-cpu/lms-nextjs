import React from "react";

const AboutHeroSection = () => {
    // Leaf SVG Component
  
    return (
        <div className="relative w-full  md:min-h-[339px] overflow-hidden flex items-center mb-8">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-yellow-50 to-yellow-200"></div>
            <div className="relative z-10 w-full  mx-auto">
                <div className=" items-center h-full">
                    {/* Left side - Profile Image */}
                    <div className=" flex items-center">
                        <div className="relative w-full">
                            <img
                                src="/images/Group-1-99.png"
                                alt="About Me"
                                className="w-full h-[150px] md:h-full object-cover"
                            />
                        </div>
                    </div>

                    
                </div>
            </div>

            {/* Additional decorative elements to match the organic feel */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-24 h-24 md:w-36 md:h-36 bg-orange-200 rounded-full opacity-25 blur-2xl"></div>
        </div>
    );
};

export default AboutHeroSection;