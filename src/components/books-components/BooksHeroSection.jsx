"use client"


const HeroSection = () => {
  const books = [
    {
      id: 1,
      title: "How Far Memories",
      subtitle: "Bicycles",
      author: "Author Name",
      color: "bg-yellow-200",
      position: "top-8 left-12",
      rotation: "-rotate-12",
      zIndex: "z-10",
      size: "w-28 h-36",
    },
    {
      id: 2,
      title: "breathe, Walk, You've got this.",
      author: "Rebecca Barker",
      color: "bg-white",
      position: "top-16 left-1/3",
      rotation: "rotate-3",
      zIndex: "z-20",
      size: "w-32 h-40",
    },
    {
      id: 3,
      title: "Pause Before You Pounce",
      author: "Rachel Garvin",
      color: "bg-blue-200",
      position: "top-12 right-1/4",
      rotation: "-rotate-6",
      zIndex: "z-15",
      size: "w-30 h-38",
    },
    {
      id: 4,
      title: "Pickle & Monkey",
      author: "Author Name",
      color: "bg-green-300",
      position: "top-6 right-16",
      rotation: "rotate-15",
      zIndex: "z-10",
      size: "w-28 h-36",
    },
    {
      id: 5,
      title: "THE VIOLET TRAP",
      author: "Author Name",
      color: "bg-purple-200",
      position: "top-40 left-20",
      rotation: "rotate-6",
      zIndex: "z-5",
      size: "w-24 h-32",
    },
    {
      id: 6,
      title: "Un-T",
      author: "Author Name",
      color: "bg-yellow-100",
      position: "bottom-20 left-16",
      rotation: "-rotate-8",
      zIndex: "z-10",
      size: "w-28 h-36",
    },
    {
      id: 7,
      title: "Un-Boxed",
      author: "Author Name",
      color: "bg-yellow-100",
      position: "bottom-20 right-20",
      rotation: "rotate-12",
      zIndex: "z-10",
      size: "w-28 h-36",
    },
    {
      id: 8,
      title: "Golden Lion",
      author: "Author Name",
      color: "bg-orange-300",
      position: "bottom-12 left-1/2 transform -translate-x-1/2",
      rotation: "rotate-3",
      zIndex: "z-25",
      size: "w-36 h-44",
    },
  ]

  return (
    <div className="relative min-h-[27.3125rem] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="absolute inset-0">
        {books.map((book) => (
          <div
            key={book.id}
            className={`absolute ${book.position} ${book.rotation} ${book.zIndex} transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-float`}
            style={
              { "--rotation": book.rotation.replace("rotate-", "").replace("deg", "") + "deg" } 
            }
          >
            <div
              className={`${book.size} ${book.color} rounded-lg shadow-xl border border-gray-200 p-3 flex flex-col justify-between relative overflow-hidden`}
            >
              {/* Book Cover Designs matching reference image */}
              <div className="flex-1 flex flex-col justify-center items-center text-center relative">
                {/* How Far Memories - Yellow book with bicycle theme */}
                {book.title === "How Far Memories" && (
                  <>
                    <div className="absolute top-2 left-2">
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="mt-4 mb-2">
                      <div className="w-12 h-8 border-2 border-blue-400 rounded-sm mb-1"></div>
                      <div className="w-10 h-6 border-2 border-blue-400 rounded-sm"></div>
                    </div>
                  </>
                )}

                {/* Breathe Walk - White book with circles */}
                {book.title === "breathe, Walk, You've got this." && (
                  <>
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 bg-teal-400 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-16 left-2">
                      <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                    </div>
                  </>
                )}

                {/* Pause Before You Pounce - Blue book with character */}
                {book.title === "Pause Before You Pounce" && (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-12 bg-gray-700 rounded-lg mb-2 flex items-center justify-center relative">
                      <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-300 rounded-full"></div>
                    </div>
                  </div>
                )}

                {/* Pickle & Monkey - Green book with monkey */}
                {book.title === "Pickle & Monkey" && (
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-brown-500 rounded-full mb-2 flex items-center justify-center relative">
                      <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                      <div className="absolute -top-1 left-1 w-3 h-3 bg-brown-700 rounded-full"></div>
                      <div className="absolute -top-1 right-1 w-3 h-3 bg-brown-700 rounded-full"></div>
                    </div>
                  </div>
                )}

                {/* Golden Lion - Orange book with prominent lion */}
                {book.title === "Golden Lion" && (
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-16 bg-orange-500 rounded-full mb-2 flex items-center justify-center relative">
                      <div className="w-16 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <div className="w-10 h-8 bg-orange-600 rounded-full"></div>
                      </div>
                      <div className="absolute -top-2 left-2 w-4 h-4 bg-orange-700 rounded-full"></div>
                      <div className="absolute -top-2 right-2 w-4 h-4 bg-orange-700 rounded-full"></div>
                    </div>
                  </div>
                )}

                {/* Un-T and Un-Boxed - Yellow books with geometric patterns */}
                {(book.title === "Un-T" || book.title === "Un-Boxed") && (
                  <div className="grid grid-cols-3 gap-1 mb-2">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-3 h-3 border border-blue-400 bg-blue-100"></div>
                    ))}
                  </div>
                )}

                {/* The Violet Trap - Purple book */}
                {book.title === "THE VIOLET TRAP" && (
                  <div className="w-8 h-8 bg-gray-600 rounded mb-2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-purple-400 rounded"></div>
                  </div>
                )}

                {/* Book Title and Author */}
                <div className="text-center">
                  <h3 className="text-xs font-bold text-gray-800 leading-tight mb-1">{book.title}</h3>
                  {book.subtitle && <p className="text-xs text-gray-700 mb-1">{book.subtitle}</p>}
                  <p className="text-xs text-gray-600">{book.author}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(var(--rotation, 0deg)); 
          }
          50% { 
            transform: translateY(-8px) rotate(var(--rotation, 0deg)); 
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float:nth-child(2n) {
          animation-delay: -2s;
        }
        .animate-float:nth-child(3n) {
          animation-delay: -4s;
        }
        .animate-float:nth-child(4n) {
          animation-delay: -1s;
        }
        .animate-float:nth-child(5n) {
          animation-delay: -3s;
        }
      `}</style>
    </div>
  )
}

export default HeroSection
