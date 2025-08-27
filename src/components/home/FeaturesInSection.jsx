import React from "react";

const logos = [
    { src: "/images/image-159.png", alt: "Amazon" },
    { src: "/images/image-160.png", alt: "Google" },
    { src: "/images/image-161.png", alt: "Entrepreneurs Organization" },
    { src: "/images/image-162.png", alt: "TEDx" },
    { src: "/images/image-179.png", alt: "Evolvers Nest Preschool" },
    { src: "/images/image-180.png", alt: "HR International School" },
    { src: "/images/image-181.png", alt: "Rishi Vidya International School" },
];

const FeaturedIn = () => {
    return (
        <div className="pb-16 bg-white text-center">
            {/* Heading */}
            <h3 className="font-bold text-center text-[36px] sm:text-4xl  mb-16 text-black manrope" 
                >
                <span className="text-black ">FEATURED</span> 
                <span style={{ color: '#383086' }}> IN</span>
            </h3>

            {/* Logos Grid */}
            <div className="grid grid-cols-2  md:grid-cols-7 gap-8 justify-items-center items-center px-4 md:px-30">
                {logos.map((logo, index) => (
                    <div key={index} className="flex justify-center">
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className="max-w-[120px] h-auto"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedIn;