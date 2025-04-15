"use client";
import ConfirmationModal from "@/components/ConfirmationModal";
import { logout } from "@/utils/auth";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface GalleryItem {
  _id: string;
  description: string;
  image: string;
}

interface AdminGalleryProps {
  images: GalleryItem[];
}

export default function GalleryDashboard({images: initalImage}: AdminGalleryProps) {
  const [images, setImages] = useState<GalleryItem[]>(initalImage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    image: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      // setLoading(true);
      const response = await fetch("/api/gallery");
      const data = await response.json();
      const imageArray = Array.isArray(data) ? data : 
        (Array.isArray(data?.data) ? data.data : []);
      setImages(imageArray);
    } catch (error) {
      console.error("Error fetching images:", error);
      toast.error("Failed to load images");
      setImages([]); 
    } finally {
      // setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setFormData((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.description || !formData.image) {
      toast.error("Description and image are required");
      return;
    }

    setIsSubmitting(true); 

    try {
      let response;
      if (editingId) {
        response = await fetch(`/api/gallery?id=${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        toast.success("Image updated successfully");
      } else {
        response = await fetch("/api/gallery", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        toast.success("Image uploaded successfully");
      }

      await response.json();
      fetchImages();
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit image");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (image: GalleryItem) => {
    setFormData({
      description: image.description,
      image: image.image,
    });
    setImagePreview(image.image);
    setEditingId(image._id);
  };

  const handleDeleteClick = (id: string) => {
    setItemToDelete(id);
    setDeleteModalOpen(true);
  };
  
  const handleDelete = async () => {
    if (!itemToDelete) return;
    
    try {
      await fetch(`/api/gallery?id=${itemToDelete}`, {
        method: "DELETE",
      });
      toast.success("Image deleted successfully");
      fetchImages();
    } catch (error) {
      console.error("Error deleting image:", error);
      toast.error("Failed to delete image");
    } finally {
      setDeleteModalOpen(false);
      setItemToDelete(null);
    }
  };

  const resetForm = () => {
    setFormData({
      description: "",
      image: "",
    });
    setImagePreview("");
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={logout}
        className="fixed top-20 bg-red-500 text-white px-4 py-2 rounded z-50"
      >
        Logout
      </button>
        {/* Header */}
        <div className="text-center mb-12 mt-20">
          <h1 className="text-3xl font-extrabold text-[#2c7bbd] sm:text-4xl">
            Gallery Dashboard
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Manage your gallery images with ease
          </p>
        </div>

        {/* Upload/Edit Form */}
        <div className="bg-white shadow rounded-lg p-6 mb-12">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {editingId ? "Edit Image" : "Upload New Image"}
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 border"
                placeholder="Enter image description (not more than 15 words)"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image
              </label>
              <div className="mt-1 flex items-center">
                <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                  <span>Upload a file</span>
                  <input
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleImageChange}
                    required={!editingId}
                  />
                </label>
                <p className="pl-1 text-sm text-gray-500">or drag and drop</p>
              </div>
              {imagePreview && (
                <div className="mt-4">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="max-w-full h-64 object-contain rounded-lg"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-3">
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  editingId
                    ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                    : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                } ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {editingId ? 'Updating...' : 'Uploading...'}
                  </>
                ) : (
                  editingId ? 'Update Image' : 'Upload Image'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Gallery List */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Gallery Images
            </h2>
          </div>

          {images.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No images</h3>
              <p className="mt-1 text-sm text-gray-500">
                Get started by uploading a new image.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
              {images.map((image) => (
                <div key={image._id} className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg">
                    <img
                      src={image.image}
                      alt={image.description}
                      className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity duration-200"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                      {image.description}
                    </p>
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleEdit(image)}
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(image._id)}
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
       <ConfirmationModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Image"
        description="Are you sure you want to delete this image? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
      />
    </div>
  );
}