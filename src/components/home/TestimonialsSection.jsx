"use client"

import { useState } from "react"

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      quote:
        "I highly recommend attending the \"BEING YOURSELF\" program conducted by Ruchira Darda...",
      image: "/images/Ellipse-205.png",
      date: "19 May 2025",
    },
    {
      id: 2,
      quote:
        "Ruchira's approach to mindful parenting has transformed our family dynamics...",
      image: "/images/Ellipse-205.png",
      date: "15 April 2025",
    },
    {
      id: 3,
      quote:
        "The emotional intelligence workshop was life-changing...",
      image: "/images/Ellipse-205.png",
      date: "8 March 2025",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 text-center relative">
      <h3
        className="font-bold mb-6 text-3xl text-[2rem]"
        style={{ color: "#383086", fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
      >
        Testimonials
      </h3>

      <p
        className="text-black mb-8 text-base md:text-[16px] font-medium leading-relaxed max-w-4xl mx-auto poppins"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        "Ruchira's guidance as a personal parenting coach has been truly transformative..."
      </p>

      {/* Carousel */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-shrink-0 w-full px-4 md:px-6">
              <div
                className="rounded-3xl p-6 md:p-8 w-full min-h-80 flex flex-col md:flex-row items-center gap-4 md:gap-8 text-left border-4"
                style={{ backgroundColor: "#383086", borderColor: "#4A90E2" }}
              >
                <div className="flex-shrink-0 md:ml-4">
                  <img
                    src={testimonial.image}
                    alt="Testimonial"
                    className="w-48 h-48 md:w-64 md:h-60 rounded-full object-cover border-4 border-white"
                  />
                </div>

                <div className="flex-1 text-white md:ml-12">
                  <div className="mb-2">
                    <svg
                      className="w-10 h-10 text-yellow-400 transform rotate-180"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>

                  <p className="text-sm md:text-base font-medium poppins leading-relaxed font-medium mb-4">
                    {testimonial.quote}
                  </p>

                  <p
                    className="text-sm md:text-[14px] font-[400] poppins text-[#ffffff]/50 relative md:top-8"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""} absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 border-0 shadow-lg rounded-full p-3 z-10`}
        >
          &#10094;
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide === testimonials.length - 1}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 border-0 shadow-lg rounded-full p-3 z-10 ${currentSlide === testimonials.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          &#10095;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialsCarousel
