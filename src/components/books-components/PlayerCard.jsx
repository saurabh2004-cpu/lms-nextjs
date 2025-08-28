import { Play } from "lucide-react";
import { useState } from "react";

export default function PodcastPlayerCard() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="relative w-full max-w-8xl mx-auto rounded-lg overflow-hidden bg-[#f7f5f4]">
            {/* Decorative background elements */}

            {/* Main content container */}
            <div className="relative z-10 flex flex-col md:flex-row items-center md:relative md:left-65 p-4 md:p-8 lg:p-10 gap-4 md:gap-6">
                {/* Mobile layout - Play button and Listen here stacked */}
                <div className="flex flex-col items-center gap-2 md:hidden">
                    <button
                        onClick={handlePlayClick}
                        className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200 group"
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        <Play
                            className={`w-5 h-5 text-white ml-1 ${isPlaying ? 'animate-pulse' : ''} group-hover:scale-110 transition-transform duration-200`}
                            fill="white"
                        />
                    </button>
                    <span className="text-sm font-medium text-gray-700">
                        Listen here
                    </span>
                </div>

                {/* Desktop layout - Play button */}
                <button
                    onClick={handlePlayClick}
                    className="hidden md:flex flex-shrink-0 w-12 h-12 md:w-[51px] md:h-[51px] bg-black rounded-full items-center justify-center hover:bg-gray-800 transition-colors duration-200 group"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    <Play
                        className={`w-5 h-5 text-white ml-1 ${isPlaying ? 'animate-pulse' : ''} group-hover:scale-110 transition-transform duration-200`}
                        fill="white"
                    />
                </button>

                {/* Desktop Listen here text */}
                <div className="hidden md:block flex-shrink-0 text-right">
                    <span className="text-[24px] md:text-[22px] font-medium">
                        Listen here
                    </span>
                </div>

                {/* Text content */}
                <div className="flex-1 text-center md:text-left">
                    {/* Main title */}
                    <h2 className="text-base sm:text-lg md:text-[24px] font-[400] leading-tight mb-2 md:mb-3">
                        Finding togetherness in relationships and blending spirituality in family life
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-[20px] font-[400] font-regular">
                        Your next great chapter podcast
                    </p>
                </div>
            </div>
        </div>
    );
}