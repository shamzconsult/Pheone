import React from 'react'

function ContactHero() {
  return (
    <div className='relative overflow-x-hidden'>
        <div className="absolute hidden lg:block right-0 top-0 h-full lg:h-[700] 2xl:h-[800] lg:max-w-[500px] w-full max-w-[300px] 2xl:max-w-[700px] -z-10">
        <img 
          src="/image/Rectangle 40.png" 
          className="h-[600px] lg:h-full w-full object-cover object-right"
          alt="Decorative blue shape"
        />
      </div>

      <div className='px-4 sm:px-6 lg:px-8 py-12 md:mt-10'>
        <div className='text-center'>
            <h1 className='text-xl mt-6 text-white bg-[#2c7bbd] mb-6 inline-block p-2 px-10 rounded-full'>Contact Us</h1>
            <p className='text-xl font-semibold text-black mb-8 max-w-4xl mx-auto leading-loose tracking-wide'>
                Reach Out For Individual Development Support
            </p>
            </div>
      </div>

      <div className='w-full'>
        <div className='relative w-full' style={{ paddingBottom: '45%' }}> 
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5423614961105!2d3.8871149756832133!3d7.40506141229025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d4421b11519%3A0x199c057da80c4819!2sMokola%20Rd%2C%20Ibadan%2C%20Oyo!5e0!3m2!1sen!2sng!4v1743981997269!5m2!1sen!2sng" 
            className='absolute top-0 left-0 w-full h-[700]'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </div>
  )
}

export default ContactHero