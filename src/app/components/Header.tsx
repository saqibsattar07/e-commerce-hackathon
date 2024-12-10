"use client"

import { useState } from "react";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbUserExclamation } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi"; // Import Hamburger Icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow">
      <nav className="relative flex items-center justify-between w-full h-[80px] max-w-screen-xl mx-auto px-4">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="font-bold text-xl text-gray-800">
            Furniture
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <GiHamburgerMenu
            className="text-gray-800 text-[24px] cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu on click
          />
        </div>

        {/* Navigation Links */}
        <ul
          className="hidden md:flex md:space-x-10 absolute left-1/2 transform -translate-x-1/2"
        >
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="font-medium font-poppins text-[16px] text-gray-800 hover:text-gray-600"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="ml-auto hidden md:flex space-x-8">
      <Link href="/profile" aria-label="User Profile">
        <TbUserExclamation className="text-gray-800 hover:text-gray-600 text-[20px]" />
      </Link>
      <Link href="/search" aria-label="Search">
        <FiSearch className="text-gray-800 hover:text-gray-600 text-[20px]" />
      </Link>
      <Link href="/wishlist" aria-label="Wishlist">
        <FaRegHeart className="text-gray-800 hover:text-gray-600 text-[20px]" />
      </Link>
      <Link href="/cart" aria-label="Shopping Cart">
        <MdOutlineShoppingCart className="text-gray-800 hover:text-gray-600 text-[20px]" />
      </Link>
    </div>
      </nav>

      {/* Sidebar (Sheet) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "z-50 opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 w-64 bg-white shadow-lg h-full p-4 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <GiHamburgerMenu
            className="text-gray-800 text-[24px] cursor-pointer"
            onClick={() => setIsMenuOpen(false)} 
          />
        </div>
        <ul className="space-y-6">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="font-medium font-poppins text-[18px] text-gray-800 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)} 
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
