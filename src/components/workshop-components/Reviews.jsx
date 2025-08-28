"use client"

import { useState } from "react"

const ReviewsCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const reviews = [
        {
            id: 1,
            quote: "I highly recommend attending the \"BEING YOURSELF\" program conducted by Ruchira Darda. It's an eye opener to a person's strengths and weaknesses. You will also learn a simple trick or two to save yourself from uncomfortable situations on the professional or personal fronts. It has helped me to get on with my life journey in a completely new and enthusiastic way.",
            image: "/images/Ellipse-205.png",
            date: "19 May 2025",
        },
        {
            id: 2,
            quote: "Ruchira's approach to mindful parenting has transformed our family dynamics completely. Her insights into child psychology and practical techniques have helped us build stronger connections with our children. The sessions were incredibly valuable and life-changing.",
            image: "/images/Ellipse-205.png",
            date: "15 April 2025",
        },
        {
            id: 3,
            quote: "The emotional intelligence workshop was absolutely transformative. Ruchira's guidance helped me understand myself better and improve my relationships both personally and professionally. I can't thank her enough for this incredible journey.",
            image: "/images/Ellipse-205.png",
            date: "8 March 2025",
        },
        {
            id: 4,
            quote: "Working with Ruchira as my personal coach has been one of the best decisions I've made. Her compassionate approach and deep understanding of human psychology have helped me overcome challenges I thought were impossible to face.",
            image: "/images/Ellipse-205.png",
            date: "22 February 2025",
        }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % reviews.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    return (
        <div className="w-full max-w-8xl mx-auto px-4 md:px-8 py-8 md:py-12 text-center relative">
            {/* Header Section */}
            <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-4xl lg:text-[32px] font-[600] poppins text-black mb-8 md:mb-20">
                    Reviews
                </h2>

                <div className="max-w-4xl mx-auto space-y-3 md:space-y-2 mb-8 md:mb-20 px-2 md:px-0">
                    <p className="text-sm md:text-lg lg:text-[16px] font-[600] poppins leading-relaxed">
                        My clients are very close to my heart. I love them wholeheartedly.
                    </p>
                    <p className="text-sm md:text-lg lg:text-[16px] font-[600] poppins leading-relaxed">
                        They are not just my coachees, but we share a close professional relationship so I can understand them fully and bring the best out of their coaching experience.
                    </p>
                    <p className="text-sm md:text-lg lg:text-[16px] font-[600] poppins leading-relaxed">
                        Here are Few Tributes shared by some of my happy clients, please take a moment to read.
                    </p>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative">
                <div className="overflow-hidden rounded-2xl md:rounded-3xl">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {reviews.map((review) => (
                            <div key={review.id} className="flex-shrink-0 w-full">
                                <div className="bg-[#d9d5d5] rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 mx-2 md:mx-4 lg:mx-8 min-h-[500px] md:min-h-[400px] lg:min-h-[450px] md:h-auto lg:h-[19.25rem] flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
                                    {/* Profile Image */}
                                    <div className="flex-shrink-0 order-1 md:order-1">
                                        <div className="relative">
                                            <img
                                                src={review.image}
                                                alt="Client Review"
                                                className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full object-cover shadow-lg"
                                                onError={(e) => {
                                                    e.target.src = "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 text-left order-2 md:order-2 px-2 md:px-0 lg:px-22">
                                        {/* Quote Icon */}
                                        <div className="mb-4 md:mb-6 flex justify-center md:justify-start">
                                            <svg
                                                className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 opacity-80"
                                                fill="#FFD700"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                            </svg>
                                        </div>

                                        {/* Review Text */}
                                        <p
                                            className="text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6 text-gray-800 text-center md:text-left"
                                            style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
                                        >
                                            {review.quote}
                                        </p>

                                        {/* Date */}
                                        <p className="text-xs md:text-sm lg:text-base poppins text-gray-500 font-medium mt-4 md:mt-6 lg:mt-20 text-center md:text-left">
                                            {review.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className={`absolute left-1 md:left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 shadow-lg rounded-full p-2 md:p-3 lg:p-4 z-10 transition-all duration-300 ${
                        currentSlide === 0 ? "opacity-50 cursor-not-allowed" : "hover:shadow-xl"
                    }`}
                >
                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={nextSlide}
                    disabled={currentSlide === reviews.length - 1}
                    className={`absolute right-1 md:right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 shadow-lg rounded-full p-2 md:p-3 lg:p-4 z-10 transition-all duration-300 ${
                        currentSlide === reviews.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:shadow-xl"
                    }`}
                >
                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Pagination Dots - Optional */}
            <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
                {reviews.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                            currentSlide === index 
                                ? "bg-purple-600 scale-110" 
                                : "bg-gray-300 hover:bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default ReviewsCarousel