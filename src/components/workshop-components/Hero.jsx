import React from "react";

const WorkshopHeroSection = () => {
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
                                src="/images/workshop-1.png"
                                alt="About Me"
                                className=" h-64 md:h-auto object-cover"
                            />
                            {/* Black overlay on image */}
                            <div className="md:hidden block absolute inset-0 bg-black opacity-40"></div>
                        </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1
                            className="text-2xl sm:text-3xl relative md:left-30 md:text-[64px] font-medium md:font-[500] poppins text-center px-4 md:text-[#383086] text-white "
                        >
                            Ruchira&apos;s Workshop
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkshopHeroSection;