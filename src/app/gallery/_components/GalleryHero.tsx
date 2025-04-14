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
  
  interface GalleryItem {
    _id: string;
    description: string;
    image: string;
  }
function GalleryHero() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(16);
    const [images, setImages] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
  
    // const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);

    useEffect(() => {
      console.log('Gallery Data:', {
        imagesCount: images.length,
        itemsPerPage,
        currentPage,
        totalPages,
        showingItems: currentImages.length
      });
    }, [images, itemsPerPage, currentPage]);
    
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

    useEffect(() => {
      const fetchImages = async () => {
          try {
              setLoading(true);
              // setError('');
              const res = await fetch('/api/gallery', {
                  headers: {
                      'Accept': 'application/json',
                  }
              });
              
              console.log('Response status:', res.status);
              
              if (!res.ok) {
                  throw new Error(`HTTP error! status: ${res.status}`);
              }
              
              const contentType = res.headers.get('content-type');
              if (!contentType || !contentType.includes('application/json')) {
                  throw new TypeError("Response not JSON");
              }
              
              const data = await res.json();
              console.log('API Data:', data);
              
              // Handle both direct array and { data: array } responses
              const receivedImages = Array.isArray(data) ? data : 
                                   (Array.isArray(data?.data) ? data.data : []);
              
              setImages(receivedImages);
          } catch (err) {
              console.error('Fetch error:', err);
              // setError('Failed to load gallery. Please try again.');
              setImages([]);
          } finally {
              setLoading(false);
          }
      };
      fetchImages();
  }, []);

    const totalPages = Math.ceil(images.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentImages = images.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
   

    return (
      <div className='relative overflow-x-hidden'>
        {/* Decorative Shape */}
        <div className="absolute hidden lg:block right-0 top-0 h-full lg:h-[700px] 2xl:h-[900px] lg:max-w-[500px] w-full max-w-[300px] 2xl:max-w-[800px] -z-10">
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
  
          {loading ? (
            <p className="text-center">Loading images...</p>
          ) : currentImages.length === 0 ? (
            <p className="text-center text-gray-500">No images to display.</p>
          ) : (
            <div className='gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
              {currentImages.map((image, index) => (
                <div key={image._id} className="w-full p-2">
                 <img 
                    src={image.image} 
                    alt={image.description || `Gallery image ${startIndex + index + 1}`}
                    className="w-full h-[500] object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                  />

                </div>
              ))}
            </div>
          )}
  
          {/* Pagination */}
          {images.length > itemsPerPage && (
            <div className="mt-8">
              <Pagination className="border-2 border-red-500 p-4">
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
          )}
        </div>
      </div>
    );
  }
  
  export default GalleryHero;