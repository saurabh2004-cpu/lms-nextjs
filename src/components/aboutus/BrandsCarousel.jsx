import React, { useState, useEffect } from "react";

const BrandsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  const brands = [
    { id: 1, name: "Lokmat Times", logo: "/images/image-268.png", alt: "Lokmat Times" },
    { id: 2, name: "The Yellow Door", logo: "/images/image-269.png", alt: "The Yellow Door" },
    { id: 3, name: "WOW", logo: "/images/image-270.png", alt: "WOW - Wider Opportunities for Women" },
    { id: 4, name: "Maha Marathon", logo: "/images/image-271.png", alt: "Maha Marathon - A Lokmat Initiative" },
    { id: 5, name: "Brand Five", logo: "/images/image-268.png", alt: "Brand Five" },
    { id: 6, name: "Brand Six", logo: "/images/image-269.png", alt: "Brand Six" },
  ];

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerView(1);
      else if (width < 768) setItemsPerView(2);
      else if (width < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlides = Math.max(0, brands.length - itemsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [maxSlides]);

  return (
    <div className=" w-[500px] md:w-[1105px] h-[125px] mx-auto relative mt-40 md:mt-80">
      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="relative md:right-30 -translate-y-1/2 -translate-x-6 z-10  hover:shadow-xl transition-all duration-300 p-2 opacity-80 hover:opacity-100"
        aria-label="Previous brands"
      >
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute left-290 -translate-y-1/2 translate-x-6 z-10  rounded-full  hover:shadow-xl transition-all duration-300 p-2 opacity-80 hover:opacity-100"
        aria-label="Next brands"
      >
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel */}
      <div className="overflow-hidden w-full h-full bg-white rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`,
          }}
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex-none flex items-center justify-center px-4"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <img
                src={brand.logo}
                alt={brand.alt}
                className=" object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      {/* <div className="flex justify-center mt-3 space-x-2">
        {Array.from({ length: maxSlides + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-4 md:w-6 bg-yellow-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default BrandsCarousel;
