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
      {/* Left Blue Shape */}
      <motion.div 
        className="absolute hidden md:block left-0 top-0 h-full w-[200px] lg:w-[300px] xl:w-[350px] -z-10"
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
        className="absolute hidden md:block right-0 top-0 h-full w-[250px] lg:w-[400px] xl:w-[700px] -z-10"
        initial="hidden"
        animate={controls}
        variants={rightShapeVariants}
      >
        <img 
          src="/image/Rectangle 40.png" 
          className="h-full w-full object-cover object-right"
          alt="Decorative blue shape"
        />
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 flex flex-col md:flex-row items-center  py-12 md:py-0 mt-20 md:mt-32"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className='md:w-1/2 lg:w-7/12 px-4 md:px-6 lg:px-8 xl:px-12'>
          <motion.h1 
            className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl leading-tight tracking-tight'
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
            className='mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl leading-relaxed'
            variants={textVariants}
          >
            Together, we are shaping a world where every individual&apos;s special abilities are recognized and valued.
          </motion.p>

          <motion.div 
            className='mt-8 lg:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8'
            variants={textVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <a
                className="inline-block whitespace-nowrap rounded-full font-bold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-[#2c7bbd] text-white hover:bg-[#1a5a9a] transition-colors"
                href="/contact"
              >
                Get in Touch
              </a>
            </motion.div>
            <motion.div 
              className='mt-4 sm:mt-0'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className='text-[#2c7bbd] font-semibold text-sm sm:text-base'>Trusted by more than 5 countries</p>
              <motion.p 
                className="text-yellow-400 mt-1"
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
        
        <div className='md:w-1/2 lg:w-5/12 mt-12 md:mt-0 px-4 md:px-0'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <img 
              src="/image/gettyimages-1347952744-640x640.png" 
              alt="Neurodiversity illustration"
              className="w-full max-w-[600px] lg:max-w-[800px] mx-auto object-contain"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default HomeHero;