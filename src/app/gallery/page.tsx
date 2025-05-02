import React from 'react'
import GalleryHero from './_components/GalleryHero'
import { getAllImage } from '@/service/gallery/gallery.server';

export const dynamic = 'force-dynamic'; 
export const revalidate = 0; 

async function page() {
  const images = await getAllImage();

  return (
    <div>
        <GalleryHero images={images}/>
    </div>
  )
}

export default page