import React from 'react'

function HomePage() {
  return (
    <div className='relative overflow-x-hidden '>
         <div className="absolute  left-0 top-64  -z-10">
            <img 
            src="/image/Polygon 1.png" 
            className="h-full w-full object-cover object-left"
            alt="Decorative blue shape"
            />
        </div>

        {/* Right Blue Shape */}
        <div className="absolute hidden lg:block right-0 top-0 h-full lg:h-[600] 2xl:h-[700] lg:max-w-[500px] w-full max-w-[300px] 2xl:max-w-[900px] -z-10">
            <img 
            src="/image/Rectangle 40.png" 
            className="h-[600px] lg:h-full w-full object-cover object-right"
            alt="Decorative blue shape"
            />
        </div>

        <div className='max-w-screen-xl mx-auto mt-40'>
            <div>
                <div className='text-center'>
                    <h1 className='text-xl font-bold mt-6 text-white bg-[#2c7bbd] mb-6 inline-block p-2 px-10 rounded-full'>Donation</h1>
                    <h2 className='text-3xl mb-4 font-semibold tracking-wide'>Support Our Mission</h2>
                    <p className='text-md text-black mb-8 max-w-4xl mx-auto leading-loose '>
                        Your donation helps us provide resources, education, and advocacy for neurodivergent individuals. Every contribution makes a difference!
                    </p>
                </div>

                <div className='flex justify-center gap-10'>
                    <div className='text-center bg-white hover:border-l hover:border-l-[#2c7bbd] border shadow-lg border-gray-300 rounded-2xl'>
                        <div className='flex justify-center'>
                            <img src="/image/Get Cash.png" alt="" />
                        </div>
                        <p>One-Time Donation</p>
                        <p>Make a one-time contribution to support our initiatives</p>
                        <button className='bg-[#2c7bbd] text-white rounded-full p-2 px-6 inline-block '>Donate Now</button>
                    </div>

                    <div className='text-center bg-white hover:border-l hover:border-l-[#2c7bbd] border shadow-lg border-gray-300 rounded-2xl'>
                        <div className='flex justify-center'>
                            <img src="/image/Donate.png" alt="" />
                        </div>
                        <p>One-Time Donation</p>
                        <p>Make a one-time contribution to support our initiatives</p>
                        <button className='bg-[#2c7bbd] text-white rounded-full p-2 px-6 inline-block '>Donate Now</button>
                    </div>

                    <div className='text-center bg-white hover:border-l hover:border-l-[#2c7bbd] border shadow-lg border-gray-300 rounded-2xl'>
                        <div className='flex justify-center'>
                            <img src="/image/Hand Holding Heart.png" alt="" />
                        </div>
                        <p>One-Time Donation</p>
                        <p>Make a one-time contribution to support our initiatives</p>
                        <button className='bg-[#2c7bbd] text-white rounded-full p-2 px-6 inline-block '>Donate Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage