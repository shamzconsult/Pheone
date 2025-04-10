import Link from 'next/link'
import React from 'react'

function Divider() {
  return (
    <Link href='/contact' className='mt-20 md:mt-0 xl:-mt-28 2xl:-mt-10'>
        <span className="flex items-center">
        <span className="h-px flex-1 bg-[#2c7bbd]"></span>

        <span className="shrink-0 px-10 p-2 rounded-full font-semibold text-xl text-white bg-[#2c7bbd]">GET IN TOUCH</span>

        <span className="h-px flex-1 bg-[#2c7bbd]"></span>
        </span>
    </Link >
  )
}

export default Divider