"use client"

import React from 'react';

const HeroSection = () => {
  const books = [
    {
      id: 1,
      title: "How Far Memories",
      subtitle: "Bicycles",
      author: "Author Name",
      color: "bg-yellow-200",
      position: "-top-[18px] left-[57px]",
      rotation: "-rotate-10",
      zIndex: "z-20",
      size: "w-[336px] h-[224px]",
      coverType: "bicycle"
    },
    {
      id: 2,
      title: "Pickle & Monkey",
      author: "Author Name",
      color: "bg-teal-200",
      position: "top-[196px] left-[46px]",
      rotation: "-rotate-30",
      zIndex: "z-30",
      size: "w-[14.9375rem] h-[14.9375rem]",
      coverType: "monkey"
    },
    {
      id: 3,
      title: "breathe, Walk, You've got this.",
      author: "Rebecca Barker",
      color: "bg-white",
      position: "top-[253px] left-[296px]",
      rotation: "-rotate-3",
      zIndex: "z-40",
      size: "w-[12.125rem] h-[12.5625rem]",
      coverType: "breathe"
    },
    {
      id: 4,
      title: "Pause Before You Pounce",
      author: "Rachel Garvin",
      color: "bg-blue-100",
      position: "top-[230px] right-[626px]",
      rotation: "rotate-6",
      zIndex: "z-35",
      size: "w-[19.5rem] h-[13.25rem]",
      coverType: "pause"
    },
    {
      id: 5,
      title: "Pickle & Monkey",
      author: "Author Name",
      color: "bg-green-300",
      position: "top-[10px] right-[585px]",
      rotation: "rotate-6",
      zIndex: "z-25",
      size: "w-[13.5rem] h-[14.25rem]",
      coverType: "pickle"
    },
    {
      id: 6,
      title: "Un-T",
      author: "Author Name",
      color: "bg-yellow-100",
      position: "top-[246px] right-[380px] transform -translate-x-1/2",
      rotation: "rotate-6",
      zIndex: "z-15",
      size: "w-36 h-48",
      coverType: "unt"
    },
    {
      id: 7,
      title: "THE VIOLET TRAP",
      author: "Author Name",
      color: "bg-purple-200",
      position: "bottom-[200px] left-[994px]",
      rotation: "rotate-6",
      zIndex: "z-20",
      size: "w-[18.5rem] h-[12.3125rem]",
      coverType: "violet"
    },
    {
      id: 8,
      title: "Golden Lion",
      author: "Author Name",
      color: "bg-orange-300",
      position: "top-[40px] left-[591px] transform -translate-x-1/2",
      rotation: "rotate-10",
      zIndex: "z-50",
      size: "w-[12.4375rem] h-[19.9375rem]",
      coverType: "lion"
    },
    
  ];

  // Using placeholder book cover images - replace these URLs with your actual book cover images
  const getBookImage = (book) => {
    const imageUrls = {
      "bicycle": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop&auto=format",
      "monkey": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format",
      "breathe": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&auto=format",
      "pause": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop&auto=format",
      "pickle": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&h=400&fit=crop&auto=format",
      "lion": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&h=400&fit=crop&auto=format",
      "unt": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop&auto=format",
      "unboxed": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop&auto=format",
      "violet": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop&auto=format"
    };

    return imageUrls[book.coverType] || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop&auto=format";
  };

  return (
    <div className="relative min-h-[27.3125rem] bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-100 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0">
        {books.map((book) => (
          <div
            key={book.id}
            className={`absolute ${book.position} ${book.rotation} ${book.zIndex} transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:z-50 animate-float cursor-pointer`}
            style={{
              "--rotation": book.rotation.replace("rotate-", "").replace("deg", "") + "deg"
            }}
          >
            <div
              className={`${book.size} rounded-lg shadow-xl border border-gray-200 relative overflow-hidden backdrop-blur-sm`}
              style={{
                boxShadow: '0 10px 25px rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.1)'
              }}
            >
              {/* Book Cover Image */}
              <img
                src={getBookImage(book)}
                alt={book.title}
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  // Fallback to a solid color if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />

              {/* Fallback colored background (hidden by default) */}
              <div
                className={`absolute inset-0 ${book.color} rounded-lg flex items-center justify-center`}
                style={{ display: 'none' }}
              >
                <div className="text-center p-2">
                  <h3 className="text-xs font-bold text-gray-800 leading-tight mb-1">{book.title}</h3>
                  <p className="text-xs text-gray-600">{book.author}</p>
                </div>
              </div>

              {/* Book spine effect */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gray-400 to-gray-600 opacity-60"></div>

              {/* Subtle highlight */}
              <div className="absolute top-0 left-1 right-0 h-1 bg-gradient-to-r from-white/50 to-transparent"></div>
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
            transform: translateY(-10px) rotate(var(--rotation, 0deg)); 
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
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
        .animate-float:nth-child(6n) {
          animation-delay: -5s;
        }
        .animate-float:nth-child(7n) {
          animation-delay: -6s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;