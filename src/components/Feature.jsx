import React from 'react';

export default function FeatureSection() {
  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 overflow-hidden">
      
      
      <div className="absolute inset-0 pointer-events-none z-0 hidden md:block opacity-70">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M 100,250 C 400,600 800,200 1300,550" stroke="#FF8A8A" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
        </svg>
      </div>

      <div className="max-w-480 mx-auto space-y-32 relative z-10">
        
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          
          <div className="max-w-xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111111] leading-tight">
              <span className="relative inline-block font-normal">
                Tomorrow
                <span className="absolute left-0 bottom-1 w-full h-1 bg-[#FCD34D] rounded-full"></span>
              </span> should be better than <span className="bg-[#D1FAE5] px-3 py-0.5 rounded-full font-normal text-emerald-900 text-3xl md:text-4xl inline-block align-middle">today</span>
            </h2>
            <p className="text-sm text-black-500 leading-relaxed font-light">
              We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold tracking-wider uppercase border-b border-black pb-1 cursor-pointer flex items-center w-max gap-4 hover:opacity-70 transition-opacity">
                Read more <span className="text-lg">→</span>
              </span>
            </div>
          </div>

          
          <div className="relative flex justify-center lg:justify-end">
            
            <div className="absolute right-[10%] top-0 w-20 h-20 bg-[#FF6B6B] transform rotate-12 -z-10 rounded-sm"></div>
            
            
            <div className="absolute top-[-10%] right-[20%] w-72 h-72 bg-pink-100 rounded-full blur-3xl -z-20 opacity-60"></div>

            
            <div className="w-85 h-85 md:w-85 md:h-85 rounded-full overflow-hidden border border-gray-100 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" 
                alt="Meeting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            
            <div className="absolute left-4 top-12 w-0 h-0 border-l-30 border-l-transparent border-r-30 border-r-transparent border-b-60 border-b-[#FF6B6B] transform -rotate-12 -z-10"></div>
            
            <div className="absolute right-[15%] bottom-4 w-0 h-0 border-l-25 border-l-transparent border-r-25 border-r-transparent border-b-50 border-b-[#FF6B6B] transform rotate-45 z-20"></div>

            
            <div className="w-85 h-85 md:w-85 md-85 rounded-full overflow-hidden border border-gray-100 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" 
                alt="Workspace" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          
          <div className="max-w-xl space-y-6 lg:pl-12 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111111] leading-tight">
              <span className="bg-[#D1FAE5] px-3 py-0.5 rounded-full font-normal text-emerald-900 text-3xl md:text-4xl inline-block align-middle mr-2">See</span> 
              how we can help you <span className="relative inline-block font-normal">
                progress
                <span className="absolute left-0 bottom-1 w-full h-1 bg-[#FCD34D] rounded-full"></span>
              </span>
            </h2>
            <p className="text-sm text-black-500 leading-relaxed font-light">
              We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research.
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold tracking-wider uppercase border-b border-black pb-1 cursor-pointer flex items-center w-max gap-4 hover:opacity-70 transition-opacity">
                Read more <span className="text-lg">→</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}