import React from 'react'

function Objectives() {
  return (
    <div className='mt-20 max-w-screen-2xl mx-auto'>
        <section className="overflow-hidden  sm:grid sm:grid-cols-2">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <div className='text-left'>
                        <h1 className='text-xl font-bold mt-6 text-white bg-[#2c7bbd] mb-6 inline-block p-2 px-10 rounded-full'>OUR OBJECTIVES</h1>
                        <p className='text-lg font-semibold text-black mb-8 max-w-4xl mx-auto leading-loose '>
                            we are committed to fostering an inclusive and supportive environment for neurodivergent individuals. Our key objectives include:
                        </p>
                    </div>
            
                    <div className='flex gap-4 shadow-2xl rounded-2xl py-3 px-3'>
                        <img src="/image/Clenched Fist.png" alt="" className='h-16 w-16' />
                        <div>
                            <h2 className='text-[#2c7bbd] text-[1.4rem] font-semibold'>Empowerment</h2>
                            <p className='text-md text-black'>Develop social skills, self-advocacy, and independence</p>
                        </div>
                    </div>

                    <div className='flex gap-4 shadow-2xl rounded-2xl py-3 mt-10 px-3'>
                        <img src="/image/Personal Growth (1).png" alt="" className='h-16 w-16' />
                        <div>
                            <h2 className='text-[#BF232E] text-[1.4rem] font-semibold'>Mentorship for Growth</h2>
                            <p className='text-md text-black'>Provide mentoring and coaching for personal growth</p>
                        </div>
                    </div>
                </div>
            </div>
  
            <img
            alt=""
            src="/image/20donovan-span-articleLarge-v2.png"
            className="h-56 w-full object-cover sm:h-full"
            />
        </section>
  </div>
  )
}

export default Objectives