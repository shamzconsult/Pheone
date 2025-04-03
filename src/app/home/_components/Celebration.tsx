import Link from 'next/link'
import React from 'react'

function Celebration() {
  return (
    <div className='w-full bg-[#2c7bbd]'>
        <div className='flex flex-col md:flex-row items-center '>
            <div className='w-full md:w-1/2 mb-8 md:mb-0 md:pr-8'>
                <img 
                  src="/image/download.png" 
                  alt="Celebrating abilities" 
                  className='w-full h-auto  mx-auto'
                />
            </div>
            <div className='w-full md:w-1/2 text-center md:text-left max-w-3xl leading-relaxed'>
                <h1 className='text-3xl md:text-4xl text-white font-bold mb-6'>
                    Celebrating Abilities, Empowering Lives
                </h1>
                <p className='text-xl font-semibold text-white mb-8 leading-relaxed'>
                    We believe that every individual possesses unique strengths and potential. Our mission is to create an inclusive environment where neurodivergent individuals are not only recognized but also empowered to thrive. Through personalized support, education, and advocacy, we help unlock opportunities for growth, independence, and success.
                </p>
                <div className='text-center md:text-left'>
                    <Link 
                      href='/' 
                      className="inline-block bg-transparent text-2xl text-white border-1 border-white font-bold py-3 px-16 rounded-full hover:bg-white hover:text-[#2c7bbd] transition-colors duration-300"
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