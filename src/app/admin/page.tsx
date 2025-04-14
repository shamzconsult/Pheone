import React from 'react'
import GalleryDashboard from './_components/GalleryDashboard'
import EventCreationForm from './_components/EventDashboard'

function page() {
  return (
    <div>
        <GalleryDashboard/>
        <EventCreationForm/>
    </div>
  )
}

export default page