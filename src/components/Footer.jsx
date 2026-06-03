import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#E2F1E7] text-[#111111] pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      
      
      <div className="max-w-4xl mx-auto text-center relative mb-24 flex flex-col items-center">
        
        
        <div className="w-16 h-8 mb-2 text-red-400 opacity-80 hidden sm:block">
          <svg width="100%" height="100%" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 25 C 20 5, 35 5, 45 25" stroke="#FF8A8A" strokeWidth="1.5" fill="none"/>
            <path d="M40 20 L45 25 L50 20" stroke="#FF8A8A" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>

    
        <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-[#111111] leading-none mb-6">
          Subscribe to <br />
          <span className="font-normal">our newsletter</span>
        </h2>

        
        <p className="text-xs md:text-sm text-black-600 max-w-md mx-auto mb-8 font-light">
          To make your stay special and even more memorable
        </p>

        
        <button className="bg-black text-white font-medium text-xs px-8 py-3.5 rounded-full hover:bg-gray-900 transition-colors cursor-pointer shadow-sm tracking-wide">
          Subscribe Now
        </button>
      </div>


      
      <div className="max-w-6xl mx-auto">
        
        
        <hr className="border-t border-gray-300/60 mb-16" />

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 items-start mb-20 text-left">
          
          
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-medium tracking-tight text-gray-900 mb-2">Company</h4>
            <span className="text-xs text-gray-600 cursor-pointer hover:text-black">Home</span>
            <span className="text-xs text-gray-600 cursor-pointer hover:text-black">Studio</span>
            <span className="text-xs text-gray-600 cursor-pointer hover:text-black">Service</span>
            <span className="text-xs text-gray-600 cursor-pointer hover:text-black">Blog</span>
          </div>

          
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-medium tracking-tight text-gray-900 mb-2">Terms & Policies</h4>
            <span className="text-xs text-gray-600 cursor-pointer hover:text-black">Privacy Policy</span>
            <span className="text-xs text-gray-600 cursor-pointer hover:text-black">Terms & Conditions</span>
            <span className="text-xs text-gray-600 cursor-pointer hover:text-black">Explore</span>
            <span className="text-xs text-gray-600 cursor-pointer hover:text-black">Accessibility</span>
          </div>

          
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-medium tracking-tight text-gray-900 mb-2">Follow Us</h4>
            <span className="text-xs text-gray-600 cursor-pointer hover:text-black">Instagram</span>
            <span className="text-xs text-gray-600 cursor-pointer hover:text-black">LinkedIn</span>
            <span className="text-xs text-gray-600 cursor-pointer hover:text-black">Youtube</span>
            <span className="text-xs text-gray-600 cursor-pointer hover:text-black">Twitter</span>
          </div>

          
          <div className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
            <h4 className="text-sm font-medium tracking-tight text-gray-900 mb-2">Terms & Policies</h4>
            <p className="text-xs text-gray-600 leading-relaxed max-w-48 font-light">
              1498w Fluton ste, STE 2D Chicgo, IL 63867.
            </p>
            <p className="text-xs text-gray-600 font-light pt-1">
              (123) 456789000
            </p>
            <p className="text-xs text-gray-600 font-light">
              info@elementum.com
            </p>
          </div>

        </div>


        <div className="w-full text-center border-t border-transparent pt-4">
          <p className="text-[10px] text-gray-500 font-light tracking-wide select-none">
            ©2023 Elementum. All rights reserved
          </p>
        </div>

      </div>

    </footer>
  );
}