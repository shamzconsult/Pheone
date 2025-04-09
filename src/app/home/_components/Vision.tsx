import React from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";

function Vision() {
  return (
    <div className="relative max-w-screen-2xl mx-auto py-20 px-4">
      <div className="flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Vision Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden lg:w-1/2 min-h-[280px] flex flex-col 
          transform transition-all duration-300 ease-in-out 
          hover:scale-[1.02] hover:shadow-xl">

          <div className="flex flex-col items-center text-center relative z-10 flex-grow justify-center 
            transition-opacity duration-300 hover:opacity-90">
            
            <IoEyeSharp className="text-4xl text-[#BF232E] mb-2 transition-transform duration-300 hover:scale-110" />
            
            <h2 className="text-xl font-bold mb-4 text-[#BF232E] ">
              OUR VISION
            </h2>
            
            <p className="text-sm text-gray-700 leading-relaxed max-w-[80%] 
             ">
              Building an inclusive world where neurodiverse individuals thrive, with access to education, 
              support, and opportunities to reach their full potential.
            </p>
          </div>
          
          <div className="absolute right-5 top-0 h-full w-[120] 
            transition-all duration-700 ease-in-out hover:translate-x-2 hover:opacity-80">
            <img 
              src="/image/Vector.png"
              className="h-full w-full object-cover object-left transition-all duration-500 hover:scale-105"
              alt="Decorative stripes"
            />
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden lg:w-1/2 min-h-[280px] flex flex-col
          transform transition-all duration-300 ease-in-out
          hover:scale-[1.02] hover:shadow-xl">

          <div className="flex flex-col items-center text-center relative z-10 flex-grow justify-center
            transition-opacity duration-300 hover:opacity-95">
            
            <TbTargetArrow className="text-4xl text-[#6AA541] mb-2 
              transition-transform duration-500 hover:scale-110 hover:rotate-6" />
            
            <h2 className="text-xl font-bold mb-4 text-[#6AA541]">
              OUR MISSION
            </h2>
            
            <p className="text-sm text-gray-700 leading-relaxed max-w-[80%]">
              To support and empower individuals with neurological differences through innovative education, 
              resources, and advocacy while fostering inclusion, celebrating neurodiversity, and creating 
              pathways for equal education and personal growth opportunities.
            </p>
          </div>
          
          <div className="absolute right-5 top-0 h-full w-[120]
            transition-all duration-700 ease-in-out hover:-translate-y-1 hover:opacity-90">
            <img 
              src="/image/Vector (1).png"
              className="h-full w-full object-cover object-left 
                transition-all duration-500 hover:scale-[1.03]"
              alt="Decorative stripes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;