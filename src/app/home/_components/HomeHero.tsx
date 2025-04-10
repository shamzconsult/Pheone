'use client'

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HomeHero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const leftShapeVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10
      }
    }
  };

  const rightShapeVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
        delay: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  // const imageVariants = {
  //   hidden: { scale: 0.9, opacity: 0 },
  //   visible: {
  //     scale: 1,
  //     opacity: 1,
  //     transition: {
  //       type: 'spring',
  //       stiffness: 50,
  //       delay: 0.5
  //     }
  //   }
  // };

  const buttonVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="relative overflow-x-hidden" ref={ref}>
      {/* Left Blue Shape  */}
      <motion.div 
        className="absolute hidden md:block left-0 top-0 h-full xl:w-[350px] xl:max-w-[400px] -z-10"
        initial="hidden"
        animate={controls}
        variants={leftShapeVariants}
      >
        <img 
          src="/image/Group 4.png" 
          className="h-full w-full object-cover object-left"
          alt="Decorative blue shape"
        />
      </motion.div>

      {/* Right Blue Shape */}
      <motion.div 
        className="absolute hidden md:block right-0 top-0 h-full w-full max-w-[300px] xl:max-w-[700px] -z-10 "
        initial="hidden"
        animate={controls}
        variants={rightShapeVariants}
      >
        <img 
          src="/image/Rectangle 40.png" 
          className="h-[600px] lg:h-full w-full object-cover object-right"
          alt="Decorative blue shape"
        />
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-screen-3xl mx-auto md:flex items-center min-h-[80vh] xl:px-32 mt-24 md:mt-0"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className='md:w-7/12 p-6 md:p-12 xl:p-20 md:mt-2'>
          <motion.h1 
            className='font-bold text-4xl xl:text-4xl 2xl:text-5xl lg:tracking-wider leading-tight'
            variants={textVariants}
          >
            EMBRACING <br />
            <motion.span 
              className='text-[#2c7bbd]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            > 
              NEURODIVERSITY 
            </motion.span>
            <br />
            AND EMPOWERING LIVES
          </motion.h1>

          <motion.p 
            className='lg:mt-10 mt-4 tracking-wide leading-relaxed lg:text-lg'
            variants={textVariants}
          >
            Together, we are shaping a world where every individual&apos;s special abilities are recognized and valued.
          </motion.p>

          <motion.div 
            className='mt-10 md:flex items-center gap-4 md:gap-8 xl:gap-16'
            variants={textVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <a
                className="inline-block whitespace-nowrap rounded-full font-bold px-6 py-3.5 text-sm bg-[#2c7bbd] text-white md:px-10 hover:bg-[#1a5a9a] transition-colors"
                href="/contact"
              >
                Get in Touch
              </a>
            </motion.div>
            <motion.div 
              className='mt-6 md:mt-0'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className='text-[#2c7bbd] font-semibold'>Trusted by more than 5 countries</p>
              <motion.p 
                className="text-yellow-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 1.2,
                  type: 'spring',
                  stiffness: 300
                }}
              >
                ⭐ ⭐ ⭐ ⭐ ⭐
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
        
        <div 
          className='md:w-5/12 mt-10 lg:mt-2 xl:mt-32'
          
        >
          <img 
            src="/image/gettyimages-1347952744-640x640.png" 
            alt="Neurodiversity illustration"
            className="w-full w-[800px] mx-auto"
          />
          </div>
      </motion.div>
    </div>
  )
}

export default HomeHero;