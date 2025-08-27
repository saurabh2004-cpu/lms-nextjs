import React, { useState, useEffect } from 'react';

const TimelineCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            year: "2022",
            description: "Spoke at a TEDx event; unearthing the fact that thorough knowledge about personalities can reduce the divorce rate and result in more understanding marriages"
        },
        {
            year: "2021",
            description: "Launched comprehensive personality coaching programs and conducted workshops for over 500 individuals across multiple cities"
        },
        {
            year: "2020",
            description: "Published research on personality science applications in relationship counseling and started online coaching sessions"
        },
        {
            year: "2019",
            description: "Established the foundation for personality-based coaching methodology and began working with corporate clients"
        },
        {
            year: "2018",
            description: "Completed advanced certifications in personality psychology and began developing specialized coaching techniques"
        }
    ];

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="w-full max-w-[1033px] max-h-[218px] mx-auto my-6 px-4 md:mt-40">
            <div className="relative">
                {/* Main carousel container */}
                <div className="bg-white rounded-2xl shadow-lg shadow-2xl shadow-black/30 shadow-offset-bottom-right shadow-offset-left overflow-hidden">
                    <div className="relative h-64 md:h-48">
                        {/* Slides */}
                        <div className="relative w-full h-full">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${index === currentSlide
                                        ? 'translate-x-0 opacity-100'
                                        : index < currentSlide
                                            ? '-translate-x-full opacity-0'
                                            : 'translate-x-full opacity-0'
                                        }`}
                                >
                                    <div className="flex flex-col justify-center items-center h-full px-8 md:px-12 py-8">
                                        {/* Year */}
                                        <h2
                                            className="text-4xl md:text-[33px] relative md:bottom-10 md:font-[500] text-center items-center poppins transition-all duration-500 mb-4"
                                            style={{ color: '#383086' }}
                                        >
                                            {slide.year}
                                        </h2>
                                        
                                        {/* Description */}
                                        <p className="text-black relative md:bottom-5 text-center text-sm md:text-[16px] md:font-medium leading-relaxed max-w-[889px] font-medium">
                                            {slide.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center items-center py-4 bg-white">
                        <div className="flex space-x-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'w-6 h-3 rounded-full'
                                        : 'hover:scale-110'
                                        }`}
                                    style={{
                                        backgroundColor: index === currentSlide ? '#f1cf87' : '#383086'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation arrows */}
                {/* <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 p-3 group opacity-70 hover:opacity-100"
                >
                    <svg
                        className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 p-3 group opacity-70 hover:opacity-100"
                >
                    <svg
                        className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button> */}
            </div>
        </div>
    );
};

export default TimelineCarousel;