import React from 'react'

function HowWeWork() {
  return (
    <div className='py-20'>
        <div className='max-w-screen-2xl mx-auto'>
            <div className='text-center'>
                <h1 className='text-xl font-semibold text-white bg-[#2c7bbd] mb-6 inline-block py-2 px-8 rounded-full'>
                    HOW WE WORK
                </h1>
                <p className='text-xl font-semibold text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed'>
                    we are committed to fostering an inclusive and supportive environment for neurodivergent individuals. Our key objectives include:
                </p>
            </div>

            <div className='p-4 grid grid-cols-1 md:grid-cols-2'>
                <div className='px-4 shadow-lg py-4 hover:border-l hover:border-l-[#2c7bbd] hover:bg-gray-100'>
                    <p className='tracking-wide text-sm lg:text-lg lg:tracking-normal'> <span className='text-[#2c7bbd] font-semibold'>Screening and Assessment: </span> People with autism are carefully selected by experts in autism. Recommendation of the screening will be greatly considered in choosing the beneficiaries</p>
                </div>

                <div className='px-4 shadow-lg py-4 hover:border-l hover:border-l-[#BF232E] hover:bg-gray-100'>
                    <p className='tracking-wide text-sm lg:text-lg lg:tracking-normal'> <span className='text-[#BF232E] font-semibold'>Community Interaction & Engagement:</span> Routine community events and interactions are organized to provide a sense of inclusivity for our beneficiaries</p>
                </div>

                <div className='px-4 shadow-lg py-4 hover:border-l hover:border-l-[#6AA541] hover:bg-gray-100'>
                    <p className='tracking-wide text-sm lg:text-lg lg:tracking-normal'> <span className='text-[#6AA541] font-semibold'>Support Services:</span> Individuals and families with autism are regularly supported through speech & occupational therapy, behavioral interventions and counselling.</p>
                </div>

                <div className='px-4 shadow-lg py-4 hover:border-l hover:border-l-[#F9AE40] hover:bg-gray-100'>
                    <p className='tracking-wide text-sm lg:text-lg lg:tracking-normal'> <span className='text-[#F9AE40] font-semibold'>Vocational Training Services:</span>  Beneficiaries are assessed based on the skills of interest. They are, however, mentored to acquire those skills and make a life out of it.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowWeWork