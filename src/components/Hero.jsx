import React from 'react';

export default function HeroSection() {
  return (
    <section className="w-full bg-white pt-12 pb-16 px-6 md:px-12">
      
      <div className="max-w-480 mx-auto flex flex-col items-center text-center space-y-12">
        
       
        <div className="max-w-4xl z-20 px-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#111111] leading-[1.15] tracking-tight font-sans">
            The <span className="relative inline-block font-normal">thinkers
              <span className="absolute left-0 bottom-1 w-full h-1.5 bg-[#FCD34D] rounded-full -z-10 translate-y-1"></span>
            </span> and doers were <span className="bg-[#FBCFE8] px-4 py-1 rounded-full font-normal text-pink-900">changing</span> the <span className="bg-[#D1FAE5] px-4 py-1 rounded-full font-normal text-emerald-900">status</span> Quo with
          </h1>
        </div>


        
        <div className="relative w-full h-32 flex items-center justify-center select-none">
          
         
          <div className="hidden lg:block absolute left-4 bottom-0">
            <svg width="60" height="140" viewBox="0 0 60 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10C30 40 50 20 30 60C10 100 40 120 20 170" stroke="#FF8A8A" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="hidden md:block absolute left-[10%] w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
          </div>
          <div className="hidden lg:block absolute left-[24%] transform -translate-y-4 w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
          </div>

          <div className="w-28 h-28 rounded-full overflow-hidden border-[3px] border-purple-500 shadow-xl z-10">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" alt="Team member" className="w-full h-full object-cover" />
          </div>

          
          <div className="hidden md:block absolute left-[54%] transform translate-y-2 w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
          </div>
          <div className="hidden lg:block absolute right-[24%] transform -translate-y-2 w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:block absolute right-[10%] w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
          </div>
          
       
          <div className="hidden lg:block absolute right-[8%] w-12 h-24 bg-[#9047FF] rounded-l-full"></div>

        </div>


        
        <div className="max-w-xl mx-auto px-4 pt-4">
          <p className="text-sm sm:text-base text-black-500 leading-relaxed font-light">
            We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
          </p>
        </div>

      </div>
    </section>
  );
}