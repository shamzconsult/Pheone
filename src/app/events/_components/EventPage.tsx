"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

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
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
      
      {events.length === 0 ? (
        <p className="text-gray-500">No events scheduled yet. Check back later!</p>
      ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
            {events.map((event) => (
                <div key={event._id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                    <h2 className="text-xl font-bold mb-3">{event.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-semibold">Date</p>
                        <p>{new Date(event.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Location</p>
                        <p>{event.location}</p>
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