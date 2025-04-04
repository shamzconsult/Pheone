'use client'

import React, { useState } from 'react'

function OurObjectives() {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (index) => {
      setExpandedSections(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    };

    const objectives = [
        {
          title: "Personalized Educational Programs",
          content: "",
          items: ["We Develop and implement tailored learning strategies that leverage the unique strengths of neurodiverse individuals to enhance their educational experience."],
          titleColor: "text-[#2c7bbd]"
        },
        {
          title: "Inclusive Community Engagement",
          content: "",
          items: [
            "Research and Collaborative Innovation"
          ],
          titleColor: "text-[#BF232E]"
        },
        {
            title: "Capacity Building and Training Programs",
            content: "",
            items: [],
            titleColor: "text-[#6AA541]"
        },
        {
            title: "Policy Advocacy",
            content: "",
            items: [
              "Public Awareness and Inclusion Initiatives"
            ],
            titleColor: "text-[#F9AE40]"
        },
        {
            title: "Research and Collaborative Innovation",
            content: "",
            items: [],
            titleColor: "text-[#BF232E]"
        },
        {
            title: "Public Awareness and Inclusion Initiatives",
            content: "",
            items: [],
            titleColor: "text-[#2c7bbd]"
        },
        {
          title: "Workplace Inclusion and Economic Empowerment",
          content: "",
          items: [
            "Inclusive Community Engagement"
          ],
          titleColor: "text-[#F9AE40]"
        },
        
        {
            title: "Ongoing Support Services",
            content: "",
            items: [],
            titleColor: "text-[#6AA541]"
        }
      ];

  return (
    <div className='max-w-screen-2xl mx-auto mt-20 md:mb-28 mb-56 relative'>
        <div className='w-full  relative overflow-'>
            <div className='h-[700px]'>
                {/* Background Image Blue color */}
                <img 
                src="/image/Rectangle 82.png" 
                alt="Objectives background" 
                className='w-full h-full  absolute inset-0 p-10'
                />
        
            </div>
       
        
            {/* Text Content - Centered over image */}
            <div className='absolute inset-0 flex items-center justify-center h-[600px] text-center mt-40 md:px-20'>
              <div className='max-w-screen-xl bg-white bg-opacity-90 md:p-8 rounded-xl mx-4 shadow-2xl'>
                  <h1 className='text-xl font-bold mt-6 text-white bg-[#2c7bbd] mb-6 inline-block p-2 px-10 rounded-full'>OUR OBJECTIVES</h1>
                  <p className='text-xl font-semibold text-black mb-8 max-w-4xl mx-auto'>
                    Through These Focus Areas, We Ensure Meaningful Impact, Fostering Growth, Independence, And A More Inclusive Society For All.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {objectives.map((obj, index) => (
                          <div 
                          key={index} 
                          className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300"
                          >
                          <div 
                              className="flex justify-between items-center p-3 px-6 cursor-pointer hover:bg-gray-50"
                              onClick={() => toggleSection(index)}
                          >
                              <h2 className={`lg:text-lg text-md font-semibold text-left text-[#2c7bbd] ${obj.titleColor}`}>{obj.title}</h2>
                              <span className="text-[#2c7bbd] text-2xl font-bold">
                              {expandedSections[index] ? '−' : '+'}
                              </span>
                          </div>

                          {expandedSections[index] && (
                              <div className="px-6 pb-6 pt-0">
                              {obj.content && <p className="text-gray-700 mb-4">{obj.content}</p>}
                              {obj.items.length > 0 && (
                                  <ul className="space-y-2">
                                  {obj.items.map((item, i) => (
                                      <li key={i} className="flex items-start">
                                      {/* <span className="text-[#2c7bbd] mr-2"></span> */}
                                      <span className="text-gray-700 text-left">{item}</span>
                                      </li>
                                  ))}
                                  </ul>
                              )}
                              </div>
                          )}
                          </div>
                      ))}
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default OurObjectives