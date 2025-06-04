import React from 'react'


function ContactHero() {
  return (
    <div className='relative overflow-x-hidden mb-20'>
        <div className="absolute hidden lg:block right-0 top-0 h-full lg:h-[700] 2xl:h-[800] lg:max-w-[500px] w-full max-w-[300px] 2xl:max-w-[700px] -z-10">
        <img 
          src="/image/Rectangle 40.png" 
          className="h-[600px] lg:h-full w-full object-cover object-right"
          alt="Decorative blue shape"
        />
      </div>

      <div className='px-4 sm:px-6 lg:px-8 py-10 mt-14 md:mt-10'>
        <div className='text-center'>
            <h1 className='text-xl mt-6 text-white bg-[#2c7bbd] mb-6 inline-block p-2 px-10 rounded-full'>Contact Us</h1>
            <p className='text-xl font-semibold text-black mb-8 max-w-4xl mx-auto leading-loose tracking-wide'>
                Reach Out For Individual Development Support
            </p>
          </div>
      </div>

      <div className='w-full h-[600px] max-w-screen-2xl mx-auto'>
        <div className='relative w-full h-full' > 
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.066813092929!2d-87.71478492355399!3d41.546150586131695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e179a2adc4511%3A0x69ff0e22c6b23546!2sHarding%20Ave%2C%20Flossmoor%2C%20IL%2060422%2C%20USA!5e0!3m2!1sen!2sng!4v1744376079033!5m2!1sen!2sng" 
            className='absolute top-0 left-0 w-full h-[600]'
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