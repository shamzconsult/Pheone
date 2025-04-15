"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FiEdit, FiTrash2, FiCalendar, FiMapPin, FiUpload, FiX } from "react-icons/fi";
import { ApiEvent } from "@/app/api/events/route";
import ConfirmationModal from "@/components/ConfirmationModal";

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
  const fileInputRef = useRef<HTMLInputElement>(null);
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
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

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
      const data: ApiEvent[] = await response.json();
      setEvents(data.map((event: ApiEvent) => ({
        id: event._id,
        ...event
      })));
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

  const clearFileInput = () => {
    setMediaFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
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
      if (mediaFile) {
        formDataToSend.append("media", mediaFile);
      }

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
  };

  const handleDeleteClick = (id: string) => {
    setItemToDelete(id);
    setDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (!itemToDelete) return;

    try {
      const response = await fetch(`/api/events/${itemToDelete}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete event");

      toast.success("Event deleted successfully!");
      fetchEvents();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete event");
    } finally {
      setDeleteModalOpen(false);
      setItemToDelete(null);
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
    clearFileInput();
    setEditingId(null);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-6">
      <div className="space-y-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-[#2c7bbd] mb-6">
              {editingId ? "Edit Event" : "Create New Event"}
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="media">
                    {formData.mediaType === 'image' ? 'Event Image' : 'Event Video'}
                  </label>
                  <div className="flex items-center gap-2">
                    <label className="relative cursor-pointer bg-white rounded-lg border border-gray-300 px-4 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                      <FiUpload />
                      <span>Choose File</span>
                      <input
                        type="file"
                        id="media"
                        name="media"
                        ref={fileInputRef}
                        accept={formData.mediaType === 'image' ? 'image/*' : 'video/*'}
                        onChange={handleMediaChange}
                        className="sr-only"
                        required={!editingId}
                      />
                    </label>
                    {mediaFile && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{mediaFile.name}</span>
                        <button 
                          type="button" 
                          onClick={clearFileInput}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FiX />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {previewUrl && formData.mediaType === 'image' && (
                  <div className="mt-2">
                    <label className="block text-gray-700 mb-2 font-medium">Preview</label>
                    <div className="relative">
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="max-w-full h-64 object-cover rounded-lg border border-gray-200"
                      />
                      <button
                        type="button"
                        onClick={clearFileInput}
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                      >
                        <FiX className="text-gray-600" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex space-x-4 pt-4">
                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition flex-1 flex items-center justify-center gap-2"
                  >
                    <FiX /> Cancel
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-6 py-3 text-white rounded-lg transition flex-1 flex items-center justify-center gap-2 ${
                    editingId 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {editingId ? 'Updating...' : 'Creating...'}
                    </>
                  ) : (
                    <>
                      {editingId ? 'Update Event' : 'Create Event'}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Your Events</h2>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                    <div className="relative aspect-video bg-gray-100">
                      {event.mediaType === 'image' && (
                        <img 
                          src={event.mediaUrl} 
                          alt={event.title} 
                          className="w-full h-[300] object-cover"
                        />
                      )}
                    </div>
                    <div className="p-4 flex-grow">
                      <h3 className="text-lg font-semibold line-clamp-1">{event.title}</h3>
                      <div className="flex items-center text-gray-600 mt-2">
                        <FiCalendar className="mr-2" size={14} />
                        <span className="text-sm">{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mt-1">
                        <FiMapPin className="mr-2" size={14} />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <p className="text-gray-700 mt-3 text-sm line-clamp-2">
                        {event.description}
                      </p>
                    </div>
                    <div className="p-4 border- border-gray-200">
                      <div className="flex gap-10 justify-center ">
                        <button
                          onClick={() => handleEdit(event)}
                          className="flex items-center gap-1 px-3 py-1.5 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                        >
                          <FiEdit size={14} />
                          <span className="text-sm">Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteClick(event.id)}
                          className="flex items-center gap-1 px-3 py-1.5 border border-red-500 text-red-600 rounded-md hover:bg-red-50 transition-colors"
                        >
                          <FiTrash2 size={14} />
                          <span className="text-sm">Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Event"
        description="Are you sure you want to delete this event? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
      />
    </div>
  );
}