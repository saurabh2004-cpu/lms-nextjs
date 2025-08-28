import { Play, Pause } from "lucide-react";
import { useState } from "react";

export default function PodcastInterviews() {
  const [playingId, setPlayingId] = useState(null);

  const podcasts = [
    {
      id: 1,
      title: "DESTINY BY DIGITS",
      subtitle: "Numerology Episode",
      description: "Your Hard Work Will Shine",
      image: "/images/podcast-1.png",
      speakers: ["Guest Name", "Host Name"]
    },
    {
      id: 2,
      title: "SCIENCE DOESN'T BUILD CHARACTER",
      subtitle: "Character Building Episode",
      description: "Building strong character through values",
      image: "/images/podcast-2.png",
      speakers: ["RUCHIRA DARDA", "DEVDUTT PATTANAIK"]
    },
    {
      id: 3,
      title: "SUCCESS STORIES",
      subtitle: "Inspirational Episode",
      description: "So when did K&K happen? Cream and crunch, KK happened in",
      image: "/images/podcast-3.png",
      speakers: ["Interview Guest", "Host"]
    }
  ];

  const handlePlayPause = (id) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16">
      {/* Header */}
      <div className="text-center mb-8 md:mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-[32px] font-medium md:font-[500] poppins mb-2">
          Podcasts and Audio Interviews
        </h1>
      </div>

      {/* Podcast Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center">
        {podcasts.map((podcast) => (
          <div key={podcast.id} className="group w-full max-w-sm md:max-w-none">
            {/* Podcast Card */}
            <div className="relative overflow-hidden rounded-xl w-full h-40 sm:h-44 md:h-48 lg:w-[24.125rem] lg:h-[13.75rem] transition-all duration-300 transform hover:-translate-y-2">
              {/* Background Image */}
              <div className="relative h-full">
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Text Content */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  onClick={() => handlePlayPause(podcast.id)}
                  className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 md:p-4 transform hover:scale-110 transition-all duration-200"
                >
                  {playingId === podcast.id ? (
                    <Pause className="w-6 h-6 md:w-8 md:h-8 text-gray-800" fill="currentColor" />
                  ) : (
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-gray-800 ml-0.5 md:ml-1" fill="currentColor" />
                  )}
                </button>
              </div>
            </div>

            {/* Bottom Play Section */}
            <div className="flex items-center gap-3 md:gap-4 mt-3 md:mt-4 px-2">
              <button
                onClick={() => handlePlayPause(podcast.id)}
                className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
              >
                {playingId === podcast.id ? (
                  <Pause className="w-4 h-4 md:w-5 md:h-5 text-white" fill="white" />
                ) : (
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="white" />
                )}
              </button>

              <span className="text-base md:text-lg lg:text-[20px] xl:text-[24px] font-light md:font-[300] poppins">
                Listen here
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}