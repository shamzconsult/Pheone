import React from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";

function Vision() {
  return (
    <div className="relative max-w-screen-2xl mx-auto py-20 px-4">
      <div className="flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Vision Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden lg:w-1/2 min-h-[280px] flex flex-col">
          <div className="flex flex-col items-center text-center relative z-10 flex-grow justify-center">
            <IoEyeSharp className="text-4xl text-[#BF232E] mb-2" />
            <h2 className="text-xl font-bold mb-4 text-[#BF232E]">OUR VISION</h2>
            <p className="text-sm text-gray-700 leading-relaxed max-w-[80%]">
              Building an inclusive world where neurodiverse individuals thrive, with access to education, 
              support, and opportunities to reach their full potential.
            </p>
          </div>
          
          <div className="absolute right-5 top-0 h-full w-[120]">
            <img 
              src="/image/Vector.png"
              className="h-full w-full object-cover object-left"
              alt="Decorative stripes"
            />
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden lg:w-1/2 min-h-[280px] flex flex-col">
          <div className="flex flex-col items-center text-center relative z-10 flex-grow justify-center">
            <TbTargetArrow className="text-4xl text-[#6AA541] mb-2" />
            <h2 className="text-xl font-bold mb-4 text-[#6AA541]">OUR MISSION</h2>
            <p className="text-sm text-gray-700 leading-relaxed max-w-[80%]">
              To support and empower individuals with neurological differences through innovative education, 
              resources, and advocacy while fostering inclusion, celebrating neurodiversity, and creating 
              pathways for equal education and personal growth opportunities.
            </p>
          </div>
          
          <div className="absolute right-5 top-0 h-full w-[120]">
            <img 
              src="/image/Vector (1).png"
              className="h-full w-full object-cover object-left"
              alt="Decorative stripes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;