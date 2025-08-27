import React from 'react';

const PhotoGallery = () => {
    const photos = [
        {
            id: 1,
            src: "/images/Rectangle-741.png",
            alt: "Speaking at conference"
        },
        {
            id: 2,
            src: "/images/Rectangle-742.png",
            alt: "Award ceremony"
        },
        {
            id: 3,
            src: "/images/Rectangle-743.png",
            alt: "TEDx presentation"
        },
        {
            id: 4,
            src: "/images/Rectangle-744.png",
            alt: "Family photo with children"
        },
        {
            id: 5,
            src: "/images/Rectangle-745.png",
            alt: "Book launch event"
        },
        {
            id: 6,
            src: "/images/Rectangle-746.png",
            alt: "Professional event"
        },
        {
            id: 7,
            src: "/images/Rectangle-747.png",
            alt: "Workshop session"
        }
    ];

    return (
        <div className="w-full bg-gray-50 py-12 px-4 md:mt-40">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl md:text-[24px] md:font[500] poppins text-[#383086] font-medium mb-4"
                    >
                        Ruchira's Photo Gallery
                    </h2>
                </div>

                {/* Desktop Grid Layout */}
                <div className="hidden lg:block mx-auto">
                    <div className="flex gap-3  md:h-[621px] md:w-[1250px] md:justify-between">
                        {/* Column 1: 2 images */}
                        <div className=" flex flex-col gap-2 md:w-[270px] ">
                            <div className="relative overflow-hidden rounded-2xl  ">
                                <img
                                    src={photos[0].src}
                                    alt={photos[0].alt}
                                    className="md:w-[270px] md:h-[295px] "
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 " />
                            </div>
                            <div className="relative  overflow-hidden rounded-3xl md:w-[270px] md:h-[295px] ">
                                <img
                                    src={photos[1].src}
                                    alt={photos[1].alt}
                                    className="md:w-[270px] md:h-[283px] object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 " />
                            </div>
                        </div>

                        {/* Column 2: 1 large image */}
                        <div className="flex  md:w-[266px] ">
                            <div className="relative overflow-hidden  rounded-2xl">
                                <img
                                    src={photos[2].src}
                                    alt={photos[2].alt}
                                    className="md:w-[266px] md:h-[593px] object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 " />
                            </div>
                        </div>

                        {/* Column 3: 2 images */}
                        <div className="flex flex-col gap-4 md:w-[258px]">
                            <div className="relative overflow-hidden rounded-3xl md:w-[258px] md:h-[294px] ">
                                <img
                                    src={photos[3].src}
                                    alt={photos[3].alt}
                                    className="md:w-[258px] md:h-[294px] object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 " />
                            </div>
                            <div className="relative overflow-hidden rounded-3xl md:w-[258px] md:h-[270px]  ">
                                <img
                                    src={photos[4].src}
                                    alt={photos[4].alt}
                                    className="md:w-[258px] md:h-[270px]  object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 " />
                            </div>
                        </div>

                        {/* Column 4: 2 images */}
                        <div className="flex flex-col gap-4 md:w-[403px]  ">
                            <div className="relative overflow-hidden rounded-2xl md:w-[403px] md:h-[289px] ">
                                <img
                                    src={photos[5].src}
                                    alt={photos[5].alt}
                                    className="md:w-[403px] md:h-[289px]  object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 " />
                            </div>
                            <div className="relative overflow-hidden rounded-3xl md:w-[386px] md:h-[275px]">
                                <img
                                    src={photos[6].src}
                                    alt={photos[6].alt}
                                    className="md:w-[386px] md:h-[275px] object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 " />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tablet Grid Layout (md to lg) */}
                <div className="hidden md:block lg:hidden">
                    <div className="grid grid-cols-3 gap-4">
                        {photos.slice(0, 6).map((photo, index) => (
                            <div
                                key={photo.id}
                                className={`relative overflow-hidden rounded-3xl shadow-lg  transition-all duration-300 transform 
                                    }`}
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 " />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Grid Layout */}
                <div className="block md:hidden">
                    <div className="grid grid-cols-2 gap-3">
                        {photos.slice(0, 6).map((photo) => (
                            <div
                                key={`mobile-${photo.id}`}
                                className="relative overflow-hidden rounded-2xl shadow-lg aspect-square"
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 active:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button
                            className="px-8 py-3 rounded-full font-medium text-white transition-all duration-300 :shadow-lg transform "
                            style={{
                                backgroundColor: '#383086',
                                fontFamily: 'Poppins, sans-serif'
                            }}
                        >
                            View More Photos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;