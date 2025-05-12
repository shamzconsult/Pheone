import React from 'react'
import EventsPage from './_components/EventPage';
import { getAllEvents } from '@/service/event/event.server';

export const dynamic = 'force-dynamic'; 
export const revalidate = 0; 

async function page() {
  const events = await getAllEvents();
  return (
    <div>
        <EventsPage events={events}/>
    </div>
  )
}

export default page