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
                    {/* Individual Member */}
                    <div>
                        <div className='w-5/12 shadow-2xl mb-2 rounded-2xl'>
                            <img src="/image/Haynes2-ht-ml-200731_1596206628688_hpMain_16x9_992.png" alt="" className='w-full' />
                            <p className='text-center text-lg font-semibold'>OLAYINKA ELIZABETH DADA</p>
                            <p className='text-center text-md py-2 font-semibold text-[#2c7bbd]'>Founder/Chief Executive Officer.</p>
                        </div>
                        <div className='w-7/12'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Members