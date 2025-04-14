"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function EventCreationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    mediaType: "image",
  });
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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

    if (!mediaFile) {
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
      formDataToSend.append("media", mediaFile);

      const response = await fetch("/api/events", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) throw new Error("Failed to create event");

      toast.success("Event created successfully!");
      router.refresh();
      setFormData({
        title: "",
        description: "",
        date: "",
        location: "",
        mediaType: "image",
      });
      setMediaFile(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to create event");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Create New Event</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="title">
            Event Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="mediaType">
            Media Type
          </label>
          <select
            id="mediaType"
            name="mediaType"
            value={formData.mediaType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="media">
            {formData.mediaType === 'image' ? 'Event Image' : 'Event Video'}
          </label>
          <input
            type="file"
            id="media"
            name="media"
            accept={formData.mediaType === 'image' ? 'image/*' : 'video/*'}
            onChange={handleMediaChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {mediaFile && (
            <div className="mt-2 text-sm text-gray-600">
              Selected: {mediaFile.name}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Creating Event..." : "Create Event"}
        </button>
      </form>
    </div>
  );
}