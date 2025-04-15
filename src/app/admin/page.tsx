import React from 'react'
import GalleryDashboard from './_components/GalleryDashboard'
import EventCreationForm from './_components/EventDashboard'
import { getAllImage } from '@/service/gallery/gallery.server'

async function page() {
  const images = await getAllImage();

  return (
    <div>
        <GalleryDashboard images={images}/>
        <EventCreationForm/>
    </div>
  )
}

export default page