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

interface GalleryProps {
    images: GalleryItem[];
}

function GalleryHero({ images: initialImages }: GalleryProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(16);
    const [images, ] = useState<GalleryItem[]>(initialImages);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log('Gallery State:', {
            totalImages: images.length,
            itemsPerPage,
            currentPage,
            totalPages: Math.ceil(images.length / itemsPerPage),
            showingItems: images.slice(
                (currentPage - 1) * itemsPerPage, 
                currentPage * itemsPerPage
            ).length
        });
    }, [images, itemsPerPage, currentPage]);

    useEffect(() => {
        const calculateItemsPerPage = () => {
            if (window.innerWidth < 768) return 4;    // Mobile
            if (window.innerWidth < 1024) return 9;   // Tablet
            return 16;                                // Desktop
        };

        const handleResize = () => {
            setItemsPerPage(calculateItemsPerPage());
        };

        // Set initial value and add resize listener
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Fetch images from API
    // useEffect(() => {
    //     const fetchGalleryImages = async () => {
    //         try {
    //             setLoading(true);
    //             setError(null);
                
    //             const response = await fetch('/api/gallery');
                
    //             if (!response.ok) {
    //                 throw new Error(`Server returned ${response.status} status`);
    //             }
                
    //             const result = await response.json();
    //             console.log('API Response Data:', result);
                
    //             const receivedImages = Array.isArray(result) 
    //                 ? result 
    //                 : Array.isArray(result?.data) 
    //                     ? result.data 
    //                     : [];
                
    //             setImages(receivedImages);
    //         } catch (err) {
    //             console.error('Fetch error:', err);
    //             setError('Failed to load gallery. Please try again.');
    //             setImages([]);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchGalleryImages();
    // }, []);

    // Pagination calculations
    const totalPages = Math.max(1, Math.ceil(images.length / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentImages = images.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (newPage: number) => {
        const validatedPage = Math.max(1, Math.min(newPage, totalPages));
        setCurrentPage(validatedPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='relative overflow-x-hidden'>
            {/* Decorative background element */}
            <div className="absolute hidden lg:block right-0 top-0 h-full lg:h-[700px] 2xl:h-[900px] lg:max-w-[500px] w-full max-w-[300px] 2xl:max-w-[800px] -z-10">
                <img 
                    src="/image/Rectangle 40.png" 
                    className="h-[600px] lg:h-full w-full object-cover object-right"
                    alt="Decorative background"
                />
            </div>

            <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:mt-10'>
                {/* Header section */}
                <div className='text-center'>
                    <h1 className='text-xl mt-6 text-white bg-[#2c7bbd] mb-6 inline-block p-2 px-10 rounded-full'>
                        OUR GALLERY
                    </h1>
                    <p className='text-xl font-semibold text-black mb-8 max-w-4xl mx-auto leading-loose tracking-wide'>
                        Explore moments of impact, joy, and transformation captured in our work.
                    </p>
                </div>

                {/* Gallery content */}
                {images.length === 0 ? (
                    <div className="text-center py-12">
                        <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                        </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No events yet</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Get started by creating your first event.
                    </p>
                  </div>
                ) : (
                    <>
                        {/* Image grid */}
                        <div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {currentImages.map((image, index) => (
                                <div key={`${image._id}-${index}`} className="w-full p-2">
                                    <div className="relative overflow-hidden rounded-lg shadow-md">
                                        {/* Image */}
                                        <img 
                                            src={image.image} 
                                            alt={image.description || `Gallery image ${index + 1}`}
                                            className="w-full h-[450px] object-cover"
                                            loading="lazy"
                                        />
                                        
                                        {image.description && (
                                            <div className="absolute bottom-0 left-1/3 -translate-x-1/2 w-11/12">
                                                <div className="relative">
                                                    {/* Slanted white background */}
                                                    <div className="bg-white h-20 -skew-x-12 transform origin-bottom-left border-r-8 border-r-[#2c7bbd]"></div>
                                                    
                                                    {/* Text container */}
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <p className="text-[#2c7bbd] font-bold uppercase tracking-wider text-center px-4">
                                                            {image.description.split(' ').map((word, i) => (
                                                                <span key={i} className="block">{word}</span>
                                                            ))}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-8 flex justify-center">
                                <Pagination>
                                    <PaginationContent>
                                        <PaginationItem>
                                            <PaginationPrevious 
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                className={
                                                    currentPage <= 1 
                                                        ? "opacity-50 cursor-not-allowed" 
                                                        : "cursor-pointer hover:bg-gray-100"
                                                }
                                            />
                                        </PaginationItem>
                                        
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                            <PaginationItem key={page}>
                                                <PaginationLink
                                                    onClick={() => handlePageChange(page)}
                                                    isActive={page === currentPage}
                                                    className="cursor-pointer hover:bg-gray-100"
                                                >
                                                    {page}
                                                </PaginationLink>
                                            </PaginationItem>
                                        ))}
                                        
                                        <PaginationItem>
                                            <PaginationNext 
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                className={
                                                    currentPage >= totalPages 
                                                        ? "opacity-50 cursor-not-allowed" 
                                                        : "cursor-pointer hover:bg-gray-100"
                                                }
                                            />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default GalleryHero;

