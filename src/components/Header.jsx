import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-white px-6 py-4 md:px-12 md:py-6">
      
      <div className="max-w-480 mx-auto grid grid-cols-3 items-center">
        
       
        <div className="flex justify-start">
          <span className="text-lg md:text-xl font-semibold tracking-tight text-[#111111] cursor-default select-none">
            Elementum
          </span>
        </div>

       
        <div className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
          <span className="text-[11px] md:text-xs font-medium text-[#111111] cursor-pointer">Home</span>
          <span className="text-[11px] md:text-xs font-medium text-[#111111] cursor-pointer">Studio</span>
          <span className="text-[11px] md:text-xs font-medium text-[#111111] cursor-pointer">Services</span>
          <span className="text-[11px] md:text-xs font-medium text-[#111111] cursor-pointer hidden sm:inline">Contact</span>
          <span className="text-[11px] md:text-xs font-medium text-[#111111] cursor-pointer hidden sm:inline">FAQs</span>
        </div>

        
        <div className="flex justify-end">
          <div className="flex flex-col space-y-1.5 cursor-pointer w-8 group justify-self-end">
            <span className="w-full h-0.5 bg-gray-900 group-hover:bg-gray-600 transition-colors"></span>
            <span className="w-full h-0.5 bg-gray-900 group-hover:bg-gray-600 transition-colors"></span>
          </div>
        </div>

      </div>
    </header>
  );
}