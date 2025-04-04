import React from 'react'

function Members() {
  return (
    <div >
        <div className='max-w-screen-2xl mx-auto'>
            <div className='text-center mt-20'>
                <h1 className='text-xl mt-6 text-white bg-[#2c7bbd] mb-6 inline-block p-2 px-10 rounded-full'>GET TO KNOW US</h1>
                <p className='text-xl font-semibold text-black mb-8 max-w-4xl mx-auto'>
                    Through these focus areas, we ensure meaningful impact, fostering growth, independence, and a more inclusive society for all.
                </p>

                {/* Container for Member's section */}
                <div className='p-6'>
                    {/* Individual Member, Member 1 */}
                    <div className='md:flex md:gap-10 lg:gap-20 items-center'>
                        <div className='md:w-5/12 shadow-2xl mb-2 rounded-2xl'>
                            <img src="/image/Haynes2-ht-ml-200731_1596206628688_hpMain_16x9_992.png" alt="" className='w-full h-[400]' />
                            <p className='text-center text-lg font-semibold'>OLAYINKA ELIZABETH DADA</p>
                            <p className='text-center text-md py-2 font-semibold text-[#2c7bbd]'>Founder/Chief Executive Officer.</p>
                        </div>
                        <div className='md:w-7/12 text-left max-w-3xl mt-10 md:mt-0'>
                            <p className='tracking-wider leading-loose text-left'>
                                <span className='text-[#2c7bbd]'>Olayinka</span> is a passionate advocate for early childhood education and community empowerment. She serves on the 
                                board of Head Start and is an active member of Junior Chamber International (Aso Chamber of Commerce, Abuja). 
                                With leadership roles in education-focused initiatives, she has championed policies like the &quot;Universal Pre-K under President Obama&quot; bill. 
                                Committed to supporting families and vulnerable individuals, she studies Applied Behavior Analysis to break barriers to quality education and foster inclusion.
                            </p>
                        </div>
                    </div>

                    {/* Member 2 */}
                    <div className='md:flex md:gap-10 lg:gap-20 items-center'>
                        <div className='md:w-7/12 text-left max-w-3xl mt-10 md:mt-0'>
                            <p className='tracking-wider leading-loose text-left'>
                                <span className='text-[#2c7bbd]'>Ade Kelani</span> is a seasoned management, finance, and IT consulting expert with over 30 years of global experience, 
                                including leadership roles at KPMG, Accenture, BearingPoint, and Deloitte. He has played a key role in strategic nation-building initiatives, infrastructure 
                                development, and capacity-building in Africa. As the founder of Trade Afrique LLC, he is driving Africa’s economic renaissance by connecting the continent to global markets. 
                                A former Group CFO at Cornerstone Insurance Plc, he has led transformational change in Nigeria’s financial sector. As a board member and thought leader, he continues to shape 
                                industry and economic growth worldwide.
                            </p>
                        </div>
                        <div className='md:w-5/12 shadow-2xl mb-2 rounded-2xl'>
                            <img src="/image/mature-african-american-man-walking-260nw-1911547450.png" alt="" className='w-full h-[400]' />
                            <p className='text-center text-lg font-semibold'>Ade Kelani</p>
                            <p className='text-center text-md py-2 font-semibold text-[#2c7bbd]'>Board MemberProject Coordinator.</p>
                        </div>
                    </div>

                    {/* Member 3 */}
                    <div className='md:flex md:gap-10 lg:gap-20 items-center'>
                        <div className='md:w-5/12 shadow-2xl mb-2 rounded-2xl'>
                            <img src="/image/african-american-businessman-smiling-260nw-505976194.png" alt="" className='w-full h-[400]' />
                            <p className='text-center text-lg font-semibold'>Opeyemi Oguntomi, MBA</p>
                            <p className='text-center text-md py-2 font-semibold text-[#2c7bbd]'>Project Coordinator.</p>
                        </div>
                        <div className='md:w-7/12 text-left max-w-3xl mt-10 md:mt-0'>
                            <p className='tracking-wider leading-loose text-left'>
                                <span className='text-[#2c7bbd]'>Opeyemi</span>  is a dedicated Youth Development and Program Specialist with over eight years 
                                of experience in non-profit leadership, program implementation, and team building. Passionate about sustainable development, he has 
                                led key initiatives addressing youth employment, gender equality, and community empowerment. A member of Rotary International (D9110 NG), 
                                he holds an MBA in Business and Leadership and is an alumnus of the Entrepreneurship Development Institute, India. Currently advancing his 
                                studies in social service and community development in Canada, Opeyemi remains committed to fostering economic independence and social impact 
                                through knowledge-driven solutions.
                            </p>
                        </div>
                    </div>

                    {/* Member 4 */}
                    <div className='md:flex md:gap-10 lg:gap-20 items-center'>
                        <div className='md:w-7/12 text-left max-w-3xl mt-10 md:mt-0'>
                            <p className='tracking-wider leading-loose text-left'>
                                <span className='text-[#2c7bbd]'>Salena Lyare</span> is a distinguished Behavioral Analyst based in Tinley Park, IL, 
                                recognized for her expertise and dedication to improving client well-being. With a deep passion for behavioral analysis, 
                                she has established herself as a trusted professional committed to delivering personalized and impactful care. Salena is 
                                also a leader in education, emphasizing the core values of communication, safety, and trust in her approach. Through her work, 
                                she fosters supportive environments that empower individuals to achieve meaningful progress in their personal and educational journeys.
                            </p>
                        </div>
                        <div className='md:w-5/12 shadow-2xl mb-2 rounded-2xl'>
                            <img src="/image/360_F_29594789_gruUqSPmfKUchKUkWumMYE1bXdfxN6Kt.png" alt="" className='w-full h-[400]' />
                            <p className='text-center text-lg font-semibold'>Salena Lyare, M.A</p>
                            <p className='text-center text-md py-2 font-semibold text-[#2c7bbd]'>Board Member.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Members