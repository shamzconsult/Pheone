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

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="flex justify-center items-center  h-screen">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto p-6 mt-24 h-screen ">
      <h1 className="text-3xl text-center text-[#2c7bbd] font-bold mb-8">Upcoming Events</h1>
      
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
  );
}