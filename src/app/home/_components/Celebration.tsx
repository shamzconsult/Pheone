import Link from 'next/link'
import React from 'react'

function Celebration() {
  return (
    <div className='w-full bg-[#2c7bbd]'>
        <div className='flex flex-col lg:flex-row items-center '>
            <div className='w-full lg:w-1/2 mb-8 md:mb-0 lg:pr-8'>
                <img 
                  src="/image/download.png" 
                  alt="Celebrating abilities" 
                  className='w-full h-auto  mx-auto'
                />
            </div>
            <div className='w-full lg:w-1/2 md:mt-6 lg:mt-0 text-center md:text-left md:max-w-3xl leading-relaxed p-2 md:p-0'>
                <h1 className='text-2xl md:text-4xl lg:text-2xl 2xl:text-4xl text-white font-bold mb-6'>
                    Celebrating Abilities, Empowering Lives
                </h1>
                <p className=' text-sm md:text-xl lg:text-sm 2xl:text-xl font-semibold text-white mb-8 lg:leading-relaxed'>
                    We believe that every individual possesses unique strengths and potential. Our mission is to create an inclusive environment where neurodivergent individuals are not only recognized but also empowered to thrive. Through personalized support, education, and advocacy, we help unlock opportunities for growth, independence, and success.
                </p>
                <div className='text-center md:text-left'>
                    <Link 
                      href='/contact' 
                      className="inline-block bg-transparent md:text-2xl lg:text-xl 2xl:text-2xl text-white border-1 border-white font-bold py-1 md:py-3 px-16 rounded-full hover:bg-white hover:text-[#2c7bbd] transition-colors duration-300"
                    >
                        GET IN TOUCH
                    </Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Celebration