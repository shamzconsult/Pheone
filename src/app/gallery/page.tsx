import React from 'react'
import GalleryHero from './_components/GalleryHero'
import { getAllImage } from '@/service/gallery/gallery.server';

export const revalidate = 3600; 

async function page() {
  const images = await getAllImage();

  return (
    <div>
        <GalleryHero images={images}/>
    </div>
  )
}

export default page