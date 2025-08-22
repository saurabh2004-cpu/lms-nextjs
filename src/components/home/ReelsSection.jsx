import { Play, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react"

const reelsData = [
  {
    id: 1,
    thumbnail: "/images/Untitled-design-2.png",
    title: "Parenting Tips",
    description: "Essential parenting advice for modern families",
  },
  {
    id: 2,
    thumbnail: "/images/Untitled-design-2.png",
    title: "Travel Hacks FOR SMART PARENTS",
    description: "Make traveling with kids easier and fun",
    hasText: true,
    textOverlay: "Travel Hacks\nFOR SMART PARENTS",
  },
  {
    id: 3,
    thumbnail: "/images/Untitled-design-2.png",
    title: "RUCHIRA DARDA",
    description: "Personal development insights",
    hasText: true,
    textOverlay: "RUCHIRA DARDA",
  },
  {
    id: 4,
    thumbnail: "/images/Untitled-design-2.png",
    title: "Teach Your Children The Value Of Patience",
    description: "Building patience in children through mindful parenting",
    hasText: true,
    textOverlay: "Teach Your Children\nThe Value Of Patience",
  },
]

const InstagramReelCard = ({ reel }) => {
  return (
    <div className="relative w-full md:w-[271px] md:h-[439px] mx-auto aspect-[9/16] rounded-lg overflow-hidden cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 ">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${reel.thumbnail})` }}>
        {/* Overlay Text */}
        {reel.hasText && (
          <div className="absolute bottom-20 left-4 right-4 text-center">
            <p className="text-white font-bold text-sm sm:text-lg leading-tight whitespace-pre-line drop-shadow-lg">
              {reel.textOverlay}
            </p>
          </div>
        )}

        {/* Side actions */}
        <div className="absolute bottom-4 right-3 flex flex-col gap-2">
          {[Heart, MessageCircle, Send, Bookmark, MoreHorizontal].map((Icon, idx) => (
            <button
              key={idx}
              className="p-2 text-white bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-colors duration-200"
            >
              <Icon size={16} />
            </button>
          ))}
        </div>

        {/* Center Play Button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
            <Play size={20} fill="white" />
          </button>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </div>
  )
}

const LatestReelsSection = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[2rem] font-[700] text-center mb-12 poppins">
          Watch My <span className="md:text-[32px] font-[700] text-purple-600">Latest Reels</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {reelsData.map((reel) => (
            <InstagramReelCard key={reel.id} reel={reel} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LatestReelsSection
