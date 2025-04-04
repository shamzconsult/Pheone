'use client'

import React, { useState } from 'react';

const Objectives = () => {
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
      items: ["We develop and implement tailored learning strategies that leverage the unique strengths of neurodiverse individuals to enhance their educational experience."]
    },
    {
      title: "Capacity Building and Training Programs",
      content: "",
      items: [
        "Research and Collaborative Innovation"
      ]
    },
    {
      title: "Workplace Inclusion and Economic Empowerment",
      content: "",
      items: [
        "Inclusive Community Engagement"
      ]
    },
    {
      title: "Policy Advocacy",
      content: "",
      items: [
        "Public Awareness and Inclusion Initiatives"
      ]
    },
    {
      title: "Ongoing Support Services",
      content: "",
      items: []
    }
  ];

  return (
    <div className='h-screen'>
        <div 
        className="h-[700] max-w-screen-2xl py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image/Rectangle 82.png')" }}
        >
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">OUR OBJECTIVES</h1>
            <p className="text-xl text-white max-w-4xl mx-auto">
                Through These Focus Areas, We Ensure Meaningful Impact, Fostering Growth, Independence, And A More Inclusive Society For All.
            </p>
            </div>

            {/* Objectives Cards */}
            <div className="space-y-6">
            {objectives.map((obj, index) => (
                <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
                >
                <div 
                    className="flex justify-between items-center p-6 cursor-pointer"
                    onClick={() => toggleSection(index)}
                >
                    <h2 className="text-2xl font-bold text-[#2c7bbd]">{obj.title}</h2>
                    <svg
                    className={`w-6 h-6 text-[#2c7bbd] transform transition-transform duration-300 ${
                        expandedSections[index] ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                    </svg>
                </div>

                {(expandedSections[index] || obj.content) && (
                    <div className="px-6 pb-6 pt-0">
                    {obj.content && <p className="text-gray-700 mb-4">{obj.content}</p>}
                    {obj.items.length > 0 && (
                        <ul className="space-y-2">
                        {obj.items.map((item, i) => (
                            <li key={i} className="flex items-start">
                            <span className="text-[#2c7bbd] mr-2">+</span>
                            <span className="text-gray-700">{item}</span>
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
  );
};

export default Objectives;