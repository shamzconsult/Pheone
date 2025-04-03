import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: "Phebean Neurodiversity Support has been life-changing! Their dedication and understanding have helped my child thrive in ways I never imagined.",
      author: "Aisha O.",
      role: "Parent of a Neurodivergent Child",
      image: "/image/gettyimages-1347952744-640x640 (1).png" 
    },
    {
      quote: "The support and guidance I received here have given me confidence and a sense of belonging. Truly a transformative experience!",
      author: "Daniel K.",
      role: "Program Participant",
      image: "/image/professional-headshots-cheerful-dark-skinned-600nw-2334808623.png"
    },
    {
      quote: "Their commitment to neurodiversity is unmatched. I've seen real progress and positive change in my loved one's life.",
      author: "Mrs Adewale",
      role: "A wife",
      image: "/image/kathy_2022.png"
    },
    {
      quote: "Phebean Neurodiversity Support has been a beacon of hope for my family. Their compassionate approach and expert guidance have made a remarkable difference in my child's development.",
      author: "Patricia A.",
      role: "Parent & Advocate",
      image: "/image/istockphoto-1345489089-612x612.png"
    }
  ];

  return (
    <div className="max-w-screen-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-2xl p-2 px-10 rounded-full inline-block text-white mb-4 bg-[#2c7bbd]">TESTIMONIALS</h2>
        <p className="text-xl text-[#2c7bbd] tracking-wide font-semibold max-w-6xl mx-auto">
          Don&apos;t Just Take Our Word For It. Hear From Those Whose Lives Have Been Transformed Through Our Support, Guidance, And Inclusive Approach.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-6 gap-24 items-stretch">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative h-full">
            {/* Image */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-10">
              <img 
                src={testimonial.image} 
                alt={testimonial.author}
                className="w-16 h-16 sm:w-20 sm:h-16 rounded-full object-cover shadow-md"
              />
            </div>
            
            {/* Card content */}
            <div className="bg-white rounded-lg shadow-xl hover:shadow-xl transition-all duration-300 pl-14 sm:pl-16 h-full flex flex-col hover:bg-[#2c7bbd] group">
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex-grow">
                  <blockquote className="text-black font-semibold text-sm mb-4 group-hover:text-white transition-colors duration-300">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                </div>
                
                <div className='flex justify-between'>
                  <div className="text-left mt-auto">
                    <p className="font-semibold text-xl text-[#6AA541] group-hover:text-white transition-colors duration-300">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-white transition-colors duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#F9AE40] text-sm group-hover:text-white/80 transition-colors duration-300">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;