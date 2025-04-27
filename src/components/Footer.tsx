import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FiSend } from "react-icons/fi";
import { FiPhone, FiMail } from "react-icons/fi";



function Footer() {
  return (
    <footer className="bg-[#2c7bbd]">
        <div className="mx-auto max-w-screen-2xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div>
                    <div className="md:flex md:items-center md:gap-12 h-[30px] ">
                        <a className="block text-teal-600 " href="#">
                            <Image 
                                src='/image/Logo-blue.png' 
                                alt='logo' 
                                width={200} 
                                height={100}
                                className=''
                            />
                        </a>
                    </div>

                    <p className="mt-16 md:mt-8 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left text-sm">
                        Through community engagement workshops on neurodiversity and tailored training for parents, guardians, 
                        educators, healthcare workers, and social service providers, we equip individuals and organizations to create 
                        inclusive spaces where everyone can thrive.
                    </p>

                    <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                        <li>
                            <a
                            href="https://instagram.com/phebeanneuro"
                            rel="noreferrer"
                            target="_blank"
                            className="text-white transition hover:text-gray-300"
                            >
                            <span className="sr-only">Instagram</span>
                            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                fillRule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clipRule="evenodd"
                                />
                            </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://web.facebook.com/me/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-white transition hover:text-gray-300"
                            >
                                <span className="sr-only">Facebook</span>
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://x.com/phebeaneuro"
                                rel="noreferrer"
                                target="_blank"
                                className="text-white transition hover:text-gray-300"
                            >
                                <span className="sr-only">X</span>
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/company/106966137/admin/dashboard/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-white transition hover:text-gray-300"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.youtube.com/channel/UC-KVkFrFfatizb7CVKxg18A"
                                rel="noreferrer"
                                target="_blank"
                                className="text-white transition hover:text-gray-300"
                            >
                                <span className="sr-only">YouTube</span>
                                <svg 
                                className="size-6" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            </a>
                        </li>
                        
                    </ul>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-white">Company</p>

                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                            <Link className="text-white transition hover:text-gray-300" href="/">
                                Home
                            </Link>
                            </li>

                            <li>
                            <a className="text-white transition hover:text-gray-300" href="/about">
                                About us
                            </a>
                            </li>

                            <li>
                            <a className="text-white transition hover:text-gray-300" href="/services">
                                Services
                            </a>
                            </li>

                            <li>
                                <a className="text-white transition hover:text-gray-300" href="/contact"> Contact us </a>
                            </li>
                            <li>
                                <a className="text-white transition hover:text-gray-300" href="/donations"> Donations </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-white">Support</p>

                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                            <a className="text-white transition hover:text-gray-300" href="/contact">
                                Help Center
                            </a>
                            </li>

                            <li>
                                <a 
                                    className="text-white transition hover:text-gray-300" 
                                    href="/pdf/Phebean NeuroDiversity  Byelaws.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Terms of Services
                                </a>
                            </li>

                            <li>
                                <a 
                                    className="text-white transition hover:text-gray-300" 
                                    href="/pdf/Phebean NeuroDiversity  Byelaws.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Legal
                                </a>
                            </li>

                            <li>
                                <a 
                                    className="text-white transition hover:text-gray-300" 
                                    href="/pdf/Phebean NeuroDiversity  Byelaws.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Privacy policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left space-y-6">
                        <div className="flex flex-col items-center md:items-start">
                            <p className="text-lg font-medium text-white">Stay up to date</p>
                            <div className="relative w-62 md:w-62 mt-4 md:mt-8">
                                <input 
                                    type="email"
                                    className="w-full pl-4 pr-10 py-2 rounded-md text-gray-300 bg-white/10 backdrop-blur-lg text-sm" 
                                    placeholder="Your email address"
                                />
                                <FiSend className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
                            </div>
                        </div>

                        <div className="text-sm text-white space-y-2 mx-auto md:mx-0 w-full md:w-96">
                            <p className="font-medium text-center md:text-left">Contact Us</p>
                            <div className='flex gap-2 items-center justify-center md:justify-start mt-2 md:mt-4'>
                                <FiPhone className='bg-white/10 backdrop-blur-lg text-xl md:text-2xl p-1 rounded-full'/>
                                <a href="tel:+632366322" className="hover:underline">
                                    Phone: +1 631-406-3671
                                </a>
                            </div>
                            <div className='flex gap-2 items-center justify-center md:justify-start'>
                                <FiMail className='bg-white/10 backdrop-blur-lg text-xl md:text-2xl p-1 rounded-full'/>
                                <a href="mailto:liz@phebeanneurodiversitysupport.org" className="hover:underline">
                                    liz@phebeanneurodiversitysupport.org
                                </a>
                            </div>
                        </div>
                    </div>              
                </div>
            </div>

            <div className="mt-12 border-t border-gray-400 pt-6">
                <div className="text-center ">
                    <p className="text-sm text-white"> Copyright &copy; 2025 Phebean Neurodiversity support. All rights reserved
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer