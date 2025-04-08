'use client'

import React, { useEffect, useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  

const images = [
  "/image/Group 2 (1).png",
  "/image/Group 2 (2).png",
  "/image/Group 2 (3).png",
  "/image/Group 2 (4).png",
  "/image/Group 3 (1).png",
  "/image/Group 3 (2).png",
  "/image/Group 3 (3).png",
  "/image/Group 3 (4).png",
  "/image/Group 4 (1).png",
  "/image/Group 4 (2).png",
  "/image/Group 4 (3).png",
  "/image/Group 4 (4).png",
  "/image/Group 4 (5).png",
  "/image/Group 5 (1).png",
  "/image/Group 5 (2).png",
  "/image/Group 5 (3).png",
  "/image/Group 5.png"
];

function GalleryHero() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(16);
  
    // const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);

    
    useEffect(() => {
      const getItemsPerPage = () => {
        if (window.innerWidth < 768) return 4;
        if (window.innerWidth < 1024) return 9;
        return 16;
      };
  
      // Set initial value
      setItemsPerPage(getItemsPerPage());
  
      const handleResize = () => {
        setItemsPerPage(getItemsPerPage());
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    // React.useEffect(() => {
    //     const handleResize = () => {
    //       setItemsPerPage(getItemsPerPage());
    //     };
        
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    const totalPages = Math.ceil(images.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentImages = images.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <div className='relative overflow-x-hidden'>
      {/* Right Blue Shape */}
      <div className="absolute hidden lg:block right-0 top-0 h-full lg:h-[700] 2xl:h-[900] lg:max-w-[500px] w-full max-w-[300px] 2xl:max-w-[800px] -z-10">
        <img 
          src="/image/Rectangle 40.png" 
          className="h-[600px] lg:h-full w-full object-cover object-right"
          alt="Decorative blue shape"
        />
      </div>


      <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:mt-10'>
        <div className='text-center'>
          <h1 className='text-xl mt-6 text-white bg-[#2c7bbd] mb-6 inline-block p-2 px-10 rounded-full'>OUR GALLERY</h1>
          <p className='text-xl font-semibold text-black mb-8 max-w-4xl mx-auto leading-loose tracking-wide'>
            Explore moments of impact, joy, and transformation captured in our work. Every picture tells a story of resilience, inclusion, and empowerment.
          </p>
        </div>
        <div className=' gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
          {currentImages.map((image, index) => (
            <div key={startIndex + index} className="w-full p-2">
              <img 
                src={image} 
                alt={`Gallery image ${startIndex + index + 1}`}
                className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
         {/* Pagination */}
         <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => handlePageChange(page)}
                    isActive={page === currentPage}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default GalleryHero;