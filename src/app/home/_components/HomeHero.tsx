import React from 'react';

function HomeHero() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Left Blue Shape */}
      <div className="absolute left-0 top-0 h-full w-[350px] max-w-[400px] -z-10">
        <img 
          src="/image/Group 4.png" 
          className="h-full w-full object-cover object-left"
          alt="Decorative blue shape"
        />
      </div>

      {/* Right Blue Shape */}
      <div className="absolute right-0 top-0 h-full w-full max-w-[700px] -z-10">
        <img 
          src="/image/Rectangle 40.png" 
          className="h-full w-full object-cover object-right"
          alt="Decorative blue shape"
        />
      </div>

      <div className="relative z-10 max-w-screen-3xl mx-auto md:flex items-center min-h-[80vh] px-32">
        <div className='md:w-7/12 p-6 md:p-12 lg:p-20 mt-10 md:mt-40'>
          <h1 className='font-bold text-3xl lg:text-6xl lg:tracking-wider leading-tight'>
            EMBRACING 
            <span className='text-[#2c7bbd]'> NEURODIVERSITY </span>
            AND EMPOWERING LIVES
          </h1>
          <p className='lg:mt-10 mt-4 tracking-wide leading-relaxed lg:text-lg'>
            Together, we are shaping a world where every individual&apos;s special abilities are recognized and valued.
          </p>
          <div className='mt-10 flex flex-wrap items-center gap-4 md:gap-8 lg:gap-16'>
            <div>
              <a
                className="inline-block whitespace-nowrap rounded-full font-bold px-6 py-3.5 text-sm bg-[#2c7bbd] text-white md:px-10 hover:bg-[#1a5a9a] transition-colors"
                href="#"
              >
                Get in Touch
              </a>
            </div>
            <div>
              <p className='text-[#2c7bbd] font-semibold'>Trusted by more than 5 countries</p>
              <p className="text-yellow-400">⭐ ⭐ ⭐ ⭐ ⭐</p>
            </div>
          </div>
        </div>
        
        <div className='md:w-5/12 mt-10 md:mt-40'>
          <img 
            src="/image/gettyimages-1347952744-640x640.png" 
            alt="Neurodiversity illustration"
            className="w-full h-[700px] w-[800px] mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeHero;