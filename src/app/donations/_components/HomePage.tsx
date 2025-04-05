import React from 'react'

function HomePage() {
  return (
    <div className='relative overflow-x-hidden'>
      <div className="absolute left-0 top-64 -z-10">
        <img 
          src="/image/Polygon 1.png" 
          className="h-full w-full object-cover object-left"
          alt="Decorative blue shape"
        />
      </div>
      <div className="absolute hidden lg:block right-0 top-0 h-full lg:h-[600] 2xl:h-[700] lg:max-w-[500px] w-full max-w-[300px] 2xl:max-w-[900px] -z-10">
        <img 
          src="/image/Rectangle 40.png" 
          className="h-[600px] lg:h-full w-full object-cover object-right"
          alt="Decorative blue shape"
        />
      </div>

      <div className='max-w-screen-xl mx-auto mt-40 mb-40'>
        <div>
          <div className='text-center'>
            <h1 className='text-xl font-bold mt-6 text-white bg-[#2c7bbd] mb-6 inline-block p-2 px-10 rounded-full'>Donation</h1>
            <h2 className='text-3xl mb-4 font-semibold tracking-wide'>Support Our Mission</h2>
            <p className='text-md text-black mb-8 max-w-4xl mx-auto leading-loose'>
              Your donation helps us provide resources, education, and advocacy for neurodivergent individuals. Every contribution makes a difference!
            </p>
          </div>

          <div className='flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-10 p-6'>
            {/* Card 1 */}
            <div className='flex-1 min-w-0 py-10 max-w-md text-center bg-white hover:border-l mb-6 md:mb-0 hover:border-l-[#2c7bbd] border shadow-lg border-gray-300 rounded-2xl p-6 hover:bg-gray-100 flex flex-col h-full'>
              <div className='flex justify-center mb-6 flex-shrink-0'>
                <img src="/image/Get Cash.png" alt="" className='h-16 w-auto' />
              </div>
              <p className='font-semibold mb-4'>One-Time Donation</p>
              <p className='text-gray-500 mb-4 px-4 flex-grow'>Make a one-time contribution to support our initiatives</p>
              <button className='bg-[#2c7bbd] text-white rounded-full py-2 px-6 mt-auto w-fit mx-auto'>
                Donate Now
                </button>
            </div>

            {/* Card 2 */}
            <div className='flex-1 min-w-0 py-10 max-w-md text-center bg-white hover:border-l mb-6 md:mb-0 hover:border-l-[#6AA541] border shadow-lg border-gray-300 rounded-2xl p-6 hover:bg-gray-100 flex flex-col h-full'>
              <div className='flex justify-center mb-6 flex-shrink-0'>
                <img src="/image/Donate.png" alt="" className='h-16 w-auto' />
              </div>
              <p className='font-semibold mb-4'>Monthly Giving</p>
              <p className='text-gray-500 mb-4 px-4 flex-grow'>Join our community of supporters with a recurring donation.</p>
                <button className='bg-[#6AA541] text-white rounded-full py-2 px-6 mt-auto w-fit mx-auto'>
                Give Monthly
                </button>
            </div>

            {/* Card 3 */}
            <div className='flex-1 min-w-0 py-10 max-w-md text-center bg-white hover:border-l mb-6 md:mb-0 hover:border-l-[#F9AE40] border shadow-lg border-gray-300 rounded-2xl p-6 hover:bg-gray-100 flex flex-col h-full'>
              <div className='flex justify-center mb-6 flex-shrink-0'>
                <img src="/image/Hand Holding Heart.png" alt="" className='h-16 w-auto' />
              </div>
              <p className='font-semibold mb-4'>Corporate Sponsorship</p>
              <p className='text-gray-500 mb-4 px-4 flex-grow'>Make a one-time contribution to support our initiatives</p>
                <button className='bg-[#F9AE40] text-white rounded-full py-2 px-6 mt-auto w-fit mx-auto'>
                Partner Now
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage