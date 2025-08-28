import React from 'react';

const TrustedSection = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-3 md:space-y-4">
              <p className="text-lg md:text-[24px] font-normal md:font-[400] poppins text-[#383086] tracking-wide">
                Trusted
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium md:font-[500] poppins text-black leading-tight">
                Trusted by the World's Leading Organisations.
              </h2>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="lg:pl-8">
            <p className="text-gray-600 text-base md:text-[1rem] font-normal md:font-[400] poppins leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;