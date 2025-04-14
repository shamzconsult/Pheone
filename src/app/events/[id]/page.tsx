import { notFound } from "next/navigation";

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

async function getEvent(id: string): Promise<Event | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.log(error)
    return null;
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const event = await getEvent(params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
        <div className="flex items-center space-x-4 text-gray-600 mb-4">
          <span>{new Date(event.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{event.location}</span>
        </div>
      </div>

      <div className="aspect-video bg-black rounded-lg overflow-hidden mb-8">
        {event.mediaType === 'video' ? (
          <video
            src={event.mediaUrl}
            className="w-full h-full object-contain"
            controls
            autoPlay
          />
        ) : (
          <img
            src={event.mediaUrl}
            alt={event.title}
            className="w-full h-full object-contain"
          />
        )}
      </div>

      <div className="prose max-w-none">
        <p className="text-lg">{event.description}</p>
      </div>
    </div>
  );
}