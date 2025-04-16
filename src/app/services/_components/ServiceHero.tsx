'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Objective {
  title: string;
  content: string;
  items: string[];
  titleColor: string;
}

function ServiceHero() {
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const objectives: Objective[] = [
    {
      title: "Awareness and Education on Neurological Differences",
      content: "",
      items: ["We raise awareness and educate on neurological differences by hosting workshops, partnering with schools for inclusive education, and sharing materials to foster acceptance."],
      titleColor: "text-[#2c7bbd]"
    },
    {
      title: "Strengthening Community Inclusion",
      content: "",
      items: ["We provide programs to build social skills, self-advocacy, and independence, along with mentoring for personal growth. Our community events foster inclusion and connection."],
      titleColor: "text-[#BF232E]"
    },
    {
      title: "Inclusive Support Solutions",
      content: "",
      items: ["We offer tailored support services, including speech and occupational therapy, behavior intervention, and counseling. Our early intervention programs help individuals meet developmental milestones, while our vocational training equips them with essential skills for employment and independent living."],
      titleColor: "text-[#6AA541]"
    },
    {
      title: "Policy and Rights Advocacy",
      content: "",
      items: [
        "We advocate for the rights of individuals with neurological differences at all levels, collaborating with policymakers to drive inclusive policies and funding. As a voice for the neurodiverse community, we raise awareness and promote equal opportunities and accessibility."
      ],
      titleColor: "text-[#F9AE40]"
    },
    {
      title: "Fostering Community Engagement",
      content: "",
      items: ["We collaborate with local organizations and businesses to build a strong support network for individuals with neurological differences and their families. Through support groups and peer networks, we foster connections and shared experiences. Additionally, we partner with businesses to promote inclusive employment opportunities."],
      titleColor: "text-[#2c7bbd]"
    },
    {
      title: "Driving Research and Innovation",
      content: "",
      items: ["We support neurodiversity research by collaborating with experts, funding studies to improve understanding and interventions, and advocating for evidence-based practices and innovative approaches in support and education."],
      titleColor: "text-[#BF232E]"
    },
    {
      title: "Autism Support Services",
      content: "",
      items: [
        "Our program provides personalized support, including speech and occupational therapy, behavior intervention, and counseling. We offer early intervention to help children reach developmental milestones and vocational training to equip individuals with skills for employment and independent living."
      ],
      titleColor: "text-[#F9AE40]"
    },
    {
      title: "Community Empowerment Program",
      content: "",
      items: ["Our program enhances social skills, self-advocacy, and independence for individuals with autism through mentoring, coaching, and community engagement. We foster confidence, personal growth, and inclusion through events that promote interaction and acceptance."],
      titleColor: "text-[#6AA541]"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className='relative overflow-x-hidden'>
      {/* Background shapes with animation */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute left-0 top-64 -z-10"
      >
        <img
          src="/image/Polygon 1.png"
          className="h-full w-full object-cover object-left"
          alt="Decorative blue shape"
        />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute hidden lg:block right-0 top-0 h-full lg:h-[600] 2xl:h-[700] lg:max-w-[500px] w-full max-w-[300px] 2xl:max-w-[900px] -z-10"
      >
        <img
          src="/image/Rectangle 40.png"
          className="h-[600px] lg:h-full w-full object-cover object-right"
          alt="Decorative blue shape"
        />
      </motion.div>

      <div className='max-w-screen-xl mx-auto mt-20 lg:mt-12 p-2 md:p-10'>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className='text-center'
        >
          <motion.h1 
            whileHover={{ scale: 1.05 }}
            className='text-xl font-bold mt-6 text-white bg-[#2c7bbd] mb-6 inline-block p-2 px-10 rounded-full'
          >
            OUR SERVICES
          </motion.h1>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='text-3xl mb-4 font-semibold tracking-wide'
          >
            Get a comprehensive Individualized Support
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='text-md text-black mb-8 max-w-4xl mx-auto leading-loose'
          >
            At Phebean Neurodiversity Support, we empower individuals with disabilities through career coaching, family support, and organizational partnerships. We reach out to an array of individuals with neurological complications through the following services:
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
        >
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="flex flex-col self-start bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300"
            >
              <motion.div
                className="flex justify-between items-center p-2 xl:p-6 px-6 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleSection(index)}
                whileHover={{ backgroundColor: 'rgba(249, 250, 251, 0.8)' }}
              >
                <h2 className={`lg:text-lg text-md font-semibold text-left ${obj.titleColor}`}>
                  {obj.title}
                </h2>
                <motion.span 
                  className={`text-2xl font-bold ${obj.titleColor}`}
                  animate={{ rotate: expandedSections[index] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {expandedSections[index] ? '−' : '+'}
                </motion.span>
              </motion.div>

              <AnimatePresence>
                {expandedSections[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      {obj.content && <p className="text-gray-700 mb-4">{obj.content}</p>}
                      {obj.items.length > 0 && (
                        <ul className="space-y-2">
                          {obj.items.map((item, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start"
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <span className="text-gray-700 text-left text-sm">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default ServiceHero;