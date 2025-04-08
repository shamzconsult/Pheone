import Link from 'next/link';
import React from 'react';

function DonateSection() {
  return (
    <div className="relative  px-4 sm:px-6 lg:px-8 overflow-hidden py-20 mt-20 mb-20">
      {/* Background image*/}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/image/donatSection-image.jpeg" 
          className="h-full w-full object-cover"
          alt="Donation background"
        />
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-white/20"></div> */}
      </div>

        <div className='max-w-screen-2xl mx-auto '>
            <div className="relative z-10 text-center max-w-7xl mx-auto p-6 inset-0 bg-white/80 rounded-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#F9AE40] mb-6">DONATE HERE!</h2>
                
                <p className="text-sm lg:text-lg font-bold text-[#2c7bbd] mb-6 leading-relaxed">
                Your Financial Contributions to our Programs and services are pivotal to providing support and assistance
                to people with neurodiversity.
                </p>
                
                <p className="text-sm lg:text-lg font-bold text-[#2c7bbd] mb-10 leading-relaxed">
                Join our amazing donors and use your finances and other resources to make the world a better place.
                </p>

                <Link href="/donations" className="bg-white  text-[#F9AE40] border border-[#F9AE40] font-bold py-4 px-10 rounded-full text-lg transition-colors duration-300">
                MAKE A DONATION
                </Link>
            </div>
        </div>
    </div>
  );
}

export default DonateSection;