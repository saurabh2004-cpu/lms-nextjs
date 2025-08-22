import React from 'react';

// Dummy data for the 3 cards
const services = [
    {
        id: 1,
        title: 'Understanding Yourself',
        subtitle: 'By Understanding Others',
        audience: 'Exclusively For Teenagers',
        price: 299,
        image: '/images/ruchira-img-removebg-preview.png',
    },
    {
        id: 2,
        title: 'Understanding Yourself',
        subtitle: 'By Understanding Others',
        audience: 'Exclusively For Teenagers',
        price: 299,
        image: '/images/ruchira-img-removebg-preview.png',
    },
    {
        id: 3,
        title: 'Understanding Yourself',
        subtitle: 'By Understanding Others',
        audience: 'Exclusively For Teenagers',
        price: 299,
        image: '/images/ruchira-img-removebg-preview.png',
    },
];

// Star Rating Component
const StarRating = ({ rating = 4 }) => {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

const OurServices = () => {
    return (
        <div className="bg-white py-12 md:py-20 px-4 md:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h3
                    className="font-bold text-center text-[36px] sm:text-4xl  mb-16 text-black manrope"
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700
                    }}
                >
                    <span className="text-black">OUR</span>
                    <span style={{ color: '#383086' }}> SERVICES</span>
                </h3>

                {/* Description */}
                <p className="max-w-3xl mx-auto text-center text-black text-[16px] md:text-base font-medium mb-12 leading-relaxed poppins">
                    Parenting & self-development workshops by Ruchira are carefully curated experiences
                    that teach practical skills to help any parent in their journey and are an asset to all
                    individuals in their personal growth.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
                    {services.map((service) => (
                        <div key={service.id} className="flex flex-col">
                            {/* Card */}
                            <div className="relative bg-white rounded-t-3xl overflow-hidden md:min-h-[276px] md:min-w-[403px]" >
                                {/* Background Card with Text */}
                                <div
                                    className=" bg-[#D6B56D] relative max-w-2/3 md:top-12 md:left-15  h-44 rounded-2xl flex flex-col justify-center px-8 z-10"
                                >
                                    <div className="text-black font-bold text-sm leading-tight poppins w-full relative left-12  ">
                                        <div >Understanding Yourself</div>
                                        <div>By Understanding Others</div>
                                        <div>Exclusively For Teenagers</div>
                                    </div>
                                </div>

                                {/* Person Image */}
                                <img
                                    src={service.image}
                                    alt="Understanding Yourself"
                                    className="absolute bottom-0 left-0 w-auto h-40 z-20 object-contain"
                                />
                            </div>

                            {/* Card Content */}
                            <div
                                className="bg-white p-4 border-l border-r border h-[109px] w-[403px]  flex flex-col gap-4"
                                style={{ borderColor: '#f1cf87' }}
                            >
                                {/* Rating and Price Row */}
                                <div className="flex items-center justify-between w-full">
                                    {/* Star Rating */}
                                    <StarRating rating={4} />

                                    {/* Price */}
                                    <span
                                        className="text-sm text-black font-semibold manrope"
                                    >
                                        Rs {service.price}/-
                                    </span>
                                </div>

                                {/* Buy Course Button */}
                                <button
                                    className="w-full py-3 px-6 text-black bg-[#f1cf87] text-[16] font-bold manrope rounded-full transition-colors duration-200 hover:opacity-90"
                                    
                                    
                                >
                                    Buy course
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;