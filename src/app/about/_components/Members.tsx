import React from 'react'

function Members() {
  return (
    <div >
       
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-center mt-20'>
                <h1 className='text-xl mt-6 text-white bg-[#2c7bbd] mb-6 inline-block p-2 px-10 rounded-full'>GET TO KNOW US</h1>
                <p className='text-xl font-semibold text-black mb-8 max-w-4xl mx-auto'>
                    Through these focus areas, we ensure meaningful impact, fostering growth, independence, and a more inclusive society for all.
                </p>

                {/* Container for Member's section */}
                <div className='p-6'>
                    {/* Blue background */}
                    <div className="absolute right-0 top- h-full w-[30%] max-w-[500px] -z-10">
                        <img 
                        src="/image/Group 3.png" 
                        className="h-full w-full object-cover object-left"
                        alt="Decorative blue background"
                        />
                    </div>
                    {/* Individual Member, Member 1 */}
                    <div className='md:flex md:gap-10 lg:gap-20 items-center'>
                        <div className='md:w-5/12 shadow-2xl mb-2 rounded-2xl flex flex-col items-center'>
                            <div className='flex justify-center'>
                                <img 
                                    src="/image/Amb._Yinka_Dada_Founder-removebg-preview.png" 
                                    alt="Olayinka Elizabeth Dada" 
                                    className='w-[400px] h-[400px] object-contain' 
                                />
                            </div>
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

                     {/* Side background */}
                     {/* <div className="absolute left-0 top- h-full w-[30%] max-w-[500px] -z-10">
                        <img 
                        src="/image/Group 1000001761.png"
                        className="h-full w-full object-cover object-right"
                        alt="Decorative blue background"
                        />
                    </div> */}

                    {/* Member 2 */}
                    <div className='md:flex md:gap-10 lg:gap-20 items-center'>
                        <div className='md:w-7/12 text-left max-w-3xl mt-10 md:mt-0'>
                            <p className='tracking-wider leading-loose text-left'>
                                <span className='text-[#2c7bbd]'>Tiffany</span>   is passionate about germane issues pertaining to young adults and takes every given 
                                opportunity to mentor around career path, social enrichment, and behavioral skills. She also gets airtime to promote the build-up of her 
                                privately owned communications boutique; Flawless ‘N’ Ridge. She holds a Doctorate degree in International Business (DBA) from the International School of business, 
                                a Master of Business Administration (MBA) from the University of Massachusetts and a bachelor’s degree in economics. As an adjunct Professor, Tiffany is passionate 
                                about teaching and building tomorrow’s leaders through professional development, skills development with emphasis on young immigrant’s integration into their new environment. 
                            </p>
                        </div>
                        <div className='md:w-5/12 shadow-2xl mb-2 rounded-2xl flex flex-col items-center'>
                            <div className='flex justify-center'>
                                <img 
                                    src="/image/Dr_Tiffany_Oloke__Phebean_NeuroDiversity_Support_President-removebg-preview.png" 
                                    alt="Olayinka Elizabeth Dada" 
                                    className='w-[400px] h-[400px] object-contain' 
                                />
                            </div>
                            <p className='text-center text-lg font-semibold'>Dr. Tiffany Oloke</p>
                            <p className='text-center text-md py-2 font-semibold text-[#2c7bbd]'>Phebean NeuroDiversity Support President</p>
                        </div>
                        
                    </div>

                    {/* Member 3 */}
                    <div className='md:flex md:gap-10 lg:gap-20 items-center'>
                        <div className='md:w-5/12 shadow-2xl mb-2 rounded-2xl flex flex-col items-center'>
                            <div className='flex justify-center'>
                                <img 
                                    src="/image/Mr_Ade_Kelani__Member__Phebean_Board_of_Trustees-removebg-preview.png" 
                                    alt="Olayinka Elizabeth Dada" 
                                    className='w-[400px] h-[400px] object-contain' 
                                />
                            </div>
                            <p className='text-center text-lg font-semibold'>Ade Kelani</p>
                            <p className='text-center text-md py-2 font-semibold text-[#2c7bbd]'>Board Member, Project Coordinator.</p>
                        </div>
                        <div className='md:w-7/12 text-left max-w-3xl mt-10 md:mt-0'>
                            <p className='tracking-wider leading-loose text-left'>
                                <span className='text-[#2c7bbd]'>Ade Kelani</span> is a seasoned management, finance, and IT consulting expert with over 30 years of global experience, 
                                including leadership roles at KPMG, Accenture, BearingPoint, and Deloitte. He has played a key role in strategic nation-building initiatives, infrastructure 
                                development, and capacity-building in Africa. As the founder of Trade Afrique LLC, he is driving Africa’s economic renaissance by connecting the continent to global markets. 
                                A former Group CFO at Cornerstone Insurance Plc, he has led transformational change in Nigeria’s financial sector. As a board member and thought leader, he continues to shape 
                                industry and economic growth worldwide.
                            </p>
                        </div>
                        
                    </div>

                    {/* Member 4 */}
                    <div className='md:flex md:gap-10 lg:gap-20 items-center'>
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
                        <div className='md:w-5/12 shadow-2xl mb-2 rounded-2xl flex flex-col items-center'>
                            <div className='flex justify-center'>
                                <img 
                                    src="/image/Mr_Opeyemi_Ogunjimi_Director__Phebean_Board_of_Trustees-removebg-preview.png" 
                                    alt="Olayinka Elizabeth Dada" 
                                    className='w-[400px] h-[400px] object-contain' 
                                />
                            </div>
                            <p className='text-center text-lg font-semibold'>Opeyemi Oguntomi, MBA</p>
                            <p className='text-center text-md py-2 font-semibold text-[#2c7bbd]'>Project Coordinator.</p>
                        </div>
                       
                    </div>

                    {/* Member 5 */}
                    <div className='md:flex md:gap-10 lg:gap-20 items-center'>
                        <div className='md:w-5/12 shadow-2xl mb-2 rounded-2xl flex flex-col items-center'>
                            <div className='flex justify-center'>
                                <img 
                                    src="/image/avatar.jpg" 
                                    alt="Olayinka Elizabeth Dada" 
                                    className='w-[400px] h-[400px] object-contain' 
                                />
                            </div>
                            <p className='text-center text-lg font-semibold'>Salena Iyare, M.A</p>
                            <p className='text-center text-md py-2 font-semibold text-[#2c7bbd]'>Board Member.</p>
                        </div>
                        <div className='md:w-7/12 text-left max-w-3xl mt-10 md:mt-0'>
                            <p className='tracking-wider leading-loose text-left'>
                                <span className='text-[#2c7bbd]'>Salena Iyare</span> is a distinguished Behavioral Analyst based in Tinley Park, IL, 
                                recognized for her expertise and dedication to improving client well-being. With a deep passion for behavioral analysis, 
                                she has established herself as a trusted professional committed to delivering personalized and impactful care. Salena is 
                                also a leader in education, emphasizing the core values of communication, safety, and trust in her approach. Through her work, 
                                she fosters supportive environments that empower individuals to achieve meaningful progress in their personal and educational journeys.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Members