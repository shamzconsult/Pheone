'use client'

import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react'

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Donations", href: "/donations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Contact Us", href: "/contact" },
];

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full top-0 left-0 right-0 z-50 transition-colors duration-300 h-[80px] ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-4 h-full">
            <div className="flex h-full items-center justify-between">
                <div className="md:flex md:items-center md:gap-12 h-full flex items-center">
                    <Link className="block h-full flex items-center" href="/">
                        <span className="sr-only">Home</span>
                        <Image 
                            src='/image/Logo.png' 
                            alt='logo' 
                            width={200} 
                            height={100}
                            className='w-[200px] h-[100px] object-contain rounded-full'
                            priority
                        />
                    </Link>
                </div>

                    <div className="hidden lg:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm ">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            className={`relative transition tracking-wide  ${
                                                pathname === link.href
                                                ? "text-blue-600 pb-1"
                                                : `${isScrolled ? 'text-gray-500' : 'text-gray-500'} hover:text-blue-500/75`
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
                        <div className="hidden lg:block">
                            <a
                                className={`rounded-full outline px-8 py-3.5 text-sm font-medium transition-colors ${
                                    isScrolled 
                                    ? 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                                    : 'border border-white text-white bg-[#2c7bbd] hover:bg-white hover:text-blue-500'
                                }`}
                                href="/contact"
                            >
                                Get in Touch
                            </a>
                        </div>

                        <div className="block lg:hidden">
                            <button
                                className={`rounded-sm p-2 transition-colors ${
                                    isScrolled 
                                    ? 'bg-blue-100 text-gray-600 hover:text-gray-800'
                                    : 'bg-blue-100 text-gray-600 hover:text-gray-400'
                                }`}
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
                <div className={`lg:hidden absolute top-16 left-0 right-0 shadow-md z-10 ${
                    isScrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-sm'
                }`}>
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
                                    onClick={() => setIsMobileMenuOpen(false)}
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

export default Header;