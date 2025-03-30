'use client';

import { useState } from 'react';
import { Bell, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Section - icon and Navigation */}
        <div className="flex items-center space-x-3">
          <Image src="/icon.png" alt="icon" width={40} height={40} className="mr-7" />

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-7">
            <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
            <Link href="/mytests" className="text-gray-600 hover:text-black">My Tests</Link>
            <Link href="/sessions" className="text-gray-600 hover:text-black">My Sessions</Link>
            <Link href="/career-library" className="text-gray-600 hover:text-black">Career Library</Link>
            <Link href="/report" className="text-black font-semibold">Your Report</Link>
          </nav>
        </div>

        {/* Right Section - Icons and Profile */}
        <div className="flex items-center space-x-4">
          <Bell className="text-gray-600 w-5 h-5 cursor-pointer" />
          <div className="relative">
            <Image
              src="/user.jpg"
              alt="Profile"
              width={30}
              height={30}
              className="rounded-full cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
                <Link href="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</Link>
              </div>
            )}
          </div>
          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <Link href="/" className="block py-2 text-gray-600 hover:text-black">Home</Link>
          <Link href="/tests" className="block py-2 text-gray-600 hover:text-black">My Tests</Link>
          <Link href="/sessions" className="block py-2 text-gray-600 hover:text-black">My Sessions</Link>
          <Link href="/career-library" className="block py-2 text-gray-600 hover:text-black">Career Library</Link>
          <Link href="/report" className="block py-2 text-black font-semibold">Your Report</Link>
        </div>
      )}
    </header>
  );
};

export default Header;