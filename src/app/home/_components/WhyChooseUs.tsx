import React from 'react'

function WhyChooseUs() {
  return (
    <div className='max-w-screen-2xl mx-auto p-10'>
        <div className='md:flex gap-10'>
            <div className='md:w-1/2'>
                <h1 className='bg-[#2c7bbd] text-white text-xl rounded-full p-2 px-10 inline-block mb-6'>WHY CHOOSE US</h1>
                <p className='font-semibold tracking-wider'>At Phebean Neurodiversity Support, we are dedicated to recognizing, valuing, and empowering every unique ability.</p>
                <div>
                    <div className='flex gap-6 mt-10 shadow-2xl bg-white p-4 rounded-2xl'>
                        <img src="/image/Service.png" alt="" />
                        <div>
                            <p className='text-[#2c7bbd] font-semibold'>Personalized Assistance</p>
                            <p className='text-sm'>Personalized support to individual&apos;s needs.</p>
                        </div>
                    </div>
                    <div className='flex gap-6 mt-10 shadow-2xl bg-white p-4 rounded-2xl'>
                        <img src="/image/Accessibility Tools.png" alt="" />
                        <div>
                            <p className='text-[#BF232E] font-semibold'>Accessibility and Inclusivity</p>
                            <p className='text-sm'>Inclusive programs for everyone.</p>
                        </div>
                    </div>
                    <div className='flex gap-6 mt-10 shadow-2xl bg-white p-4 rounded-2xl'>
                        <img src="/image/Personal Growth.png" alt="" />
                        <div>
                            <p className='text-[#6AA541] font-semibold'>Success Stories</p>
                            <p className='text-sm'>Real transformations through our services.</p>
                        </div>
                    </div>
                    <div className='flex gap-6 mt-10 shadow-2xl bg-white p-4 rounded-2xl'>
                        <img src="/image/User Groups.png" alt="" />
                        <div>
                            <p className='text-[#F9AE40] font-semibold'>Support for Marginalized Groups</p>
                            <p className='text-sm'>Advocacy and capacity-building for underrepresented communities.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6 md:w-1/2 md:mt-28 xl:mt-0'>
            <img src="/image/disabledandhere-047-1-scaled.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs