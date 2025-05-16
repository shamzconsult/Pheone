"use client";
import { useEffect, useState } from "react";

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  mediaUrl: string;
  mediaType: string;
  createdAt: string;
}

interface EventsProps {
  events: Event[];
}

function EventsPage({events: intialEvents}: EventsProps) {
  const [events, setEvents] = useState<Event[]>(intialEvents);
  const [, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);



  return (
    <div className=" relative overflow-x-hidden min-h-screen ">
      <div className="max-w-screen-2xl mx-auto p-2 mt-24">
        {/* Decorative background element */}
          <div className="absolute hidden lg:block right-0 top-0 h-full lg:h-[700px] 2xl:h-[900px] lg:max-w-[500px] w-full max-w-[300px] 2xl:max-w-[800px] -z-10">
              <img 
                  src="/image/Rectangle 40.png" 
                  className="h-[600px] lg:h-full w-full object-cover object-right"
                  alt="Decorative background"
              />
          </div>
          <div className='text-center'>
            <h1 className='text-xl mt-6 text-white bg-[#2c7bbd] mb-6 inline-block p-2 px-10 rounded-full'>
                OUR EVENTS
            </h1>
            {events.length === 0 ? (
              ''
            ):(
              <p className='text-xl font-semibold text-black mb-8 max-w-4xl mx-auto leading-loose tracking-wide'>
                Check out our past, present and upcoming events.
            </p>
            )}
            {/* <p className='text-xl font-semibold text-black mb-8 max-w-4xl mx-auto leading-loose tracking-wide'>
                Check out our past, present and upcoming events.
            </p> */}
          </div>
        
        {events.length === 0 ? (
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "> 
              {events.map((event) => (
                  <div key={event._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:border hover:border-[#2c7bbd] ">
                  {/* Media container */}

                  <div className="relative w-full h-[500px] aspect-video"> 
                      {event.mediaType === 'video' ? (
                      <video
                          src={event.mediaUrl}
                          className="w-full h-full object-cover"
                          controls
                          autoPlay={false}
                          muted
                      />
                      ) : (
                      <img
                          src={event.mediaUrl}
                          alt={event.title}
                          className="w-full h-full object-cover"
                      />
                      )}
                  </div>
                  
                  {/* Event details */}
                  <div className="p-6">
                      <h2 className="text-xl text-gray-600 font-bold mb-3">{event.title}</h2>
                      <p className="text-gray-500 mb-4 line-clamp-2">{event.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                      <div>
                          <p className="font-semibold text-gray-600">Date</p>
                          <p className="text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
                      </div>
                      <div>
                          <p className="font-semibold text-gray-600">Location</p>
                          <p className="text-gray-500">{event.location}</p>
                      </div>
                      </div>
                      {/* <Link
                      href={`/events/${event._id}`}
                      className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                      >
                      View Details
                      </Link> */}
                  </div>
                  </div>
              ))}
              </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;