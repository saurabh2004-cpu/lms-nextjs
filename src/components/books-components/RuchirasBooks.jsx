import React from "react";

const RuchirasBooks = () => {
    return (
        <div className="relative md:min-h-[200px] md:min-h-[25.125rem] overflow-hidden flex items-center md:mb-8">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-yellow-50 to-yellow-200"></div>
            <div className="relative z-10 w-full mx-auto">
                <div className="items-center h-full">
                    {/* Left side - Profile Image */}
                    <div className="flex items-center">
                        <div className="relative w-full">
                            <img
                                src="/images/ruchiras-books-1.png"
                                alt="About Me"
                                className="w-full h-full md:h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional decorative elements to match the organic feel */}
            <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-yellow-300 rounded-full opacity-20 blur-xl md:blur-2xl lg:blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-16 h-16 md:w-24 md:h-24 lg:w-36 lg:h-36 bg-orange-200 rounded-full opacity-25 blur-lg md:blur-xl lg:blur-2xl"></div>
        </div>
    );
};

export default RuchirasBooks;