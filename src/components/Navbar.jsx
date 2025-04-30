"use client"

import { useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { Menu, X } from "lucide-react"
import Logo from "../assets/drone.jpg"
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Overview", to: "overview" },
    { name: "Architecture", to: "architecture" },
    { name: "Subsystem", to: "subsystem" },
    { name: "Testing Plan", to: "testing-plan" },
  
    { name: "Mini Demo", to: "demo" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="w-[70px] ">
            <img src={Logo} alt="" />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-lg  font-semibold text-gray-700 hover:text-gray-900"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pb-4">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  )
}
