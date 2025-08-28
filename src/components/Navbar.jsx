"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Define your nav items with hrefs
  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Bio", href: "/bio" },
    { name: "Workshop", href: "/workshop" },
    { name: "Books", href: "/books" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white  sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[80px]">
          {/* Logo Section */}
          <div className="flex flex-col items-start w-1/2">
            <a href="/">
              <img
                src="/logo/RD_logo__1_-removebg-preview 1.png"
                alt="Logo"
                className="h-22"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 md:mr-32">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 md:text-[20px] md:font-medium hover:text-purple-600 font-medium text-lg transition-colors duration-300 px-2 py-1 group poppins"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors duration-200 rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
