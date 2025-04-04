import Link from 'next/link'
import React from 'react'

function LetConnect() {
    return (
        <div className='w-full bg-[#2c7bbd]'>
            <div className='flex flex-col lg:flex-row items-center '>
                <div className='w-full lg:w-1/2 mb-8 md:mb-0 lg:pr-8'>
                    <img 
                      src="/image/Community-1024x452.png" 
                      alt="Celebrating abilities" 
                      className='w-full h-auto  mx-auto'
                    />
                </div>
                <div className='w-full lg:w-1/2 md:mt-6 lg:mt-0 text-center md:text-left md:max-w-3xl leading-relaxed p-4 md:p-0'>
                    <h1 className='text-2xl md:text-4xl lg:text-2xl 2xl:text-4xl text-white font-semibold mb-6'>
                        Let&apos;s Connect
                    </h1>
                    <p className=' text-sm md:text-xl lg:text-sm 2xl:text-xl text-white mb-8 lg:leading-relaxed'>
                        Together, we can build a future that embraces diversity and champions the strengths of every individual. Whether you’re seeking support or looking to contribute to our mission, we invite you to be a part of this transformative journey. Let’s work hand-in-hand to open doors and change lives.
                    </p>
                    <div className='text-center md:text-left'>
                        <Link 
                          href='/' 
                          className="inline-block bg-transparent text-lg text-white border-1 border-white font-semibold py-1 md:py-3 px-10 rounded-full hover:bg-white hover:text-[#2c7bbd] transition-colors duration-300"
                        >
                            Schedule a Consultation
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
      )
}

export default LetConnect