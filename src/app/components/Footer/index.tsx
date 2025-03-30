import React from 'react'
import Link from 'next/link'

const Footer = () => {

  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto text-center text-gray-600">
        <div className="flex justify-center items-center space-x-2">
          <Link 
            href="/privacy-policy" 
            className="text-gray-600 hover:text-blue-600 underline transition-all"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-400">•</span>
          <Link 
            href="/terms-conditions" 
            className="text-gray-600 hover:text-blue-600 underline transition-all"
          >
            Terms & Conditions
          </Link>
          <span className="text-gray-400">•</span>
          <Link 
            href="/support" 
            className="text-gray-600 hover:text-blue-600 underline transition-all"
          >
            Support
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer