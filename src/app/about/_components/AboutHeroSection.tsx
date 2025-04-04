import Link from 'next/link'
import React from 'react'

function AboutHeroSection() {
  return (
    <div className='relative overflow-x-hidden '>
         <div className="absolute  left-0 top-0 h-full xl:w-[350px] xl:max-w-[400px] -z-10">
        <img 
          src="/image/Group 4.png" 
          className="h-full w-full object-cover object-left"
          alt="Decorative blue shape"
        />
      </div>

      {/* Right Blue Shape */}
      <div className="absolute hidden lg:block right-0 top-0 h-full lg:h-[800] lg:max-w-[500px] w-full max-w-[300px] 2xl:max-w-[700px] -z-10">
        <img 
          src="/image/Rectangle 40.png" 
          className="h-[600px] lg:h-full w-full object-cover object-right"
          alt="Decorative blue shape"
        />
      </div>

      <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:mt-10 2xl:mt-20'>
      <div className='flex flex-col lg:flex-row gap-8 xl:gap-20'>
        {/* Text Content */}
        <div className='lg:w-1/2 xl:w-3/5 mt-18 lg:mt-32'>
          <h1 className='bg-[#2c7bbd] inline-block rounded-full text-white p-2 px-6 sm:px-12 md:px-20 font-semibold text-sm md:text-base'>
            ABOUT US
          </h1>
          <h2 className='text-2xl md:text-3xl xl:text-4xl max-w-3xl font-bold text-[#2c7bbd] tracking-wide mt-6'>
            Embracing <span className='text-black'>Differences,</span> Empowering <span className='text-black'>Potential</span>
          </h2>

          <div className='bg-[#2c7bbd] font-semibold text-white p-4 md:p-6 rounded-2xl max-w-4xl tracking-wide leading-loose mt-6 text-sm md:text-lg lg:text-sm xl:text-lg'>
            <p>Phebean Neurodiversity Support is a nonprofit organization dedicated to creating an inclusive environment where individuals with disabilities are empowered through personalized support and advocacy.</p>
          </div>

          <p className='max-w-4xl font-semibold tracking-wide leading-loose mt-6 text-sm md:text-lg lg:text-sm xl:text-lg'>
            Founded in memory of Phebean Durodola Aderinboye, our work is inspired by her enduring legacy of compassion and inclusion. As we mark the 
            30th anniversary of her passing on January 9, 1995, we remain committed to her vision—fostering acceptance, breaking barriers, and building a community where everyone has the opportunity to thrive and contribute 
            meaningfully to society.
          </p>

          <Link href='' className='text-[#F9AE40] tracking-wide font-semibold bg-white inline-block mt-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-10 rounded-md px-6 py-3 text-sm md:text-lg'>
            Read More +
          </Link>
        </div>

        {/* Image*/}
        <div className='lg:w-1/2 xl:w-2/5 mt-0 lg:mt-32 flex justify-center lg:justify-end'>
          <img 
            src="/image/Frame 1618873131.png" 
            alt="About us visual" 
            className='w-full max-w-[500px] md:max-w-[600px] lg:max-w-none lg:w-full lg:h-[600px] object-contain'
          />
        </div>
      </div>
    </div>

    </div>
  )
}

export default AboutHeroSection