"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FiEdit, FiTrash2, FiCalendar, FiMapPin } from "react-icons/fi";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  mediaType: string;
  mediaUrl: string;
}

export default function EventCreationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    mediaType: "image",
  });
  const [events, setEvents] = useState<Event[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (!mediaFile) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(mediaFile);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [mediaFile]);

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events");
      if (!response.ok) throw new Error("Failed to fetch events");
      const data = await response.json();
      setEvents(data.map((event: any) => ({
        id: event._id,
        ...event
      })));
      // setEvents(formattedEvents);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch events");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMediaFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!mediaFile && !editingId) {
      toast.error("Please select a media file");
      setIsLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("date", formData.date);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("mediaType", formData.mediaType);
      if (mediaFile) formDataToSend.append("media", mediaFile);

      const url = editingId ? `/api/events/${editingId}` : "/api/events";
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: formDataToSend,
      });

      if (!response.ok) throw new Error(editingId ? "Failed to update event" : "Failed to create event");

      toast.success(editingId ? "Event updated successfully!" : "Event created successfully!");
      router.refresh();
      resetForm();
      fetchEvents();
    } catch (error) {
      console.error(error);
      toast.error(editingId ? "Failed to update event" : "Failed to create event");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (event: Event) => {
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date.split('T')[0],
      location: event.location,
      mediaType: event.mediaType,
    });
    setEditingId(event.id);
    setMediaFile(null);
    setPreviewUrl(event.mediaUrl);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    try {
      const response = await fetch(`/api/events/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete event");

      toast.success("Event deleted successfully!");
      fetchEvents();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete event");
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      date: "",
      location: "",
      mediaType: "image",
    });
    setMediaFile(null);
    setEditingId(null);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <div className="">
        <div>
          <h1 className="text-3xl text-[#2c7bbd] font-bold mb-6">
            {editingId ? "Edit Event" : "Create New Event"}
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="title">
                  Event Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="date">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="location">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="mediaType">
                  Media Type
                </label>
                <select
                  id="mediaType"
                  name="mediaType"
                  value={formData.mediaType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="media">
                  {formData.mediaType === 'image' ? 'Event Image' : 'Event Video'}
                </label>
                <input
                  type="file"
                  id="media"
                  name="media"
                  accept={formData.mediaType === 'image' ? 'image/*' : 'video/*'}
                  onChange={handleMediaChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required={!editingId}
                />
                {mediaFile && (
                  <div className="mt-2 text-sm text-gray-600">
                    Selected: {mediaFile.name}
                  </div>
                )}
              </div>

              {previewUrl && formData.mediaType === 'image' && (
                <div className="mt-2">
                  <label className="block text-gray-700 mb-2 font-medium">Preview</label>
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
                    className="max-w-full h-[300] rounded-md border border-gray-200"
                  />
                </div>
              )}
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex-1 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading 
                  ? editingId 
                    ? "Updating Event..." 
                    : "Creating Event..." 
                  : editingId 
                    ? "Update Event" 
                    : "Create Event"}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="mt-20">  
          <h2 className="text-2xl font-bold mb-6">Your Events</h2>       
          <div className="">     
            {events.length > 0 ? (
              <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="bg-white p-6 rounded-lg shadow-md ">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(event)}
                          className="text-blue-600 hover:text-blue-800 p-1"
                          title="Edit"
                        >
                          <FiEdit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(event.id)}
                          className="text-red-600 hover:text-red-800 p-1"
                          title="Delete"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <FiCalendar className="mr-2" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <FiMapPin className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    {event.mediaUrl && event.mediaType === 'image' && (
                      <img 
                        src={event.mediaUrl} 
                        alt={event.title} 
                        className="w-full h-auto rounded-md border border-gray-200"
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No events created yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}