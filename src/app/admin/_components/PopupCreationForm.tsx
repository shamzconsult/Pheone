"use client";

import { useEffect, useRef, useState } from "react";
import { FiUpload, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import { createPopupClient, Popup } from "@/service/popup/popup.client";

interface PopupCreationFormProps {
  onCreated?: (popup: Popup) => void;
}

export default function PopupCreationForm({
  onCreated,
}: PopupCreationFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    isActive: true,
    showOncePerSession: true,
    startsAt: "",
    endsAt: "",
  });

  const [images, setImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!imageFiles.length) {
      setPreviewUrls([]);
      return;
    }

    const objectUrls = imageFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls(objectUrls);

    return () => {
      objectUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imageFiles]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    setImageFiles(files);

    try {
      const base64Images = await Promise.all(
        files.map(
          (file) =>
            new Promise<string>((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result as string);
              reader.onerror = reject;
              reader.readAsDataURL(file);
            })
        )
      );

      setImages(base64Images);
    } catch (error) {
      console.error(error);
      toast.error("Failed to read selected images");
    }
  };

  const clearFileInput = () => {
    setImages([]);
    setImageFiles([]);
    setPreviewUrls([]);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeSelectedImage = (indexToRemove: number) => {
    const newFiles = imageFiles.filter((_, index) => index !== indexToRemove);
    const newImages = images.filter((_, index) => index !== indexToRemove);

    setImageFiles(newFiles);
    setImages(newImages);

    if (newFiles.length === 0 && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const resetForm = () => {
    setFormData({
      isActive: true,
      showOncePerSession: true,
      startsAt: "",
      endsAt: "",
    });
    clearFileInput();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!images.length) {
      toast.error("Please select at least one popup image");
      setLoading(false);
      return;
    }

    try {
      const newPopup = await createPopupClient({
        images,
        isActive: formData.isActive,
        showOncePerSession: formData.showOncePerSession,
        startsAt: formData.startsAt || null,
        endsAt: formData.endsAt || null,
      });

      toast.success("Popup created successfully!");
      onCreated?.(newPopup);
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create popup");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#2c7bbd] mb-6">
            Create Popup Flyer
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Popup Images
                </label>

                <div className="flex items-center gap-2 flex-wrap">
                  <label className="relative cursor-pointer bg-white rounded-lg border border-gray-300 px-4 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                    <FiUpload />
                    <span>Choose Files</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      className="sr-only"
                    />
                  </label>

                  {imageFiles.length > 0 && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>{imageFiles.length} file(s) selected</span>
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

              {previewUrls.length > 0 && (
                <div className="mt-2">
                  <label className="block text-gray-700 mb-2 font-medium">
                    Preview
                  </label>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {previewUrls.map((url, index) => (
                      <div
                        key={index}
                        className="relative rounded-lg overflow-hidden border border-gray-200"
                      >
                        <img
                          src={url}
                          alt={`Popup Preview ${index + 1}`}
                          className="w-full h-40 object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeSelectedImage(index)}
                          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                        >
                          <FiX className="text-gray-600" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3">
                  <input
                    type="checkbox"
                    id="isActive"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleChange}
                    className="h-4 w-4"
                  />
                  <label htmlFor="isActive" className="text-gray-700 font-medium">
                    Active
                  </label>
                </div>

                <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3">
                  <input
                    type="checkbox"
                    id="showOncePerSession"
                    name="showOncePerSession"
                    checked={formData.showOncePerSession}
                    onChange={handleChange}
                    className="h-4 w-4"
                  />
                  <label
                    htmlFor="showOncePerSession"
                    className="text-gray-700 font-medium"
                  >
                    Show once per session
                  </label>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition flex-1 flex items-center justify-center gap-2"
              >
                <FiX /> Clear
              </button>

              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 text-white rounded-lg transition flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Creating..." : "Create Popup"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}