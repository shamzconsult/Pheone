import Link from 'next/link';
import React from 'react';

function GrowImage() {
  return (
    <div className='w-full'>
      <div className='flex'>
        <div className='md:w-1/2 relative hidden md:block'>
          <img src="/image/donate-sign-charity-campaign.jpg" alt="" className='h-[300px] w-full object-cover' />
          <div className='absolute inset-0 bg-blue-600 opacity-30'></div>
        </div>
        
        <div className='md:w-1/2 w-full relative'>
          <div className='relative h-[300px] w-full'>
            <img 
              src="/image/donatSection-image.jpeg" 
              alt="" 
              className='h-full w-full object-cover'
            />
            {/* Blue overlay */}
            <div className='absolute inset-0 bg-blue-600 opacity-30'></div>
          </div>
          
          {/* Newsletter content positioned over the image */}
          <div className='absolute inset-0 flex flex-col items-center justify-center p-4 text-white'>
            <h3 className='text-2xl  lg:text-5xl font-semibold mb-6'>We Will Help You To Grow</h3>
            <Link href='/contact' className='bg-[#2c7bbd] text-white px-6 py-2 rounded-full font-bold hover:bg-[#6a97bb] transition'>
              Send us a Message
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrowImage;