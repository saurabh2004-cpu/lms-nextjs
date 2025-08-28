import React from 'react';

const FeaturedWorkshop = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl py-6 md:py-12 overflow-hidden">
      {/* Header with decorative element */}
      <div className="px-6 md:px-8 pt-4 md:pt-8 pb-4 md:pb-6 w-full mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-[32px] font-[500] text-black poppins pb-4 md:pb-12">
            Featured Workshop
          </h2>
        </div>
      </div>

      {/* Main Content - Responsive Layout */}
      <div className="mx-4 md:mx-0 flex flex-col md:flex-row shadow-xl justify-between gap-0 md:gap-12 rounded-xl overflow-hidden">
        {/* Image - Full width on mobile, fixed width on desktop */}
        <div className="flex-shrink-0 md:mr-8">
          <div className="relative w-full md:w-[30.5625rem] h-56 md:h-[19.375rem] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Workshop participants in a modern space"
              className="w-full h-full object-cover"
            />
            {/* Speech bubble overlay */}
            <div className="absolute top-4 left-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-md">
                <span className="text-[12px] font-[600] text-black">1hr 5m</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content - Stacked on mobile, beside image on desktop */}
        <div className="flex-1 flex flex-col justify-center p-6 md:px-0 md:py-0 bg-white">
          <h3 className="text-lg md:text-[24px] font-[600] poppins text-[#383086] mb-4 md:mb-6 leading-tight tracking-wide">
            HAPPINESS IS A HABIT
          </h3>

          <p className="text-black text-sm md:text-[1rem] poppins leading-relaxed mb-6 md:mb-8 max-w-full md:max-w-md">
            Happiness is a choice, and you can exercise that choice with
            a few simple steps. A step-by-step guide on how to practice
            the art of happiness.
          </p>

          {/* Action Button */}
          <div>
            <button className="bg-[#f1cf87] text-white text-sm md:text-[1rem] font-[500] poppins py-3 md:px-0 px-6 md:h-[44px] md:w-[93px] rounded md:rounded-none transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorkshop;