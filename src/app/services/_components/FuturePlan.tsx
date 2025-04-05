import React from 'react'

function FuturePlan() {
  const plans = [
    {
      text: "Expand workshops, training sessions, and awareness campaigns to reach a wider audience while supporting autism research.",
      bulletColor: "text-[#2c7bbd] group-hover:text-white" 
    },
    {
      text: "Develop and distribute new educational resources to over 50 schools, addressing evolving community needs.",
      bulletColor: "text-[#6AA541] group-hover:text-white" 
    },
    {
      text: "Enhance social inclusion by creating more support groups and peer-to-peer networks.",
      bulletColor: "text-[#BF232E] group-hover:text-white" 
    },
    {
      text: "Strengthen partnerships with schools, policymakers, and stakeholders to advocate for inclusive education and policies.",
      bulletColor: "text-[#BF232E] group-hover:text-white" 
    },
    {
      text: "Organize larger community events and social gatherings to foster belonging and acceptance.",
      bulletColor: "text-[#F9AE40] group-hover:text-white" 
    },
    {
      text: "Establish Autism clubs in over 150 schools within targeted communities.",
      bulletColor: "text-[#2c7bbd] group-hover:text-white" 
    }
  ];

  return (
    <div className='mt-20 mb-20 px-4 sm:px-6 lg:px-8'>
        {/* Blue background */}
        <div className="absolute right-0 top- h-full w-[30%] max-w-[500px] -z-10">
            <img 
            src="/image/Group 3.png" 
            className="h-full w-full object-cover object-left"
            alt="Decorative blue background"
            />
        </div>
      <div className='max-w-screen-2xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-xl font-semibold text-white bg-[#2c7bbd] mb-6 inline-block py-2 px-8 rounded-full'>
            OUR FUTURE PLANS
          </h1>
          <p className='text-xl font-semibold text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed'>
          we are committed to fostering an inclusive and supportive environment for neurodivergent individuals. Our key objectives include:
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 font-semibold'>
          {/* Column 1 */}
          <div className='space-y-8'>
            {plans.slice(0, 3).map((plan, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-[#2c7bbd]"
              >
                <div className='flex gap-4'>
                  <div className='flex-shrink-0'>
                    <span className={`text-xl rounded-full flex items-center justify-center ${plan.bulletColor}`}>
                    ● 
                    </span>
                  </div>
                  <p className='text-gray-600 lg:text-lg leading-relaxed group-hover:text-white'>{plan.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className='space-y-8'>
            {plans.slice(3).map((plan, index) => (
              <div 
                key={index + 3} 
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-[#2c7bbd]"
              >
                <div className='flex gap-4'>
                  <div className='flex-shrink-0'>
                    <span className={`text-xl rounded-full flex items-center justify-center ${plan.bulletColor}`}>
                    ● 
                    </span>
                  </div>
                  <p className='text-gray-600 lg:text-lg leading-relaxed group-hover:text-white'>{plan.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FuturePlan