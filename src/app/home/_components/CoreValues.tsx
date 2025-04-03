import React from 'react';

function CoreValues() {

  return (
    <div className="relative bg-white py-16 overflow-hidden ">
      {/* Blue background image (right side) */}
      <div className="absolute right-0 top-0 h-full w-[30%] max-w-[500px] -z-0">
        <img 
          src="/image/Group 3.png" 
          className="h-full w-full object-cover object-left"
          alt="Decorative blue background"
        />
      </div>

        <div className='max-w-screen-2xl mx-auto'>
            <div className="flex flex-col xl:flex-row items-start">
                {/* Image  */}
                <div className="w-full px-4 xl:w-[40%] lg:px-0 lg:pr-8 xl:mt-20 flex justify-center">
                    <img 
                    src="/image/Group 2.png" 
                    className="w-full max-w-[500px] md:max-w-[600px] h-auto object-contain"
                    alt="Core values illustration"
                    />
                </div>

                {/* Content */}
                <div className="w-full  xl:w-[65%] px-4 sm:px-6 lg:px-8 relative z-10 mt-8 lg:mt-0">
                    <h2 className="text-2xl font-semibold text-white inline-block p-2 rounded-full mb-8 px-10 bg-[#2c7bbd]">OUR CORE VALUES</h2>
                    <p className="text-2xl font-semibold text-gray-700 mb-12">
                    At Phebean Neurodiversity Support, We Are Intentional About The Following Core Values:
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* All your core value boxes remain exactly the same */}
                        <div className="bg-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-[1.01]">
                            <div className='flex border-l-2 border-l-[#2c7bbd] shadow-xl'>
                            <h3 className="text-sm tracking-wider leading-relaxed p-3 mb-2"> <span className='font-bold text-[#2c7bbd]'>Inclusion-</span> We embrace and celebrate neurodiversity, ensuring that every individual feels valued, understood, and supported.</h3>
                            </div>
                        </div>
                        <div className="bg-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-[1.01]">
                            <div className='flex border-l-2 shadow-xl '>
                                <h3 className="text-sm tracking-wider leading-relaxed p-3 mb-2"> 
                                    <span className='font-bold text-[#BF232E]'>Empowerment-</span> 
                                    We equip neurodivergent individuals with the skills, confidence, and opportunities to thrive in all areas of life.
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-[1.01]">
                            <div className='flex border-l-2 shadow-xl '>
                                <h3 className="text-sm tracking-wider leading-relaxed p-3 mb-2"> 
                                    <span className='font-bold text-[#6AA541]'>Advocacy-</span> 
                                    We amplify voices, challenge stigma, and drive policies that promote equal rights and opportunities for neurodiverse individuals.
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-[1.01]">
                            <div className='flex border-l-2 shadow-xl '>
                                <h3 className="text-sm tracking-wider leading-relaxed p-3 mb-2"> 
                                    <span className='font-bold text-[#F9AE40]'>Innovation-</span> 
                                    We adopt creative, evidence-based approaches to education, support, and community engagement for neurodivergent individuals.
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-[1.01]">
                            <div className='flex border-l-2 shadow-xl '>
                                <h3 className="text-sm tracking-wider leading-relaxed p-3 mb-2"> 
                                    <span className='font-bold text-[#BF232E]'>Compassion-</span> 
                                    We foster an environment of kindness, patience, and understanding, ensuring that everyone receives the support they need.
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-[1.01]">
                            <div className='flex border-l-2 shadow-xl '>
                                <h3 className="text-sm tracking-wider leading-relaxed p-3 mb-2"> 
                                    <span className='font-bold text-[#1F75BB]'>Professionalism-</span> 
                                    We uphold the highest ethical standards, ensuring excellence, integrity, and accountability in all our services.
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-[1.01]">
                            <div className='flex border-l-2 shadow-xl '>
                                <h3 className="text-sm tracking-wider leading-relaxed p-3 mb-2"> 
                                    <span className='font-bold text-[#F9AE40]'>Community Intervention-</span> 
                                    We actively engage with communities to create awareness, drive systemic change, and provide inclusive support programs.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}


export default CoreValues;