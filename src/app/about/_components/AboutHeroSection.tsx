'use client'

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

function AboutHeroSection() {
  return (
    <div className='relative overflow-x-hidden'>
      {/* Left Blue Shape  */}
      <motion.div 
        className="absolute left-0 top-0 h-full xl:w-[350px] xl:max-w-[400px] -z-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, damping: 10 }}
      >
        <img 
          src="/image/Group 4.png" 
          className="h-full w-full object-cover object-left"
          alt="Decorative blue shape"
        />
      </motion.div>

      {/* Right Blue Shape  */}
      <motion.div 
        className="absolute hidden lg:block right-0 top-0 h-full lg:h-[700] 2xl:h-[800] lg:max-w-[500px] w-full max-w-[300px] 2xl:max-w-[700px] -z-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, damping: 10, delay: 0.2 }}
      >
        <img 
          src="/image/Rectangle 40.png" 
          className="h-[600px] lg:h-full w-full object-cover object-right"
          alt="Decorative blue shape"
        />
      </motion.div>

      <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 '>
        <div className='flex flex-col lg:flex-row gap-8 xl:gap-20'>
          {/* Text Content  */}
          <motion.div 
            className='lg:w-1/2 xl:w-3/5 mt-18 lg:mt-32'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className='bg-[#2c7bbd] inline-block rounded-full text-white p-2 px-6 sm:px-12 md:px-20 font-semibold text-sm md:text-base'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              ABOUT US
            </motion.h1>

            <motion.h2 
              className='text-2xl md:text-3xl xl:text-4xl max-w-3xl font-bold text-[#2c7bbd] tracking-wide mt-6'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Embracing <span className='text-black'>Differences,</span> Empowering <span className='text-black'>Potential</span>
            </motion.h2>

            <motion.div 
              className='bg-[#2c7bbd] font-semibold text-white p-4 md:p-6 rounded-2xl max-w-4xl tracking-wide leading-loose mt-6 text-sm md:text-lg lg:text-sm xl:text-lg'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p>Phebean Neurodiversity Support is a nonprofit organization dedicated to creating an inclusive environment where individuals with disabilities are empowered through personalized support and advocacy.</p>
            </motion.div>

            <motion.p 
              className='max-w-4xl font-semibold tracking-wide leading-loose mt-6 text-sm md:text-lg lg:text-sm xl:text-lg'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Founded in memory of Phebean Durodola Aderinboye, our work is inspired by her enduring legacy of compassion and inclusion. As we mark the 
              30th anniversary of her passing on January 9, 1995, we remain committed to her vision—fostering acceptance, breaking barriers, and building a community where everyone has the opportunity to thrive and contribute 
              meaningfully to society.
            </motion.p>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
            >
              <Link 
                href='/attributes' 
                className='text-[#F9AE40] tracking-wide font-semibold bg-white inline-block mt-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-10 rounded-md px-6 py-3 text-sm md:text-lg'
              >
                Read More +
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className='lg:w-1/2 xl:w-2/5 mt-0 lg:mt-32 flex justify-center lg:justify-end'
            initial={{ scale: 0.95, opacity: 0, x: 50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 60 }}
          >
            <motion.img 
              src="/image/Frame 1618873131.png" 
              alt="About us visual" 
              className='w-full max-w-[500px] md:max-w-[600px] lg:max-w-none lg:w-full lg:h-[600px] object-contain'
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutHeroSection;