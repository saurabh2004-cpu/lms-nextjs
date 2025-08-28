import React, { useState } from 'react';
import { User } from 'lucide-react';

// Workshop data with descriptions
const workshops = [
    {
        id: 1,
        title: 'Understanding Yourself',
        subtitle: 'By Understanding Others',
        audience: 'Exclusively For Teenagers',
        duration: '1hr 5m',
        author: 'Ruchira Darda',
        description: 'Here are a few secrets to building the habit of happiness. The assumption that happiness will come to you is a misconception. Happiness is a choice, and you can exercise...',
        image: '/images/ruchira-img-removebg-preview.png',
        category: 'Self Development'
    },
    {
        id: 2,
        title: 'Understanding Yourself',
        subtitle: 'By Understanding Others',
        audience: 'Exclusively For Teenagers',
        duration: '1hr 5m',
        author: 'Ruchira Darda',
        description: 'Helping children deal with their feelings is about striking heartfelt conversations with children. How parents should communicate that creates a safe haven',
        image: '/images/ruchira-img-removebg-preview.png',
        category: 'Parenting'
    },
    {
        id: 3,
        title: 'Understanding Yourself',
        subtitle: 'By Understanding Others',
        audience: 'Exclusively For Teenagers',
        duration: '1hr 5m',
        author: 'Ruchira Darda',
        description: 'How To Talk So Kids Will Listen & Listen So Kids Will Talk by Adele Faber & Elaine Mazlish a bestselling book on Conflict Resolution, is facilitated by Ruchira.',
        image: '/images/ruchira-img-removebg-preview.png',
        category: 'Parenting'
    },
];

const AllWorkshops = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filterOptions = [
        { label: 'All', value: 'All' },
        { label: 'Parenting workshop', value: 'Parenting' },
        { label: 'Self Development workshop', value: 'Self Development' }
    ];

    const filteredWorkshops = activeFilter === 'All'
        ? workshops
        : workshops.filter(workshop => workshop.category === activeFilter);

    return (
        <div className="bg-gray-50 py-8 md:py-20 px-4 sm:px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 md:mb-12">
                    {/* Title */}
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 lg:mb-0 text-center lg:text-left">
                        <span className="text-[#383086] text-xl md:text-[2rem] font-medium md:font-[500] poppins">All Workshops</span>
                    </h2>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                        {filterOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => setActiveFilter(option.value)}
                                className={`rounded-full font-medium transition-all duration-200 text-xs md:text-sm
                                        ${activeFilter === option.value
                                        ? 'bg-[#383086] text-white shadow-lg px-3 py-1 md:px-4 md:py-2'
                                        : 'bg-[#383086] text-white border border-[#383086] font-semibold px-3 py-1 md:px-4 md:py-2 hover:bg-[#383086] hover:text-white'
                                    }`}
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {filteredWorkshops.map((workshop) => (
                        <div key={workshop.id} className="bg-white rounded-3xl overflow-hidden">
                            {/* Card Header - Same as Services Component */}
                            <div className="relative bg-white rounded-t-3xl overflow-hidden h-48 md:h-[276px]">
                                {/* Duration Badge */}
                                <div className="absolute top-4 md:top-14 left-4 md:left-19 bg-white bg-opacity-90 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold text-gray-700 z-30">
                                    {workshop.duration}
                                </div>

                                {/* Background Card with Text */}
                                <div className="bg-[#D6B56D] absolute top-3 md:top-12 left-4 md:left-16 right-4 h-36 md:h-44 rounded-2xl flex flex-col justify-center px-4 md:px-6 z-10">
                                    <div className="text-black font-bold text-xs md:text-sm leading-tight w-full ml-0 md:ml-8">
                                        <div>{workshop.title}</div>
                                        <div>{workshop.subtitle}</div>
                                        <div className="text-xs mt-1">{workshop.audience}</div>
                                    </div>
                                </div>

                                {/* Person Image */}
                                <img
                                    src={workshop.image}
                                    alt={workshop.title}
                                    className="absolute bottom-0 left-0 w-auto h-32 md:h-40 z-20 object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-4 md:p-6 border-[#f1cf87] shadow-lg rounded-xl">
                                {/* Author Info */}
                                <div className="flex items-center gap-2 mb-3 md:mb-4">
                                    <User className="w-4 h-4 text-[#383086]" />
                                    <span className="text-[#383086] text-xs md:text-[13px] font-semibold md:font-[600] poppins">
                                        {workshop.author}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-[#383086] text-xs md:text-[13px] font-medium md:font-[500] poppins p-2 md:p-4 px-4 md:px-12">
                                    {workshop.description}
                                </p>

                                {/* Read More Button */}
                                <div className="flex justify-center md:block">
                                    <button className="text-black text-xs md:text-[13px] font-medium md:font-[500] poppins p-2 bg-[#f1cf87] rounded-full md:relative md:left-10">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mt-8 md:mt-12">
                    <button
                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-[#383086] text-white font-semibold text-xs md:text-sm hover:opacity-90 transition-opacity duration-200"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        1
                    </button>
                    <button
                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-gray-200 text-gray-600 font-semibold text-xs md:text-sm hover:bg-gray-300 transition-colors duration-200"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        2
                    </button>
                    <span className="text-gray-400 px-1 md:px-2 font-medium">...</span>
                    <button
                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-gray-200 text-gray-600 font-semibold text-xs md:text-sm hover:bg-gray-300 transition-colors duration-200"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        30
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllWorkshops;