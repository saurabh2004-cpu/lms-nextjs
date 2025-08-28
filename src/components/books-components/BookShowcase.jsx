import { useState } from "react";

export default function BookShowcase() {
    const [hoveredBook, setHoveredBook] = useState(null);

    const books = [
        {
            id: 1,
            title: "Breath Walk Set small goals",
            subtitle: "Hope And Honeysicles",
            description: "In this book Ruchira Darda, share few simple thoughts that help you change the way you think so you can go on to live your the best life.",
            coverImage: "/images/books-2.png",
            coverBg: "bg-gradient-to-br from-yellow-400 to-orange-500",
            buttonText: "ORDER YOUR COPY TODAY",
            isNew: true
        },
        {
            id: 2,
            title: "Life is all about making choices. Choose Love.",
            subtitle: "Life is all about making choices. Choose Love.",
            coverImage: "/images/books-1.png",
            description: "Shera and Hira in the Race Day Shera and Hira in the Race Day is a story centered around a young cub who battles with the dilemma whether he should use unfair means to win a race or not.",
            coverBg: "bg-gradient-to-br from-teal-400 to-blue-500",
            buttonText: "ORDER YOUR COPY TODAY",
            isNew: true
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 md:p-6 md:pb-42 md:p-8 bg-gray-50 min-h-screen">
            <div className="space-y-16 md:space-y-20 lg:space-y-24">
                {books.map((book, index) => (
                    <div
                        key={book.id}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-8 md:gap-12 lg:gap-42`}
                    >
                        {/* Book Cover Section - Mobile first approach */}
                        <div className="lg:w-2/5 flex justify-center">
                            <div
                                className="relative group"
                                onMouseEnter={() => setHoveredBook(book.id)}
                                onMouseLeave={() => setHoveredBook(null)}
                            >
                                {/* "New" Badge */}
                                {book.isNew && (
                                    <div className={`absolute ${index % 2 === 0 ? 'top-2 right-2 md:top-10 md:right-75' : 'top-2 -right-2 md:top-10 md:-right-12'} -rotate-19 z-10 bg-black text-white rounded-full w-14 h-14 md:w-20 md:h-20 flex items-center justify-center text-[10px] md:text-xs font-bold transform shadow-lg`}>
                                        OUT NOW
                                    </div>
                                )}

                                {/* Book Cover */}
                                <div className={`relative w-68 h-8  md:w-64 md:h-80 lg:w-72 lg:h-96 xl:w-80 xl:h-[400px] rounded-lg shadow-xl transform transition-all duration-300 overflow-hidden ${hoveredBook === book.id ? 'scale-105 shadow-2xl' : ''}`}>
                                    <img
                                        src={book.coverImage}
                                        alt={`${book.title} book cover`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentNode.classList.add(book.coverBg);
                                        }}
                                    />
                                    {/* Fallback content */}
                                    <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <div>
                                            <h3 className="text-[#383086] font-normal md:font-[400] text-lg md:text-xl lg:text-[32px] poppins mb-2">{book.title}</h3>
                                            <p className="text-sm">Ruchira Danda</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section - Mobile first approach */}
                        <div className="lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-normal md:font-[400] text-[#383086] mb-4 md:mb-6 leading-tight max-w-md">
                                {book.title}
                            </h2>

                            <div className="mb-5 md:mb-6">
                                <span className="text-sm md:text-[13px] font-[400] poppins text-[#383086] bg-[#eadabb] rounded-full py-2 px-4 inline-block">
                                    {book.subtitle}
                                </span>
                            </div>

                            <p className="text-base md:text-lg lg:text-[20px] font-normal md:font-[400] poppins text-black leading-relaxed mb-6 md:mb-8 max-w-lg">
                                {book.description}
                            </p>

                            <button className="bg-[#382086] text-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-[13px] font-medium md:font-[500] poppins uppercase tracking-wide rounded-lg hover:bg-[#2a1866] transition-colors duration-200">
                                {book.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Decorative elements */}
            <div className="hidden md:block absolute top-10 right-10 w-4 h-4 bg-yellow-300 rounded-full opacity-30"></div>
            <div className="hidden md:block absolute bottom-20 left-10 w-6 h-6 bg-blue-300 rounded-full opacity-20"></div>
        </div>
    );
}