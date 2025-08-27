"use client"

import { ArrowRight, ArrowRightIcon, Search } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 3

  const blogs = [
    {
      id: 1,
      title: "Back to School",
      author: "Ruchira Daniel",
      date: "June 28, 2025",
      image: "/images/image-274.png",
      content:
        "I am currently studying harder than I did for my first grade. I can't know if Baby A realizes the extremity of his mother's effort but surely he, it does, he even comprehended me and said, 'you will tell why well darling, you might even get recognized by the school as the best student.' Sounds funny so you but I thought I deserve it.",
    },
    {
      id: 2,
      title: "40 Plus. The struggle is real.",
      author: "Ruchira Darda",
      date: "June 26, 2025",
      image: "/images/image-275.png",
      content:
        "As I blew out the candles on my 40th birthday cake, I had no idea my life was about to change this dramatically. Excitement for the new decade and gratitude for the life I've built were soon replaced with a hint of anxiety.As a woman in my 40s, I've encountered a unique set of challenges.",
    },
    {
      id: 3,
      title: "A reason to say Thanks!",
      author: "Ruchira Daniel",
      date: "June 24, 2025",
      image: "/images/image-277.png",
      content:
        "Gratitude is more than just saying thank you. It's a practice that can transform our perspective and bring more joy into our lives. When we take time to appreciate what we have, we open ourselves to receiving even more blessings.",
    },
    {
      id: 4,
      title: "The Art of Mindful Parenting",
      author: "Ruchira Daniel",
      date: "June 22, 2025",
      image: "/images/image-277.png",
      content:
        "Parenting in today's fast-paced world requires more than just love and good intentions. It demands mindfulness, patience, and the ability to be present in each moment with our children.",
    },
    {
      id: 5,
      title: "Finding Balance in Chaos",
      author: "Ruchira Darda",
      date: "June 20, 2025",
      image: "/images/image-278.png",
      content:
        "Life often feels like a juggling act, especially when you're managing career, family, and personal growth. Learning to find balance isn't about perfection—it's about making conscious choices.",
    },
    {
      id: 6,
      title: "The Power of Self-Compassion",
      author: "Ruchira Daniel",
      date: "June 18, 2025",
      image: "",
      content:
        "We are often our own harshest critics. Learning to treat ourselves with the same kindness we show others is a revolutionary act that can transform our relationship with ourselves.",
    },
  ]

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog)
  const totalPages = Math.ceil(blogs.length / blogsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const recentPosts = [
    "Make it a summer to remember",
    "This is our chance to change the dialogue",
    "Not easy being a mum",
    "Why am I proud of my husband?",
    "The modern day: A hindrance to our culture & children's confidence",
  ]

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8  "
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 border-r border-gray-200 ">
            {currentBlogs.map((blog, index) => (
              <motion.article key={blog.id} className="bg-white border-b   rounded-lg overflow-hidden " variants={fadeInUp}>
                {/* Header */}
                <div className="px-6 pb-4">
                  <h1 className="text-2xl lg:text-[36px] font-medium poppins text-blackmb-2">{blog.title}</h1>
                  <p className="text-blue-600 text-[1rem] text-[#383086] font-[400] poppins">
                    {blog.author} | {blog.date}
                  </p>
                </div>

                {/* Image */}
                <div className="px-6">
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-[51.25rem] h-[31rem] object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:pr-40">
                  <p className="text-black text-[16px] poppins  md:font-medium  leading-relaxed mb-4">{blog.content}</p>
                  <motion.button
                    className="text-[#383086] poppins text-[16px] font-[600] flex items-center space-x-1 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <span>Read More</span>
                    <div className="flex ">
                      <svg
                        className="w-4 h-4 text-[#383086] text-semibold  "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#383086] text-semibold md:ml-[-10px] "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.button>
                </div>
              </motion.article>
            ))}

            {/* Pagination */}
            <motion.div className="flex justify-center items-center space-x-4 py-8" variants={fadeInUp}>
              

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`w-10 h-10 rounded-lg poppins font-medium transition-colors duration-200 ${
                    currentPage === index + 1
                      ? "bg-[#383086] text-white"
                      : "text-[#383086] hover:bg-[#383086] hover:text-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 flex justify-center items-center py-2 border border-[#383086] border-solid relative md:left-70  poppins font-medium transition-colors duration-200 ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-[#383086] hover:bg-[#383086] hover:text-white"
                }`}
              >

                Next
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 ">
            {/* About Ruchira */}
            <motion.div className="bg-white  rounded-lg " variants={fadeInUp}>
              <h3 className="text-xl font-bold text-gray-900 mb-4  relative md:top-5">About Ruchira</h3>
              <div className="space-y-4 flex flex-col justify-start relative md:top-10  items-start">
                <div className="w-[20.875rem] h-[21.125rem] mx-auto rounded-lg overflow-hidden w-full">
                  <img
                    src="/images/Rectangle-276.png"
                    alt="Ruchira Daniel"
                    className="w-[20.875rem] h-[21.125rem] object-cover "
                  />
                </div>
                <p className="text-black text-[1rem] font-[500] text-[600] poppins leading-relaxed md:mt-4 md:pr-22">
                  She is a Certified Parenting & Family Coach, Mindfulness Practitioner, a sought after keynote speaker
                  and columnist with over 100 sessions published in print media. She is the Director of Gekind
                  Mindfulness, a six city circuit which saw over 5500+ participants in the 2023-24 season.
                </p>
                <motion.button
                  className="text-[#383086] text-[1rem] font-[500]     poppins underline flex items-center space-x-1 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  Go to bio
                </motion.button>
              </div>
            </motion.div>

            {/* Search */}
            <motion.div className=" rounded-lg mt-22 flex flex-col justify-start" variants={fadeInUp}>
              <h3 className="text-xl font-[500]  text-shadow-md text-[24px] poppins mb-4">Search</h3>
              <div className="relative w-[20.0625rem] h-[3.3125rem] ">
                <input
                  type="text"
                  placeholder=""
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-[#f9e9c8]"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Recent Posts */}
            <motion.div className="bg-white  rounded-lg py-6" variants={fadeInUp}>
              <h3 className="text-[24px] font-[500] font-medium text-shadow-md poppins text-black mb-4">
                Recent Posts
              </h3>
              <div className="space-y-3">
                {recentPosts.map((post, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="block text-[#383086] text-[1rem] poppins leading-relaxed"
                    whileHover={{ x: 3 }}
                  >
                    {post}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
