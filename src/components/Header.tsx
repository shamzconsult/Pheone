'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Donations", href: "/donations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];
  

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

  return (
    <header className="fixed w-full top-0 left-0 right-0 z-50 bg-transparent px-40">
        <div className="mx-auto max-w-screen-3xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                    <a className="block text-teal-600" href="#">
                    <span className="sr-only">Home</span>
                    <Image 
                        src='/image/Phebean_New_Logo.png' 
                        alt='logo' 
                        width={200} 
                        height={100}/>
                    </a>
                </div>

                <div className="hidden md:block">
                    <nav aria-label="Global">
                        <ul className="flex items-center gap-6 text-sm">
                            {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    className={`relative transition tracking-wide ${
                                        pathname === link.href
                                        ? "text-blue-600 pb-1"
                                        : "text-gray-500 hover:text-gray-500/75"
                                    }`}
                                    href={link.href}
                                    >
                                    {link.name}
                                    {pathname === link.href && (
                                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-6 bg-blue-600"></span>
                                    )}
                                </a>
                            </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                   

                        <div className="hidden sm:flex">
                            <a
                            className="rounded-full outline border border-white px-10 py-3.5 text-sm font-medium text-white"
                            href="#"
                            >
                            Get in Touch
                            </a>
                        </div>
                    </div>

                    <div className="block md:hidden">
                        <button
                            className="rounded-sm bg-blue-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 text-center right-0 bg-white shadow-md z-10">
                <ul className="flex flex-col gap-4 p-4">
                {navLinks.map((link) => (
                    <li key={link.name}>
                    <a
                        className={`block py-2 ${
                        pathname === link.href
                            ? "text-blue-600 border-l-4 border-blue-600 pl-3"
                            : "text-gray-500 hover:text-gray-500/75 pl-4"
                        }`}
                        href={link.href}
                    >
                        {link.name}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
            )}
    </header>
  )
}

export default Header