"use client";

import { deletePopupClient, Popup, updatePopupClient } from "@/service/popup/popup.client";
import { Dispatch, SetStateAction } from "react";
import { FiTrash2, FiToggleLeft, FiToggleRight } from "react-icons/fi";
import { toast } from "react-toastify";

interface PopupDashboardProps {
    popups: Popup[];
    setPopups: Dispatch<SetStateAction<Popup[]>>;
}

export default function PopupDashboard({ popups, setPopups }: PopupDashboardProps) {
  const toggleActive = async (popup: Popup) => {
    try {
      const updated = await updatePopupClient(popup._id, {
        isActive: !popup.isActive,
      });

      setPopups((prev: Popup[]) =>
        prev.map((item) =>
          item._id === popup._id
            ? updated
            : { ...item, isActive: false }
        )
      );

      toast.success(popup.isActive ? "Popup disabled" : "Popup activated");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update popup");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deletePopupClient(id);
      setPopups((prev: Popup[]) => prev.filter((item) => item._id !== id));
      toast.success("Popup deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete popup");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#2c7bbd] mb-6">
            Popup Flyers
          </h1>

          {popups.length === 0 ? (
            <p className="text-gray-500">No popup flyers created yet.</p>
          ) : (
            <div className="space-y-4">
              {popups.map((popup: Popup) => (
                <div
                  key={popup._id}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 border border-gray-200 rounded-lg p-4 hover:shadow-sm transition"
                >
                    <div className="flex items-center gap-4">
                        {popup.images?.length ? (
                            <img
                            src={popup.images[0]}
                            alt="Popup flyer preview"
                            className="w-16 h-16 object-cover rounded-lg border"
                            />
                        ) : null}

                        <div>
                        <p className="text-sm text-gray-500">
                            {popup.images?.length || 0} image
                            {(popup.images?.length || 0) === 1 ? "" : "s"}
                        </p>

                        <span
                            className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                            popup.isActive
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-200 text-gray-600"
                            }`}
                        >
                            {popup.isActive ? "Active" : "Disabled"}
                        </span>
                        </div>
                    </div>

                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => toggleActive(popup)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white transition ${
                        popup.isActive
                          ? "bg-yellow-500 hover:bg-yellow-600"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      {popup.isActive ? <FiToggleLeft /> : <FiToggleRight />}
                      {popup.isActive ? "Disable" : "Enable"}
                    </button>

                    <button
                      onClick={() => handleDelete(popup._id)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
                    >
                      <FiTrash2 />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}